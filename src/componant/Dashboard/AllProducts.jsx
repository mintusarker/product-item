import React, { useEffect, useState } from "react";

const AllProducts = () => {
  const [items, setItems] = useState([]);
  //   console.log(items);

  useEffect(() => {
    fetch(`http://localhost:5000/items`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
         
          <thead>
            <tr className="text-red-800 text-lg">
              <th></th>
              <th>Product</th>
              <th>Brand</th>
              <th>price</th>
              <th>Details</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image_url}
                          alt="shopping item"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item?.title}</div>
                    </div>
                  </div>
                </td>
                <td>{item?.brand}</td>
                <td>{item?.price} tk</td>
                <td className="w-56"> {item?.description} tk</td>
                <div>
                <button  className="btn btn-sm m-4 btn-error">Edit</button>
                <button  className="btn btn-sm m-4 btn-warning">Delete</button>
                </div>
                <th></th>
              </tr>
            ))}
          </tbody>
         
        </table>
      </div>
    </div>

   
  );
};

export default AllProducts;
