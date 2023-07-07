import { useState } from 'react'
import { motion } from 'framer-motion'

function Categories() {
  const boxVariant = {
    visible : {
      x : 0,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren : 0.3
      }
    },
    hidden : {
      x : -1000,
    }
  }

  const listVariant = {
    visible : {
      x:0,
      opacity : 1,
    },
    hidden : {
      x:-10,
      opacity : 0
    }
  }

  const articles =[{name:"Article 1", id:1}, {name:"Article 2", id:2}, {name:"Article 3", id:3}]
  const articleCard = articles.map((item)=>{
    return(
      <motion.li key={item.id} className="mb-2" variants={ listVariant }>{item.name}</motion.li>
    )
  })
  return (
    <div className="bg-white w-full laptop:w-[30%] h-[100vh] min-h-[920px] flex flex-col items-center justify-center laptop:sticky laptop:right-0 laptop:top-0 overflow-hidden">
      <motion.div className="bg-white w-[90%] h-[40%]" variants={ boxVariant } animate="visible" initial="hidden">
        <span className="w-full h-[20%] bg-gradient-to-r from-[#5de0e6] to-[#004aad] flex items-center justify-start font-bold font-lato text-xl pl-2">LATEST POSTS</span>
        <ul className="list-disc w-full h-[80%] pl-5">
          { articleCard }
        </ul>
      </motion.div>

      <motion.div className="bg-white w-[90%] h-[40%]" variants={ boxVariant } animate="visible" initial="hidden">
        <span className="w-full h-[20%] bg-gradient-to-r from-[#5de0e6] to-[#004aad] flex items-center justify-start font-bold font-lato text-xl pl-2">POPULAR POSTS</span>
        <ul className="list-disc w-full h-[80%] pl-5"> 
          { articleCard }
        </ul>
      </motion.div>
    </div>
  )
}

export default Categories
