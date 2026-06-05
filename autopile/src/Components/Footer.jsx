import { Link } from "react-router-dom"
import React from 'react'


const Footer = () => {
  return (
    <>
      <div className="bg-black text-white p-10">
   
     

      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-sm">
        <div>
          <h3 className="font-semibold mb-2">autopile</h3>
        </div>

        <div>
         <div className="text-sm space-y-1">
  <p className="font-semibold mb-2">Shop</p>

  <Link to="/shop-parts" className="block hover:underline">
    Shop Parts
  </Link>

  <Link to="/wheels" className="block hover:underline">
    Wheels & Rims
  </Link>

  <Link to="/engine" className="block hover:underline">
    Engine
  </Link>

  <Link to="/accessories" className="block hover:underline">
    Accessories
  </Link>
</div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <p>About Us</p>
          <p>Premium Area</p>
          <p>FAQ</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>info@mysite.com</p>
          <p>500 Terry Francine St.</p>
          <p>San Francisco, CA 94158</p>
          <p>Tel: 123-456-7890</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>YouTube</p>
          <p>X</p>
        </div>
      </div>
      <hr className="mt-20"/>
      <div className="flex gap-40 p-3">
        <h3>Terms & Conditions</h3>
        <h3>Privacy Policy</h3>
        <h3>Shipping Policy</h3>
        <h3>Refund Policy</h3>
        <h3>Accessibility Statement</h3>
      </div>
      <hr className="p-5"/>
      
    <div className=' flex justify-center item-center p-7'><h3>Payment Methods</h3></div>
    <div className='flex gap-7 justify-center p-3'>
        <div><img src="https://static.wixstatic.com/media/c837a6_469f6f6871e14f92a7d7650189dcd258~mv2.png/v1/fill/w_46,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_469f6f6871e14f92a7d7650189dcd258~mv2.png" alt='Mastercard' /></div>
        <div><img src="https://static.wixstatic.com/media/c837a6_d54485a89af44fb787596b8bdfab0b5b~mv2.png/v1/fill/w_46,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_c92306018209472daa96885efb7ef098~mv2.png" alt="UnionPay" /></div>
        <div><img src="https://static.wixstatic.com/media/c837a6_ec509b7163fd4619b9d30021d4a1b629~mv2.png/v1/fill/w_46,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_80acc245199449728c00889aa475b5c7~mv2.png" alt="Diners club international" /></div>
        <div><img src="https://static.wixstatic.com/media/c837a6_dee4727599b34e178889ce3722195b27~mv2.png/v1/fill/w_46,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_11dd24ad06894e489154174684cf3da0~mv2.png" alt="American express" /></div>
        <div><img src="https://static.wixstatic.com/media/c837a6_ca0dae5e9d714d2f838632ab638ea1ee~mv2.png/v1/fill/w_46,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_3a87e485cf5b43e2a12c14b583226775~mv2.png" alt="Discover" /></div>
        <div><img src="https://static.wixstatic.com/media/c837a6_bda37eff506148faa6b9a5986409ad29~mv2.png/v1/fill/w_46,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_733412071f1f40458384e161764e4199~mv2.png" alt="Visa" /></div>
        </div>
        <hr  className='mt-8'/>
    <div className=' flex justify-center item-center p-7'><h3>© 2035 by Autopile. Powered and secured by Wix</h3></div>
    
    </div>
    </>
  )
}

export default Footer
