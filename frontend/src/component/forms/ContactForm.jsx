import React from 'react'

function ContactForm() {
  return (
    <div className='w-full my-20'>
        <form className='w-[50%] mx-auto flex flex-col gap-5 my-10'>
            <div className='flex gap-5 w-full'>
                <input type="text" placeholder='First Name' className='w-1/2 p-3 rounded-md bg-highlight-200 focus:outline-none focus:ring-2 focus:ring-contrast-200' />
                <input type="text" placeholder='Last Name' className='w-1/2 p-3 rounded-md bg-highlight-200 focus:outline-none focus:ring-2 focus:ring-contrast-200' />
            </div>
            <div className='flex gap-5 w-full'>
                <input type="email" placeholder='Email Address' className='w-1/2 p-3 rounded-md bg-highlight-200 focus:outline-none focus:ring-2 focus:ring-contrast-200' />
                <input type="text" placeholder='Phone Number' className='w-1/2 p-3 rounded-md bg-highlight-200 focus:outline-none focus:ring-2 focus:ring-contrast-200' />
            </div>
            <textarea placeholder='Message' className='p-3 rounded-md bg-highlight-200 focus:outline-none focus:ring-2 focus:ring-contrast-200' rows={5} />
            <button className='bg-contrast-200 text-white p-4 rounded-md w-[20%] mx-auto'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm