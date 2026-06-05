import React, { useState } from "react";
import { useParams } from "react-router-dom";
import allProducts from "../../data/Product";
import { useContext } from "react";
import { CartContext } from "../../Context/Context";

export default function ProductDetail() {
  const { id } = useParams();
const[qty,setqty]=useState(1)
  
const { cart, setCart } = useContext(CartContext);

  const product = allProducts[id];

  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="p-10 text-white bg-black min-h-screen">
  <div className="flex flex-col md:flex-row mt-30 gap-10">

    {/* LEFT: Image */}
    <div className="md:w-1/2 bg-gray-200  flex items-center justify-center p-8">
      <img
        src={product.img}
        alt={product.name}
        className="max-h-[500px] w-full object-contain"
      />
    </div>

    {/* RIGHT: Product Info */}
    <div className="md:w-1/2">
      
      {/* Title */}
      <h1 className="text-3xl font-semibold">{product.name}</h1>

      {/* Price */}
      <p className="text-lg mt-2 text-gray-400 line-through">
        €85.00
      </p>
      <p className="text-2xl text-white">
        €{product.price}
      </p>

      {/* Quantity */}
      <div className="mt-6">
        <p className="mb-2 text-sm">Quantity *</p>
        <div className="flex items-center border border-gray-600 w-fit">
          <button onClick={()=>{ if(qty>1)setqty(qty-1)}} className="px-4 py-2 text-lg">-</button>
          <span className="px-6">{qty}</span>
          <button onClick={()=>{setqty(qty+1)}} className="px-4 py-2 text-lg">+</button>
        </div>
      </div>

      {/* Add to Cart */}
     <button
  onClick={() => {
    const existingProduct = cart.find(
      item => item.name === product.name
    );

    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + qty }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: qty }]);
    }
  }}
  className="mt-6 w-full border border-white py-3 rounded-full hover:bg-white hover:text-black transition"
>
  Add to Cart
</button>



      {/* Buy Now */}
      <button className="mt-4 w-full bg-red-500 py-3 rounded-full hover:bg-red-600 transition">
        Buy Now
      </button>

      {/* Sections */}
      <div className="mt-10 border-t border-gray-700 pt-4">
        <p className="flex justify-between cursor-pointer">
          Product Info <span>-</span>
        </p>
      </div>

      <div className="mt-4 border-t border-gray-700 pt-4">
        <p className="flex justify-between cursor-pointer">
          Return & Refund Policy <span>+</span>
        </p>
      </div>

       <div className="mt-4 border-t border-gray-700 pt-4">
        <p className="flex justify-between cursor-pointer">
        Shipping Info <span>+</span>
        </p>
      </div>

    </div>
  </div>
</div>
  );
}   