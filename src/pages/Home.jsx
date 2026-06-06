import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Briefcase } from "lucide-react";
import { profileData } from "@/data/profile";
import { pageVariants, transitionConfig } from "@/utils/motion";

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={transitionConfig}
      className="home-page"
    >
      <section className="hero-section">
        <div className="hero-content">
          
          {/* Avatar */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="avatar-container"
          >
            <img 
              src={profileData.avatar} 
              alt={profileData.name} 
              className="hero-avatar"
              loading="lazy"
            />
            <div className="avatar-ring"></div>
          </motion.div>
          {/* Tên hiển thị với gradient màu tím */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hero-name"
          >
            Hi, mình là <span className="highlight">{profileData.name}</span>
          </motion.h1>
          {/* Chức danh ứng tuyển */}
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hero-title"
          >
            {profileData.title}
          </motion.h2>
          {/* Đoạn giới thiệu tóm tắt */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hero-desc"
          >
            {profileData.objective}
          </motion.p>
          {/* button action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="cta-group"
          >
            <Link to="/resume" className="btn btn-primary">
              Xem Hồ Sơ
              <ArrowRight size={18} />
            </Link>
            
            <Link to="/projects" className="btn btn-secondary">
              Xem Dự Án
              <Briefcase size={18} />
            </Link>
            {/* Tải CV dạng PDF */}
            <a 
              href="/CV.pdf" 
              download="CV_ThoiThanhVuong.pdf" 
              className="btn btn-outline"
            >
              Tải CV (PDF)
              <FileText size={18} />
            </a>
          </motion.div>
          
        </div>
      </section>
    </motion.div>
  );
}

export default Home