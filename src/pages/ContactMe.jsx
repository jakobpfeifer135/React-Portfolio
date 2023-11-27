import React, { useState } from "react";

const ContactMe = () => {
  const backgroundImage =
    'url("https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'; // Replace with your image URL

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear the error message when the user starts typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let isValid = true;
    const updatedErrors = { ...errors };

    if (!formData.name.trim()) {
      updatedErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      updatedErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      updatedErrors.email = "Invalid email address";
      isValid = false;
    }

    setErrors(updatedErrors);

    if (isValid) {
      // Handle form submission logic here
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundImage: backgroundImage, backgroundSize: "cover" }}
    >
      <div className="w-full max-w-md rounded-xl border-4 border-[#475d4e] bg-[#587360]  p-8 shadow-lg">
        <h2 className="mb-6 flex justify-center text-3xl font-bold text-white">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              style={{ fontFamily: "Rubik, san serif" }}
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-black focus:outline-none focus:ring ${
                errors.name && "border-red-500"
              }`}
              placeholder="Your Name"
              required
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              style={{ fontFamily: "Rubik, san serif" }}
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-black focus:outline-none focus:ring ${
                errors.email && "border-red-500"
              }`}
              placeholder="Your Email"
              required
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              style={{ fontFamily: "Rubik, san serif" }}
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-black focus:outline-none focus:ring"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            style={{ fontFamily: "Rubik, san serif" }}
            className="w-full rounded-md bg-gray-700 p-2 text-white hover:bg-white hover:text-gray-700 focus:border-black focus:outline-none focus:ring"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
