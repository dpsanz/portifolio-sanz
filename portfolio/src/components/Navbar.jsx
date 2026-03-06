import { motion } from 'framer-motion';

const navLinks = [
  { label: 'HOMEPAGE', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
];

const Navbar = () => {
  return (
    <nav
      className="absolute z-50 flex justify-between items-start"
      style={{
        top: '48px',
        left: '48px',
        right: '48px',
      }}
    >
      {/* Left — Navigation Links */}
      <ul className="flex flex-col gap-1.5">
        {navLinks.map((link, i) => (
          <motion.li
            key={link.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
          >
            <a
              href={link.href}
              className="text-[11px] md:text-xs font-medium tracking-[0.2em] text-light/80 
                         hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Center — Tagline */}
      <motion.div
        className="hidden md:block text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-[11px] tracking-[0.2em] text-light/60 uppercase">
          Digital Driving Force
        </p>
        <p className="text-[11px] tracking-[0.2em] text-light/60 uppercase">
          For Your Business
        </p>
      </motion.div>

      {/* Right — Language Selector */}
      <div className="flex flex-col items-end gap-1.5">
        {['ENGLISH', 'PORTUGUÊS'].map((lang, i) => (
          <motion.button
            key={lang}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className={`text-[11px] md:text-xs tracking-[0.2em] transition-colors duration-300 ${
              i === 0 ? 'text-white font-medium' : 'text-light/50 hover:text-white'
            }`}
          >
            {lang}
          </motion.button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;