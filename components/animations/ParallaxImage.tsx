"use client";

import Image, { type ImageProps } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps extends Omit<ImageProps, "fill"> {
  className?: string;
  intensity?: number;
  fill?: boolean;
}

export default function ParallaxImage({
  className = "",
  intensity = 18,
  fill = true,
  ...props
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.045, 1.07, 1.045]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -inset-[5%]"
        style={{ y, scale }}
      >
        <Image
          {...props}
          fill={fill}
          className={className}
        />
      </motion.div>
    </div>
  );
}
