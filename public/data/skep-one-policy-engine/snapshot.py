"""Write a sanitized snapshot of the skep store: categories and day-level dates
only. No command lines, paths, URLs, hosts, repo or project names, ids or notes."""
import csv, json, os, re, sqlite3, sys
from collections import Counter
from datetime import datetime

home = os.path.expanduser("~/.skep/supervisor")
out = sys.argv[1]
os.makedirs(out, exist_ok=True)
CUT = "2026-11-20"  # exclusive: everything before midnight UTC, 20 November 2026
db = sqlite3.connect(f"file:{home}/supervisor.sqlite3?immutable=1", uri=True)

def write(name, header, rows):
    safe = re.compile(r"^[A-Za-z0-9_.:()* -]{0,40}$")
    for r in rows:
        for cell in r:
            assert safe.match(str(cell)), (name, cell)
    with open(os.path.join(out, name), "w", newline="") as f:
        w = csv.writer(f); w.writerow(header); w.writerows(rows)
    return rows

def secs(a, b):
    f = "%Y-%m-%dT%H:%M:%SZ"
    return int((datetime.strptime(b[:19] + "Z", f) - datetime.strptime(a[:19] + "Z", f)).total_seconds())

runs = write("runs.csv", ["day", "worker_kind", "coding_engine", "execution_mode"], [
    (c[:10], k or "", e or "", m) for c, k, e, m in db.execute(
        "select created_at, worker_kind, coding_engine, execution_mode from runs where created_at < ? order by created_at", (CUT,))])

rev = write("reverifications.csv", ["day", "worker_outcome", "outcome", "confirmed", "unavailable_reason"], [
    (c[:10], w, o, conf, "no patch artifact" if o == "unavailable" and (d or "").startswith("no patch artifact") else "")
    for c, w, o, conf, d in db.execute(
        "select created_at, worker_outcome, outcome, confirmed, detail from reverifications where created_at < ? order by created_at", (CUT,))])

confirmed = {t for (t,) in db.execute("select task_id from reverifications where confirmed = 1")}
def denial(note):
    n = (note or "").lower()
    return ("stale" if n.startswith("stale") else "redundant" if n.startswith("redundant")
            else "apply failed" if n.startswith("apply failed") else "denied by operator")
appr = []
for task, action, status, req, res, by, note in db.execute(
        "select task_id, action, status, requested_at, resolved_at, resolved_by, resolution_note from approvals where action = 'apply_patch' and requested_at < ? order by requested_at", (CUT,)):
    appr.append((req[:10], action, status,
                 "" if not by else "auto" if by.startswith("auto:") else "human",
                 secs(req, res) if res else "",
                 denial(note) if status == "denied" else "",
                 1 if task in confirmed else 0))
appr = write("approvals.csv", ["day", "action", "status", "resolver", "seconds_to_resolve", "denial_class", "reverify_confirmed"], appr)

def rule(v):
    if v is None: return ""
    return v.split(":")[0] + ":*" if ":" in v else v
def layer(v):
    return "" if v is None else v.split(":")[0]
def actor(v):
    a = re.split("[:@]", v)[0]
    return "test" if a.startswith("tamper") else a
def floor_kind(r):
    if r.get("source") != "floor": return ""
    v = r.get("value") or ""
    if re.search(r"\bgit\b.*\b(push|fetch|pull)\b", v): return "remote git"
    return "local git" if re.search(r"\bgit\b", v) else "other"
dec = []
for line in open(f"{home}/audit/policy/decisions.jsonl"):
    if not line.strip(): continue
    r = json.loads(line)
    if r["at"] >= CUT: continue
    dec.append((r["at"][:10], actor(r["actor"]), r.get("scope") or "", r.get("action") or "", r.get("source") or "",
                r.get("verdict") or "", rule(r.get("rule_id")), layer(r.get("layer")), floor_kind(r),
                r.get("delegated") if r.get("delegated") in ("ask", "dropped") else ""))
dec = write("decisions.csv", ["day", "actor", "scope", "action", "source", "verdict", "rule", "layer", "floor_kind", "delegated"], dec)

# the post's numbers, recounted from the files just written
C = Counter
assert len(runs) == 198 and sum(r[3] == "workspace" for r in runs) == 121
coding = [r for r in runs if r[1] == "coding"]
assert len(coding) == 57 and sum(r[3] == "workspace" for r in coding) == 46
assert len(rev) == 112 and C(r[2] for r in rev) == {"passed": 48, "failed": 2, "not_applicable": 35, "unavailable": 27}
assert all(r[1] == "passed" for r in rev) and sum(r[4] == "no patch artifact" for r in rev) == 27
patch = [a for a in appr if a[1] == "apply_patch"]
assert len(patch) == 46
ok = [a for a in patch if a[2] == "approved"]
assert sum(a[3] == "auto" for a in ok) == 13 and sum(a[3] == "human" for a in ok) == 25
assert sum(a[3] == "human" and a[4] < 10 for a in ok) == 20
den = [a for a in patch if a[2] == "denied"]
assert len(den) == 8 and C(a[5] for a in den)["denied by operator"] == 3
assert sum(a[5] == "denied by operator" and a[6] == 1 for a in den) == 3
assert len(dec) == 565
dd = [d for d in dec if d[6] == "default-deny"]
assert len(dd) == 319 and sum(d[1] == "claude-code" for d in dd) == 316
late = C(d[5] for d in dec if d[0] > "2026-11-09" and d[5])
assert late == {"require_approval": 104, "allow": 84, "deny": 3}, late
assert sum(d[0] > "2026-11-09" and d[5] == "require_approval" and d[9] == "dropped" for d in dec) == 25
fl = [d for d in dec if d[4] == "floor"]
assert len(fl) == 11 and sum(d[8] == "remote git" for d in fl) == 8, C(d[8] for d in fl)
assert len({d[0] for d in dec}) == 9 and len({d[0] for d in dec if d[1] in ("acp", "human")}) == 2
assert sum(d[1] == "test" for d in dec) == 8
print("all post figures reproduce from the snapshot")
