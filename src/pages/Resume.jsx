import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Mail, Phone, MapPin, User, GraduationCap, Briefcase } from "lucide-react";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { pageVariants, transitionConfig } from "@/utils/motion";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={transitionConfig}
      className="resume-page"
    >
      <div className="resume-container">
        
        {/*  THÔNG TIN CÁ NHÂN */}
        <div className="resume-sidebar">
          <div className="sidebar-card">
            <div className="sidebar-avatar-wrapper">
              <img src={profileData.avatar} alt={profileData.name} className="sidebar-avatar" />
            </div>
            <h2 className="sidebar-name">{profileData.name}</h2>
            <p className="sidebar-title">{profileData.title}</p>
            
            <hr className="divider" />
            
            <div className="info-list">
              <div className="info-item">
                <Calendar size={18} className="info-icon" />
                <div>
                  <span className="info-label">Ngày sinh: </span>
                  <span className="info-value">{profileData.personalInfo.dob}</span>
                </div>
              </div>
              <div className="info-item">
                <User size={18} className="info-icon" />
                <div>
                  <span className="info-label">Giới tính: </span>
                  <span className="info-value">{profileData.personalInfo.gender}</span>
                </div>
              </div>
              <div className="info-item">
                <MapPin size={18} className="info-icon" />
                <div>
                  <span className="info-label">Địa chỉ: </span>
                  <span className="info-value">{profileData.personalInfo.address}</span>
                </div>
              </div>
              <div className="info-item">
                <Mail size={18} className="info-icon" />
                <div>
                  <span className="info-label">Email: </span>
                  <a href={`mailto:${profileData.personalInfo.email}`} className="info-value link">
                    {profileData.personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="info-item">
                <Phone size={18} className="info-icon" />
                <div>
                  <span className="info-label">Điện thoại:</span>
                  <a href={`tel:${profileData.personalInfo.phone}`} className="info-value link">
                    {profileData.personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Học Vấn / Kinh Nghiệm Dự Án */}
        <div className="resume-content">
          
          <div className="tab-buttons">
            <button
              onClick={() => setActiveTab("education")}
              className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
            >
              <GraduationCap size={20} />
              Học Vấn & Mục Tiêu
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
            >
              <Briefcase size={20} />
              Dự Án & Kinh Nghiệm
            </button>
          </div>
        
          <div className="tab-content">
            <AnimatePresence mode="wait">
              {activeTab === "education" ? (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="content-card">
                    <h3 className="section-title">Mục Tiêu Nghề Nghiệp</h3>
                    <p className="objective-text">{profileData.objective}</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-title">Lịch Sử Học Vấn</h3>
                    {profileData.education.map((edu, idx) => (
                      <div key={idx} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-header">
                          <h4>{edu.school}</h4>
                          <span className="timeline-date">{edu.duration}</span>
                        </div>
                        <p className="timeline-sub">{edu.major}</p>
                        <p className="timeline-gpa">
                          <strong>GPA:</strong> <span className="highlight-gpa">{edu.gpa}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="content-card">
                    <h3 className="section-title">Dự Án & Kinh Nghiệm Thực Tế</h3>
                    {projectsData.slice(0, 2).map((proj, idx) => (
                      <div key={proj.id} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-header">
                          <h4>{proj.name}</h4>
                          <span className="timeline-date">
                            {idx === 0 ? "Tháng 2/2026 – Tháng 4/2026" : "Tháng 10/2025 – Tháng 11/2025"}
                          </span>
                        </div>
                        <p className="timeline-sub">
                          {idx === 0 ? "Dự án cá nhân | Full-stack Developer" : "Dự án nhóm (4 người) | Backend Developer"}
                        </p>
                        <p className="timeline-desc">{proj.description}</p>
                        
                        <ul className="timeline-details">
                          {idx === 0 ? (
                            <>
                              <li>Xây dựng API Backend bằng NestJS và TypeScript quản lý kho, nhân sự, tài chính.</li>
                              <li>Tích hợp xác thực, phân quyền JWT bảo mật hệ thống.</li>
                              <li>Thiết kế giao diện bằng Next.js, Tailwind CSS và tích hợp AI Assistant.</li>
                            </>
                          ) : (
                            <>
                              <li>Thiết kế các API RESTful cho ký số, xác thực và quản lý tài liệu số bằng Node.js & Express.</li>
                              <li>Thiết kế cấu trúc cơ sở dữ liệu PostgreSQL thông qua TypeORM.</li>
                              <li>Xây dựng hàng đợi tự động gửi thông báo hết hạn tài liệu bằng node-cron.</li>
                            </>
                          )}
                        </ul>
                        <div className="tech-tags">
                          {proj.tags.map(tag => (
                            <span key={tag} className="tech-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}

export default Resume