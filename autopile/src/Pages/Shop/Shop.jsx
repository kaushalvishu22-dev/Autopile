import React, { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import allProducts from "../../data/Product";
export default function ProductPage() {

  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  // const allProducts = [
  //   {
  //     name: "Cylinder Head Gasket",
  //     price: 90,
  //     old: 120,
  //     sale: true,
  //     category: "Engine",
  //     img: 'https://static.wixstatic.com/media/c837a6_39e59547697a4ac6aa2e459441be4aee~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_39e59547697a4ac6aa2e459441be4aee~mv2.jpg',
  //   },
  //   {
  //     name: "Car Engine Clutch",
  //     price: 90,
  //     old: 100,
  //     sale: true,
  //     category: ["Engine","Wholesale"],
  //     img: "https://static.wixstatic.com/media/c837a6_da922ebbf4704db385e5cbba8e5f5514~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_da922ebbf4704db385e5cbba8e5f5514~mv2.jpg",
  //   },
  //   {
  //     name: "Aluminum Piston",
  //     price: 45,
  //     category:"Engine",
  //     img: "https://static.wixstatic.com/media/c837a6_3da47cc2a2514f4b84b528bcc8ad703f~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_3da47cc2a2514f4b84b528bcc8ad703f~mv2.jpg",
  //   },
  //   {
  //     name: "Cylinder Head Combustion",
  //     price: 130,
  //     category: "Engine",
  //     img: "https://static.wixstatic.com/media/c837a6_5697cc3768c7434a886ff9a836fa5d15~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_5697cc3768c7434a886ff9a836fa5d15~mv2.jpg",
  //   },
  //     {
  //     name: "timing belt",
  //     price: 40.00,
  //     category: "Engine",
  //     img: "https://static.wixstatic.com/media/c837a6_2bda417eebc24e0fbf876355f2dcc760~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_2bda417eebc24e0fbf876355f2dcc760~mv2.jpg",
  //   },
  //     {
  //     name: "turbocharger",
  //     price: 76.50,
  //     category:["Engine","Wholesale"],
  //     img: "https://static.wixstatic.com/media/c837a6_eb1c3157b04f465cbb926edb853987a7~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_eb1c3157b04f465cbb926edb853987a7~mv2.jpg",
  //   },
  //     {
  //     name: "chrome",
  //     price: 15.00,
  //     category:["Wheels & Rims","Best Seller"],
  //     img: "https://static.wixstatic.com/media/c837a6_2fa2b62e97c44ef9b5b0fcad6fc34b09~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_2fa2b62e97c44ef9b5b0fcad6fc34b09~mv2.jpg",
  //   },
  //     {
  //     name: "alloy",
  //     price: 7.50,
  //     category:"Wheels & Rims",
  //     img: "https://static.wixstatic.com/media/c837a6_ee429493611d4fd786d8df3174f504c6~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_ee429493611d4fd786d8df3174f504c6~mv2.jpg",
  //   },
  //     {
  //     name: "steel",
  //     price: 25.00,
  //     category:["Wheels & Rims","Wholesale"],
  //     img: "https://static.wixstatic.com/media/c837a6_051d39afd9834009933f49353aaec555~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_051d39afd9834009933f49353aaec555~mv2.jpg",
  //   },
    
  //    {
  //     name: "aluminium",
  //     price: 10.00,
  //     category:"Wheels & Rims",
  //     img: "https://static.wixstatic.com/media/c837a6_b16fc6cc171b4c768abdb59394c0f9f0~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_b16fc6cc171b4c768abdb59394c0f9f0~mv2.jpg",
  //   },
  //    {
  //     name: "4X4",
  //     price: 20.00,
  //     category:["Wheels & Rims","Best Seller"],
  //     img: "https://static.wixstatic.com/media/c837a6_e469e95ae2784a19847e7aa3aa2cad60~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_e469e95ae2784a19847e7aa3aa2cad60~mv2.jpg",
  //   },
  //    {
  //     name: "custom",
  //     price: 76.50,
  //     category:["Wheels & Rims","Wholesale"],
  //     img: "https://static.wixstatic.com/media/c837a6_ea6dbde373ca4dc6a77e637d1bfd262c~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_ea6dbde373ca4dc6a77e637d1bfd262c~mv2.jpg",
  //   },
  //    {
  //     name: "brake pads",
  //     price: 120.00,
  //     category: ["Vehicle Body Parts","Best Seller"],
  //     img: "https://static.wixstatic.com/media/c837a6_4384454765df47b6ae0554a960a94b0a~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_4384454765df47b6ae0554a960a94b0a~mv2.jpg",
  //   },
  //    {
  //     name: "power steering pumps",
  //     price: 120.00,
  //     category: "Vehicle Body Parts",
  //     img: "https://static.wixstatic.com/media/c837a6_bc80ae05739f410eb0323249c67a977e~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_bc80ae05739f410eb0323249c67a977e~mv2.jpg",
  //   },
  //    {
  //     name: "brake disc",
  //     price: 120.00,
  //     category: ["Vehicle Body Parts","Wholesale"],
  //     img: "https://static.wixstatic.com/media/c837a6_e1c5cb74ed84470dbf316eb3403d8090~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_e1c5cb74ed84470dbf316eb3403d8090~mv2.jpg",
  //   },
  //    {
  //     name: "brake cylinder",
  //     price: 120.00,
  //     category: ["Vehicle Body Parts","Best Seller"],
  //     img: "https://static.wixstatic.com/media/c837a6_acbd22056c2042b3a3660186ce152cc5~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_acbd22056c2042b3a3660186ce152cc5~mv2.jpg",
  //   },
  //    {
  //     name: "brake hoses",
  //     price: 108.00,
  //     category: ["Vehicle Body Parts","Wholesale"],
  //     img: "https://static.wixstatic.com/media/c837a6_3882cfad700d4ecdabec8a8e79c12cc2~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_3882cfad700d4ecdabec8a8e79c12cc2~mv2.jpg",
  //   },
  //    {
  //     name: "steering racks",
  //     price: 120.00,
  //     category: ["Vehicle Body Parts","Best Seller"],
  //     img: "https://static.wixstatic.com/media/c837a6_bfeef35a26c54d2ba30ea219507ef116~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_bfeef35a26c54d2ba30ea219507ef116~mv2.jpg",
  //   },
  //    {
  //     name: "seat cover",
  //     price: 108.00,
  //     category: "Accessories",
  //     img: "https://static.wixstatic.com/media/c837a6_a2e698428aa041f39e3c649cddd88d25~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a2e698428aa041f39e3c649cddd88d25~mv2.jpg",
  //   },
  //    {
  //     name: "Steering steel cover",
  //     price: 108.00,
  //     category: ["Accessories","Wholesale"],
  //     img: "https://static.wixstatic.com/media/c837a6_7cb6acc0530648e4a3016bb6d3dd92b2~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_7cb6acc0530648e4a3016bb6d3dd92b2~mv2.jpg",
  //   },
  //    {
  //     name: "GPS",
  //     price: 120.00,
  //     category: ["Accessories","Best Seller"],
  //     img: "https://static.wixstatic.com/media/c837a6_0c45a04a61064a63a68b751f854c0e3b~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_0c45a04a61064a63a68b751f854c0e3b~mv2.jpg",
  //   },
  //    {
  //     name: "car mats",
  //     price: 120.00,
  //     category: "Accessories",
  //     img: "https://static.wixstatic.com/media/c837a6_bb7ad7be7a93418d937e7018e8377010~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_bb7ad7be7a93418d937e7018e8377010~mv2.jpg",
  //   },
  //    {
  //     name: "door handle",
  //     price: 120.00,
  //     category: ["Accessories","Best Seller"],
  //     img: "https://static.wixstatic.com/media/c837a6_1e5718d6c3304a119c5d63dd11ccd0d8~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_1e5718d6c3304a119c5d63dd11ccd0d8~mv2.jpg",
  //   },
  //    {
  //     name: "Lamps",
  //     price: 8.99,
  //     category: ["Accessories","Wholesale"],
  //     img: "https://static.wixstatic.com/media/c837a6_7d141522995b4ff4b0e796a93de26c74~mv2.jpg/v1/fill/w_215,h_287,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_7d141522995b4ff4b0e796a93de26c74~mv2.jpg",
  //   },
     

  // ];

const [searchParams] = useSearchParams();
const type = searchParams.get("type") || "all";

const isWholesale = type === "wholesale";


const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(130);


useEffect(() => {
  if (isWholesale) { 
    setSelectedCategory("Wholesale");
  } else {
    setSelectedCategory("All");
  }
}, [type]);


  // FILTER LOGIC
  const filteredProducts = allProducts.filter((p) => {
    const categoryMatch =
      selectedCategory === "All" || p.category.includes(selectedCategory);

    const priceMatch = p.price <= maxPrice;

    return categoryMatch && priceMatch;
  });

  const categories = [
    "All",
    "Accessories",
    "Best Seller",
    "Engine",
    "Vehicle Body Parts",
    "Wheels & Rims",
    "Wholesale",
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="h-36"></div>
      <div className="flex gap-10">
        {/* Sidebar */}
        <div className="w-64">
          <h2 className="text-lg mb-4">Browse by</h2>

          <ul className="space-y-3 text-sm text-gray-300">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer ${
                  selectedCategory === cat ? "underline text-white" : ""
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <h3 className="mb-3">Filter by</h3>
            <p className="text-sm mb-2">Price</p>

            <input
              type="range"
              min="0"
              max="130"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />

            <div className="flex justify-between text-xs mt-1">
              <span>€0</span>
              <span>€{maxPrice}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h1 className="text-3xl mb-4">All Products</h1>

          <div className="flex justify-between mb-6 text-sm">
            <span className="text-gray-400">
              {filteredProducts.length} products
            </span>
           
          </div>

          <div className="grid grid-cols-4 gap-6">
            {filteredProducts.map((p, i) => (
              <div key={i}
                onClick={() => navigate(`/product/${i}`)}
    className="cursor-pointer">
                <div className="bg-gray-200 h-56 flex items-center justify-center relative">
                  {p.sale && (
                    <span className="absolute top-0 left-0 bg-red-500 text-xs px-2 py-1">
                      Sale
                    </span>
                  )}
                  <img src={p.img} alt="" className="h-40 object-contain" />
                </div>

                <p className="mt-3 text-sm">{p.name}</p>

                <div className="text-sm">
                  {p.old && (
                    <span className="line-through text-gray-400 mr-2">
                      €{p.old}
                    </span>
                  )}
                  <span>€{p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
