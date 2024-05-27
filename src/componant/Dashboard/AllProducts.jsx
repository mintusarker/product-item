import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllProducts = () => {
  //   const [items, setItems] = useState([]);
  //   //   console.log(items);

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/items`)
  //       .then((res) => res.json())
  //       .then((data) => setItems(data));
  //   }, []);

  const { data: items = [], refetch } = useQuery({
    queryKey: ["allBookings"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/items`);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  const handleProductRemove = (id) => {
    fetch(`http://localhost:5000/items/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Product deleted");
        refetch();
      });
  };

  return (
    <div>
      <h3 className="text-xl bg-slate-900 text-white text-center my-6">
        Total Products : {items?.length}
      </h3>
      <div className="overflow-x-auto my-12">
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
                        <img src={item?.image_url} alt="shopping item" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item?.title}</div>
                    </div>
                  </div>
                </td>
                <td>{item?.brand}</td>
                <td>{item?.price} tk</td>
                {/* <td className="w-56"> {item?.description}</td> */}
                <td>
                  <Link to={`/dashboard/detail/${item?._id}`}>
                    <button className="btn btn-accent btn-sm">Detail</button>
                  </Link>
                </td>
                <td>
                  <div className="flex flex-wrap justify-center items-center">
                    <Link to={`/dashboard/update/${item?._id}`}>
                      <button className="btn btn-error btn-sm px-5">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleProductRemove(item?._id)}
                      className="btn btn-sm m-4 px-5 btn-warning"
                    >
                      Delete
                    </button>
                  </div>
                </td>
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
