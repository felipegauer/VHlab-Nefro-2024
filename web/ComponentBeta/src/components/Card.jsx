import { motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function Card({ id, url, cards, setCards, deck }) {
    const isFront = id === cards[cards.length - 1].id
    const x = useMotionValue(0)
    const getZindex = () => {
        if (isFront) return cards.length + 1 
        for (let i = 0; i < cards.length - 1; i++) {
            if (cards[i].id === id) return i + 1
            
        }
    }
    const zindex = getZindex()
    const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])
    const rotateRaw = useTransform(x, [-200, 0, 200], [-35, 0, 35])
    const rotate = useTransform(()=>{
        const offset = isFront ? 0.00001 : id%2 === 0 ? 6 : -6
    
        return `${rotateRaw.get() + (deck? 0 : offset)}deg`
    })

   

    const handleDragEnd = () => {
        if (deck) {
            if (Math.abs(x.get()) > 75 ) setCards(pv => {
                let aux = {}
                const a = pv.filter(v =>  {
                   if( v.id !== id ) return true
                    aux = v
                    return false
                })
                a.unshift(aux)
                return a
            })
        }else{
            if (Math.abs(x.get()) > 75) setCards(pv => pv.filter(v => v.id !== id))
        }
       

        
    }

    return (
        <motion.img key={id} src={url}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={handleDragEnd}
            className='h-96 w-72 object-cover
           rounded-2xl hover:cursor-grab 
           active:cursor-grabbing
           origin-bottom'
            style={{
                gridRow: 1,
                gridColumn: 1,
                x,
                rotate,
                opacity,
                transition: '0.125s transform',
                boxShadow: isFront ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)" : "",
                scale: isFront ? 1.01 : 0.98,
                zIndex: zindex,
            }} />
    )
}