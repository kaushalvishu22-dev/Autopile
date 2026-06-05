import React from "react";

export default function PremiumClubHero() {
  return (
    <div className="relative w-full h-screen bg-gray-500 text-white  ">
      
      <img
        src="https://static.wixstatic.com/media/c837a6_48b827a47e48471f8f59340a8866f378~mv2.jpeg/v1/fill/w_1336,h_662,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_1de0dc08580146f1be58deaa669fa8d3~mv2.jpeg"
        alt="Car"
        className="absolute inset-0 w-full h-full object-cover "
      />


      <div className="absolute  " />
<br></br>
   <br></br>
   <br></br>
   
      <div className="relative z-10 flex  h-full px-5 md:px-20">
        <div className="max-w-xl ">
          <h1 className="text-4xl md:text-5xl  leading-tight">
            Join Our <br /> Premium Club
          </h1>   

          <div className="w-120 h-[2px] bg-gray-400 mb-6" />

          <p className="text-gray-300 mb-8  text-xl ">
            Our premium membership will give you exclusive access to our
            early-bird sales, new arrivals and other special offers.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

