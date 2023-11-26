const ProjectCard = ({ project }) => {
    
    return (
        
      <div style={{ fontFamily: 'Playfair Display, serif' }} className="bg-[#43734A] p-6 rounded-md shadow-md mb-4 text-white font-bold">
        <img src={project.imageUrl} alt={`Project ${project.id}`} className="w-full h-40 object-cover mb-4 rounded-md border-black/30 border-2" />
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-white mb-4">{project.description}</p>
        <div className="flex space-x-4">
          <a
            style={{ fontFamily: 'Playfair Display, serif' }}
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline flex items-center"
          >
            <span className="mr-2 text-lg">Demo</span>
          </a>
          <a
            style={{ fontFamily: 'Playfair Display, serif' }}
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline flex items-center"
          >
            <span className="mr-2 text-lg">Code</span>
          </a>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;