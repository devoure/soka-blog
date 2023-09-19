import { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { PostsContext } from '../context/BlogsPosts'
import { motion } from 'framer-motion'

function Categories() {
  let { latestPosts, popularPosts } = useContext(PostsContext)
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

  // const articles =[{name:"Article 1", id:1}, {name:"Article 2", id:2}, {name:"Article 3", id:3}]
  const latestPostsCard = latestPosts.slice(0, 4).map((item)=>{
    return(
      <motion.li key={item.id} className="mb-2" variants={ listVariant }>
        <Link to={`/posts/${item.title}`} state={ item } className="hover:text-violet-600">{ item.title }</Link>
      </motion.li>
    )
  })

  const popularPostsCard = popularPosts.slice(0, 4).map((item)=>{
    return(
      <motion.li key={item.id} className="mb-2" variants={ listVariant }>
        <Link to={`/posts/${item.title}`} state={ item } className="hover:text-violet-600">{ item.title }</Link>
      </motion.li>
    )
  })

  return (
    <div className="bg-white w-full laptop:w-[30%] h-[100vh] min-h-[920px] flex flex-col items-center justify-center laptop:sticky laptop:right-0 laptop:top-0 overflow-hidden">
      <motion.div className="bg-white w-[90%] h-[40%]" variants={ boxVariant } animate="visible" initial="hidden">
        <span className="w-full h-[20%] bg-gradient-to-r from-[#5de0e6] to-[#004aad] flex items-center justify-start font-bold font-lato text-xl pl-2">LATEST POSTS</span>
        <ul className="list-disc w-full h-[80%] pl-5">
          { latestPostsCard }
        </ul>
      </motion.div>

      <motion.div className="bg-white w-[90%] h-[40%]" variants={ boxVariant } animate="visible" initial="hidden">
        <span className="w-full h-[20%] bg-gradient-to-r from-[#5de0e6] to-[#004aad] flex items-center justify-start font-bold font-lato text-xl pl-2">POPULAR POSTS</span>
        <ul className="list-disc w-full h-[80%] pl-5"> 
          { popularPostsCard }
        </ul>
      </motion.div>
    </div>
  )
}

export default Categories
