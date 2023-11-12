// app/template.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        key="slide-in"
        className="slide-in absolute top-0 left-0 w-full bg-black"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>

      <motion.div
        key="slide-out"
        className="slide-out absolute top-0 left-0 w-full bg-black"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      {children}
    </AnimatePresence>
  );
}
