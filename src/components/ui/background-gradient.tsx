import { motion } from "motion/react";
import type React from "react";
import { cn } from "@/lib/utils";

export interface BackgroundGradientProps {
  className?: string;
  children?: React.ReactNode;
}

export const BackgroundGradient = ({
  className,
  children,
}: BackgroundGradientProps) => {
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden", className)}
      style={{ backgroundColor: "var(--gradient-bg)" }}
    >
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom right, var(--gradient-base-from), var(--gradient-base-via), var(--gradient-base-to))`,
        }}
      />

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          width: "min(50vw, 50vh)",
          height: "min(50vw, 50vh)",
          background: "var(--gradient-blob-1)",
        }}
        animate={{
          x: ["0%", "30%", "10%", "0%"],
          y: ["0%", "20%", "40%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        initial={{ x: "10%", y: "10%" }}
      />

      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          width: "min(60vw, 60vh)",
          height: "min(60vw, 60vh)",
          background: "var(--gradient-blob-2)",
        }}
        animate={{
          x: ["60%", "40%", "70%", "60%"],
          y: ["10%", "30%", "5%", "10%"],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        initial={{ x: "60%", y: "10%" }}
      />

      <motion.div
        className="absolute rounded-full blur-[100px]"
        style={{
          width: "min(45vw, 45vh)",
          height: "min(45vw, 45vh)",
          background: "var(--gradient-blob-3)",
        }}
        animate={{
          x: ["20%", "50%", "30%", "20%"],
          y: ["60%", "40%", "70%", "60%"],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        initial={{ x: "20%", y: "60%" }}
      />

      <motion.div
        className="absolute rounded-full blur-[100px]"
        style={{
          width: "min(55vw, 55vh)",
          height: "min(55vw, 55vh)",
          background: "var(--gradient-blob-4)",
        }}
        animate={{
          x: ["70%", "50%", "80%", "70%"],
          y: ["50%", "70%", "40%", "50%"],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        initial={{ x: "70%", y: "50%" }}
      />

      <motion.div
        className="absolute rounded-full blur-[80px]"
        style={{
          width: "min(40vw, 40vh)",
          height: "min(40vw, 40vh)",
          background: "var(--gradient-blob-5)",
        }}
        animate={{
          x: ["40%", "60%", "30%", "40%"],
          y: ["30%", "50%", "20%", "30%"],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        initial={{ x: "40%", y: "30%" }}
      />

      {/* Noise overlay for texture - high-contrast binary noise for visibility */}
      <div
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch' result='t'/%3E%3CfeComponentTransfer in='t' result='c'%3E%3CfeFuncR type='discrete' tableValues='0 1'/%3E%3CfeFuncG type='discrete' tableValues='0 1'/%3E%3CfeFuncB type='discrete' tableValues='0 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23000' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
          backgroundRepeat: "repeat",
          opacity: "var(--gradient-noise-opacity)",
        }}
      />

      {/* Content layer */}
      {children && (
        <div className="relative z-10 h-full w-full">{children}</div>
      )}
    </div>
  );
};

export type { BackgroundGradientProps as BackgroundGradientPropsType };
