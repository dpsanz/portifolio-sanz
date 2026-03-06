import { motion } from 'framer-motion';
import CircleDecoration from './CircleDecoration';
import HeroBackground from './HeroBackground';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      <HeroBackground />
      <CircleDecoration />

      <div className="relative z-10 text-center select-none px-6">
        <motion.h1
          className="text-[18vw] md:text-[14vw] lg:text-[12vw] font-serif font-normal leading-none tracking-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(230,57,70,0.7) 45%, rgba(181,32,46,0.4) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          sanz<em className="italic">313</em>
        </motion.h1>

        <motion.p
          className="mt-6 text-[11px] md:text-sm tracking-[0.4em] text-red-light/60 uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Creative Developer & Designer
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.3em] text-red/30 uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-red/30"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;