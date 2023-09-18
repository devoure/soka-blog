import { useState, useEffect, createContext } from 'react'

export const PostsContext = createContext()

export default function PostsProvider(props){
  let [blogPosts, setBlogPosts] = useState([])


  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/v1/posts/').then( res => {
      if (res.ok){
        return res.json()
      }
    }).then( data => {
      setBlogPosts(data)
    } )
  }, [])

  let contextData = {
    blogPosts:blogPosts,
    hostUrl:'http://localhost:8000'
  }

  return (
    <PostsContext.Provider value = { contextData }>
      { props.children }
    </PostsContext.Provider>
  )

}
