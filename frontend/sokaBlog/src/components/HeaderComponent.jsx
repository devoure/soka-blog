import { useState } from 'react'
import NavHeader from './NavHeader.jsx'
import ContentHeader from './ContentHeader.jsx'
import TagsSlider from './TagsSlider.jsx'

function HeaderComponent() {

  return (
    <div className="w-screen h-[80vh] min-h-[740px] min-w-[375px] bg-black bg-header-background bg-fixed bg-cover bg-bottom shadow-inset-lg relative">

      < NavHeader />
      < ContentHeader />
      < TagsSlider />
      
    </div>
  )
}

export default HeaderComponent
