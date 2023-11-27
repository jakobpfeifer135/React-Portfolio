import aboutMe from "../assets/images/aboutMe.jpg";

export default function About() {
  return (
    <>
      <section className="flex  bg-[#43734A] p-20  text-[#F1F2E9] sm:block sm:flex-wrap sm:px-40 sm:py-20 ">
        <div className="flex-wrap text-center">
          <h2 className="text-2xl">Hi There!</h2>
          <h1 className="text-3xl font-bold">I'm a Full-Stack Web Developer</h1>
          <h2 className="text-2xl">I make complex look simple.</h2>
          <button
            style={{ fontFamily: "Rubik, san serif" }}
            className="mt-5 h-10 w-40 rounded-lg  bg-[#637368] shadow-md shadow-[#182612] hover:bg-[#A0A698]"
          >
            Contact Me
          </button>
          <ul className="sm:text-md pt-5 text-lg">
            <li style={{ fontFamily: "Rubik, san serif" }}>
              Hello, I'm a soon-to-be graduate from SMU with expertise in the
              MERN stack. As a dynamic web developer, I excel in crafting
              interactive and seamless user experiences. With a foundation in
              computer science and a commitment to staying knowledgeable on
              industry trends, I'm enthusiastic about leveraging my skills to
              contribute to innovative projects and explore new challenges in
              the field of web development.
            </li>
          </ul>
        </div>

        <div className=" sm:flex sm:justify-center ">
          <img
            className="  mt-5 hidden max-h-[350px]  max-w-[500px] rounded-full bg-[#475d4e] object-cover p-3 sm:block"
            src={aboutMe}
            alt=""
          />
        </div>
      </section>
      <section>
        {/* <p className="text-white text-4xl">hello world</p> */}
        <img
          className="h-screen w-full object-cover"
          src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </section>
    </>
  );
}
