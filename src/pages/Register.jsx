import React from 'react'


const Register = () => {
    return (
        <div className='container px-3 mx-auto w-full'>
            <div className="mx-auto w-fit">
                <img className='h-5 my-3' src="./public/img/logo.png" alt="" />
            </div>
            <form>
                <input className='w-full h-11 p-2 bg-button my-1 rounded-md' type="text" placeholder='Username' />
                <input className='w-full h-11 p-2 bg-button my-1 rounded-md' type="text" placeholder='Email' />
                <input className='w-full h-11 p-2 bg-button my-1 rounded-md' type="password" placeholder='Password' />
                <button className='w-full h-11 my-3 bg-primary rounded-md text-white font-bold'>Daftar</button>
            </form>
            <div className="flex gap-5 items-center my-4">
                <span className='h-[1px] w-1/2 bg-[#ccd0d5]'></span>
                <p>atau</p>
                <span className='h-[1px] w-1/2 bg-[#ccd0d5]'></span>
            </div>
            <div className='w-fit mx-auto mb-28'>
                <button className='border w-[285px] h-9 font-semibold'>Masuk ke akun anda</button>
            </div>
            <footer>
                <div className='flex justify-around text-center text-xs text-[rgba(0,0,0,0.7)]'>
                    <ul>
                        <li>Bahasa Indonesia</li>
                        <li>Bahasa Jawa</li>
                        <li>日本語</li>
                        <li>Português (Brasil)</li>
                    </ul>
                    <ul>
                        <li>English (UK)</li>
                        <li>Bahasa Melayu</li>
                        <li>Español</li>
                    </ul>
                </div>
                <div className='w-fit mx-auto text-xs text-[rgba(0,0,0,0.7)]'>
                    <p>Meta © 2023</p>
                </div>
            </footer>
        </div>
    )
}

export default Register