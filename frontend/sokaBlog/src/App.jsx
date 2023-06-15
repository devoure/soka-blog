import Home from './pages/Home.jsx'
import BlogPosts from './pages/BlogPosts.jsx'
import NotFound from './components/NotFound.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element = {<Home />} path="/" />
          <Route path="/posts">
            <Route path=":id" element={ <BlogPosts /> } />
          </Route>
          <Route element= { <NotFound /> } path = "*"/>
        </Routes>
      </Router>
    </>
  )
}

export default App
