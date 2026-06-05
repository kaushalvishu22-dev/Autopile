import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { BsBag } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Context";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
export default function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const { cart,setCart } = useContext(CartContext);

  const [showNavbar, setShowNavbar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // scrolling DOWN ⬇️ → hide
      setShowNavbar(false);
    } else {
      // scrolling UP ⬆️ → show
      setShowNavbar(true);
    }

    setLastScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

  const total = cart.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);
  return (
    <div className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-300 
${showNavbar ? "translate-y-0" : "-translate-y-full"} 
${lastScrollY > 50 ? "bg-black/80 backdrop-blur" : "bg-transparent"}`}>

      {/* Top bar */}
      <div className="flex justify-between items-center px-10 py-2 pb-7 pt-7 text-sm bg-transparent">
        <p className="text-gray-100 font-bold">
          Free shipping on orders over $75. Call us 123-456-789
        </p>
        <div className="flex gap-4">
          <FaCircleUser className="text-2xl " /><h1 className="text-base">Log In </h1>
          {/* <button  > <BsBag className="text-2xl "  /></button> */}
          <button onClick={() => setShowCart(!showCart)}>
            🛒 ({cart.length})
          </button>

        </div>
        {showCart && (
          <div className="fixed right-0 top-0 h-full w-96 bg-black text-white p-6 shadow-lg">

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Cart {cart.length}</h2>
              <button onClick={() => setShowCart(!showCart)} className="text-gray-400 hover:text-white">✕</button>
            </div>

            {cart.map((item) => (

              <div className="flex gap-4 border-b border-gray-700 pb-6 mb-6">
                <img
                  src={item.img}
                  className="w-20 h-20 object-cover bg-gray-200"
                />

                <div className="flex-1">
                  <div className="flex justify-between">
                  <h3 className="text-sm font-medium leading-tight">
                    {item.name}</h3>

                    <button className="text-xl"
  onClick={() => {
    const updatedCart = cart.filter(
      cartitem => cartitem.name !== item.name
    );
    setCart(updatedCart);
  }}
  
>
  <RiDeleteBin5Line />
</button>

                    </div>

                  <p className="text-sm text-gray-400 mt-1">€{item.price}</p>

                  <div className="flex items-center justify-between mt-3">

                    <div className="flex items-center border border-gray-600">
                      <button onClick={() => {
                        const updatedCart = cart.map(cartItem =>
                          cartItem.name === item.name
                            ? { ...cartItem, quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1 }
                            : cartItem
                        );
                        setCart(updatedCart);
                      }}
                        className="px-3 py-1">-</button>


                      <span className="px-4">{item.quantity}</span>


                      <button onClick={() => {
                        const updatedCart = cart.map(cartItem =>
                          cartItem.name === item.name
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                        );
                        setCart(updatedCart);
                      }}
                        className="px-4 py-2 text-lg">+</button>
                    </div>

                    <p className="text-sm">€{item.price*item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}


            <div className="border-b border-gray-700 pb-4 mb-4">
              <input
                type="text"
                placeholder="Enter a promo code"
                className="w-full bg-transparent border border-gray-600 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
              />
            </div>


            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Estimated total</span>
              <span className="font-semibold">€{total}</span>
            </div>

            <p className="text-xs text-gray-400 mb-6">
              Taxes and shipping are calculated at checkout.
            </p>


            <button className="w-full bg-gray-300 text-black py-3 mb-3 font-medium">
              Checkout
            </button>



            <p className="text-center text-sm text-gray-400 flex items-center justify-center gap-2">
              🔒 Secure Checkout
            </p>
          </div>
        )}


      </div>
      <hr className="w-7xl mx-auto "></hr>
      {/* Main navbar */}
      <div className="flex justify-between items-center px-10  py-6  bg-transparent">
        <div className="text-xl font-semibold tracking-wide">
          <Link to="/" className="hover:text-gray-300">autopile</Link></div>

        <div className="flex gap-10 text-sm">
          <Link to="/shop" className="hover:text-gray-300">Shop Parts</Link>
          <Link to="/shop?type=wholesale" className="hover:text-gray-300">Wholesale</Link>
          <Link to='/premium' className="hover:text-gray-300">Premium Area</Link>

        </div>
      </div>
    </div>
  );
}