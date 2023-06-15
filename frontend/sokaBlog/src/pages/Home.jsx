import { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent.jsx'
import BlogContentComponent from '../components/BlogContentComponent.jsx'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="laptop:flex laptop:flex-col laptop:items-center">
      < HeaderComponent />
      < BlogContentComponent />
      <div className="w-screen h-[40vh] bg-header-background bg-fixed bg-cover min-w-[375px] min-h-[350px]">
      </div>
    </div>
  )
}

export default Home
