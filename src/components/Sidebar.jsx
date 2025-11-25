import { motion } from "framer-motion";
import { Github, Mail, Linkedin, X, User, Briefcase, Code, FolderOpen, MessageCircle, Home, FileText } from "lucide-react";

export function Sidebar({
  menuOpen,
  setMenuOpen,
  activeSection,
  scrollToSection,
}) {
  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: MessageCircle },
  ];

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        transition={{ duration: 0.3 }}
      />

      {/* Modern Burger Menu Panel */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed right-0 top-0 h-screen w-full sm:w-96 bg-white/95 backdrop-blur-2xl z-50 shadow-2xl border-l border-gray-200/50"
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">KL</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Krish Lodha</h3>
                <p className="text-xs text-gray-500">Full Stack Developer</p>
              </div>
            </motion.div>
            
            <motion.button
              onClick={() => setMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} className="text-gray-600" />
            </motion.button>
          </div>

          {/* Navigation */}
          <div className="flex-1 p-6">
            <nav className="space-y-2">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    onClick={() => {
                      scrollToSection(item.id);
                      setMenuOpen(false);
                    }}
                    className="w-full group"
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`flex items-center p-4 rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-gray-100 text-gray-900 shadow-md"
                        : "hover:bg-gray-50 text-gray-600 hover:text-gray-800"
                    }`}>
                      <div className={`w-1 h-10 rounded-full mr-4 transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-gradient-to-b from-gray-600 to-gray-800"
                          : "bg-gray-300 group-hover:bg-gray-400"
                      }`} />
                      
                      <IconComponent size={22} className={`mr-4 transition-all duration-300 ${
                        activeSection === item.id
                          ? "text-gray-800"
                          : "text-gray-500 group-hover:text-gray-700"
                      }`} />
                      
                      <span className={`font-medium text-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? "text-gray-900"
                          : "text-gray-600 group-hover:text-gray-800"
                      }`}>
                        {item.label}
                      </span>

                      {activeSection === item.id && (
                        <motion.div
                          className="ml-auto w-2 h-2 bg-gray-600 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring" }}
                        />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </nav>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-4 border-t border-gray-200/50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-gray-500">Reading Progress</span>
              <span className="text-xs text-gray-500">
                {Math.round(([
                  "hero", "about", "experience", "skills", "projects", "contact"
                ].indexOf(activeSection) + 1) * 16.666)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-gray-600 to-gray-800 h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${([
                    "hero", "about", "experience", "skills", "projects", "contact"
                  ].indexOf(activeSection) + 1) * 16.666}%`,
                }}
              />
            </div>
          </div>

          {/* Social Links & Resume */}
          <div className="p-6 border-t border-gray-200/50 bg-gray-50/50">
            <div className="flex justify-center space-x-4 mb-4">
              {[
                { icon: Github, href: "https://github.com/Krish1342", label: "GitHub" },
                { icon: Mail, href: "mailto:lodhakrish11@gmail.com", label: "Email" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/krish-lodha-6b2b06343/", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 hover:text-gray-800"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
            
            <motion.a
              href="/KrishLodhaResume.pdf"
              download="Krish_Lodha_Resume.pdf"
              className="w-full flex items-center justify-center px-4 py-3 bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-900 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText size={18} className="mr-2" />
              Download Resume
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
