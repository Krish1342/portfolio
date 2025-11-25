import { motion } from "framer-motion";
import { Code, Database, Palette, Brain } from "lucide-react";

export function SkillBar({ category, inView, delay }) {
  // Group skills by their category (e.g., Frontend, Backend)
  const groupedSkills = category.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  // Icon mapping for different categories
  const getIcon = (categoryName) => {
    const iconMap = {
      Frontend: Palette,
      Backend: Database,
      Programming: Code,
      "Data Science": Brain,
      Database: Database,
      Tools: Code,
    };
    return iconMap[categoryName] || Code;
  };

  const Icon = getIcon(category.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl w-full max-w-sm lg:max-w-md mx-auto min-h-[400px] h-full flex flex-col justify-between"
      whileHover={{ y: -5 }}
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <div className="p-2 bg-gray-100 rounded-lg mr-3 group-hover:bg-gray-200 transition-colors duration-300">
            <Icon size={24} className="text-gray-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
            {category.name}
          </h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Skills grid */}
      <div className="space-y-4 flex-grow">
        {Object.entries(groupedSkills).map(
          ([skillGroup, skills], groupIndex) => (
            <motion.div
              key={skillGroup}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: delay + groupIndex * 0.1 }}
            >
              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-2" />
                {skillGroup}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: delay + groupIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 border border-gray-200 hover:border-gray-300 transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  );
}
