import React from 'react'
import TextHeader from '../component/basics/TextHeader'
import ProductCards from '../component/basics/ProductCards'
import ContactForm from '../component/forms/ContactForm'

function LandingPage() {
  return (
    <div>
        {/* Hero Section */}
        <div className='h-[55vh] w-full bg-contrast flex items-center justify-center text-white text-4xl'>Hero section</div>
        {/* Featured Products */}
        <div className='h-[fit] w-full p-5'>
            <TextHeader Title={"Featured Products"}/>
            <div className='grid grid-cols-4 gap-10 mx-auto mt-10 w-[80%]'>
              <ProductCards />
            </div>
        </div>
        <div className='h-[fit] w-full bg-contrast p-5'>
          <TextHeader Title={"Brands"}/>
          <div className='flex justify-evenly my-10 w-[90%] mx-auto'>
            <div className='w-[250px] h-[150px] bg-highlight-200'>
              img here
            </div>
            <div className='w-[250px] h-[150px] bg-highlight-200'>
              img here
            </div>
            <div className='w-[250px] h-[150px] bg-highlight-200'>
              img here
            </div>
            <div className='w-[250px] h-[150px] bg-highlight-200'>
              img here
            </div>
            <div className='w-[250px] h-[150px] bg-highlight-200'>
              img here
            </div>
          </div>
        </div>
        <TextHeader Title={"Contact Us"}/>
        <ContactForm />
    </div>
  )
}

export default LandingPage