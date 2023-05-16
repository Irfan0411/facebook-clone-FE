import React from 'react'

const Post = () => {
    return (
        <>
            <div className='bg-back h-[5px]'></div>
            <div>
                <div className='px-2 pt-2 flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <img className='rounded-full w-12 h-12 object-cover' src="img/profile.jpg" alt="profile" />
                        <div>
                            <p className='font-bold text-lg leading-5'>Irfan</p>
                            <p className='text-[13px] text-abuabu'>11 jam • 🌎</p>
                        </div>
                    </div>
                    <div className='-translate-y-2 text-abuabu'>•••</div>
                </div>
                <div className='p-2'>
                    <p>Ini adalah contoh penggunaan post</p>
                </div>
                <div className='w-full h-96 bg-green-400'></div>
                <div className='px-2 py-1 flex gap-[2px] text-abuabu'>
                    <div className='i-wow'></div>
                    <p>1 rb</p>
                </div>
                <div className='p-1 flex gap-2'>
                    <div className='w-1/3 h-10 rounded-full bg-button flex justify-center items-center gap-1'><span className='i-like'></span>100</div>
                    <div className='w-1/3 h-10 rounded-full bg-button flex justify-center items-center gap-1'><span className='i-comment'></span>500</div>
                    <div className='w-1/3 h-10 rounded-full bg-button flex justify-center items-center gap-1'><span className='i-share'></span>50</div>
                </div>
            </div>

        </>
    )
}

export default Post