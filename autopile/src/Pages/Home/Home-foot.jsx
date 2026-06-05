import React from "react";

export default function SimpleFooter() {
  return (
    <div className="bg-black text-white p-10">
   
      <h2 className="text-xl mt-10 mb-6">Brands We Trust</h2>
      <div className="grid grid-cols-2 md:grid-cols-5  mb-20">
        <div className="border h-40 flex items-center justify-center text-center px-6">Drivilux</div>
        <div className="border h-40 flex items-center justify-center text-center px-6">Autopartse</div>
        <div className="border h-40 flex items-center justify-center text-center px-6">Wheelbu</div>
        <div className="border h-40 flex items-center justify-center text-center px-6">Motorks</div>
        <div className="border h-40 flex items-center justify-center text-center px-6">Drivery</div>
      </div>

      
    
    </div>
  );
}