import React from 'react'

const NewPost = () => {
    return (
        <div className='px-3 pt-3'>
            <div className='flex gap-2 justify-between items-center mb-3'>
                <img className='object-cover w-10 h-10 rounded-full' src="img/profile.jpg" alt="profile" />
                <div className='bg-button2 rounded-full flex items-center pl-5 w-full h-9'><p>Postingan status baru</p></div>
                <img className='h-7' src="svg/home-outline.svg" alt="photos" />
            </div>
            <div className='flex w-full'>
                <div className='w-1/3 h-10 flex justify-center items-center'>
                    <p>Perasaan</p>
                </div>
                <div className='w-1/3 h-10 flex justify-center items-center'>
                    <p>VIdeo</p>
                </div>
                <div className='w-1/3 h-10 flex justify-center items-center'>
                    <p>Lokasi</p>
                </div>
            </div>
        </div>
    )
}

export default NewPost