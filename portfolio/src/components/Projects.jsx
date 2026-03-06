import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 2,
    title: 'Brand Identity System',
    category: 'UI/UX Design',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    category: 'Web Application',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80',
  },
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="projects"
      className="relative bg-dark px-8 md:px-16 lg:px-24 py-28 md:py-36 lg:py-44"
    >
      <motion.p
        className="text-[11px] tracking-[0.3em] text-red/50 uppercase mb-12 md:mb-20"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        / Selected Work
      </motion.p>

      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl font-serif mb-12 md:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Featured <span className="italic text-red">Projects</span>
      </motion.h2>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <motion.a
            key={project.id}
            href="#"
            className="group relative border-t border-white/10 hover:border-red/30 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer transition-colors duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * i }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
              <span className="text-[11px] tracking-[0.2em] text-red/40 font-mono">
                0{project.id}
              </span>
              <h3 className="text-xl md:text-3xl lg:text-4xl font-serif text-light/90 group-hover:text-red transition-colors duration-500">
                {project.title}
              </h3>
            </div>

            <div className="flex items-center gap-6 md:gap-8">
              <span className="text-[11px] tracking-[0.2em] text-light/40 uppercase hidden md:block">
                {project.category}
              </span>
              <span className="text-[11px] tracking-[0.2em] text-light/30">
                {project.year}
              </span>
              <motion.svg
                className="w-5 h-5 text-light/40 group-hover:text-red transition-colors duration-300"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                animate={hoveredId === project.id ? { x: 3, y: -3 } : { x: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <path d="M1 11L11 1M11 1H3M11 1V9" />
              </motion.svg>
            </div>

            <AnimatePresence>
              {hoveredId === project.id && (
                <motion.div
                  className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none z-20"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-72 h-48 object-cover rounded-lg shadow-2xl ring-1 ring-red/20"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="absolute inset-0 bg-red/[0.03] -z-10"
              initial={{ scaleX: 0 }}
              animate={hoveredId === project.id ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
            />
          </motion.a>
        ))}

        <div className="border-t border-white/10" />
      </div>
    </section>
  );
};

export default Projects;