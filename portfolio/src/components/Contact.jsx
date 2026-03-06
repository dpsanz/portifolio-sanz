import { motion } from 'framer-motion';

const contactLinks = [
  { label: 'Email', value: 'hello@yourname.com', href: 'mailto:hello@yourname.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/yourname', href: '#' },
  { label: 'GitHub', value: 'github.com/yourname', href: '#' },
  { label: 'Dribbble', value: 'dribbble.com/yourname', href: '#' },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-dark px-8 md:px-16 lg:px-24 py-28 md:py-36 lg:py-44 flex flex-col justify-center min-h-screen"
    >
      <motion.p
        className="text-[11px] tracking-[0.3em] text-red/50 uppercase mb-12 md:mb-20"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        / Contact
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
        <div>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-8xl font-serif leading-[1.05]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Let's work{' '}
            <span className="italic text-red">together</span>
          </motion.h2>

          <motion.p
            className="mt-8 md:mt-10 text-light/50 text-base md:text-lg max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a project in mind? Let's create something amazing together.
            I'm always open to new opportunities and collaborations.
          </motion.p>
        </div>

        <div className="flex flex-col justify-end">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-6 md:py-8 border-b border-white/10 
                         hover:border-red/40 transition-colors duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div>
                <p className="text-[11px] tracking-[0.2em] text-red/40 uppercase mb-1">
                  {link.label}
                </p>
                <p className="text-lg md:text-xl text-light/80 group-hover:text-red transition-colors duration-300">
                  {link.value}
                </p>
              </div>
              <svg
                className="w-5 h-5 text-light/30 group-hover:text-red transition-colors duration-300"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M1 11L11 1M11 1H3M11 1V9" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-20 md:mt-28 pt-8 border-t border-red/10 flex flex-col md:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="text-[11px] tracking-[0.2em] text-light/30 uppercase">
          All Rights Reserved
        </p>
        <p className="text-[11px] tracking-[0.2em] text-light/30 uppercase">
          Built with <span className="text-red">♥</span> using React + Tailwind
        </p>
        <p className="text-[11px] tracking-[0.2em] text-light/30 uppercase">
          Portfolio © 2026
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;