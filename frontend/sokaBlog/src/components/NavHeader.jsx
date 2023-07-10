import { useState } from 'react'
import { motion } from "framer-motion"
import { AiFillInstagram, AiFillTwitterCircle, AiFillFacebook, AiOutlineSearch } from "react-icons/ai";

function NavHeader() {
  const [searchActive, setSearchActive] = useState(false)
  function searchFunc(){
    setSearchActive(prev =>{
      return (!prev)
    })
  }

  return (
    <div className="h-[20%] w-full min-h-[130px] min-w-[375px] flex flex-col laptop:flex-row justify-evenly px-5 laptop:items-center laptop:h-[10%] laptop:justify-between">
      <div className="font-oswald w-full laptop:w-[60%] flex items-center">
        <h1 className="text-white font-bold text-xl tablet:text-2xl laptop:text-3xl 2xl:text-4xl tracking-wide select-none flex-none">SOKA-BLOG</h1>
      </div>

      <div className="text-2xl w-full laptop:w-[20%] flex justify-end laptop:justify-evenly items-center">
        <div className="bg-none text-white text-2xl laptop:text-3xl hover:text-white rounded-full p-1 relative before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-[#5de0e6] before:to-[#004aad] before:top-0 before:left-0 before:rounded-full before:scale-0 z-[10] before:z-[-1] hover:before:scale-100 before:origin-center before:transition before:duration:500 before:ease-[cubic-bezier(0.5,1.6,0.4,0.7)]">
          < AiFillFacebook className="cursor-pointer"/>
        </div>

        <div className="bg-none text-white text-2xl laptop:text-3xl hover:text-white rounded-full p-1 relative before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-[#5de0e6] before:to-[#004aad] before:top-0 before:left-0 before:rounded-full before:scale-0 z-[10] before:z-[-1] hover:before:scale-100 before:origin-center before:transition before:duration:500 before:ease-[cubic-bezier(0.5,1.6,0.4,0.7)]">
          < AiFillTwitterCircle className="cursor-pointer"/>
        </div>

        <div className="bg-none text-white text-2xl laptop:text-3xl hover:text-white rounded-full p-1 relative before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-[#5de0e6] before:to-[#004aad] before:top-0 before:left-0 before:rounded-full before:scale-0 z-[10] before:z-[-1] hover:before:scale-100 before:origin-center before:transition before:duration:500 before:ease-[cubic-bezier(0.5,1.6,0.4,0.7)]">
          < AiFillInstagram className="cursor-pointer"/>
        </div>

      </div>

      <div className={searchActive ? "h-10 w-[70%] laptop:w-[20%] bg-white rounded-full flex items-center justify-between pl-3 bg-gradient-to-r from-[#5de0e6] to-[#004aad] text-white overflow-hidden transition-all duration:500 delay:500" : "h-8 w-8 bg-white hover:bg-gradient-to-r from-[#5de0e6] to-[#004aad] rounded-full flex items-center justify-center overflow-hidden transition-all duration:500 delay:500"}>
        <motion.div animate={{ rotate: searchActive ? [0, 270, 270, 0] : 0,
          transition: {
            duration:2
          }}}>
          < AiOutlineSearch className="text-2xl cursor-pointer" onClick={searchFunc}/>
        </motion.div>
        <div className={searchActive ? "flex h-full w-[90%]" : "hidden"}>
          <input type="text"  className="w-full h-full outline-none text-black p-3 border-none font-lato italic font-bold text-lg" placeholder="Search"/>
        </div>
        
      </div>

    </div>
  )
}

export default NavHeader
