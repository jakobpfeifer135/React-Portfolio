
import PortfolioCard from '../components/PortfolioCard';

const projectsData = [
  {
    id: 1,
    title: 'Practice-website (donut shop)',
    description: 'A simple practice website to practice demonstration of ui/ux design with a touch of back end implementation .',
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/jakobpfeifer135/practice-website',
    imageUrl: 'src/assets/images/donutShop.png',
  },
  {
    id: 2,
    title: 'Movie Cave (Movie finder app)',
    description: 'How to utilize apis and use concatenation to pull minute details from the array of info and use more than one api at a time and a huge part was getting to learn tailwind .',
    demoLink: 'https://jakobpfeifer135.github.io/movie-project-1/',
    codeLink: 'https://github.com/jakobpfeifer135/movie-project-1',
    imageUrl: 'src/assets/images/movieCave.png',
  },
  {
    id: 3,
    title: 'React Portfolio (How i made this!)',
    description: 'A overall new experience for my coding journey a react and tailwind based portfolio for myself !',
    demoLink: '',
    codeLink: 'https://github.com/jakobpfeifer135/React-Portfolio',
    imageUrl: 'src/assets/images/portfolio.png',
  },
  {
    id: 4,
    title: 'Random Password Generator',
    description: ' To test all different types of arrays and concatenation in conjunction with on another and implement a more user based result of random characters .',
    demoLink: 'https://jakobpfeifer135.github.io/password-Generator/',
    codeLink: 'https://github.com/jakobpfeifer135/password-Generator',
    imageUrl: 'src/assets/images/passwordGen.png',
  },
  {
    id: 5,
    title: 'First Portfolio!',
    description: 'My motivation was to learn implementation of display:flex as a whole, The different properties that surround this css structure, and how to manipulate it accordingly .',
    demoLink: 'https://jakobpfeifer135.github.io/portfolio-challenge/',
    codeLink: 'https://github.com/jakobpfeifer135/portfolio-challenge',
    imageUrl: 'src/assets/images/firstPortfolio.png',
  },
  {
    id: 6,
    title: 'Work-Day Scheduler',
    description: ' I wanted to see how to use local storage in ones browser to store info shortly and learn how we can use dayjs to track real life time .',
    demoLink: 'https://jakobpfeifer135.github.io/Work-day-scheduler/',
    codeLink: 'https://github.com/jakobpfeifer135/Work-day-scheduler',
    imageUrl: 'src/assets/images/scheduler.png',
  },

  // Add more projects as needed
];

const Portfolio = () => {
  const pageBackgroundImage = 'url("https://images.unsplash.com/photo-1500389783522-18c9d0d14cbc?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'; // Replace with your image URL

  return (
    <div
      className="min-h-screen"
      style={{ backgroundImage: pageBackgroundImage, backgroundSize: 'cover' }}
    >
      <div className="max-w-3xl mx-auto p-8">
        <h1 style={{ fontFamily: 'Playfair Display, serif' }} className="text-4xl font-bold mb-8 text-white flex justify-center">
          My Portfolio Showcase
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;