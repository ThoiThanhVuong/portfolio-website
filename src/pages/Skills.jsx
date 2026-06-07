import { motion } from "framer-motion";
import { Cpu, Award, Globe } from "lucide-react";
import { skillsData } from "@/data/skills";
import { pageVariants, transitionConfig } from "@/utils/motion";

const Skills = () => {

  return (
    <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={transitionConfig}
    >
      <div className="skills-container">
        {/* Technical skills */}
        <div className="skills-column">
          <div className="skill-card">
            <h3 className="skill-section-title">
              <Cpu size={22} className="title-icon"/>
              Kỹ Năng Chuyên Môn
            </h3>
            <div className="skills-groups">
              {skillsData.technical.map((group,groupIndex)=>(
                <div key={groupIndex} className="skill-group">
                  <h4 className="skill-group-name">{group.category}</h4>
                  <div className="skill-badges-grid">
                    {group.items.map((skill,skillIndex)=>(
                      <motion.div
                        key={skillIndex}
                        className="skill-badge-item"
                        whileHover={{ y: -3 }}
                        style={{
                          "--skill-color": skill.color || "var(--accent)"
                        }}
                      >
                        <span className="skill-badge-dot"></span>
                        <span className="skill-badge-name">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* KỸ NĂNG MỀM & NGOẠI NGỮ */}
        <div className="skills-column">
              <div className="skills-card soft-skills-card">
                <h3 className="skills-section-title">
                  <Award size={22} className="title-icon"/>
                  Kỹ Năng Mềm
                </h3>
                <div className="soft-skills-grid">
                  {skillsData.soft.map((skill,index)=>(
                    <motion.div
                      key={index}
                      whileHover={{y:-4,scale:1.02}}
                      className="soft-skill-item"
                    >
                      <h4 className="soft-skill-name">{skill.name}</h4>
                      <p className="soft-skill-desc">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/*Ngôn Ngữ */}
              <div className="skills-card language-card">
                <h3 className="skills-section-title">
                  <Globe size={22} className="title-icon"/>
                  Ngoại Ngữ
                </h3>
                <div className="languages-list">
                  {skillsData.languages.map((language,index)=>(
                    <div key={index} className="language-item">
                        <div className="lang-info">
                          <span className="lang-name">{language.name}</span>
                          <span className="lang-desc">{language.level}</span>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills