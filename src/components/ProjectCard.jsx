import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({project}) => {

    const {name,description,tags,githubLink,demoLink,thumbnail}=project;
  return (
    <div className="project-card">
        {/* thumbnail project */}
        <div className="project-thumbnail-wrapper">
            <img src={thumbnail} alt={name} className="project-thumbnail" loading="lazy" />
        </div>
        <div className="project-info">
            <h4 className="project-name">{name}</h4>
            <p className="project-desc">{description}</p>
        </div>
        {/* tags technical */}
        <div className="project-tags">
            {tags.map((tag)=>(
                <span key={tag} className="project-tag-badge">{tag}</span>
            ))}
        </div>

        {/* button action */}
        <div className="project-actions">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-btn btn-github">
                <FontAwesomeIcon icon={faGithub}/>
                Code
            </a>
            {demoLink ? (
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-btn btn-demo">
                    <ExternalLink size={16} />
                    Demo
                </a>
            ):(
                <div className="demo-btn-wrapper" title="Chưa triển khai">
                    <button className="project-btn btn-demo disabled">
                        <ExternalLink size={16} />
                        Demo
                    </button>
                    <span className="tooltip-text">Chưa triển khai</span>
                </div>
            )}
        </div>
    </div>
  )
}

export default ProjectCard