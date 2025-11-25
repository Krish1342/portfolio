import { motion } from "framer-motion";
import { Github, Mail, Linkedin, X } from "lucide-react";

export function Sidebar({
  menuOpen,
  setMenuOpen,
  activeSection,
  scrollToSection,
}) {
  const navItems = [
    { id: "hero", label: "Home", symbol: "○" },
    { id: "about", label: "About", symbol: "◐" },
    { id: "experience", label: "Experience", symbol: "●" },
    { id: "skills", label: "Skills", symbol: "◑" },
    { id: "projects", label: "Projects", symbol: "◒" },
    { id: "contact", label: "Contact", symbol: "◓" },
  ];

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
      />

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed right-0 top-0 h-screen w-80 bg-white/10 backdrop-blur-2xl z-40 shadow-2xl border-l border-white/20"
      >
        <div className="p-8 h-full flex flex-col relative">
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ delay: 0.2 }}
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-xl rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={20} className="text-gray-700" />
          </motion.button>

          {/* Header */}
          <div className="mb-12 mt-16 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center"
            >
              <span className="text-xl font-bold text-white">KL</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl font-bold text-gray-800"
            >
              Krish Lodha
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 text-sm mt-1"
            >
              Creative Technologist
            </motion.p>
          </div>

          {/* Navigation */}
          <nav className="space-y-3 flex-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                onClick={() => {
                  scrollToSection(item.id);
                  setMenuOpen(false);
                }}
                className="w-full group relative"
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`flex items-center transition-all duration-300 p-4 rounded-2xl ${
                    activeSection === item.id
                      ? "bg-white/20 backdrop-blur-xl border border-white/30"
                      : "hover:bg-white/10 backdrop-blur-xl border border-transparent hover:border-white/20"
                  }`}
                >
                  {/* Active indicator */}
                  <motion.div
                    className={`w-1 h-8 rounded-full mr-4 transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-gradient-to-b from-gray-600 to-gray-800"
                        : "bg-gray-300"
                    }`}
                    animate={
                      activeSection === item.id
                        ? { scale: [1, 1.2, 1] }
                        : { scale: 1 }
                    }
                    transition={{ duration: 0.5 }}
                  />

                  {/* Symbol */}
                  <span
                    className={`text-xl mr-4 transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-gray-800 scale-125"
                        : "text-gray-500 group-hover:text-gray-700"
                    }`}
                  >
                    {item.symbol}
                  </span>

                  {/* Label */}
                  <span
                    className={`font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-gray-900"
                        : "text-gray-600 group-hover:text-gray-800"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              </motion.button>
            ))}
          </nav>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 pt-6 border-t border-white/20"
          >
            <p className="text-xs text-gray-500 mb-4 text-center">
              Connect with me
            </p>
            <div className="flex justify-center space-x-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Krish1342",
                  label: "GitHub",
                },
                {
                  icon: Mail,
                  href: "mailto:lodhakrish11@gmail.com",
                  label: "Email",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/krish-lodha-6b2b06343/",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-xl transition-all duration-300 text-gray-600 hover:text-gray-800 border border-white/20"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
