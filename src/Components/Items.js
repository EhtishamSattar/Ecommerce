import React, { useState } from 'react'

import Item from './Item'

const Items = () => {
  const [things, setThings] = useState([])

  let url = 'https://fakestoreapi.com/products'

  async function bring() {
    const data = await fetch(url);
    const items = await data.json()
    setThings(items)
    return items

  }
  bring();


  return (
    <>
      <div>
        <div className="flex flex-col text-center w-full">
          <div id="textAboveItems" className="sm:text-3xl text-2xl mb-2 text-gray-900">Featured Products</div>
          
        </div>
        {/* <div id="textAboveItems" className='text-4xl font-semibold text-center justify-center'>Featured Products</div> */}
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:py-24 sm:px-6 lg:max-w-7xl">
          <div id="items" className="grid gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8">
            {things.map((e) => {
              return (
                //console.log(e.title)
                <Item key={e.id} id={e.id} title={e.title} image={e.image} price={e.price} desc={e.description} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Items
