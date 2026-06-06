import { Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-text">Thanh Vương</span>
          </Link>
          <p className="footer-bio">
            Sinh viên chuyên ngành Hệ thống Thông tin - Đại học Sài Gòn. Đam mê thiết kế và xây dựng các sản phẩm web sáng tạo, tinh tế và tối ưu trải nghiệm người dùng.
          </p>
        </div>
        
        <div className="footer-links-group">
          <h3 className="footer-title">Khám phá</h3>
          <ul className="footer-links-list">
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/resume">Hồ sơ (CV)</Link></li>
            <li><Link to="/skills">Kỹ năng</Link></li>
            <li><Link to="/projects">Dự án</Link></li>
            <li><Link to="/contact">Liên hệ</Link></li>
          </ul>
        </div>

        <div className="footer-social-group">
          <h3 className="footer-title">Kết nối</h3>
          <p className="footer-connect-text">Liên hệ hoặc theo dõi tôi qua các nền tảng mạng xã hội.</p>
          <div className="footer-socials">
            <a 
              href="https://github.com/ThoiThanhVuong"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub cá nhân"
              title="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
      
            <a
              href="mailto:Thanhvuong0419@gmail.com"
              aria-label="Gửi email cho tôi"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {currentYear} Thới Thanh Vương. Bảo lưu mọi quyền.
        </p>
        <p className="footer-tagline">
          Thiết kế & phát triển bằng React + Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;