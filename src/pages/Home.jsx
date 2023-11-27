import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const main = () => {
  return (
    <div id="main">
      <img
        className="h-screen w-full object-cover"
        src="https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="absolute left-0 top-0 h-screen w-full bg-black/30">
        <div className="m-auto flex h-full w-full max-w-[700px] flex-col items-center justify-center lg:items-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl ">
            {" "}
            Jakob Pfeifer{" "}
          </h1>
          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="flex pt-4 text-2xl font-semibold text-[#1d7829] sm:text-3xl"
          >
            <TypeAnimation
              sequence={[
                "MongoDb",
                2000,
                "Express.js",
                2000,
                "React",
                2000,
                "Node.js",
                2000,
                "Tailwind",
                2000,
                "MySql",
                2000,
                "JavaScript",
                2000,
              ]}
              wrapper="span"
              speed={60}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex w-full max-w-[200px] justify-between pt-6 text-white ">
            <a
              href="https://github.com/jakobpfeifer135"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="cursor-pointer hover:text-[#1d7829]"
                size={30}
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100011226934391"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                className="cursor-pointer hover:text-[#1d7829]"
                size={30}
              />
            </a>
            <a
              href="https://www.instagram.com/jakobpfeifer60/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="cursor-pointer hover:text-[#1d7829]"
                size={30}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jakob-pfeifer-747aa4220/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="cursor-pointer hover:text-[#1d7829]"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
