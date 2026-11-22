////////////////
//
// Using Framer?
// See https://www.framer.com/learn/code-components/ for more info
//
////////////////

import { useState } from "react";

const INIT = "INIT";
const SUBMITTING = "SUBMITTING";
const ERROR = "ERROR";
const SUCCESS = "SUCCESS";
const formStates = [INIT, SUBMITTING, ERROR, SUCCESS] as const;
const formStyles = {
  id: "clkpx2a15015vjr0pt1wn5b8r",
  name: "Default",
  placeholderText: "you@example.com",
  buttonText: "Join Waitlist",
  successMessage: "Thanks! We'll be in touch!",
  userGroup: "",
};
const domain = "app.loops.so";

export default function SignUpFormReact() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<(typeof formStates)[number]>(INIT);
  const [errorMessage, setErrorMessage] = useState("");

  const resetForm = () => {
    setEmail("");
    setFormState(INIT);
    setErrorMessage("");
  };

  /**
   * Rate limit the number of submissions allowed
   * @returns {boolean} true if the form has been successfully submitted in the past minute
   */
  const hasRecentSubmission = () => {
    const time = new Date();
    const timestamp = time.valueOf();
    const previousTimestamp = localStorage.getItem("loops-form-timestamp");

    // Indicate if the last sign up was less than a minute ago
    if (
      previousTimestamp &&
      Number(previousTimestamp) + 60 * 1000 > timestamp
    ) {
      setFormState(ERROR);
      setErrorMessage("Too many signups, please try again in a little while");
      return true;
    }

    localStorage.setItem("loops-form-timestamp", timestamp.toString());
    return false;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission
    event.preventDefault();

    // boundary conditions for submission
    if (formState !== INIT) return;
    if (!isValidEmail(email)) {
      setFormState(ERROR);
      setErrorMessage("Please enter a valid email");
      return;
    }
    if (hasRecentSubmission()) return;
    setFormState(SUBMITTING);

    // build body
    const formBody = `userGroup=${encodeURIComponent(
      formStyles.userGroup
    )}&email=${encodeURIComponent(email)}`;

    // API request to add user to newsletter
    try {
      const res = await fetch(
        `https://${domain}/api/newsletter-form/${formStyles.id}`,
        {
          method: "POST",
          body: formBody,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (res.ok) {
        resetForm();
        setFormState(SUCCESS);
        return;
      }

      let message = "";
      try {
        const data = (await res.json()) as { message?: unknown };
        if (typeof data?.message === "string") {
          message = data.message;
        }
      } catch {
        // Non-JSON error response (e.g. proxy HTML 502); fall back to status text.
      }
      setFormState(ERROR);
      setErrorMessage(
        message || res.statusText || `Request failed (${res.status})`
      );
      localStorage.setItem("loops-form-timestamp", "");
    } catch (error) {
      setFormState(ERROR);
      const errMessage = error instanceof Error ? error.message : "";
      // check for cloudflare error
      if (errMessage === "Failed to fetch") {
        setErrorMessage(
          "Too many signups, please try again in a little while"
        );
      } else if (errMessage) {
        setErrorMessage(errMessage);
      }
      localStorage.setItem("loops-form-timestamp", "");
    }
  };

  switch (formState) {
    case SUCCESS:
      return (
        <div className="flex w-full items-center justify-center">
          <p className="text-sm font-medium text-primary">
            {formStyles.successMessage}
          </p>
        </div>
      );
    case ERROR:
      return (
        <>
          <SignUpFormError />
          <BackButton />
        </>
      );
    default:
      return (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-row items-center justify-center gap-2.5"
          >
            <input
              type="text"
              name="email"
              aria-label="Email address"
              placeholder={formStyles.placeholderText}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
              className="h-[38px] w-full min-w-[100px] max-w-[300px] rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <SignUpFormButton />
          </form>
        </>
      );
  }

  function SignUpFormError() {
    return (
      <div className="w-full text-center">
        <p className="text-sm text-red-700 dark:text-red-400">
          {errorMessage || "Oops! Something went wrong, please try again"}
        </p>
      </div>
    );
  }

  function BackButton() {
    return (
      <button
        type="button"
        className="mx-auto my-2.5 block cursor-pointer bg-transparent text-center text-sm text-muted-foreground hover:text-foreground hover:underline"
        onClick={resetForm}
      >
        &larr; Back
      </button>
    );
  }

  function SignUpFormButton() {
    return (
      <button
        type="submit"
        disabled={formState === SUBMITTING}
        className="inline-flex h-[38px] shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:cursor-wait disabled:opacity-70"
      >
        {formState === SUBMITTING ? "Please wait..." : formStyles.buttonText}
      </button>
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isValidEmail(email: any) {
  return /.+@.+/.test(email);
}
