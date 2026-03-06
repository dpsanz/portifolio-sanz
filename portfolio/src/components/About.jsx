import { motion } from 'framer-motion';

const stats = [
  { number: '03+', label: 'Years Experience' },
  { number: '25+', label: 'Projects Completed' },
  { number: '15+', label: 'Happy Clients' },
  { number: '10+', label: 'Technologies' },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-dark px-8 md:px-16 lg:px-24 py-28 md:py-36 lg:py-44"
    >
      <motion.p
        className="text-[11px] tracking-[0.3em] text-red/50 uppercase mb-12 md:mb-20"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        / About
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
        <div>
          <motion.h2
            className="text-3xl md:text-5xl lg:text-7xl font-serif leading-[1.1]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Crafting digital{' '}
            <span className="italic text-red">experiences</span>{' '}
            that matter
          </motion.h2>
        </div>

        <div className="flex flex-col justify-end gap-6 md:gap-8">
          <motion.p
            className="text-base md:text-lg text-light/60 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm a creative developer focused on building beautiful,
            performant web experiences. I combine clean code with
            thoughtful design to create digital products that stand out.
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-light/60 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            With a passion for minimal aesthetics and smooth interactions,
            I bring ideas to life through modern technologies and
            attention to every detail.
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20 md:mt-28 pt-12 border-t border-red/15">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * i }}
          >
            <p className="text-4xl md:text-5xl font-serif text-red mb-3">
              {stat.number}
            </p>
            <p className="text-[11px] tracking-[0.2em] text-light/40 uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;