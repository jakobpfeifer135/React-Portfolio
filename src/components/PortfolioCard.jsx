const ProjectCard = ({ project }) => {
  return (
    <div className="mb-4 rounded-md bg-[#43734A] p-6 font-bold text-white shadow-md ">
      <img
        src={project.imageUrl}
        alt={`Project ${project.id}`}
        className="mb-4 h-40 w-full rounded-md border-2 border-black/30 object-cover"
      />
      <h2 className="mb-2 text-xl font-bold">{project.title}</h2>
      <p className="mb-4 text-white">{project.description}</p>
      <div className="flex space-x-4">
        <a
          style={{ fontFamily: "Playfair Display, serif" }}
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white hover:underline"
        >
          <span className="mr-2 text-lg">Demo</span>
        </a>
        <a
          style={{ fontFamily: "Playfair Display, serif" }}
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white hover:underline"
        >
          <span className="mr-2 text-lg">Code</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
