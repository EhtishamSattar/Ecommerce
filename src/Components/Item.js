import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'
import  Cart from './Cart'

const Item = (props) => {
  // eslint-disable-next-line
  let { id, title, image, price, desc } = props;

  const [badge,setbadge]=useState(false)
  const dispatch = useDispatch();
  let actions = bindActionCreators(actionCreators, dispatch)

  const addArticle = (item) => {
    
    let data=Object.assign({},item,{quantity:1,priceXquantity:item.price})
    // console.log(data)
    actions.addToCart(data)
    setbadge(!badge)
  }

  
  return (
    <div className="item-font">
      <div className="group relative">
        <div className="min-h-60 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          {/* eslint-disable-next-line */}
          <img src={image} className="itemImage lg:h-80 w-80 object-cover object-center" />
        </div>
        <div className="mt-6">
          <div style={{fontFamily:"Inter Extra"}}>
            <h3 className="text-sm text-gray-700 font-bold">
              <p>
                {title}
              </p>
            </h3>
            <div className="mt-4 text-sm font-extrabold text-gray-900">$ {price}</div>
            {/* <p id="item-desc" className="mt-6 text-sm text-gray-500">{desc.length <= 150 ? desc : desc.substring(0, 150)}</p> */}
          </div>
        </div>

      </div>
      <div className="bg-black mt-10">
        <button type="button" onClick={() => { addArticle(props) }} className="focus:outline-none focus:ring-4 w-full hover:bg-yellow-500 text-white font-semibold hover:text-white py-4 px-3 border border-yellow-500 hover:border-transparent ">
          Add to Cart

        </button>
        {badge && <Cart/>}

      </div>
    </div>

  )
}

export default Item
