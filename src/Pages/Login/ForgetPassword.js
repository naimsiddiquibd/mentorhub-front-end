import React, { useContext, useState } from "react";
import Logo from "../../Assets/logo.png";
import { useForm } from "react-hook-form";
// import { AuthContext } from "../../contexts/AuthProvider";
// import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

//   const { forgetPassword } = useContext(AuthContext);
//   const [loginError, setLoginError] = useState("");
//   const location = useLocation();
//   const navigate = useNavigate();

//   const from = location.state?.from?.pathname || "/dashboard";

//   const handleLogin = (data) => {
//     console.log(data);
//     forgetPassword(data.email)
//       .then((result) => {
//         toast("Reset email has been sent!");
//       })
//       .catch((error) => {
//         console.log(error.message);
//         setLoginError(error.message);
//       });
//   };
  return (
    <div class="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Left Side */}
      <div
        class="w-full md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url('/Login-bg.jpg')` }}
      >
        <div class="flex items-center justify-center h-screen">
          <div class="flex items-center">
            <img src={Logo} alt="Logo" class="max-w-[450px]" />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div class="w-full md:w-1/2 flex items-center justify-center">
        <form
        //   onSubmit={handleSubmit(handleLogin)}
          class="w-full max-w-md bg-white rounded-lg shadow-sm p-8"
        >
          <h2 class="text-2xl font-bold mb-2 text-center text-gray-600">
            Forgot your password?
          </h2>
          <p class="text-xs font-bold mb-4 text-center text-gray-500">
            No worries! we will send you an email to reset it
          </p>

          {/* Email Input */}
          <div class="mb-6">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              class="w-full px-3 py-2 border rounded"
              {...register("email", { required: "Email is required!" })}
            />
            {errors.email && (
              <span class="text-red-600 text-xs">{errors.email?.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <div class="mb-6">
            <button
              type="submit"
              class="w-full bg-red-800 text-white py-2 rounded hover:bg-red-900"
            >
              Submit
            </button>
          </div>

          <div>
            {/* {loginError && <p class="text-xs text-red-600">{loginError}</p>} */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
