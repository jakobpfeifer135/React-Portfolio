import { useState, useEffect } from 'react';

const ProjectCard = ({ project }) => {
  const [imageSrc, setImageSrc] = useState(project.imageUrl);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 && project.imageUrl2) {
        // Change the image URL for small screens if imageUrl2 is available
        setImageSrc(project.imageUrl2);
      } else {
        // Use the original image URL for larger screens or if imageUrl2 is not available
        setImageSrc(project.imageUrl);
      }
    };

    // Initial call to set the image URL based on the initial screen size
    handleResize();

    // Event listener to update image URL when the window is resized
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [project.imageUrl, project.imageUrl2]);

  return (
    <div className="mb-4 rounded-md bg-[#43734A] p-6 font-bold text-white shadow-md min-h-[400px] md:min-h-[470px] relative">
      <img
        src={imageSrc}
        alt={`Project ${project.id}`}
        className="mb-4 h-40 md:h-56 lg:h-64 w-full rounded-md border-2 border-black/30 object-cover"
      />
      <h2 className="mb-2 text-xl font-bold ">{project.title}</h2>
      <p className="mb-4 text-white ">{project.description}</p>
      <div className="flex space-x-4 absolute bottom-2 left-0 right-0">
        <a
          style={{ fontFamily: "Playfair Display, serif" }}
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white hover:underline"
        >
          <span className="mx-4 text-lg">Demo</span>
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