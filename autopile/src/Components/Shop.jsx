import React from "react";

function AutomotiveSection() {
  return (
    <div
      className="min-h-screen bg-cover bg-right flex items-center"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/c837a6_d232b96516ab436b893d9f5b4d411d94~mv2.jpeg/v1/fill/w_1336,h_703,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e904041bcd47457793cab6e3c203408a~mv2.jpeg')",
      }}
    >

      <div className="w-full min-h-screen bg-gradient-to-r from-black via-black/80 to-transparent flex items-center">

      
        <div className="px-10 lg:px-20 max-w-3xl text-white">

          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            The One Stop Shop for <br />
            Automotive Enthusiasts
          </h1>

          <p className="text-gray-300 mb-10">
            This is the space to introduce the story of your business.
            Tell visitors how it got started. Share its core values and
            what your site has to offer.
          </p>

  
          <div className="grid grid-cols-2 border border-gray-400">

            <div className="border border-gray-400 p-6 text-sm">
              Free in-store or curbside pickup
            </div>

            <div className="border border-gray-400 p-6 text-sm">
              Personalized care including battery testing and installation
            </div>

            <div className="border border-gray-400 p-6 text-sm">
              Certified technicians only
            </div>

            <div className="border border-gray-400 p-6 text-sm">
              Get points for every purchase. Redeem points for rewards
            </div>

          </div>

         
          <button className="mt-10 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-medium">
            Learn More
          </button>

        </div>

      </div>
    </div>
  );
}

export default AutomotiveSection;