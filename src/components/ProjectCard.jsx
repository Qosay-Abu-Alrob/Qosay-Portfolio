import PropTypes from 'prop-types';
function ProjectCard({ image, title, description, demoLink, githubLink }) {
    return (
        <div className="w-[300px] h-[380px] border rounded-lg transition-transform duration-300 transform hover:scale-105">
            <img src={image} alt={title} className="h-[220px] w-[300px]" />
            <h2 className="text-primary text-center my-2 font-bold text-2xl">{title}</h2>
            <p className="text-center text-darkblue px-2">{description}</p>
            <div className="mt-4 text-center">
                <a className="text-white bg-primary border-primary border rounded-md px-8 py-2 contact-hover" href={demoLink} target="_blank" rel="noopener noreferrer">
                    Demo
                </a>
                <a className="text-white bg-primary border-primary border rounded-md px-8 py-2 contact-hover ml-4" href={githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </div>
        </div>
    );
} 
ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    demoLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
};
export default ProjectCard;