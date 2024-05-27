import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const data = useLoaderData();
  //   console.log(data[0].title);
  const navigate = useNavigate();
  // const [updateItem, setUpdateItem] = useState(data);
  // console.log(updateItem);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image.value;

    const updateProduct = {
      title,
      brand,
      price,
      description,
      image_url
    };

    console.log(updateProduct);
    fetch(`http://localhost:5000/items/${data[0]?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("product updated");
          navigate("/dashboard/All_products");
          console.log(data);
        }
      });
  };

  // const handleInputChange = (event) => {
  //   const field = event.target.name;
  //   const value = event.target.value;
  //   const newUpdate = { ...updateItem };
  //   newUpdate[field] = value;
  //   setUpdateItem(newUpdate);
  // };

  return (
    <div className="my-32 border w-1/2 p-4 mx-auto">
      <h2 className="text-center text-rose-600 mb-3 font-semibold text-xl">
        Update product:{" "}
      </h2>
      <form onSubmit={handleUpdateUser} className="flex flex-col">
        <label htmlFor="">Title</label>
        <input
          className="border border-black  w-full p-2 mb-4"
          // onChange={handleInputChange}
          defaultValue={data[0]?.title}
          type="text"
          name="title"
          placeholder="Title"
          required
        />
        <label className="" htmlFor="">
          Brand
        </label>
        <input
          className="border border-stone-500 w-full p-2 mb-4"
          // onChange={handleInputChange}
          defaultValue={data[0]?.brand}
          type="text"
          name="brand"
          placeholder="Brand"
          required
        />
        <label htmlFor="">Price</label>
        <input
          className="border border-stone-500 w-full p-2 mb-4"
          // onChange={handleInputChange}
          defaultValue={data[0]?.price}
          type="text"
          name="price"
          placeholder="price"
          required
        />
        <label htmlFor="">Detail</label>
        <textarea
          // onChange={handleInputChange}
          type="text"
          className="border border-stone-500 w-full h-32 p-2"
          name="description"
          defaultValue={data[0]?.description}
        />

        <label htmlFor="">Image Url</label>
        <textarea
          // onChange={handleInputChange}
          type="text"
          className="border border-stone-500 w-full p-2 h-32"
          name="image"
          defaultValue={data[0]?.image_url}
          required
        />

        <br />
        <button className="btn btn-success">Update</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
