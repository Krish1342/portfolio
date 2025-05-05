import { motion } from 'framer-motion';

export function SkillBar({ category, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700/80 transition-all duration-300 border border-purple-500/10 hover:border-purple-500/20 group hover:-translate-y-1"
    >
      <h3 className="text-xl font-semibold mb-3 text-purple-400">{category.name}</h3>
      <p className="text-slate-400 mb-4 text-sm">{category.description}</p>
      
      <div className="space-y-4">
        {Object.entries(
          category.skills.reduce((acc, skill) => {
            if (!acc[skill.category]) {
              acc[skill.category] = [];
            }
            acc[skill.category].push(skill.name);
            return acc;
          }, {})
        ).map(([category, skills], index) => (
          <div key={index}>
            <h4 className="text-sm font-medium text-slate-300 mb-2">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}