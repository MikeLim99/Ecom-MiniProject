import React from 'react'
import useSubmitFeedBack from '../../hooks/customer/OrderHistory/useSubmitFeedBack';

function ContactForm() {
    const { feedBackData, setFeedBackData, submitFeedBack } = useSubmitFeedBack();
    
  return (
    <div className='w-full my-20'>
        <form className='w-[50%] mx-auto flex flex-col gap-5 my-10'>
            <div className='flex gap-5 w-full'>
                <input 
                    type="text" 
                    placeholder='First Name' 
                    className='w-1/2 p-3 rounded-md bg-highlight-200 focus:outline-none focus:ring-2 focus:ring-contrast-200' 
                    value={feedBackData.firstname}
                    onChange={(e) => setFeedBackData({...feedBackData, firstname: e.target.value})}
                />
                <input 
                    type="text" 
                    placeholder='Last Name' 
                    className='w-1/2 p-3 rounded-md bg-highlight-200 focus:outline-none focus:ring-2 focus:ring-contrast-200' 
                    value={feedBackData.lastname}
                    onChange={(e) => setFeedBackData({...feedBackData, lastname: e.target.value})}
                />
            </div>
            <div className='flex gap-5 w-full'>
                <input 
                    type="email" 
                    placeholder='Email Address' 
                    className='w-1/2 p-3 rounded-md bg-highlight-200 focus:outline-none focus:ring-2 focus:ring-contrast-200' 
                    value={feedBackData.email}
                    onChange={(e) => setFeedBackData({...feedBackData, email: e.target.value})}
                />
                <input 
                    type="text" 
                    placeholder='Phone Number' 
                    className='w-1/2 p-3 rounded-md bg-highlight-200 focus:outline-none focus:ring-2 focus:ring-contrast-200' 
                    value={feedBackData.phoneNumber}
                    onChange={(e) => setFeedBackData({...feedBackData, phoneNumber: e.target.value})}
                />
            </div>
            <textarea 
                placeholder='Message' 
                className='p-3 rounded-md bg-highlight-200 focus:outline-none focus:ring-2 focus:ring-contrast-200' 
                rows={5}
                value={feedBackData.message}
                onChange={(e) => setFeedBackData({...feedBackData, message: e.target.value})}
            />
            <button 
                className='bg-contrast-200 text-white p-4 rounded-md w-[20%] mx-auto' 
                onClick={submitFeedBack}
            >
                Submit
            </button>
        </form>
    </div>
  )
}

export default ContactForm