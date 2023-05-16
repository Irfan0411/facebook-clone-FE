import React from 'react'
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import Story from '../components/Story'
import NewPost from '../components/NewPost'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='container w-full mx-auto'>
      <header className='flex justify-between items-center px-3'>
        <Link to='/'>
          <img className='h-6 my-3' src="img/logo.png" alt="logo" />
        </Link>
        <div className='flex gap-2'>
          <div className='w-9 h-9 rounded-full bg-button2 flex justify-center items-center'>
            <img className='h-7' src="svg/search.svg" alt="search" />
          </div>
          <div className='w-9 h-9 rounded-full bg-button2 flex justify-center items-center'>
            <img className='h-8' src="svg/menu.svg" alt="menu" />
          </div>
        </div>
      </header>
      <Navbar />
      <div className='bg-back h-[1px]'></div>
      <NewPost />
      <div className='bg-back h-[3px]'></div>
      <Story />
      <Post />
    </div>
  )
}

export default Home