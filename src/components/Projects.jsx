import MoovIcon from '../assets/MoovIcon.png';
import TicTacToeIcon from '../assets/TicTacToeIcon.png';
import Weather from '../assets/Weather.png';
import ToDoList from '../assets/ToDoList.png';
import Restaurant from '../assets/Restaurant.png';
import ProjectCard from './ProjectCard'; // Import the reusable component

function Projects() {
    const projectData = [
        {
            image: MoovIcon,
            title: "Moov-Movie",
            description: "A full Responsive movie web site built using React and Tailwind CSS",
            demoLink: "https://qosay-abu-alrob.github.io/Moov-Movie/",
            githubLink: "https://github.com/Qosay-Abu-Alrob/Moov-Movie"
        },
        {
            image: TicTacToeIcon,
            title: "Tic-Tac-Toe",
            description: "A Tic-Tac-Toe App Game built using React",
            demoLink: "https://qosay-abu-alrob.github.io/Tic-Tac-Toe-Game/",
            githubLink: "https://github.com/Qosay-Abu-Alrob/Tic-Tac-Toe-Game"
        },
        {
            image: Weather,
            title: "Weather App",
            description: "A Weather website built using JS based on API",
            demoLink: "https://qosay-abu-alrob.github.io/Weather-App/",
            githubLink: "https://github.com/Qosay-Abu-Alrob/Weather-App"
        },
        {
            image: ToDoList,
            title: "To-Do-List App",
            description: "To-Do-List Tasks web application built using JS",
            demoLink: "https://qosay-abu-alrob.github.io/To-Do-List-APP/",
            githubLink: "https://github.com/Qosay-Abu-Alrob/To-Do-List-APP"
        },
        {
            image: Restaurant,
            title: "Restaurant-Website",
            description: "A full responsive Restaurant website built using JS",
            demoLink: "https://qosay-abu-alrob.github.io/Restaurant-Website/",
            githubLink: "https://github.com/Qosay-Abu-Alrob/Restaurant-Website"
        }
    ];

    return (
        <section id="Projects" className="xs:px-5 sm:px-20 bg-background pb-10">
            <div>
                <h1 className="xs:text-[28px] md:text-[56px] xs:pt-5 text-center text-primary">Projects</h1>
                <div className="flex flex-wrap justify-center gap-5 xs:place-items-center">
                    {projectData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            demoLink={project.demoLink}
                            githubLink={project.githubLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;