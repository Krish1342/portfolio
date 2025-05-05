import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <div className="h-screen bg-slate-950 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-32 h-32 flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute inset-0 border-4 border-purple-500 rounded-lg"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-5xl font-bold text-white"
        >
          KL
        </motion.h1>
      </motion.div>
    </div>
  );
}