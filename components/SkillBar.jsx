import { motion } from 'framer-motion';

export function SkillBar({ skill, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-slate-800/50 rounded-lg p-3 hover:bg-slate-700/50 transition-colors duration-300"
    >
      <span className="text-slate-200 font-medium">{skill.name}</span>
    </motion.div>
  );
}