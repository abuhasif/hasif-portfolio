import { useState, type FormEvent } from "react";

const email = "hasifbakar@gmail.com";

const Contact = () => {
  const [copyState, setCopyState] = useState("Copy email");
  const [status, setStatus] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("Copied");
      window.setTimeout(() => setCopyState("Copy email"), 1800);
    } catch {
      setCopyState("Copy failed");
      window.setTimeout(() => setCopyState("Copy email"), 1800);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus(result.message ?? "Something went wrong.");
        return;
      }

      setStatus("Message sent successfully.");
      form.reset();
    } catch {
      setStatus("The contact form is not connected in this environment. Please email me directly.");
    }
  };

  return (
    <div className="contact-panel mt-8">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <div className="section-title-row">
          <h2>Let us build something useful.</h2>
          <p>
            I am open to software engineering, frontend development, UI/UX, and
            graduate programme opportunities.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-wrap content-start gap-3">
          <a href={`mailto:${email}`} className="primary-button">
            Email me
          </a>
          <button type="button" onClick={handleCopyEmail} className="secondary-button">
            {copyState}
          </button>
          <a
            href="https://www.linkedin.com/in/abuhasif"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/burnt.shots/"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            Instagram
          </a>
          <a
            href="https://github.com/abuhasif"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            GitHub
          </a>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
              Name
              <input
                name="name"
                required
                className="rounded-lg border border-[var(--border)] bg-[var(--section)] px-4 py-3 text-sm font-medium text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
              Email
              <input
                name="email"
                type="email"
                required
                className="rounded-lg border border-[var(--border)] bg-[var(--section)] px-4 py-3 text-sm font-medium text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className="resize-none rounded-lg border border-[var(--border)] bg-[var(--section)] px-4 py-3 text-sm font-medium text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
              placeholder="Tell me about the opportunity or project."
            />
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <button type="submit" className="primary-button">
              Send message
            </button>
            {status && <p className="text-sm font-medium text-[var(--muted)]">{status}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
