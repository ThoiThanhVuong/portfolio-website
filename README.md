# 🌟 Personal Portfolio Website (CV Cá Nhân) - Thới Thanh Vương

Dự án Website giới thiệu năng lực và CV cá nhân dành cho vị trí tuyển dụng **Frontend Developer Intern** tại **GENX PK STORY**. Website được xây dựng trên nền tảng React.js hiện đại, tối ưu SEO, khả năng tương thích cao (Responsive) và giao diện Dark/Light mode ấn tượng mang phong cách Cosmic Purple.

- **GitHub Repository**: [https://github.com/ThoiThanhVuong/portfolio-website](https://github.com/ThoiThanhVuong/portfolio-website)
- **Live Demo**: [https://portfolio-website-thanh-vuong.vercel.app](https://portfolio-website-thanh-vuong.vercel.app) *(Hoặc thay thế bằng link Vercel thực tế của bạn)*

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

* **Frontend Core**: React 19, JavaScript (ES6+), Semantic HTML5, CSS3 Variables.
* **Build Tool**: Vite (v6.0.0) tối ưu tốc độ khởi động và đóng gói.
* **Routing**: React Router DOM (v7+) quản lý điều hướng SPA và trạng thái active của Menu.
* **Animations & Effects**: 
  * `framer-motion` (v12) xử lý chuyển cảnh mượt mà giữa các trang (Page transitions) và vi tương tác (micro-interactions) trên các nút, thẻ card.
  * `canvas-confetti` tạo hiệu ứng pháo hoa khi gửi biểu mẫu liên hệ thành công.
* **Icons**: `lucide-react` & `@fortawesome/react-fontawesome` (brand icons như GitHub, LinkedIn).
* **Linter**: ESLint quản lý chất lượng code, đảm bảo dự án sạch sẽ không có lỗi/cảnh báo dư thừa.

---

## ✨ Các Tính Năng Đã Hoàn Thành (Key Features)

### 1. Điều Hướng & Chuyển Cảnh Mượt Mà (Routing & Transitions)
* Quản lý 5 Route trang chính: `/` (Trang chủ), `/resume` (Hồ sơ), `/skills` (Kỹ năng), `/projects` (Dự án), `/contact` (Liên hệ) và trang lỗi `/404`.
* Setup `ScrollToTop` tự động đưa màn hình lên đầu trang mỗi khi thay đổi route.
* **Animation Chuyển Trang**: Tích hợp `AnimatePresence` từ Framer Motion giúp tạo hiệu ứng chuyển động mượt mà khi người dùng nhấn navbar hoặc nút kêu gọi hành động (CTA).

### 2. Trang Chủ Thẩm Mỹ & Chuyên Nghiệp (Homepage)
* Thiết kế Hero Section rực rỡ với hiệu ứng Gradient Cosmic Purple.
* Avatar cá nhân đi kèm hiệu ứng vòng tròn sáng chuyển động tinh tế.
* Các nút CTA rõ ràng: Tải CV trực tiếp (dạng tệp PDF thực tế), xem hồ sơ chi tiết và xem dự án.

### 3. Lý Lịch Dạng Tabs Đa Năng (Resume)
* Trình bày lý lịch khoa học: mục tiêu nghề nghiệp ngắn hạn/dài hạn, thông tin cá nhân.
* **Hệ thống Tabs tương tác**: Cho phép người dùng chuyển đổi mượt mà giữa tab "Học vấn & Mục tiêu" và "Dự án & Kinh nghiệm thực tế" của ứng viên.

### 4. Thanh Đo Kỹ Năng Động (Skills)
* Phân loại chi tiết kỹ năng Chuyên môn (Frontend, Backend, Công cụ), Kỹ năng mềm và Ngoại ngữ.
* Các thanh đo kỹ năng tự động load tiến trình động (từ 0% đến mức tự đánh giá) khi trang được tải. Mức đánh giá được điều chỉnh hợp lý, trung thực dành cho cấp độ Intern.

### 5. Bộ Lọc & Tìm Kiếm Dự Án Thông Minh (Projects)
* Dữ liệu dự án được quản lý tập trung trong file [projects.js](file:///d:/hocJS/portfolio/frontend/src/data/projects.js) và render động.
* Hỗ trợ tìm kiếm theo tên dự án (Search) và lọc theo ngôn ngữ/công nghệ (Filter tags) thời gian thực.
* Xử lý thông minh trạng thái dự án chưa triển khai (Demo Link: `null`): Tự động hiển thị nút Demo ở dạng `disabled` đi kèm Tooltip "Chưa triển khai".

### 6. Form Liên Hệ Chuẩn UX & Validate (Contact)
* Nhận đầu vào: Họ tên, Email, Tiêu đề, Nội dung tin nhắn.
* **Validate dữ liệu**: Kiểm tra các trường bắt buộc, định dạng email chuẩn regex, và nội dung tin nhắn tối thiểu 20 ký tự.
* **Trạng thái gửi (UX States)**: Khi bấm gửi, nút Submit hiển thị hiệu ứng Spinner quay tròn, bị vô hiệu hóa để tránh gửi lặp. Sau 1.5 giây (giả lập server phản hồi), kích hoạt pháo hoa chúc mừng và làm sạch form. Không sử dụng hàm `alert()` mặc định của trình duyệt.

### 7. Thiết Kế Sang Trọng & Responsive (UI/UX)
* **Dark/Light Mode**: Đồng bộ biến màu CSS Variables và lưu trữ lựa chọn của người dùng vào `localStorage` của trình duyệt.
* **Premium Glassmorphism**: Sử dụng hiệu ứng phản chiếu kính mờ huyền ảo cho các thẻ card, thanh tiêu đề (Header) và chân trang (Footer).
* **Responsive 100%**: Website được viết CSS tối ưu hiển thị hoàn hảo trên Mobile, Tablet, và Desktop.
* **Accessibility (A11y)**: Sử dụng chuẩn HTML5 ngữ nghĩa (`<header>`, `<nav>`, `<main>`, `<footer>`), các ảnh có `alt`, form có nhãn (`htmlFor`), menu trên điện thoại hỗ trợ phím điều hướng (`Enter` / `Space`).

---

## 📂 Cấu Trúc Thư Mục Dự Án

```text
frontend/
├── public/
│   ├── assets/                 # Logo, avatar, file CV (PDF) tải về
│   └── _redirects              # File cấu hình định tuyến SPA trên Netlify
├── src/
│   ├── components/             # Các component tái sử dụng (Header, Footer, ProjectCard, ThemeToggle...)
│   ├── data/                   # Quản lý dữ liệu tĩnh (profile, skills, projects)
│   ├── hooks/                  # Custom hook quản lý Theme (useTheme)
│   ├── pages/                  # Các trang chính tương ứng với các route (Home, Resume, Skills, Projects, Contact, NotFound)
│   ├── utils/                  # Centralized Motion animations (motion.js)
│   ├── App.jsx                 # Khởi tạo Routes và AnimatePresence
│   ├── index.css               # Hệ thống CSS Variables toàn cục (Theme light/dark)
│   └── main.jsx
├── vercel.json                 # Cấu hình chuyển hướng rewrite SPA trên Vercel
├── package.json
└── README.md
```

---

## ⚙️ Hướng Dẫn Chạy Dự Án Dưới Local

### Yêu cầu hệ thống:
* Máy tính đã cài đặt **Node.js** (Khuyến nghị phiên bản v20.18.0 trở lên).

### Các bước khởi chạy:

1. **Clone repository về máy**:
   ```bash
   git clone https://github.com/ThoiThanhVuong/portfolio-website.git
   ```

2. **Di chuyển vào thư mục dự án**:
   ```bash
   cd portfolio-website/frontend
   ```

3. **Cài đặt các thư viện phụ thuộc**:
   ```bash
   npm install
   ```

4. **Khởi chạy môi trường phát triển (Local Server)**:
   ```bash
   npm run dev
   ```
   *Mở trình duyệt truy cập địa chỉ hiển thị trong terminal (mặc định: `http://localhost:5173`).*

5. **Đóng gói sản phẩm biên dịch (Build Production)**:
   ```bash
   npm run build
   ```
   *Sản phẩm đầu ra được tối ưu hóa nén dung lượng nằm trong thư mục `dist/`.*
