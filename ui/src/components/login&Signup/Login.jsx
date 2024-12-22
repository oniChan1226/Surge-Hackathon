import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useRoleAuth } from "../../context/RoleAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Firebase/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/AuthContext";

// Need to work login

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { updateRole } = useRoleAuth();
  const {setUser} = useAuthContext();
  
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredentials.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if(userDoc.exists()) {
        const userData = userDoc.data();
        toast.success(`Logged in as ${userData.role}`);
        console.log("Login data:", data);
        updateRole(userData.role);
        setUser({uid: user.uid, email: userData.email});
        navigate("/dashboard");
      }
      else {
        toast.warn(`No Role info found against credentails`);
      }
    }
    catch(err) {
      toast.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address"
                }
              })}
              className="w-full border rounded-lg p-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters"
                }
              })}
              className="w-full border rounded-lg p-2"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            disabled = {loading}
          >
            Login
          </button>
        </form>

        <div className="py-2">Don't have an account? <Link to={"/"} className="text-blue-600 font-bold hover:text-blue-500 hover:underline">Sign Up</Link></div>
      </div>
    </div>
  );
};

export default Login;
