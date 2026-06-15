"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const starSizeClass = "h-auto w-[min(130px,18vw)] shrink-0";

export function ShootingPetr() {
  const [mounted, setMounted] = useState(false);
  const [scrollEnd, setScrollEnd] = useState(800);

  const { scrollY } = useScroll();

  useEffect(() => {
    const updateScrollEnd = () => setScrollEnd(window.innerHeight);
    updateScrollEnd();
    setMounted(true);
    window.addEventListener("resize", updateScrollEnd);
    return () => window.removeEventListener("resize", updateScrollEnd);
  }, []);

  const x = useTransform(scrollY, [0, scrollEnd], ["100vw", "-55vw"]);

  if (!mounted) return null;

  return createPortal(
    <motion.div
      className="pointer-events-none fixed top-[32vh] left-0 z-100 flex items-center gap-4"
      style={{ x }}
      aria-hidden
    >
      <motion.div
        animate={{
          y: [0, -14, 6, -10, 0],
          rotate: [-10, 6, -4, 8, -10],
          scale: [1, 1.1, 0.96, 1.06, 1],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/graphics/bluestar.png"
          alt=""
          width={130}
          height={98}
          className={starSizeClass}
        />
      </motion.div>

      <Image
        src="/graphics/shootingpetr.png"
        alt=""
        width={400}
        height={192}
        className="h-auto w-[min(400px,60vw)] shrink-0"
        priority
      />

      <motion.div
        animate={{
          y: [0, 10, -8, 12, 0],
          rotate: [8, -6, 10, -4, 8],
          scale: [1, 1.08, 1.12, 0.98, 1],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      >
        <Image
          src="/graphics/yellowstar.png"
          alt=""
          width={130}
          height={93}
          className={starSizeClass}
        />
      </motion.div>
    </motion.div>,
    document.body,
  );
}
