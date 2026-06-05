import React from 'react';

const Premium = () => {
  return (
    <div className="relative">
      
    <div className='relative'>
      <img
        src="https://static.wixstatic.com/media/c837a6_f3def0afc6ca4b4494a3c55becbe817d~mv2.jpg"
        alt="Cars premium club"
        className="w-full h-[550px] object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

   
      <div className="absolute inset-0 flex flex-col justify-center   left-10 text-white">
        <h1 className="text-5xl font-bold leading-tight">
          Join Our <br /> Premium Club
        </h1>
        <p className="mt-3 text-lg">For people who love cars</p>
      </div>
</div>
<div>
<div className="bg-black text-white min-h-screen flex items-center px-10">
      
      <div className="grid md:grid-cols-2 gap-16 w-full max-w-6xl mx-auto">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">
            We Understand Cars
          </h2>

          <p className="text-gray-300 leading-relaxed">
            This is the space to highlight the benefits you offer and what
            clients can gain from choosing your services. Focus on the value
            you deliver and solutions you can offer. Connect benefits to
            specific client needs and pain points, showing both immediate
            and long-term advantages.
          </p>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="space-y-6">
          
          <input
            type="text"
            placeholder="First name *"
            className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2"
          />

          <input
            type="text"
            placeholder="Last name *"
            className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2"
          />

          <input
            type="email"
            placeholder="Email *"
            className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2"
          />

          <input
            type="text"
            placeholder="Phone number"
            className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2"
          />

          {/* Checkbox */}
          <div className="flex items-center gap-3 text-sm">
            <input type="checkbox" />
            <label>Yes, subscribe me to your newsletter *</label>
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <button className="bg-red-500 hover:bg-red-600 text-black px-6 py-2 rounded-full">
              Subscribe
            </button>
          </div>

        </div>

      </div>
    </div>
</div>
    </div>
  );
};



export default Premium;