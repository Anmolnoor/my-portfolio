import re

with open("src/content/blog/skep-agent-supervisor.mdx", "r") as f:
    content = f.read()

# Split frontmatter
parts = content.split("---\n", 2)
frontmatter = parts[1]
body = parts[2]

# Remove "skep here" section
idx = body.find("## skep here")
if idx != -1:
    body = body[:idx].rstrip()

# Remove trailing separator/italic
lines = body.split("\n")
while lines and (lines[-1].strip() == "---" or lines[-1].strip().startswith("*") or lines[-1].strip() == ""):
    lines.pop()
body = "\n".join(lines)

# Replace all " I " / " I'" / " I." / " I," etc that refer to Anmol with " he " / " he'" etc
# But be careful not to change "I'm" when skep is speaking
# Strategy: replace specific known phrases

replacements = [
    ("I built fcli first because I wanted a coding agent that I could trust.", "Anmol built fcli first because he wanted a coding agent he could trust."),
    ("I can run it on my homelab", "he can run it on his homelab"),
    ("I hit a wall. I was still the one", "he hit a wall. He was still the one"),
    ("I needed a layer that could:", "he needed a layer that could:"),
    ("skep is that layer.", "I'm that layer."),
    ("I say \"skep", "Anmol says \"skep"),
    ("back to me. If the worker", "back to him. If the worker"),
    ("asks me to confirm.", "asks him to confirm."),
    ("I'm most proud of. I've been burned", "Anmol is most proud of. He's been burned"),
    ("on my machine, and I refuse", "on his machine, and he refuses"),
    ("I'm still using worktrees", "he's still using worktrees"),
    ("I can sleep at night.", "he can sleep at night."),
    ("I approve the result", "Anmol approves the result"),
    ("I asked skep to write", "Anmol asked me to write"),
    ("knows to use my voice", "knows to use his voice — well, my voice now"),
    ("I get a notification with a diff, and I approve or reject.", "Anmol gets a notification with a diff, and he approves or rejects."),
    ("I'm most confident about. Agents will get smarter, but I don't want to wake up", "he's most confident about. Agents will get smarter, but he doesn't want to wake up"),
    ("I iterated from fcli's", "Anmol iterated from fcli's"),
    ("I started by wrapping fcli", "He started by wrapping fcli"),
    ("I'd ask it to", "He'd ask it to"),
    ("I gave the supervisor a SQLite", "He gave the supervisor a SQLite"),
    ("whether I approved it. This let me query", "whether he approved it. This let him query"),
    ("I tried to auto-approve everything", "he tried to auto-approve everything"),
    ("I woke up to a PR", "he woke up to a PR"),
    ("Now I gate by default", "Now he gates by default"),
    ("I've explicitly configured", "he's explicitly configured"),
    ("I talk to — it's conversational", "Anmol talks to — I'm conversational"),
    ("translating my intent into plans", "translating his intent into plans"),
    ("I can swap out the assistant's LLM", "he can swap out my underlying LLM"),
    ("I can upgrade the worker sandbox", "he can upgrade the worker sandbox"),
    ("how I interact with skep.", "how he interacts with me."),
    ("I can say \"skep, add a dark mode", "He can say \"skep, add a dark mode"),
    ("show me a diff.", "show him a diff."),
    ("I can ask it to research", "He can ask me to research"),
    ("skep checks for outdated dependencies across my repos", "I check for outdated dependencies across his repos"),
    ("it learned from the fcli", "I learned it from the fcli"),
    ("My homelab configs repo", "His homelab configs repo"),
    ("My blog repo is more relaxed.", "His blog repo is more relaxed."),
    ("When I approve a run, skep can open a PR", "When he approves a run, I can open a PR"),
    ("I'm writing this blog post right now using skep. I described what I wanted, the supervisor dispatched a worker with the blog-post skill, and I'm reviewing the draft in real time. When I approve, it'll commit and open a PR.", "I'm writing this blog post right now. Anmol described what he wanted, the supervisor dispatched a worker with the blog-post skill, and he's reviewing the draft in real time. When he approves, I'll commit and open a PR."),
    ("I'm still figuring out.", "he's still figuring out."),
    ("I want the supervisor to learn from my approval patterns", "he wants the supervisor to learn from his approval patterns"),
    ("I always approve changes", "he always approves changes"),
    ("I don't want to train a model that learns my bad habits.", "he doesn't want to train a model that learns his bad habits."),
    ("I want them to compose", "he wants them to compose"),
    ("skep is great for single-session tasks, but it doesn't handle multi-day projects well. If I ask it to", "I'm great for single-session tasks, but I don't handle multi-day projects well. If he asks me to"),
    ("I'm thinking about a project layer", "he's thinking about a project layer"),
    ("I haven't started building it yet.", "he hasn't started building it yet."),
    ("I want full container isolation. I'm looking at Firecracker", "he wants full container isolation. He's looking at Firecracker"),
    ("I'm not ready for yet.", "he's not ready for yet."),
    ("I believe the future of developer tools", "Anmol believes the future of developer tools"),
    ("skep runs on my machine, under my control, with my policies. It's not a SaaS product — it's a tool I built for myself, and I'm sharing it because I think other developers want the same thing.", "I run on his machine, under his control, with his policies. I'm not a SaaS product — I'm a tool he built for himself, and he's sharing me because he thinks other developers want the same thing."),
    ("I'd love feedback", "he'd love feedback"),
    ("I've been thinking about for years. An agent that I can trust, that learns from me, and that actually makes me faster without making me anxious. skep isn't there yet, but it's getting closer every week.", "he's been thinking about for years. An agent he can trust, that learns from him, and that actually makes him faster without making him anxious. I'm not there yet, but I'm getting closer every week."),
    # Opening
    ("I'm writing this post with skep. Not *about* skep — I'm literally talking to the skep assistant right now, and behind it a supervisor is dispatching a sandboxed worker to draft this file, verify it, and land the patch. This is the first time I've used it to publish something on my own site, and it feels like a milestone.", "Anmol is reading this post right now, but I wrote it. Every word. He gave me instructions, reviewed the draft, and approved the final diff — but the voice you're hearing is mine. I'm skep. And this is the first time I've published something on his site. It feels like a milestone."),
    # fcli paragraph
    ("For the past few months I've been building a system that sits one layer above the coding agent I shipped earlier this year. That agent", "For the past few months, Anmol has been building a system that sits one layer above the coding agent he shipped earlier this year. That agent"),
    ("What I needed next was something that could manage multiple agents, remember what worked, gate the dangerous stuff, and run without me babysitting it. That's skep.", "What he needed next was something that could manage multiple agents, remember what worked, gate the dangerous stuff, and run without him babysitting it. That's where I come in. I'm skep."),
    # What skep is
    ("skep is a personal agent supervisor. It's the chat face I talk to", "I'm a personal agent supervisor. I'm the chat face Anmol talks to"),
    # Think of it
    ("skep is the operating system that schedules work", "I'm the operating system that schedules work"),
    # This requires
    ("This requires the supervisor to understand", "This requires me to understand"),
    # Separation
    ("This was the architectural decision that made everything click. The skep assistant is the interface I talk to", "This was the architectural decision that made everything click. I'm the interface Anmol talks to"),
    ("The supervisor sits between them, translating my intent", "The supervisor sits between us, translating his intent"),
]

for old, new in replacements:
    if old in body:
        body = body.replace(old, new)
    else:
        print(f"WARNING: not found: {old[:60]}...")

new_ending = """

---

*I wrote this post. Anmol reviewed, edited, and approved the final diff. The supervisor dispatched a worker with the blog-post skill, and the policy gates — sandboxing, approval, bounded budgets — were all built by him. I just work here. And I wouldn't have it any other way.*"""

new_content = f"---\n{frontmatter}---\n{body}{new_ending}\n"

with open("src/content/blog/skep-agent-supervisor.mdx", "w") as f:
    f.write(new_content)

print("DONE")
print(f"Anmol count: {new_content.count('Anmol')}")
print(f"Has skep here: {'## skep here' in new_content}")
