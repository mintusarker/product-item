import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const singleData = useLoaderData();
  // console.log(singleData[0].title);

  const handlePayment = () => {
    toast.error("Sorry no implement payment method right now", {duration: 1000});
  };

  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full h-64"
          src={singleData[0]?.image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{singleData[0]?.title}</h2>
        <h2 className="card-title">Brand: {singleData[0]?.brand}</h2>
        <h2 className="font-semibold text-rose-500">
          Price: ${singleData[0]?.price}
        </h2>
        <p className="">{singleData[0]?.description}</p>
        <div className="card-actions justify-end">
          <button onClick={handlePayment} className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
