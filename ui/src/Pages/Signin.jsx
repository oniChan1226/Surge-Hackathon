import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import image from '../assets/Signin-bg.png'

const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password cannot exceed 20 characters")
    .nonempty("Password is required"),
});

const Login = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const [visible, setVisible] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    // Add backend logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-300">
      <div className=" grid grid-cols-1 lg:grid-cols-2 rounded-lg items-center  overflow-hidden w-full max-w-7xl mx-6 ">
        {/* Left Section */}
        <div className="p-8 xl:p-16 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary text-center xl:text-6xl">
            Sign In
          </h2>
          <p className="text-center text-secondary-dark mt-2 mb-6 xl:text-xl">
            Welcome back! Please enter your details.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-secondary-dark font-medium xl:text-lg pb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-2 rounded-md border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent xl:py-3 xl:text-lg`}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-secondary-dark font-medium xl:text-lg pb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={visible ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent xl:py-3 xl:text-lg`}
                  {...register("password")}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-600 focus:outline-none"
                  onClick={() => setVisible((prev) => !prev)}
                >
                  {visible ? <Eye /> : <EyeOff />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary-light hover:bg-primary text-white font-medium py-2 rounded-lg transition-colors duration-200 xl:text-lg"
            >
              Sign in
            </button>
          </form>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-primary font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex bg-transparent items-center justify-center">
              <img src={image} alt="image" />
            </div>
      </div>
    </div>
  );
};

export default Login;
