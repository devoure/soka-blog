import { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent.jsx'
import BlogContentComponent from '../components/BlogContentComponent.jsx'
import { motion } from "framer-motion"

function Home() {
  const [count, setCount] = useState(0)

  return (
    <motion.div className="origin-center" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:2 }}>
    <div className="laptop:flex laptop:flex-col laptop:items-center">
      < HeaderComponent />
      < BlogContentComponent />
      <div className="w-screen h-[40vh] bg-header-background bg-fixed bg-cover min-w-[375px] min-h-[350px]">
      </div>
    </div>
    </motion.div>
  )
}

export default Home
