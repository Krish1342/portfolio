import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

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
        className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700/80 transition-all duration-300 border border-purple-500/10 hover:border-purple-500/20 group hover:-translate-y-1"
        >
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">{project.title}</h3>
            <p className="text-slate-400 mb-4">{project.description}</p>
            <p className="text-sm text-slate-500 mb-4">{project.date}</p>
            <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
                <span
                key={i}
                className="px-3 py-1 bg-slate-700 rounded-full text-sm"
                >
                {tag}
                </span>
            ))}
            {project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center text-slate-300 hover:text-white transition-colors mt-2"
  >
    <Github size={18} className="mr-2" />
    Source
  </a>
)}

            </div>
        </div>
        </motion.div>
    );
}