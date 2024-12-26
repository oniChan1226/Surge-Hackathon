import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { roleConfigs } from "../RoleConfigs/RoleConfigs";
import { useNavigate, Link } from "react-router-dom";
import image from '../assets/Signin-bg.png'

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleChange = (event) => {
    const role = event.target.value;
    setSelectedRole(role);
    reset();
  };

  const onSubmit = async (data) => {
    // Backend logic
    console.log("Signup Data:", data);
  };

  const renderFormFields = () => {
    if (!selectedRole || !roleConfigs[selectedRole]) {
      return <></>;
    }

    return roleConfigs[selectedRole].map((field, index) => {
      let validationRules = {};

      if (field.type === "password") {
        validationRules = {
          required: true,
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        };
      } else if (field.type === "tel") {
        validationRules = {
          required: field.required,
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Phone number must be 10 digits",
          },
        };
      } else if (field.type === "email") {
        validationRules = {
          required: field.required,
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter a valid email address",
          },
        };
      }

      return (
        <div key={index} className="relative mb-2">
          <label className="block text-secondary-dark font-medium xl:text-lg mb-1">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            {...register(field.name, validationRules)}
            className={`w-full px-1 py-2 rounded-md border ${
              errors[field.name] ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent xl:py-3 xl:text-lg`}
          />
          {errors[field.name] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[field.name].message || `${field.label} is required`}
            </p>
          )}
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-slate-300 flex items-center justify-center">
      <div className=" grid grid-cols-1 lg:grid-cols-2 items-center rounded-lg overflow-hidden w-full max-w-7xl m-6">
        {/* Left Section */}
        <div className="p-4 md:py-4 md:px-8 xl:p-16 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary text-center xl:text-6xl">
            Sign Up
          </h2>
          <p className="text-center text-secondary-dark my-1 xl:text-xl">
            Create your account by filling in your details.
          </p>

          <div className="mb-2">
            <label className="block text-secondary-dark font-medium xl:text-lg mb-1">
              Select Role
            </label>
            <select
              value={selectedRole}
              onChange={handleRoleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent xl:py-3 xl:text-lg"
            >
              <option value="" disabled>
                -- Select a role --
              </option>
              {Object.keys(roleConfigs).map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            {renderFormFields()}
            {selectedRole && (
              <button
                type="submit"
                className="w-full bg-primary-light hover:bg-primary text-white font-medium py-2 rounded-lg transition-colors duration-200 xl:text-lg"
              >
                Sign Up
              </button>
            )}
          </form>

          <p className="text-center mt-4">
            Already registered?{" "}
            <Link
              to="/"
              className="text-primary font-medium hover:underline"
            >
              Sign in
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

export default Signup;
