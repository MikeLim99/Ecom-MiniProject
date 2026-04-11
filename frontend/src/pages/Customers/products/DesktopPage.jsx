import React from 'react'
import ProductCards from '../../../component/basics/ProductCards'
import TextHeader from '../../../component/basics/TextHeader'

function DesktopPage() {
  return (
    <div className='w-[80%] mx-auto'>
        <div className='my-10'>
        <TextHeader  Title={"Desktop"}/>
        </div>
        <div className='lg:grid grid-cols-4 gap-5 my-10 md:flex sm:flex-wrap'>
          <ProductCards category="desktop" />
        </div>
    </div>
  )
}

export default DesktopPage