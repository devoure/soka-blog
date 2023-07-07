import { useState } from 'react'
import { motion  } from 'framer-motion'
import profpic from '../assets/profpic.png'

function ContentHeader() {
  return (
    <div className="w-full h-[80%] min-h-[490px] min-w-[375px] flex items-center justify-start pl-5">
      <div className="w-[300px] h-[300px] z-10 tablet:w-[450px] laptop:w-[500px] xl:w-[550px] laptop:h-[350px] bg-transparent top-[10%] relative flex-none">
        <div className="w-full h-[20%] text-white font-alegreya font-bold text-2xl tablet:text-4xl laptop:text-5xl xl:text-6xl flex justify-start items-center p-2 flex items-center">
          <h1>A FOOTBALL FAN ?</h1>
        </div>
        <div className="w-full h-[50%] font-lato text-2xl tablet:text-3xl laptop:text-3xl xl:text-4xl font-body p-2 leading-loose flex items-center">
          <p><span className="text-[#fed576]">Stray no further, you found its home. Top notch football news brought to you by me,</span> <span className="text-white inline-block overflow-hidden whitespace-nowrap border-r-4 animate-typing">Athumani Bakari</span></p>
        </div>
        <motion.div className="bg-white h-[180px] w-[180px] absolute z-[-1] tablet:h-[250px] tablet:w-[250px] xl:w-[300px] xl:h-[300px] -right-5 -bottom-11 tablet:-right-[30%] laptop:-right-[32%] laptop:bottom-0 xl:-right-[40%] rounded-full overflow-hidden object-center object-cover" animate={{ x:"100px", opacity:1, rotate:360 }} initial={{ opacity:0.5 }} transition={{ type:"spring", stiffness:100 }}>
        <img src={ profpic } />
      </motion.div>
      </div>
    </div>
  )
}

export default ContentHeader
