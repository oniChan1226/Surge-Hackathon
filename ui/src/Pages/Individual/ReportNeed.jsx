import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ReportNeed = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    // backend
    return 1;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Report a Need
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Type of Help Needed
            </label>
            <select
              name="helpType"
              {...register("helpType", {
                required: "Please select the type of help",
              })}
              className="w-full border rounded-lg p-2"
            >
              <option value="">-- Select Type of Help --</option>
              <option value="Food">Food</option>
              <option value="Shelter">Shelter</option>
              <option value="Medical Assistance">Medical Assistance</option>
              <option value="Other">Other</option>
            </select>
            {errors.helpType && (
              <p className="text-red-500 text-sm">{errors.helpType.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Describe Your Need
            </label>
            <textarea
              name="description"
              placeholder="Explain your need in detail"
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full border rounded-lg p-2"
              rows="4"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Urgency Level
            </label>
            <select
              name="urgency"
              {...register("urgency", {
                required: "Please select an urgency level",
              })}
              className="w-full border rounded-lg p-2"
            >
              <option value="">-- Select Urgency --</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            {errors.urgency && (
              <p className="text-red-500 text-sm">{errors.urgency.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Contact Information
            </label>
            <input
              type="text"
              name="contact"
              placeholder="Email or Phone"
              {...register("contact", {
                required: "Contact information is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: "Please enter a valid email address or phone number",
                },
              })}
              className="w-full border rounded-lg p-2"
            />
            {errors.contact && (
              <p className="text-red-500 text-sm">{errors.contact.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-blue-500"
            } text-white py-2 px-4 rounded-lg hover:bg-blue-600`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Report"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportNeed;
