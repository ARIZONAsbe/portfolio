import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#3e3e42] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/34a37185-1c82-479b-b501-b2d40cabc0d8" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or send me an email - my email@gmail.com</p>
            </div>
            <input className='p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-gray-200' type="text" placeholder='Email' name='email' />
            <textarea className='bg-gray-200 p-2' name="message" rows="10" placeholder='Message' />
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate!</button>
        </form>

    </div>
  )
}

export default Contact