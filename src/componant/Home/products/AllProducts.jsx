import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/items`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
   <div className="">
    <h3 className="text-center text-[30px] mt-12">Products</h3>
     <div className='gap-5 mx-auto mb-40 mt-8 px-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
      {products.map((product) => <SingleProduct
      
      product={product}
      ></SingleProduct>)}
    </div>
   </div>
  );
};

export default AllProducts;
