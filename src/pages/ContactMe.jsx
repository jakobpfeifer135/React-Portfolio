import React, { useState } from 'react';


const ContactMe = () => {
  const backgroundImage = 'url("https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'; // Replace with your image URL

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear the error message when the user starts typing
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let isValid = true;
    const updatedErrors = { ...errors };

    if (!formData.name.trim()) {
      updatedErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      updatedErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      updatedErrors.email = 'Invalid email address';
      isValid = false;
    }

    setErrors(updatedErrors);

    if (isValid) {
      // Handle form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: backgroundImage, backgroundSize: 'cover' }}
    >
      <div className="bg-[#587360] p-8 rounded-xl shadow-lg w-full max-w-md  border-[#475d4e] border-4">
        <h2 className="text-3xl font-bold mb-6 text-white flex justify-center">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label style={{ fontFamily: 'Rubik, san serif' }} htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-black ${
                errors.name && 'border-red-500'
              }`}
              placeholder="Your Name"
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label style={{ fontFamily: 'Rubik, san serif' }} htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-black ${
                errors.email && 'border-red-500'
              }`}
              placeholder="Your Email"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label style={{ fontFamily: 'Rubik, san serif' }} htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-black"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            style={{ fontFamily: 'Rubik, san serif' }}
            className="w-full bg-gray-700 text-white p-2 rounded-md hover:bg-white hover:text-gray-700 focus:outline-none focus:ring focus:border-black"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;

