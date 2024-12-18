import React, { useState } from "react";

const Report = () => {
  const [formData, setFormData] = useState({
    helpType: "",
    description: "",
    urgency: "Medium",
    location: { latitude: "", longitude: "" },
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLocationChange = () => {
    // Mock GPS Location Retrieval
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData((prev) => ({
          ...prev,
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        }));
      },
      (error) => {
        setError("Unable to retrieve location. Please enable GPS.");
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.helpType || !formData.description) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");

    // Simulate sending data to the backend
    console.log("Form Data Submitted:", formData);
    alert("Need reported successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Report a Need</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="helpType" className="block text-sm font-medium text-gray-700">
            Type of Help Needed
          </label>
          <select
            name="helpType"
            id="helpType"
            value={formData.helpType}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="" disabled>
              Select a type of help
            </option>
            <option value="Food">Food</option>
            <option value="Shelter">Shelter</option>
            <option value="Medical Assistance">Medical Assistance</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description of the Situation
          </label>
          <textarea
            name="description"
            id="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="E.g., Flooded basement, urgent medical assistance needed."
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="urgency" className="block text-sm font-medium text-gray-700">
            Urgency Level
          </label>
          <select
            name="urgency"
            id="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <button
            type="button"
            onClick={handleLocationChange}
            className="mt-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Use Current Location
          </button>
          {formData.location.latitude && formData.location.longitude && (
            <p className="mt-2 text-sm text-gray-600">
              Latitude: {formData.location.latitude}, Longitude:{" "}
              {formData.location.longitude}
            </p>
          )}
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Report;
