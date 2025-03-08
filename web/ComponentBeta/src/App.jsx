import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { motion, useMotionValue, useTransform } from "motion/react"
import Counter from './components/Counter'
import Card from './components/Card'

function App() {
  const [imgs, setImgs] = useState(data)
  const [deck, setDeck] = useState(false)

  return (
    <div className='h-screen w-screen overflow-hidden'>
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className='flex flex-col items-center justify-center h-full w-full gap-6'>
          <motion.div
            animate={{
              scale: [1, 2, 1],
              rotate: [-360, 0], x: [0, 100, -100, 0],
              delay: 0.5,
              transition: { duration: 2 }

            }}

            className=" absolute react top-12 text-4xl" > Felipe Gauer </motion.div>

          <motion.div className='grid '
            animate={{
              position: [0, 1],
              rotate: [0, 360],
              x: [-1000, 0],
              y: [1000, 0],
              delay: 10,
              transition: { duration: 2 }
            }}>
            {imgs.map((i) => <Card key={i.id} id={i.id} url={i.url} cards={imgs} setCards={setImgs} deck={deck} />)}
          </motion.div>
          <div className='flex gap-4'>
            <button className='' onClick={() => setImgs(data)}>restart</button>
            <button className='' onClick={() => setDeck(!deck)}>change</button>
          </div>

        </div>
      </div>
      </div>

    </div>
  )
}


const data = [{
  id: 0,
  url: "https://images.unsplash.com/photo-1593282153762-a41e3cceb06c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 1,
  url: "https://plus.unsplash.com/premium_photo-1663045882560-3bdd5f71687c?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 2,
  url: "https://images.unsplash.com/photo-1644349315426-a8f62ac75c2c?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 3,
  url: "https://images.unsplash.com/photo-1561983779-7d7e065befa4?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 4,
  url: "https://images.unsplash.com/photo-1735657090736-0c8484323c90?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 5,
  url: "https://images.unsplash.com/photo-1739889399693-8a46b389473f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 6,
  url: "https://images.unsplash.com/photo-1739813498570-f0ef6ee15b81?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 7,
  url: "https://images.unsplash.com/photo-1566579090262-51cde5ebe92e?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 8,
  url: "https://images.unsplash.com/photo-1547941126-3d5322b218b0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 9,
  url: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  id: 10,
  url: "https://images.unsplash.com/photo-1699058455521-2d3d52e04861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
]

export default App
