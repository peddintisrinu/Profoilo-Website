import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-slate-950
      flex justify-center items-center
      z-[9999]"
    >
      <motion.h1
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="text-5xl font-bold
        bg-gradient-to-r
        from-cyan-400
        to-purple-500
        bg-clip-text
        text-transparent"
      >
        Reenu
      </motion.h1>
    </motion.div>
  );
}