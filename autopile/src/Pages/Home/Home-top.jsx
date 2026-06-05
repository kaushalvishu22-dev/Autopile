import React from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useRef } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/Context';
const Hometop = () => {
  const { cart, setCart } = useContext(CartContext);
    const ScrollRef=useRef(null)

    function Scroll(dir){
        if(!ScrollRef) return;
         ScrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth"
    });
    }
const products = [
  { name: "Chrome", price: 15.00, img: "https://static.wixstatic.com/media/c837a6_2fa2b62e97c44ef9b5b0fcad6fc34b09~mv2.jpg/v1/fill/w_208,h_277,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_2fa2b62e97c44ef9b5b0fcad6fc34b09~mv2.jpg" },
  { name: "4X4", price: 20.00, img: "https://static.wixstatic.com/media/c837a6_e469e95ae2784a19847e7aa3aa2cad60~mv2.jpg/v1/fill/w_208,h_277,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_e469e95ae2784a19847e7aa3aa2cad60~mv2.jpg"},
  { name: "Brake Pads", price: 120.00, img: "https://static.wixstatic.com/media/c837a6_4384454765df47b6ae0554a960a94b0a~mv2.jpg/v1/fill/w_208,h_277,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_4384454765df47b6ae0554a960a94b0a~mv2.jpg"},
  { name: "Brake Cylinder", price: 120.00, img: "https://static.wixstatic.com/media/c837a6_acbd22056c2042b3a3660186ce152cc5~mv2.jpg/v1/fill/w_208,h_277,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_acbd22056c2042b3a3660186ce152cc5~mv2.jpg"},
  { name: "Steering Rack", price: 120.00, img: "https://static.wixstatic.com/media/c837a6_bfeef35a26c54d2ba30ea219507ef116~mv2.jpg/v1/fill/w_208,h_277,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_bfeef35a26c54d2ba30ea219507ef116~mv2.jpg"},
  { name: "GPS", price: 120.00, img: "https://static.wixstatic.com/media/c837a6_0c45a04a61064a63a68b751f854c0e3b~mv2.jpg/v1/fill/w_208,h_277,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_0c45a04a61064a63a68b751f854c0e3b~mv2.jpg"},
  { name: "Door Handle", price: 120.00, img: "https://static.wixstatic.com/media/c837a6_1e5718d6c3304a119c5d63dd11ccd0d8~mv2.jpg/v1/fill/w_208,h_277,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_1e5718d6c3304a119c5d63dd11ccd0d8~mv2.jpg"}
];

  return (
    <>
    <div className='relative  w-full px-6 py-10 bg-black'>
        <button onClick={()=>Scroll("left")} className="absolute left-2 top-1/2 -translate-y-5/2 z-10 bg-white/10 p-2 rounded-full hover:bg-white/20"><FaAngleLeft className='text-white'/></button>

<div ref={ScrollRef} className='flex gap-6 overflow-x-auto scroll-smooth no-scrollbar'>
{products.map((product,index)=>(
<div  className="min-w-[220px]  text-white p-4 shadow-lg relative">
    <img  className="w-full h-83 object-contain " src={product.img}/>
    <h3 className="text-lg font-semibold" >{product.name}</h3>
    <h2 className="text-sm text-gray-300" >{product.price}</h2>
     <button
  onClick={() => {
    const existingProduct = cart.find(
      item => item.name === product.name
    );

    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }}
  className="mt-6 w-full border border-white py-3 rounded-full hover:bg-white hover:text-black transition"
>
  Add to Cart
</button>
</div>
))}
</div>

    <button onClick={()=>Scroll("Right")}className="absolute right-2 top-1/2 -translate-y-5/2 z-10 bg-white/10 p-2 rounded-full hover:bg-white/20"><FaAngleRight className='text-white'/></button>

</div>
    </>
  )
}

export default Hometop
