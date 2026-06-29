<form onSubmit={handleSubmit} className="mt-8 space-y-4">
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