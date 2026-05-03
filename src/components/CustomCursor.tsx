import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], iframe, video")) setHovering(true);
    };
    const out = () => setHovering(false);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
      document.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-4 h-4 rounded-full bg-primary/80 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          scale: hovering ? 3 : 1,
        }}
        transition={{ scale: { duration: 0.2 } }}
      />
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-12 h-12 rounded-full border border-primary/40 pointer-events-none z-[9998] mix-blend-screen shadow-[0_0_20px_rgba(255,215,0,0.4)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          scale: hovering ? 1.5 : 1,
        }}
        transition={{ scale: { duration: 0.3 } }}
      />
    </>
  );
};

export default CustomCursor;
