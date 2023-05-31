import React, { useContext, useState } from "react";
import Logo from "../../Assets/logo.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

    const { signIn, googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/dashboard";

    const handleLogin = (data) => {
      console.log(data);
      signIn(data.email, data.password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
          setLoginError(error.message);
        });
    };

    const handleGoogleSignIn = () => {
      googleSignIn()
        .then((result) => {
          const user = result.user;
          navigate(from, { replace: true });
          console.log(user);
        })
        .catch((error) => {
          console.error("error: ", error);
        });
    };
  return (
    <div class="flex flex-col md:flex-row h-screen bg-gray-100 dark:bg-gray-900">
      {/* Left Side */}
      <div
        class="w-full md:w-1/2 bg-cover bg-center h-64 md:h-auto hidden md:block"
        style={{ backgroundImage: `url('/Login-bg.jpg')` }}
      >
        <div class="flex items-center justify-center h-screen">
          <div class="flex items-center">
            <img src={Logo} alt="Logo" class="max-w-[450px]" />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div class="w-full h-screen md:w-1/2 flex items-center justify-center pb-14">
        <form
          //   onSubmit={handleSubmit(handleLogin)}
          class="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8"
        >
          <h2 class="text-2xl font-bold mb-2 text-center text-gray-600 dark:text-gray-200">
            Login / Signup
          </h2>
          <p class="text-xs font-bold mb-4 text-center text-gray-500 dark:text-gray-400">
            Enter your email and password
          </p>

          {/* Username Input */}
          <div class="mb-6">
            <label
              htmlFor="username"
              class="text-xs text-gray-600 block font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your e email"
              class="w-full px-3 py-2 border rounded-full dark:bg-gray-600 dark:text-gray-200"
              {...register("email", { required: "Email is required!" })}
            />
            {errors.email && (
              <span class="text-red-600 text-xs">{errors.email?.message}</span>
            )}
          </div>

          {/* Password Input */}
          <div class="mb-1">
            <label
              htmlFor="password"
              class="text-xs text-gray-600 block font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              class="w-full px-3 py-2 border rounded-full dark:bg-gray-600 dark:text-gray-200"
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
            />
            {errors.password && (
              <span class="text-red-600 text-xs">
                {errors.password?.message}
              </span>
            )}
          </div>

          {/* Forgot Password */}
          <div class="mb-6 text-left">
            <Link
              to="/forget-password"
              class="text-xs text-green-800 dark:text-green-400 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <div class="mb-3">
            <button
              type="submit"
              class="w-full bg-red-800 text-white py-2 rounded-full hover:bg-red-900 dark:bg-red-800 dark:text-gray-200 dark:hover:bg-green-700"
            >
              Log in
            </button>
          </div>

          {/* Create New Account */}
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2 dark:text-gray-300">
              Don't have an account?{" "}
              <span>
                <Link
                  to="/signup"
                  className="text-green-800 hover:underline dark:text-green-400"
                >
                  Create New Account
                </Link>
              </span>{" "}
            </p>
          </div>

          {/* Divider */}
          <div className="divider">OR</div>
          {/* End Divider */}

          {/* Continue with Google */}
          <div className="mb-6">
            <button
                onClick={handleGoogleSignIn}
              type="submit"
              className="w-full bg-transparent hover:bg-gray-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent dark:text-gray-300 rounded-full"
            >
              Continue with Google
            </button>
          </div>
          <div>
            {loginError && <p className="text-xs text-red-600">{loginError}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
