import React from 'react'

const Homehero = () => {
  return (
  
          <div className="relative min-h-screen text-white overflow-hidden">

      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://video.wixstatic.com/video/c837a6_9275bd16f79641a084e549fd7d9b5bc8/720p/mp4/file.mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
     <div className="relative z-10 px-10 pt-62 pb-20 max-w-5xl">
       <h2 className="text-3xl leading-tight mb-4 ">Shop Our Premium Auto Parts</h2>
        <h1 className="text-5xl font-bold leading-tight mb-8 ">
          Build Your Dream Car Today.
          <br />
          Now 15% Off On All Items.
        </h1>

        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full">
          Shop Now
        </button>
      </div>
    </div>
    
  )
}

export default Homehero
