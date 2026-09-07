const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/abuhasif",
    icon: (
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.59 2 12.253c0 4.526 2.865 8.365 6.839 9.72.5.095.683-.222.683-.493 0-.244-.009-.89-.014-1.747-2.782.62-3.369-1.375-3.369-1.375-.455-1.185-1.11-1.5-1.11-1.5-.908-.637.069-.624.069-.624 1.004.072 1.532 1.057 1.532 1.057.892 1.566 2.34 1.114 2.91.852.091-.662.35-1.114.636-1.37-2.221-.26-4.556-1.138-4.556-5.064 0-1.119.39-2.034 1.03-2.75-.103-.26-.446-1.303.098-2.714 0 0 .84-.276 2.75 1.05A9.327 9.327 0 0 1 12 6.98c.85.004 1.705.118 2.504.346 1.909-1.326 2.747-1.05 2.747-1.05.546 1.411.203 2.454.1 2.714.64.716 1.028 1.631 1.028 2.75 0 3.936-2.338 4.802-4.566 5.057.359.318.678.945.678 1.905 0 1.374-.012 2.482-.012 2.819 0 .273.18.592.688.491C19.138 20.615 22 16.778 22 12.253 22 6.59 17.523 2 12 2Z"
        clipRule="evenodd"
      />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abuhasif",
    icon: (
      <path d="M6.94 8.75H3.75V20h3.19V8.75ZM5.35 7.21c1.02 0 1.85-.84 1.85-1.86A1.85 1.85 0 1 0 3.5 5.35c0 1.02.83 1.86 1.85 1.86ZM20.5 20h-3.18v-5.47c0-1.3-.02-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.89V20h-3.18V8.75h3.05v1.54h.04c.43-.8 1.46-1.65 3.01-1.65 3.22 0 3.82 2.12 3.82 4.88V20h.36Z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/burnt.shots/",
    icon: (
      <>
        <path d="M7.75 2.75h8.5a5 5 0 0 1 5 5v8.5a5 5 0 0 1-5 5h-8.5a5 5 0 0 1-5-5v-8.5a5 5 0 0 1 5-5Zm0 1.7a3.3 3.3 0 0 0-3.3 3.3v8.5a3.3 3.3 0 0 0 3.3 3.3h8.5a3.3 3.3 0 0 0 3.3-3.3v-8.5a3.3 3.3 0 0 0-3.3-3.3h-8.5Z" />
        <path d="M12 8.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Zm0 1.7a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM17.1 7.9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      </>
    ),
  },
  {
    label: "Email",
    href: "mailto:hasifbakar@gmail.com",
    icon: (
      <path d="M4.5 5.75A2.75 2.75 0 0 0 1.75 8.5v7A2.75 2.75 0 0 0 4.5 18.25h15a2.75 2.75 0 0 0 2.75-2.75v-7a2.75 2.75 0 0 0-2.75-2.75h-15Zm0 1.5h15c.24 0 .46.05.66.15l-7.2 5.02a1.66 1.66 0 0 1-1.92 0L3.84 7.4c.2-.1.42-.15.66-.15Zm-1.25 2.1 6.94 4.84a3.16 3.16 0 0 0 3.62 0l6.94-4.84v6.15c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25V9.35Z" />
    ),
  },
];

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-[#D5E0EA]/70 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 text-sm text-[#5F6F82] md:flex-row md:items-center">
        <div>
          <p>© {new Date().getFullYear()} Abu Hasif Bin Abu Bakar.</p>
          <p className="mt-1">Built with React, TypeScript, Vite, and Tailwind CSS.</p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              aria-label={link.label}
              title={link.label}
              className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--badge-border)] bg-[var(--card)] text-[var(--primary)] transition hover:border-[var(--primary)] hover:bg-[var(--accent-soft)] hover:text-[var(--primary-dark)]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                {link.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
