export default function About() {
  
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Hello, I'm [Your Name]</h1>
          <p className="text-lg mb-4">
            Welcome to my digital space! I'm a passionate web developer with a strong commitment to
            creating immersive and innovative online experiences.
          </p>
          <p className="text-lg mb-4">
            With a background in React.js, JavaScript/TypeScript, HTML5, and CSS3, I specialize in
            crafting robust and visually stunning web applications.
          </p>
          <p className="text-lg">
            Let's collaborate to transform your ideas into captivating digital solutions. Explore my
            portfolio and reach out to kickstart our creative journey!
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="grid grid-cols-2 gap-4">
              <li className="text-lg">
                <span className="text-gray-400 mr-2">&#8226;</span> React.js
              </li>
              <li className="text-lg">
                <span className="text-blue-500 mr-2">&#8226;</span> JavaScript/TypeScript
              </li>
              <li className="text-lg">
                <span className="text-gray-400 mr-2">&#8226;</span> HTML5, CSS3
              </li>
              <li className="text-lg">
                <span className="text-purple-500 mr-2">&#8226;</span> Responsive Web Design
              </li>
              {/* Add more skills as needed */}
            </ul>
          </div>
        </div>
        <div className="order-first md:order-last">
          <div className="relative">
            <div className=" h-full w-full object-cover mx-auto md:mx-0 overflow-hidden">
              <img
                src="src/assets/images/bgimage.jpg" // Replace with your actual profile image URL
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black opacity-80"></div>
          </div>
        </div>
      </div>
    </div>
  );
};