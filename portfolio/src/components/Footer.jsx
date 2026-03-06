const socialLinks = [
  { label: 'Dribbble', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Upwork', href: '#' },
  { label: 'Telegram', href: '#' },
  { label: 'Behance', href: '#' },
];

const Footer = () => {
  return (
    <footer
      className="absolute z-50"
      style={{
        bottom: '48px',
        left: '48px',
        right: '48px',
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        {/* Left — Social links */}
        <div className="flex flex-col gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm text-light/70 hover:text-red 
                         transition-colors duration-300"
            >
              <span className="tracking-wide">{link.label}</span>
              <svg
                className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M1 11L11 1M11 1H3M11 1V9" />
              </svg>
            </a>
          ))}
        </div>

        {/* Center — CTA */}
        <div className="text-center mb-1">
          <h2 className="text-3xl md:text-5xl font-serif italic text-red mb-2">
            Get in touch
          </h2>
          <p className="text-[11px] tracking-[0.3em] text-light/50 uppercase">
            Let's do it together
          </p>
        </div>

        {/* Right — Copyright */}
        <div className="text-right flex flex-col gap-2">
          <p className="text-[11px] tracking-[0.2em] text-light/40 uppercase">
            All Rights Reserved
          </p>
          <p className="text-[11px] tracking-[0.2em] text-light/50 uppercase">
            sanz313 © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;