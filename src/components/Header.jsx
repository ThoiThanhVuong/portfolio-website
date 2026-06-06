import ThemeToggle from "@/components/ThemeToggle";
import { motion,AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react"
import { Link, NavLink } from "react-router-dom";


const Header = () => {
 
  const [isOpen,setIsOpen]= useState(false);
  const toggleMenu =()=>setIsOpen(!isOpen);
  const closeMenu = ()=> setIsOpen(false);

  const handleKeyDown =(e)=>{
    if(e.key ==="Enter" || e.key === " "){
      e.preventDefault();
      toggleMenu();
    }
  };

  const navLinks =[
    {path:"/",label:"Trang chủ"},
    {path:"/resume",label:"Hồ sơ (CV)"},
    {path:"/skills",label:"Kỹ năng"},
    {path:"/projects",label:"Dự án"},
    {path:"/contact",label:"Liên hệ"},
  ];

  return (
    <div className="site-header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="site-logo" onClick={closeMenu}>
        <span className="logo-text">Thanh Vương</span>
        </Link>

        {/* navigation desktop */}
        <nav className="desktop-nav" aria-label="Desktop navigation">
          {navLinks.map((link)=>(
            <NavLink key={link.path} to={link.path}
              className={({isActive})=> `nav-item ${isActive ? "active":""}` }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle/>

          <button className="mobile-menu-toggle"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isOpen ? "Đóng menu":"Mở menu"}
            type="button"
          >
            {isOpen ? <X size={24}/>:<Menu/>}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
           initial={{opacity:0,height:0}}
           animate={{opacity:1,height:'auto'}}
           exit={{opacity:0,height:0}}
           transition={{duration:0.3,ease:"easeInOut"}}
           className="mobile-drawer"
           id="mobile-nav-menu"
          >
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navLinks.map((link,index)=>(
                <motion.div 
                initial={{opacity:0,x:-20}}
                animate={{opacity:1,x:0}}
                transition={{delay:index*0.05}}
                key={link.path}
                >
                  <NavLink
                    to={link.path}
                    className={({isActive})=>`mobile-nav-item ${isActive ? "active":" "}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>                  
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header