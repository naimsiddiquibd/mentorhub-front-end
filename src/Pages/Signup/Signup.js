import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser, verifyEmail, googleSignIn } =
    useContext(AuthContext);
  const [signupError, setSignupError] = useState("");

  const handleSignup = async (data) => {
    console.log(data);
    setSignupError("");

    //   Create user in Firebase Authentication
    try {
      const result = await createUser(data.email, data.password);
      const user = result.user;
      console.log(user);

      const userInfo = {
        displayName: data.username,
      };

      //   Verify email
      await verifyEmail();
      toast("Please check your email and verify");

      // Update user info
      await updateUser(userInfo);

      // Send data to API
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        throw new Error("Failed to send data to API");
      }
    } catch (error) {
      console.log(error);
      setSignupError(error.message);
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error("error: ", error);
      });
  };

  const [signupType, setSignupType] = useState("mentee");

  const handleSignupTypeChange = (type) => {
    setSignupType(type);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900">
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
      <div className="w-full md:w-1/2 flex items-center justify-center py-14">
        <form
          onSubmit={handleSubmit(handleSignup)}
          className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8"
        >
          <div class="flex w-48 mb-6 gap-1">
            <button
              type="button"
              className={`${
                signupType === "mentor"
                  ? "bg-gray-300 text-white btn w-full rounded-lg border-0 hover:bg-gray-400"
                  : "bg-red-800 text-white btn w-full rounded-lg border-0 hover:bg-red-900"
              } py-2 px-4 rounded-full`}
              onClick={() => handleSignupTypeChange("mentee")}
            >
              Mentee
            </button>
            <button
              type="button"
              className={`${
                signupType === "mentee"
                  ? "bg-gray-300 text-white btn w-full rounded-lg border-0 hover:bg-gray-400"
                  : "bg-red-800 text-white btn w-full rounded-lg border-0 hover:bg-red-900"
              } py-2 px-4 rounded-full`}
              onClick={() => handleSignupTypeChange("mentor")}
            >
              Mentor
            </button>
          </div>

          {signupType === "mentor" && (
            <>
              {/* Field Start */}
              {/* Username Input */}
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="text-xs text-gray-600 block font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                  className="w-full px-3 py-2 border rounded-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  {...register("username", {
                    required: "Username is required!",
                  })}
                />
                {errors.email && (
                  <span className="text-red-600 text-xs">
                    {errors.username?.message}
                  </span>
                )}
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="text-xs text-gray-600 block font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  {...register("email", { required: "Email is required!" })}
                />
                {errors.email && (
                  <span className="text-red-600 text-xs">
                    {errors.email?.message}
                  </span>
                )}
              </div>

              {/* Phone Number Input */}
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="text-xs text-gray-600 block font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 border rounded-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  {...register("phone", {
                    required: "Phone Number is required!",
                  })}
                />
                {errors.email && (
                  <span className="text-red-600 text-xs">
                    {errors.phone?.message}
                  </span>
                )}
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="text-xs text-gray-600 block font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border rounded-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  {...register("password", {
                    required: "Password is required!",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-600 text-xs">
                    {errors.password?.message}
                  </span>
                )}
              </div>
              {/* Field End */}
            </>
          )}

          {signupType === "mentee" && (
            <>
              {/* Field Start */}
              {/* Username Input */}
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="text-xs text-gray-600 block font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                  className="w-full px-3 py-2 border rounded-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  {...register("username", {
                    required: "Username is required!",
                  })}
                />
                {errors.email && (
                  <span className="text-red-600 text-xs">
                    {errors.username?.message}
                  </span>
                )}
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="text-xs text-gray-600 block font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  {...register("email", { required: "Email is required!" })}
                />
                {errors.email && (
                  <span className="text-red-600 text-xs">
                    {errors.email?.message}
                  </span>
                )}
              </div>

              {/* Phone Number Input */}
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="text-xs text-gray-600 block font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 border rounded-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  {...register("phone", {
                    required: "Phone Number is required!",
                  })}
                />
                {errors.email && (
                  <span className="text-red-600 text-xs">
                    {errors.phone?.message}
                  </span>
                )}
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="text-xs text-gray-600 block font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border rounded-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  {...register("password", {
                    required: "Password is required!",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-600 text-xs">
                    {errors.password?.message}
                  </span>
                )}
              </div>
              {/* Field End */}
            </>
          )}

          {/* Login Button */}
          <div className="mb-3">
            <button
              type="submit"
              className="w-full bg-red-800 text-white py-2 rounded-full hover:bg-red-900 hover:scale-110 transition-transform duration-300"
            >
              Signup
            </button>
          </div>

          {/* Already have an account */}
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">
              Already have an account?{" "}
              <span>
                <Link to="/login" className="text-green-800 hover:underline">
                  Please login
                </Link>
              </span>{" "}
            </p>
          </div>

          {/* Divider */}
          <div className="divider">OR</div>
          {/* End Divider */}

          {/* Continue with Google */}
          <div className="mb-2">
            <button
              onClick={handleGoogleSignIn}
              type="submit"
              className="w-full bg-transparent hover:bg-gray-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-full dark:text-gray-300"
            >
              Continue with Google
            </button>
          </div>
          <div>
            {signupError && (
              <p className="text-xs text-red-600">{signupError}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
