import React from "react";
import Rim from '../../assets/Rim.png'
import Access from '../../assets/Access.png'
import Engine from '../../assets/Engine.png'
import Parts from '../../assets/Parts.png'

function HomeCategory() {
  return (
    <div className="bg-black text-white px-10 py-16">

      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-semibold">Shop by Category</h2>

        <button className="border border-gray-300 px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
          Shop
        </button>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

       
        <div className="relative overflow-hidden group">
          <div className="overflow-hidden group w-90 h-98">

  <img
    src={Rim}
    className="w-80 h-96 object-cover  transition duration-1000 group-hover:scale-110"
    alt="Wheels"
  />

</div>
          {/* <div className=" bg-black/40">
          <p className="absolute bottom-- left-4 text-lg font-medium">
            Wheels & Rims
          </p>
          </div> */}
          <h1 className="z-10">   Wheels & Rims</h1>
        </div>

      
        <div className="relative overflow-hidden rounded-lg group">
          <img
            src={Engine}
    className="w-80 h-96 object-cover  transition duration-1000 group-hover:scale-110"

            alt="Engine" />
          <div className="absolute inset-0 bg-black/40"></div>
          
          <h1 className="z-10">
            Engine
          </h1>
        </div>

       
        <div className="relative overflow-hidden rounded-lg group">
          <img
            src={Parts}
    className="w-80 h-96 object-cover  transition duration-1000 group-hover:scale-110"

            alt="Body Parts"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <p className="absolute bottom-4 left-4 text-sm font-medium">
            Vehicle Body Parts
          </p>


        </div>

  
        <div className="relative overflow-hidden rounded-lg group">
          <img
            src={Access}
               className="w-80 h-96 object-cover  transition duration-1000 group-hover:scale-110"

            alt="Accessories"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <p className="absolute bottom-4 left-4 text-sm font-medium">
            Accessories
          </p>
        </div>

      </div>
    </div>
  );
}

export default HomeCategory;