


import axios from "axios";
import { useState } from "react";

export default function App() {
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: "",  // Added 'message' to the state
    file: ""
  });

  const handleFileChange = (e) => {
    setQuery((prevState) => ({
      ...prevState,
      file: e.target.files[0]
    }));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(
        "https://getform.io/f/2fab8c22-4f71-4d73-9e4d-1289367e7c42",
        formData,
        { headers: { Accept: "application/json" } }
      )
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          name: "",
          email: "",
          message: "",
          file: ""  
        });
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
      <div className="w-full max-w-md rounded-xl border-4 border-[#475d4e] bg-[#587360] p-8 shadow-lg">
        <h2 className="mb-6 flex justify-center text-3xl font-bold text-white">Contact Me</h2>
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={query.name}
              onChange={handleChange}
              className={`mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-black focus:outline-none focus:ring`}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={query.email}
              onChange={handleChange}
              className={`mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-black focus:outline-none focus:ring`}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-white ">Message</label>
            <textarea
              id="message"
              name="message"
              value={query.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-black focus:outline-none focus:ring"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="mb-4 ">
            <label htmlFor="file" className=" block text-sm font-medium text-white">File</label>
            <input type="file" name="file" className="text-white p-2" onChange={handleFileChange} />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-gray-700 p-2 text-white hover:bg-white hover:text-gray-700 focus:border-black focus:outline-none focus:ring"
          >
            Send Message
          </button>
          {formStatus && <p className="mt-4 text-white">Message sent.</p>}
        </form>
      </div>
    </div>
  );
}