import React from 'react'
import Items from './Items';
import Footer from './Footer';
import Navbar from './Navbar';
import Cart from './Cart';
import Top from './Top'
import ThreeBox from './ThreeBox';
import {Routes} from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Top/>
      <ThreeBox/>
      <hr className='border border-gray-400 mt-10 ml-3 mr-3'></hr>
      <div className='mx-10 mb-3 mt-3'>
        <Items />
      </div>
      <Cart/>
      <Footer/>
      
    </>
  )
}

export default Home
