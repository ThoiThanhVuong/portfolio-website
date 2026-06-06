import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, AlertCircle } from "lucide-react";
import { scaleVariants, transitionConfig } from "@/utils/motion";

const NotFound = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={scaleVariants}
      transition={transitionConfig}
      className="not-found-page"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 220px)",
        textAlign: "center",
        padding: "40px 20px"
      }}
    >
      <AlertCircle size={64} style={{ color: "var(--accent)", marginBottom: "16px" }} />
      <h1 style={{ fontSize: "4rem", marginBottom: "8px", fontWeight: "800" }}>404</h1>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "16px", color: "hsl(var(--text-primary))" }}>
        Không tìm thấy trang yêu cầu
      </h2>
      <p style={{ color: "hsl(var(--text-secondary))", marginBottom: "24px", maxWidth: "450px" }}>
        Đường dẫn bạn truy cập không tồn tại hoặc đã bị thay đổi. Vui lòng quay lại Trang Chủ.
      </p>
      <Link to="/" className="btn btn-primary">
        <Home size={18} />
        Quay lại Trang Chủ
      </Link>
    </motion.div>
  );
}
export default NotFound;
