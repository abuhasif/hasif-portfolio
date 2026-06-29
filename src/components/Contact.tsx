import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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

      if (result.success) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Something went wrong.");
      }
    } catch {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-sm font-medium text-cyan-400">Contact</p>

      <h2 className="mt-3 text-3xl font-bold md:text-4xl">
        Let’s connect
      </h2>

      <p className="mt-4 max-w-2xl text-slate-300">
        Feel free to reach out if you would like to discuss opportunities,
        projects, or collaborations.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-2xl space-y-4">
        <input
          name="name"
          placeholder="Your name"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-400"
        />

        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-400"
        />

        <textarea
          name="message"
          placeholder="Your message"
          required
          rows={5}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-400"
        />

        <button
          type="submit"
          className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Send Message
        </button>

        {status && <p className="text-sm text-slate-300">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;