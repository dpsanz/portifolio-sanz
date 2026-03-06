import { motion } from 'framer-motion';

const CircleDecoration = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-red/15 
                   md:w-[800px] md:h-[800px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full border border-dashed border-red/10 
                   md:w-[600px] md:h-[600px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-red/10 
                   md:w-[400px] md:h-[400px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      <div className="absolute w-full h-px bg-red/5 rotate-45" />
      <div className="absolute w-full h-px bg-red/5 -rotate-45" />
      <div className="absolute w-px h-full bg-red/5" />
      <div className="absolute w-full h-px bg-red/5" />
    </div>
  );
};

export default CircleDecoration;