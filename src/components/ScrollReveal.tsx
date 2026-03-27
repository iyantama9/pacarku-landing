import { motion } from "framer-motion";

import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

const getVariants = () => {
  return {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
};

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  distance?: number;
  duration?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 1.5,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: "easeInOut",
      }}
      className={className}
      style={{ willChange: "opacity" }}
    >
      {children}
    </motion.div>
  );
}