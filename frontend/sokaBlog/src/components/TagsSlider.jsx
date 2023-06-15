import { useState, useRef } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import tagsData from '../assets/tagsData.jsx'
import usePosition from '../hooks/usePosition.jsx'


function TagsSlider() {
  const tagsSliderRef = useRef()
  const position = usePosition(tagsSliderRef)


  const tagsCard = tagsData.map((tag)=>{
    return(
    <div className="w-[90%] h-[90%] flex justify-evenly items-center" key={tag.id}>
      <div className="w-[100px] h-[70px] flex flex-col items-center justify-evenly">
        <div className="w-[45px] h-[45px] rounded-full object-center object-cover bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${tag.image})` }}>
        </div>
        <span className="font-bold text-xs text-white">{tag.tagName}</span>
      </div>
    </div>
    )
  })
  return (
    <div className="group w-[320px] h-[100px] tablet:w-[400px] laptop:w-[500px] hover:scale-x-110 bg-black absolute bottom-[-10%] z-[10] left-[50%] translate-x-[-50%] bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-700">
      <div className={ position.hasItemOnLeft ? "group-hover:flex absolute hidden w-[30px] h-[30px] rounded-full bg-black top-[50%] translate-y-[-50%] left-[10px] text-white text-xl items-center justify-center hover:bg-white hover:text-black  hover:scale-105 cursor-pointer transition-all duration-300" : "hidden" } onClick={position.scrollLeft}>
        < AiOutlineArrowLeft />
      </div>
      <div className={ position.hasItemOnRight ? "group-hover:flex absolute hidden w-[30px] h-[30px] rounded-full bg-black top-[50%] translate-y-[-50%] right-[10px] text-white text-xl items-center justify-center hover:bg-white hover:text-black hover:scale-105 cursor-pointer transition-all duration-300" : "hidden" } onClick={position.scrollRight}>
        < AiOutlineArrowRight />
      </div>
      <div className="w-[40%] h-[20%] flex items-center justify-center font-bold text-white text-lg tracking-wide font-lato">
        <span>TAGS</span>
      </div>
      <div className="w-[70%] h-[80%] flex justify-start items-center overflow-hidden" ref={tagsSliderRef}>
        { tagsCard }
      </div>
    </div>
  )
}

export default TagsSlider
