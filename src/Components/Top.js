import React from 'react'
import Carousel from './Carousel'

const Top = () => {
    return (
        <>
            <div id="top" className='border border-red-700'>
                <div className='text border border-neutral-900 '>
                        <div className='sub-content1 lg:font-extrabold lg:text-5xl leading-tight text-white mb-6 sm:text-3xl sm:font-extrabold '>Buy What you want at the best Prices</div>
                        <div className='sub-content2 lg:font-light lg:text-2xl text-gray-400 sm:text-xl'>this is some area to write txt about you business xt about you businessxt about you businessxt about you businessxt about you businessxt about you business</div>
                </div>
                <div className='carousel border border-emerald-900 '>
                    <Carousel/>
                </div>
            </div>
            {/* <div className='flex flex-row justify-center items-center h-screen bg-black -z-8' >
                <div id="topContent" className='flex flex-row items-center justify-center'>
                    <div className=' text-white mr-32' style={{flex:0.6}}>
                        <p className='font-extrabold text-5xl mb-8 leading-tight'>Buy what you want at best prices</p>
                        <p className='text-2xl  '>jnjsd vsjid bvjiasd fbja eofjbdjbojadbfjo</p>
                    </div>
                    <div className='' style={{flex:0.4,borderRadius:'100px'}}>
                        <Carousel/>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Top
