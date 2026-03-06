import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Design',
    skills: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems', 'Typography'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'Vercel', 'VS Code', 'Linux'],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-dark-light px-8 md:px-16 lg:px-24 py-28 md:py-36 lg:py-44"
    >
      <motion.p
        className="text-[11px] tracking-[0.3em] text-red/50 uppercase mb-12 md:mb-20"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        / Skills & Tools
      </motion.p>

      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl font-serif mb-16 md:mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        My <span className="italic text-red">toolkit</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 * catIndex }}
          >
            <h3 className="text-[11px] tracking-[0.3em] text-red/60 uppercase mb-6 pb-4 border-b border-red/15">
              {category.title}
            </h3>
            <ul className="flex flex-col gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skill}
                  className="group flex items-center gap-3 cursor-default"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 * catIndex + 0.05 * skillIndex }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red/30 group-hover:bg-red group-hover:scale-150 transition-all duration-300" />
                  <span className="text-sm md:text-base text-light/70 group-hover:text-white transition-colors duration-300">
                    {skill}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 md:mt-32 overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(2)].map((_, dupeIndex) => (
            <div key={dupeIndex} className="flex gap-8">
              {['REACT', 'TYPESCRIPT', 'TAILWIND', 'NODE.JS', 'NEXT.JS', 'FIGMA', 'PYTHON', 'DOCKER', 'GIT', 'GRAPHQL'].map(
                (tech) => (
                  <span
                    key={`${dupeIndex}-${tech}`}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-red/[0.06] select-none"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;