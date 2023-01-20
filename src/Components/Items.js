import React, { useState } from 'react'

import Item from './Item'

const Items = () => {
  const [things, setThings] = useState([])

  let url = 'https://fakestoreapi.com/products'

  async function bring(){
    const data=await fetch(url);
    const items=await data.json()
    setThings(items)
    return items

  }
  bring();


  return (
    <>
      <div>
      <p className='text-5xl font-extrabold m-6'>Our Best Selling Products For You</p>
      </div>
      <div className="bg-white -z-10 ">
        <div className="mx-auto max-w-4xl px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {things.map((e) => {
              return (
                //console.log(e.title)
                <Item id={e.id} title={e.title} image={e.image} price={e.price} desc={e.description} />
              );

            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Items
