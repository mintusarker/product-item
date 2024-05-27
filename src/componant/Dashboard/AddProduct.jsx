import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();


    const handleAddProduct = data => {
        
                    const product = {
                        title: data.product,
                        brand: data.product,
                        price: parseInt(data.price),
                        description: data.detail,
                        image_url: data.image,

                    }
                    console.log(product)

                    // save product information to database
                    fetch('http://localhost:5000/items', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);

                            toast.success('Product added successfully');
                            reset();
                            navigate('/dashboard/All_products');
                        })
                };



    return (
        <div className='px-40'>
            <h2 className='text-2xl mb-6'>Add A Product</h2>

            <form className='' onSubmit={handleSubmit(handleAddProduct)}>

    

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Product Name</span></label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("product", {
                        required: "Product name is required"
                    })} />
                    {errors.product && <p className='text-red-600'>{errors.product.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Brand</span></label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("brand", {
                        required: "Brand  name is required"
                    })} />
                    {errors.brand && <p className='text-red-600'>{errors.brand.message}</p>}
                </div>



                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Price</span></label>
                    <input type="text" className="input input-bordered w-full max-w-xs" {...register("price", {
                        required: "Price is required"
                    })} />
                    {errors.price && <p className='text-red-600'>{errors.price.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Detail</span></label>
                    <textarea type="text" className="input input-bordered w-full max-w-xs" {...register("detail", {
                        required: "Description is required"
                    })} />
                    {errors.detail && <p className='text-red-600'>{errors.detail.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Image Url</span></label>
                    <textarea type="text" className="input input-bordered w-full max-w-xs" {...register("image", {
                        required: "Photo is required"
                    })} />
                    {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                </div>


                <input className='btn btn-accent my-3 w-full max-w-xs' value='Add Product' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;
