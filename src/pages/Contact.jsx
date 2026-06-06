import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { profileData } from "@/data/profile";
import confetti from "canvas-confetti";
import { pageVariants, transitionConfig } from "@/utils/motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Hàm validate dữ liệu đầu vào
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Họ và tên không được để trống";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email không được để trống";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email không đúng định dạng (VD: example@mail.com)";
    }
    
    if (!formData.subject.trim()) tempErrors.subject = "Tiêu đề không được để trống";
    
    if (!formData.message.trim()) {
      tempErrors.message = "Nội dung tin nhắn không được để trống";
    } else if (formData.message.trim().length < 20) {
      tempErrors.message = `Nội dung phải dài tối thiểu 20 ký tự (Hiện tại: ${formData.message.trim().length} ký tự)`;
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1500);
    }
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={transitionConfig}
      className="contact-page"
    >
      <div className="contact-container">
        
        {/* thông tin khác */}
        <div className="contact-info-panel">
          <div className="info-card-header">
            <h3>Kết Nối Với Vương</h3>
            <p>Đừng ngần ngại liên hệ với mình qua các kênh dưới đây hoặc gửi lời nhắn trực tiếp qua form nhé!</p>
          </div>
          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="icon-box"><Mail size={20} /></div>
              <div>
                <span>Email</span>
                <p><a href={`mailto:${profileData.personalInfo.email}`}>{profileData.personalInfo.email}</a></p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="icon-box"><Phone size={20} /></div>
              <div>
                <span>Điện thoại</span>
                <p><a href={`tel:${profileData.personalInfo.phone}`}>{profileData.personalInfo.phone}</a></p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="icon-box"><MapPin size={20} /></div>
              <div>
                <span>Địa điểm</span>
                <p>{profileData.personalInfo.address}</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="icon-box"><FontAwesomeIcon icon={faGithub} /></div>
              <div>
                <span>GitHub</span>
                <p><a href={profileData.personalInfo.github} target="_blank" rel="noopener noreferrer">github.com/ThoiThanhVuong</a></p>
              </div>
            </div>
          </div>
        </div>
        {/* form*/}
        <div className="contact-form-panel">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                noValidate
                className="contact-form"
              >
                {/*Họ tên */}
                <div className="form-group">
                  <label htmlFor="name">Họ và Tên</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                    disabled={isSubmitting}
                    placeholder="Nhập họ và tên của bạn..."
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Địa chỉ Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                    disabled={isSubmitting}
                    placeholder="Nhập địa chỉ email liên hệ..."
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
                {/* Tiêu đề */}
                <div className="form-group">
                  <label htmlFor="subject">Tiêu đề tin nhắn</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? "error" : ""}
                    disabled={isSubmitting}
                    placeholder="Nhập tiêu đề thư..."
                  />
                  {errors.subject && <span className="error-text">{errors.subject}</span>}
                </div>
                {/*  Nội dung */}
                <div className="form-group">
                  <label htmlFor="message">Nội dung tin nhắn</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "error" : ""}
                    disabled={isSubmitting}
                    placeholder="Nhập nội dung tin nhắn (tối thiểu 20 ký tự)..."
                  ></textarea>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>
                {/* Nút gửi thư */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      Gửi tin nhắn
                      <Send size={18} />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              // thÔng báo gửi thành công
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="success-card"
              >
                <CheckCircle size={64} className="success-icon" />
                <h3>Gửi tin nhắn thành công!</h3>
                <p>Cảm ơn bạn đã liên hệ với mình. Mình sẽ phản hồi lại sớm nhất qua email của bạn.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="reset-btn"
                >
                  Gửi tin nhắn mới
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;