import { useState, useEffect, createContext } from 'react'

export const PostsContext = createContext()

export default function PostsProvider(props){
  let [blogPosts, setBlogPosts] = useState([])
  let [latestPosts, setLatestPost] = useState([])
  let [popularPosts, setPopularPosts] = useState([])


  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/v1/posts/').then( res => {
      if (res.ok){
        return res.json()
      }
    }).then( data => {
      setBlogPosts(data)
    } )

    fetch('http://127.0.0.1:8000/api/v1/posts/latest').then( res => {
      if (res.ok){
        return res.json()
      }
    }).then( data => {
      setLatestPost(data)
    } )

    fetch('http://127.0.0.1:8000/api/v1/posts/popular').then( res => {
      if (res.ok){
        return res.json()
      }
    }).then( data => {
      setPopularPosts(data)
    } )


  }, [])

  let contextData = {
    blogPosts:blogPosts,
    hostUrl:'http://localhost:8000',
    latestPosts:latestPosts,
    popularPosts:popularPosts
  }

  return (
    <PostsContext.Provider value = { contextData }>
      { props.children }
    </PostsContext.Provider>
  )

}
