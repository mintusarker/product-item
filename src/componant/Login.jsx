import React, { useContext, useState } from "react";

// import { toast } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { AuthContext } from "../Auth/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");

  const { userLogin, googleLogin } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();

  const location = useLocation();
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");

  const from = location.state?.from?.pathname || "/";
  navigate(from, { replace: true });

  const handleLogin = (data) => {
    setError("");
    userLogin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user.email);
        toast.success(`User login successfully`);
        reset();
        setLoginEmail(data.email);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleLogin(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success(`User login successfully`);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  return (
    <div className="h-[600px] flex flex-col justify-center items-center">
      <div className="w-96 shadow-lg shadow-slate-600 rounded-md p-7">
        <h2 className="text-3xl capitalize mb-5 text-center">Login page</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="name"
            className="input border  border-gray-400 w-full"
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
            className="input border-gray-400 w-full mb-4"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be 6 characters or longer",
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
            className="btn btn-success my-3 w-full"
            value="Login"
            type="submit"
          />
        </form>

        <p className="font-semibold text-center">
          New to here ?
          <Link
            to="/sign_up"
            className="text-secondary border-b-2 ml-6 border-green-500"
          >
            Create new account
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-success w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
