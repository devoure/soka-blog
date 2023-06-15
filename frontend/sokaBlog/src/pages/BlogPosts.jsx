import { useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useNavigate, useLocation } from 'react-router-dom'
import profPic from '../assets/profpic.png'
import { BsFillArrowDownCircleFill } from "react-icons/bs"
import { BsFillArrowUpCircleFill } from "react-icons/bs"

function BlogPosts() {
  const navigate = useNavigate()
  const [commentsActive, setCommentsActive] = useState(false)
  const postDetails = useLocation()

  return (
    <div className="laptop:flex laptop:flex-col laptop:items-center">
      <div className="w-full h-[80vh] min-h-[450px] relative bg-cover bg-center bg-fixed shadow-[0px_-200px_60px_35px_rgba(0,0,0,0.92)_inset]" style={{ backgroundImage: `url(${ postDetails.state.image })` }}>
        <div className="fixed inset-x-0 w-full h-[10vh] min-h-[80px] min-w-[375px] bg-white z-[1000] bg-opacity-30 backdrop-blur-md flex">
          <div className="font-oswald w-[50%] h-full flex items-center pl-2">
            <h1 className="text-black font-bold text-xl tablet:text-2xl laptop:text-3xl 2xl:text-4xl tracking-wide select-none">SOKA-BLOG</h1>
          </div>
          <div className="h-full w-[50%] flex items-center justify-end pr-2">
            <div className="group h-[40px] w-[40px] bg-white rounded-full shadow-lg flex items-center justify-center text-2xl cursor-pointer hover:bg-black hover:text-white transition-all duration-700 hover:w-[100px] hover:justify-evenly" onClick={()=> navigate("/")}>
              <AiOutlineArrowLeft />
              <span className="group-hover:inline-block hidden font-lato text-sm">Back</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[90px] min-w-[375px] bg-transparent absolute inset-x-0 bottom-0 flex items-center justify-center">
          <span className="text-white font-alegreya text-3xl pl-5 tracking-wide">{ postDetails.state.title }</span>
        </div>
      </div>
      <div className="h-[20vh] w-full min-w-[375px] max-w-[810px] min-h-[50px] flex justify-evenly tablet:justify-start items-center">
        <div className="bg-white h-[40px] w-[40px] rounded-full overflow-hidden">
          <img src={ profPic } />
        </div>
        <div className="h-[40px] w-[80%] tablet:w-[40%] flex items-center justify-evenly font-lato min-h-[60px] max-w-[810px] flex-none">
          <span className="font-bold text-xl">Athumani Bakari</span>
          <span className="pl-2 italic text-indigo-700">June 03, 2023  4:30 PM </span>
        </div>
      </div>
      <div className="laptop:max-w-[810px] hover:bg-[#dfd2d2] transition duration-700 relative">
        <p className="font-lato leading-loose indent-8 text-justify break-words px-2 min-w-[375px]">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </p>
        <div className="tablet:hidden group flex items-center justify-between absolute bottom-[-45px] p-3 bg-red-700 overflow-hidden w-[130px] left-[50%] translate-x-[-50%] rounded-lg bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] font-lato font-bold shadow-lg text-white hover:bg-indigo-700 hover:shadow-xl hover:shadow-cyan-500/50 hover:w-[160px] cursor-pointer transition-all duration-700" onClick={()=>setCommentsActive(!commentsActive)}><span className="min-w-[120px]">{ commentsActive ? "Add Comment" : "View Comments" }</span> 
          <div className="w-[30px] text-2xl text-black">
            { commentsActive ? <BsFillArrowUpCircleFill /> : <BsFillArrowDownCircleFill />}
          </div>
          </div>
        </div>
      <div className="flex flex-col overflow-hidden h-[60vh] tablet:h-[490px] min-h-[490px] min-w-[375px] mt-[60px] tablet:bg-gradient-to-r tablet:from-[#8c52ff] tablet:to-[#5ce1e6]">
        <div className={ commentsActive ? "-translate-y-full transition-all duration-700 tablet:flex w-full h-full" : "transition-all duration-700 tablet:flex w-full h-full" }>
          <div className="relative w-full tablet:w-[50%] h-[50%] tablet:h-full min-h-[490px] tablet:border-r border-slate-300 min-w-[375px] bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] tablet:from-transparent tablet:to-transparent flex flex-col pl-3">
            <span className="font-lato text-white font-bold text-xl py-3">Leave a reply</span>
          <textarea type="text" className="h-[100px] w-[300px] ml-3 outline-none text-black font-lato placeholder-[#6D6868] bg-white bg-opacity-50 rounded-lg p-3" placeholder="Comment here.."></textarea>
          <label className="font-lato text-white font-bold text-lg py-3">Name</label>
        <input type="text" className="font-lato w-[300px] h-[40px] ml-3 outline-none pd-5 text-black font-lato placeholder-[#6D6868] bg-white bg-opacity-50 rounded-lg p-3" placeholder="Enter Display Name.."/>
        <label className="font-lato text-white font-bold text-lg py-3">Email</label>
        <input type="text" className="font-lato w-[300px] h-[40px] ml-3 outline-none pd-5 text-black font-lato placeholder-[#6D6868] bg-white bg-opacity-50 rounded-lg p-3" placeholder="Enter Email.."/>
        <div className="absolute bg-indigo-300 border-2 border-indigo-700 text-white h-[40px] inset-x-0 bottom-0 flex items-center justify-center font-lato text-xl tracking-widest cursor-pointer after:content-[''] after:absolute after:h-[40px] after:left-0 after:top-0 after:w-[0] hover:after:w-full after:bg-indigo-700 after:text-center after:z-[-1] z-[10] after:origin-left after:duration-500 after:ease-[cubic-bexier(0.5,1.6,0.4,0.7)]">SUBMIT</div>
      </div>
          <div className="bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6]  tablet:from-transparent tablet:to-transparent tablet:w-[50%] h-full w-full p-3 min-w-[375px]">
        <div className="font-lato text-xl text-white"><span className="px-3 py-1 rounded-full bg-white bg-opacity-30">6</span> comments</div>
        <div className="w-[90%] h-[380px] bg-white bg-opacity-30 backdrop-blur-md rounded-lg overflow-auto mt-3">
          <div className="flex flex-col border-b-2 border-slate-500 items-start justify-center p-3 font-lato">
            <div><span className="text-xl font-bold">test</span> on <span className="italic text-slate-600">Oct 08, 2021</span></div>
            <div className="text-indigo-700 ml-5">addddcddcdcd</div>
          </div>
          <div className="flex flex-col border-b-2 border-slate-500 items-start justify-center p-3 font-lato">
            <div><span className="text-xl font-bold">test 1</span> on <span className="italic text-slate-600">Oct 08, 2021</span></div>
            <div className="text-indigo-700 ml-5">addddcddcdcd</div>
          </div>
          <div className="flex flex-col border-b-2 border-slate-500 items-start justify-center p-3 font-lato">
            <div><span className="text-xl font-bold">test 2</span> on <span className="italic text-slate-600">Oct 08, 2021</span></div>
            <div className="text-indigo-700 ml-5">addddcddcdcd</div>
          </div>
          <div className="flex flex-col border-b-2 border-slate-500 items-start justify-center p-3 font-lato">
            <div><span className="text-xl font-bold">test 3</span> on <span className="italic text-slate-600">Oct 08, 2021</span></div>
            <div className="text-indigo-700 ml-5">addddcddcdcd</div>
          </div>
          <div className="flex flex-col border-b-2 border-slate-500 items-start justify-center p-3 font-lato">
            <div><span className="text-xl font-bold">test 4</span> on <span className="italic text-slate-600">Oct 08, 2021</span></div>
            <div className="text-indigo-700 ml-5">addddcddcdcd</div>
          </div>
          <div className="flex flex-col border-b-2 border-slate-500 items-start justify-center p-3 font-lato">
            <div><span className="text-xl font-bold">test 5</span> on <span className="italic text-slate-600">Oct 08, 2021</span></div>
            <div className="text-indigo-700 ml-5">addddcddcdcd</div>
          </div>


        </div>
      </div>
      </div>
      </div>
      <div className="w-full h-[20vh] mt-5 min-w-[375px] min-h-[350px] bg-header-background bg-fixed bg-cover bg-center">
      </div>
    </div>
  )
}

export default BlogPosts
