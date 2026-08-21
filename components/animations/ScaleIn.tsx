"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleInProps {
  children: ReactNode;
  className?: string;
}

export default function ScaleIn({
  children,
  className = "",
}: ScaleInProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      {children}
    </motion.div>
  );
}