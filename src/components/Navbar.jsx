import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex w-full'>
            <div className='w-1/6 h-11 flex justify-center items-center'>
                <img className='h-6 text-primary' src="svg/home.svg" alt="home" />
            </div>
            <div className='w-1/6 h-11 flex justify-center items-center'>
                <img className='h-6' src="svg/home-outline.svg" alt="friends" />
            </div>
            <div className='w-1/6 h-11 flex justify-center items-center'>
                <img className='h-6' src="svg/home-outline.svg" alt="chats" />
            </div>
            <div className='w-1/6 h-11 flex justify-center items-center'>
                <img className='h-6' src="svg/home-outline.svg" alt="videos" />
            </div>
            <div className='w-1/6 h-11 flex justify-center items-center'>
                <img className='h-6' src="svg/home-outline.svg" alt="notifications" />
            </div>
            <div className='w-1/6 h-11 flex justify-center items-center'>
                <img className='h-6' src="svg/home-outline.svg" alt="group" />
            </div>
        </nav>
    )
}

export default Navbar