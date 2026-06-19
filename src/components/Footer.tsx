const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} Abu Hasif Bin Abu Bakar.</p>
        <p>Built with React, TypeScript, Vite, and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;