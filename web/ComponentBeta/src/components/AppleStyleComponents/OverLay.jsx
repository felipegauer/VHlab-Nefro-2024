import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react";

export default function Overlay({header,subheader}){
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -180]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5,0.8], [0,1, 0]);
    return <motion.div
    style={{
        y,
        opacity,
    }}
     ref={targetRef} className="absolute left-0 top-0 w-full h-screen flex flex-col justify-center items-center z-10">
        <p className="text-center text-2xl text-neutral-50 mb-2">{subheader}</p>
        <p className="text-center text-5xl font-bold text-neutral-100">{header}</p>
    </motion.div>
}