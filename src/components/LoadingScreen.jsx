import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onFinish }) {
  const [phase, setPhase] = useState(0); // 0 = name reveal, 1 = wipe away

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1200);
    const t2 = setTimeout(() => onFinish(), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-bg flex items-center justify-center"
      animate={phase === 1 ? { y: "-100%" } : {}}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Just the name. Nothing else. */}
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-heading font-extrabold text-5xl sm:text-7xl md:text-8xl text-fg tracking-tight select-none"
        >
          KRISH LODHA
        </motion.h1>
      </div>
    </motion.div>
  );
}
