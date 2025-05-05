import { motion } from 'framer-motion';
import { Home, User, Code2, FolderGit, Phone, Github, Mail, Linkedin, X } from 'lucide-react';

export function Sidebar({ menuOpen, setMenuOpen, activeSection, scrollToSection }) {
  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: FolderGit },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
      >
        <X size={24} />
      </button>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed right-0 top-0 h-screen w-72 bg-slate-800/95 backdrop-blur-sm z-40 shadow-xl border-l border-slate-700"
      >
        <div className="p-8">
          <div className="mb-12 mt-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
            >
              Navigation
            </motion.h2>
          </div>
          <nav className="space-y-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'hover:bg-slate-700/50 text-slate-300 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="w-1 h-full bg-purple-500 absolute right-0"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 left-0 right-0 px-8"
          >
            <div className="flex justify-center space-x-6 pt-4 border-t border-slate-700">
              <a
                href="https://github.com/Krish1342"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:lodhakrish11@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/krish-lodha-6b2b06343/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}