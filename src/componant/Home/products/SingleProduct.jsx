import React from 'react';

const SingleProduct = ({product}) => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src={product?.image_url}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product?.title}</h2>
            <p>Price:{product?.price}</p>
            <p>{product?.description.slice(0,100)}....</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
    );
};

export default SingleProduct;