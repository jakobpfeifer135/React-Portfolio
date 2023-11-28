import PortfolioCard from "../components/PortfolioCard";
import donutShop from "../assets/images/donutShop.png";
import scheduler from "../assets/images/scheduler.png";
import movieCave from "../assets/images/movieCave.png";
import portfolio from "../assets/images/portfolio.png";
import passwordGen from "../assets/images/passwordGen.png";
import firstPortfolio from "../assets/images/firstPortfolio.png";
const projectsData = [
  {
    id: 1,
    title: "Practice-website (donut shop)",
    description:
      "A simple practice website to practice demonstration of ui/ux design with a touch of back end implementation .",
    demoLink: "https://example.com/demo1",
    codeLink: "https://github.com/jakobpfeifer135/practice-website",
    imageUrl: donutShop,
  },
  {
    id: 2,
    title: "Movie Cave (Movie finder app)",
    description:
      "How to utilize apis and use concatenation to pull minute details from the array of info and use more than one api at a time and a huge part was getting to learn tailwind .",
    demoLink: "https://jakobpfeifer135.github.io/movie-project-1/",
    codeLink: "https://github.com/jakobpfeifer135/movie-project-1",
    imageUrl: movieCave,
  },
  {
    id: 3,
    title: "React Portfolio (How i made this!)",
    description:
      "A overall new experience for my coding journey a react and tailwind based portfolio for myself !",
    demoLink: "",
    codeLink: "https://github.com/jakobpfeifer135/React-Portfolio",
    imageUrl: portfolio,
  },
  {
    id: 4,
    title: "Random Password Generator",
    description:
      " To test all different types of arrays and concatenation in conjunction with on another and implement a more user based result of random characters .",
    demoLink: "https://jakobpfeifer135.github.io/password-Generator/",
    codeLink: "https://github.com/jakobpfeifer135/password-Generator",
    imageUrl: passwordGen,
  },
  {
    id: 5,
    title: "First Portfolio!",
    description:
      "My motivation was to learn implementation of display:flex as a whole, The different properties that surround this css structure, and how to manipulate it accordingly .",
    demoLink: "https://jakobpfeifer135.github.io/portfolio-challenge/",
    codeLink: "https://github.com/jakobpfeifer135/portfolio-challenge",
    imageUrl: firstPortfolio,
  },
  {
    id: 6,
    title: "Work-Day Scheduler",
    description:
      " I wanted to see how to use local storage in ones browser to store info shortly and learn how we can use dayjs to track real life time .",
    demoLink: "https://jakobpfeifer135.github.io/Work-day-scheduler/",
    codeLink: "https://github.com/jakobpfeifer135/Work-day-scheduler",
    imageUrl: scheduler,
  },

  // Add more projects as needed
];

const Portfolio = () => {
  const pageBackgroundImage =
    'url("https://images.unsplash.com/photo-1500389783522-18c9d0d14cbc?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'; // Replace with your image URL

  return (
    <div className="min-h-screen bg-cover" style={{ backgroundImage: pageBackgroundImage }}>
      <div className="container mx-auto p-8">
        <h1 className="mb-8 text-4xl font-bold text-white text-center font-serif">
          My Portfolio Showcase
        </h1>

        <div className="flex flex-wrap gap-8 justify-center">
          {projectsData.map((project) => (
            <div key={project.id} className="flex-none w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white/80 p-4 rounded-xl shadow h-full">
                <PortfolioCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
