import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
      {/* Simplified background - reduced particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-300/30 rounded-full"
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        className="relative w-40 h-40 flex items-center justify-center z-10"
      >
        {/* Spinning outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-transparent border-t-gray-700 border-r-gray-900 rounded-full"
        />

        {/* Inner glowing circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute inset-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full backdrop-blur-sm border border-gray-300 shadow-lg"
        />

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-6xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 text-transparent bg-clip-text z-10"
        >
          KL
        </motion.h1>
      </motion.div>

      {/* Loading text and progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-20 w-full flex flex-col items-center px-8"
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-600 text-lg tracking-widest mb-6"
        >
          LOADING...
        </motion.p>

        {/* Centered loading bar container */}
        <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-gray-600 to-gray-800 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
