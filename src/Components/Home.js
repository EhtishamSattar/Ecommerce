import React from 'react'
import Items from './Items';
import Footer from './Footer';
import Cart from './Cart';
import Top from './Top'
import Features from './Features';
import Clients from './Clients';
import Contact from './Contact';

const Home = () => {

  return (
    <>
      <Top/>
      <Features/>
      {/* <hr className='border border-gray-400 mt-10 ml-3 mr-3'></hr> */}
      <div className='mx-10 mb-3 mt-14'>
        <Items />
        <Clients/>
      </div>
      <Cart/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default Home
