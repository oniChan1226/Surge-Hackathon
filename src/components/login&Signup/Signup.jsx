import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { roleConfigs } from "../RoleConfigs";
import { useRoleAuth } from "../../context/RoleAuth";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Firebase/Firebase";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [selectedRole, setSelectedRole] = useState("");
  const { updateRole } = useRoleAuth();
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    const role = event.target.value;
    setSelectedRole(role);
    updateRole(role);
    reset();
  };

  const onSubmit = async (data) => {
    // idr say send data to backend
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredentials.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role: selectedRole,
      });
      setUser({uid: user.uid, email: user.email})
      navigate("/dashboard");
      toast.success("Welcome");
    } catch (err) {
      toast.error(err);
    }
    console.log("Submitted data:", { role: selectedRole, ...data });
  };

  const renderFormFields = () => {
    if (!selectedRole || !roleConfigs[selectedRole]) {
      return <p className="text-gray-600">Select role</p>;
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
      }

      if (field.type === "tel") {
        validationRules = {
          required: field.required,
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Phone number must be 10 digits",
          },
        };
      }

      if (field.type === "email") {
        validationRules = {
          required: field.required,
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter a valid email address",
          },
        };
      }

      return (
        <div key={index} className="mb-4">
          <label className="block text-sm font-medium mb-1">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            {...register(field.name, validationRules)}
            className="w-full border rounded-lg p-2"
          />
          {errors[field.name] && (
            <p className="text-red-500 text-sm">
              {errors[field.name].message || `${field.label} is required`}
            </p>
          )}
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Signup
        </h1>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Select Role</label>
          <select
            value={selectedRole}
            onChange={handleRoleChange}
            className="w-full border rounded-lg p-2"
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {renderFormFields()}
          {selectedRole && (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Sign Up
            </button>
          )}
        </form>
        <div className="py-2">
          Already registered?{" "}
          <Link
            to={"/login"}
            className="text-blue-600 font-bold hover:text-blue-500 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
