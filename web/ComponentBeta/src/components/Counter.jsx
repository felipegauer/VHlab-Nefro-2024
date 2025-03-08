import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function Counter({initial,final}) {
    const count = useMotionValue(initial?initial:0)
    const rounded = useTransform(() => Math.round(count.get()))


    useEffect(() => {
        const controls = animate(count, final?final:100, { duration: 10})
        return () => controls.stop()
    }, [])

    return <motion.span >{rounded}</motion.span>
}



    // animate(0, 100, {
    //     duration: 2,
    //     ease: "circOut",
    //     onUpdate: (latest) => (count.innerHTML = Math.round(latest)),
    // })


