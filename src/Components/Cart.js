import React, { useState } from 'react'
// import 'flowbite'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'


const Cart = () => {
    const [hidden, sethidden] = useState(true)
    const [rerender, setrerender] = useState(false);
    
    // console.log(rerender)

    const dispatch = useDispatch();
    let actions = bindActionCreators(actionCreators, dispatch)

    const handleClick = () => {
        sethidden(false)
    }

    let items = [];
    items = useSelector(state => state.cartMan)
    

    let subtotal = 0;
    for (let i = 0; i < items.length; i++) {
        subtotal += items[i].priceXquantity;

    }
    // console.log(items);

    return (
        <>
            <div id="cart" className={`fixed bottom-0 right-0 top-auto text-center  flex flex-row-reverse mr-7 mb-7`}>
                <button type="button" className={`${hidden ? '' : 'hidden'}  text-black bg-black  font-medium text-lg px-3 py-2.5  focus:outline-none focus:ring-4`} onClick={handleClick} data-drawer-placement="left" data-drawer-target="drawer-example" data-drawer-backdrop="false" data-drawer-show="drawer-example" aria-controls="drawer-example">
                    {/* Check <ShoppingCartSharpIcon/>  */}
                    <div className="flex justify-center items-center  " style={{backdropFilter:"blur(10px)"}}>
                        <div className="relative py-2">
                            <div className="t-0 absolute left-3">
                                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-blue-700 p-3 text-xs text-white">{items.length}</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="file: mt-4 h-6 w-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
            <div id="drawer-example" className={`fixed flex flex-col h-screen lg:w-[450px] sm:w-screen px-4 pt-4 text-white text-base bg-gray-white dark:bg-gray-800 ${hidden ? 'hidden' : ''} overflow-y-auto top-0 bg-black`} style={{ "zIndex": "1000" }} tabIndex="-1" aria-labelledby="drawer-label">
                <div>
                    <button type="button" onClick={() => { sethidden(true) }} data-drawer-dismiss="drawer-example" aria-controls="drawer-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2 right-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                </div>

                <div className="mt-10 font-normal text-2xl text-yellow-500 text-center mb-7">
                    Cart
                </div>
                <div>

                    {items.map((e) => {
                        return (

                            <CartItem key={e.id} id={e.id} title={e.title} image={e.image} price={e.price} desc={e.description} priceXquantity={e.priceXquantity} quantity={e.quantity} rerender={rerender} setrerender={setrerender} />
                        );

                    })}
                </div>
                <div className='bg-slate-700 sticky mt-4 top-auto bottom-0'>

                    <div className="flex flex-row justify-between first-line:file:px-6 pt-4 pb-10 px-4">
                        <div className="text-xl mb-2 text-slate-400">Subtotal</div>
                        <div className="text-yellow-500 text-lg">
                            $ {subtotal.toFixed(2)}
                        </div>
                    </div>
                    <div className="px-6 py-4 m-auto text-center text-2xl font-semibold text-amber-500">
                        <button type="button" onClick={() => {
                            actions.emptyCart()
                            alert(`You are checking out with amount $${subtotal} to pay`)
                        }} className={`focus:outline-none focus:ring-4 w-full bg-black hover:bg-yellow-500 text-white font-semibold hover:text-white py-4 px-3 border border-black hover:border-transparent `}  >
                            CHECKOUT
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cart