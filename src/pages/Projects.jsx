import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Grid } from "lucide-react";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { pageVariants, transitionConfig } from "@/utils/motion";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("Tất cả");
  const allTags = ["Tất cả", ...new Set(projectsData.flatMap((p) => p.tags))];
  const filterProjects = projectsData.filter((project)=>{
    const matchesSearch= project.name.toLocaleLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "Tất cả" || project.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  })
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={transitionConfig}
      className="projects-page"
    >
      <div className="projects-header-card">
        <h2 className="project-title">
          <Grid size={24} className="title-icon"/>
          Các dự án đã thực hiện
        </h2>
        <p className="projects-subtitle">
          Danh sách các sản phẩm và dự án thực tế tôi từng tham gia thiết kế, phát triển.
        </p>
        <div className="filter-controls-container">
          {/* search */}
          <div className="search-bar-wrapper">
            <Search size={18} className="search-icon"/>
            <input type="text"
             className="search-input"
             placeholder="Tìm kiếm dự án.."
             value={searchQuery}
             onChange={(e)=>setSearchQuery(e.target.value)}
             />
          </div>
          <div className="tag-filter-buttons">
            {allTags.map((tag)=>(
              <button key={tag}
              onClick={()=>setSelectedTag(tag)}
              className={`filter-tag-btn ${selectedTag=== tag?"active":""}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filterProjects.map((project)=>(
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {filterProjects.length === 0 && (
        <div className="no-results-card">
          <p>Không tìm thấy dự án nào phù hợp với yêu cầu tìm kiếm</p>
        </div>
      )}
    </motion.div>
  )
}

export default Projects