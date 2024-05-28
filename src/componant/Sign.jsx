import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../Auth/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const { createUser, googleLogin, updateUser } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();


  const handleSignUp = (data) => {
    console.log(data);
    setError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserHandle(data);
        navigate('/')
        toast.success(`User create successfully`);
        reset();
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  const updateUserHandle = (data) => {
    const userInfo = {
      displayName: data.name,
    };
    updateUser(userInfo)
    .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };


  const handleGoogleSignIn = () => {
    googleLogin(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success(`User login successfully`)
        navigate('/')
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  return (
    <div className="h-full flex flex-col justify-center items-center mt-20 mb-28">
      <div className="w-96 shadow-lg shadow-slate-600 rounded-md p-7">
        <h2 className="text-3xl capitalize text-center -mt-2 mb-3">Sign up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            className="input border border-gray-400 w-full"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-600" role="alert">
              {errors.name?.message}
            </p>
          )}

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="name"
            className="input border border-gray-400 w-full"
            {...register("email", { required: "Email Address is required" })}
          />
          {errors.email && (
            <p className="text-red-600" role="alert">
              {errors.email?.message}
            </p>
          )}

          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            className="input border-gray-400 w-full"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be 6 characters or longer",
              },
              pattern: {
                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                message:
                  "Password must have uppercase, number and special characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-600" role="alert">
              {errors.password?.message}
            </p>
          )}

          {error && <p className="text-red-600">{error}</p>}
          <input
            className="btn btn-success text-base my-4 w-full"
            value="Sign up"
            type="submit"
          />
        </form>

        <p className="font-semibold text-center">
          Already have an account!
          <Link
            to="/login"
            className="text-secondary border-b-2 ml-6 border-green-500"
          >
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-success w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
