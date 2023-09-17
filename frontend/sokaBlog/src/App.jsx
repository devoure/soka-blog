import Home from './pages/Home.jsx'
import BlogPosts from './pages/BlogPosts.jsx'
import NotFound from './components/NotFound.jsx'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

import PostsProvider from './context/BlogsPosts'

function App() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence mode='wait' initial={false}>
        <PostsProvider>
        <Routes key={location.pathname} location={location}>
          <Route element = {<Home />} path="/" />
            <Route path="/posts">
              <Route path=":id" element={ <BlogPosts /> } />
            </Route>
          <Route element= { <NotFound /> } path = "*"/>
        </Routes>
        </PostsProvider>
      </AnimatePresence>
    </>
  )
}

export default App
