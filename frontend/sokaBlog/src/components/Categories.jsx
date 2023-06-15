import { useState } from 'react'

function Categories() {
  return (
    <div className="bg-white w-full laptop:w-[30%] h-[100vh] min-h-[920px] flex flex-col items-center justify-center laptop:sticky laptop:right-0 laptop:top-0">
      <div className="bg-white w-[90%] h-[40%]">
        <span className="w-full h-[20%] bg-gradient-to-r from-[#5de0e6] to-[#004aad] flex items-center justify-start font-bold font-lato text-xl pl-2">LATEST POSTS</span>
        <ul className="list-disc w-full h-[80%] pl-5">
          <li className="mb-2">Article 1</li>
          <li className="mb-3">Article 2</li>
          <li className="mb-3">Article 3</li>
        </ul>
      </div>

      <div className="bg-white w-[90%] h-[40%]">
        <span className="w-full h-[20%] bg-gradient-to-r from-[#5de0e6] to-[#004aad] flex items-center justify-start font-bold font-lato text-xl pl-2">POPULAR POSTS</span>
        <ul className="list-disc w-full h-[80%] pl-5">
          <li className="mb-2">Article 1</li>
          <li className="mb-3">Article 2</li>
          <li className="mb-3">Article 3</li>
        </ul>
      </div>
    </div>
  )
}

export default Categories
