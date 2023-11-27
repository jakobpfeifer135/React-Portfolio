const Resume = () => {
  const backgroundImage = 'url("https://images.unsplash.com/photo-1508193638397-1c4234db14d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
  return (
    <div className="container mx-auto bg-[#A4BF69] p-8" style={{ backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="mb-8 text-center text-4xl font-bold text-white">Resume</h1>

      {/* Downloadable Resume Link */}
      <p className="mb-8 text-center text-2xl text-white">
        You can download my resume{" "}
        <a
          href="src/assets/images/JakobPfeiferResume.pdf"
          download
          className="text-[#B3FF66] underline-offset-4 underline"
        >
          here
        </a>
        .
      </p>

      {/* Proficiencies Section */}
      <div className="mb-8 bg-[#5C7345] p-5 text-white">
        <h2 className="mb-4 text-2xl font-bold">Technical Proficiencies</h2>
        <ul className="grid grid-cols-2 gap-2">
          <li className="ml-4 list-disc">MongoDb</li>
          <li className="ml-4 list-disc">Express.js</li>
          <li className="ml-4 list-disc">React</li>
          <li className="ml-4 list-disc">Node.js</li>
          <li className="ml-4 list-disc">JavaScript (ES6+)</li>
          <li className="ml-4 list-disc">HTML5</li>
          <li className="ml-4 list-disc">CSS3</li>
          <li className="ml-4 list-disc">Tailwind CSS</li>
          {/* Add more proficiencies as needed */}
        </ul>
      </div>

      {/* Experience Section (You can add more details as needed) */}
      <div className="mb-8 bg-[#5C7345] text-white">
        <h2 className="mb-4 p-4 text-2xl font-bold">Professional Experience</h2>
        <div className=" mb-4 rounded p-8 shadow-md">
          <h3 className="mb-2 text-lg font-semibold">
            Restaurant Manager at Old Iron Post
          </h3>
          <p className="text-white">
            • Maintained a high level of customer service by addressing patron
            complaints promptly and professionally.<br/>
             • Cultivated positive
            relationships with customers through excellent hospitality services.<br/>
            • Provided leadership by setting clear expectations for team
            members. <br/>
            • Analyzed customer feedback and implemented strategies to
            improve service.<br/>
             • Reviewed monthly financial statements to assess
            performance against budget objectives.
          </p>
        </div>
        {/* Add more experience entries as needed */}
      </div>

      {/* Education Section (You can add more details as needed) */}
      <div className="mb-8 bg-[#5C7345] text-white">
        <h2 className="mb-4 p-4 text-2xl font-bold">Education</h2>
        <div className=" mb-4 rounded p-8 shadow-md">
          <h3 className="mb-2 text-lg font-semibold">
            Full Stack Flex Web-Development Certification
          </h3>
          <p className="text-white">
            A Full Stack FLex Web-Developer certification from SMU primarily
            focused upon the learning and implementation of the MERN stack.
          </p>
        </div>
        {/* Add more education entries as needed */}
      </div>
    </div>
  );
};

export default Resume;
