import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Calendar, MapPin, Award } from "lucide-react";

export function ExperienceCard({ project, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl w-full max-w-sm lg:max-w-md mx-auto min-h-[400px] h-full flex flex-col justify-between"
      whileHover={{ y: -5 }}
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center">
            <div className="p-2 bg-gray-100 rounded-lg mr-3 group-hover:bg-gray-200 transition-colors duration-300">
              <Award size={20} className="text-gray-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                {project.title}
              </h3>
              {project.event && (
                <motion.div
                  className="inline-flex items-center mt-2 px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full border border-gray-300 group-hover:from-gray-200 group-hover:to-gray-300 group-hover:border-gray-400 transition-all duration-300 shadow-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-bold bg-gradient-to-r from-gray-700 to-gray-900 text-transparent bg-clip-text">
                    {project.event}
                  </span>
                </motion.div>
              )}
              {project.company && (
                <motion.div
                  className="inline-flex items-center mt-2 px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full border border-gray-300 group-hover:from-gray-200 group-hover:to-gray-300 group-hover:border-gray-400 transition-all duration-300 shadow-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-bold bg-gradient-to-r from-gray-700 to-gray-900 text-transparent bg-clip-text">
                    {project.company}
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Date and location */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
          {project.date && (
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              {project.date}
            </div>
          )}
          {project.location && (
            <div className="flex items-center">
              <MapPin size={14} className="mr-1" />
              {project.location}
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="mb-6 flex-grow">
        <p className="text-gray-600 leading-relaxed">{project.description}</p>
      </div>

      {/* Tags */}
      <div className="mb-6 mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 border border-gray-200 hover:border-gray-300 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Actions */}
      {project.github && (
        <div className="mt-auto">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-300 border border-gray-200 hover:border-gray-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} className="mr-2" />
            View Source
          </motion.a>
        </div>
      )}
    </motion.div>
  );
}
