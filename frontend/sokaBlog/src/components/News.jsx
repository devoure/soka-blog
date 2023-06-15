import { useState } from 'react'
import { Link } from "react-router-dom"
import picprof from '../assets/profpic.png'
import newsFeed from '../assets/newsData.jsx'

function News() {
  const [currentPage, setCurrentPage] = useState(1)
  const postPerPage = 3
  let indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const pages = []
  const partitions = Math.ceil(newsFeed.length / postPerPage)
  for (let i=1; i <= partitions; i++){
    pages.push(i)
  }
  function changePage(e){
    const value = e.target.id
    setCurrentPage(value)
  }
  const pageNumberCard = pages.map((item)=>{
    return(
      <span className="p-3 bg-white rounded-full mr-2 cursor-pointer hover:bg-black hover:text-white transition duration-300" key={ item } id={ item } onClick={ changePage }>{item}</span>
    )
  })
  indexOfLastPost = (indexOfLastPost == newsFeed.length) ? newsFeed.length : indexOfLastPost
  const newsFeedCard = newsFeed.slice(indexOfFirstPost, indexOfLastPost).map((item, index)=>{
    return(
      <div className="w-full h-[90vh] max-w-[840px] min-h-[740px] flex items-center justify-evenly flex-col overflow-hidden hover:bg-[#faf5f5] border-b-4" key={item.id}>
        <div className="group bg-white w-[90%] h-[40%] overflow-hidden">
          <img  className="min-h-[100%] w-[100%] object-cover object-center group-hover:scale-125 transition-all duration-700" src={ item.image } />
        </div>
        <div className="w-[90%] h-[15%] flex flex-col items-center">
          <div className="bg-white w-full h-[30%]">
            <span className="text-white font-lato bg-gradient-to-r from-[#5de0e6] to-[#004aad] px-5 py-2 ml-1 rounded-full shadow-lg mt-3">{ item.category }</span>
            <span className="text-white font-lato bg-gradient-to-r from-[#5de0e6] to-[#004aad] px-5 py-2 ml-1 rounded-full shadow-lg mt-3">{ item.time }</span>
          </div>
          <div className="w-[100%] h-[70%] ml-1 flex justify-start">
            <span className="text-black flex items-center justify-start font-alegreya font-[900] text-2xl text-[#4c63d2] overflow-hidden">{ item.title }</span>
          </div>
        </div>
        <div className="bg-white w-[90%] h-[20%] overflow-hidden">
          <p className="font-lato text-[#807979] leading-loose max-h-[100%] break-words line-clamp-5 indent-8">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </p>
        </div>
        <div className="bg-white w-[90%] h-[15%] flex items-center justify-evenly">
          <div className="w-[60%] h-[80%] flex items-center justify-evenly">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden shadow-lg flex-none">
              <img src={ picprof } />
            </div>
            <div className="bg-white w-[70%] h-[60px] font-lato font-bold flex flex-col justify-center pl-2">
              <span className="block flex-none">Athumani Bakari</span>
              <span className="block text-[#807979] flex-none">5th June 2023</span>
            </div>
          </div>
          <div className="bg-white w-[30%] h-[80%] flex items-center justify-center">
            <Link to={`/posts/${item.title}`} state={ item } className="shadow-lg bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] px-4 py-2 rounded-full cursor-pointer hover:from-[#000000] hover:to-[#000000] hover:text-white transition-all duration-700 flex-none">Read More</Link>
          </div>
        </div>
      </div>

    )
  })
  return (
    <div className="bg-white w-full flex flex-col items-center justify-evenly min-w-[375px] min-h-[2500px]">
      { newsFeedCard }

      <div className="w-full h-[15vh] bg-gradient-to-r from-[#5de0e6] to-[#004aad] flex items-center justify-center">
        <span className="text-lg font-bold text-white mr-2">Page</span>
        <div className="px-4 py-4">
          { pageNumberCard }
        </div>
      </div>

    </div>
  )
}

export default News
