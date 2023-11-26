export default function ContactMe() {
  const backgroundImage = 'url("https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'; // Replace with your image URL

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: backgroundImage, backgroundSize: 'cover' }}
    >
      <div className="bg-[#587360] p-8 rounded-xl shadow-lg w-full max-w-md  border-[#475d4e] border-4">
        <h2 className="text-3xl font-bold mb-6 text-white flex justify-center">Contact Me</h2>
        <form>
          <div className="mb-4">
            <label style={{ fontFamily: 'Rubik, san serif' }} htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-black"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label style={{ fontFamily: 'Rubik, san serif' }} htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-black"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label style={{ fontFamily: 'Rubik, san serif' }} htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-black"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            style={{ fontFamily: 'Rubik, san serif' }} className="w-full bg-gray-700 text-white p-2 rounded-md hover:bg-white hover:text-gray-700 focus:outline-none focus:ring focus:border-black"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

