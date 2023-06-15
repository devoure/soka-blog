import { useState } from 'react'
import News from './News.jsx'
import Categories from './Categories.jsx'

function BlogContentComponent() {
  return (
    <div className="bg-black w-full laptop:w-[80%] h-[380vh] laptop:flex laptop:relative min-w-[375px] min-h-[3500px]">
      < News />
      < Categories />
    </div>
  )
}

export default BlogContentComponent
