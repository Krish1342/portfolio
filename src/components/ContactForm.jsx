import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      viewport={{ once: true }}
      className="pt-6 border-t border-slate-700 mt-6 text-center text-slate-400 text-sm"
    >
      <p className="mb-4">Feel free to reach out through any of the platforms below:</p>
      <div className="flex justify-center space-x-6 text-slate-300 text-lg">
        <a
          href="https://github.com/Krish1342"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition-colors"
        >
          <Github size={24} />
        </a>
        <a
          href="mailto:lodhakrish11@gmail.com"
          aria-label="Email"
          className="hover:text-white transition-colors"
        >
          <Mail size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/krish-lodha-6b2b06343/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition-colors"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </motion.div>
  );
}
