import { useState, useEffect, createContext } from 'react'

export const PostsContext = createContext()

export default function PostsProvider(props){
  let [blogPosts, setBlogPosts] = useState(null)

  useEffect (()=>{
    fetch('http://127.0.0.1:8000/api/v1/posts/').then( res => {
      if (res.ok){
        return res.json()
      }
    }).then( data => {
      console.log(">>>>>>>>> data", data)
      setBlogPosts(data)
    } )
  }, [])

  let contextData = {
    blogPosts:blogPosts
  }

  return (
    <PostsContext.Provider value = { contextData }>
      { props.children }
    </PostsContext.Provider>
  )

}
