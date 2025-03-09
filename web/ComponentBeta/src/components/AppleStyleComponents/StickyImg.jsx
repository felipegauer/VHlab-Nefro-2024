import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"


export default function StickyImg({ url }) {
  const targetRef = useRef(null);
const { scrollYProgress } = useScroll({
  target: targetRef,
  offset: ["end end", "end start"],
});

const scale = useTransform(scrollYProgress, [0, 1], [1.03, 0.85]);
const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

return (
  <motion.div
    style={{
      backgroundImage: `url(${url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      top: 0,
      scale,
    }}
    ref={targetRef}
    className="sticky z-0 overflow-hidden rounded-3xl"
  >
    <motion.div
      className="absolute inset-0 bg-neutral-950/70"
      style={{
        opacity,
      }}
    />
  </motion.div>
);

}