import React, { useState } from 'react';
import './MenuBar.css';

const MenuBar = ({ 
  logo, 
  menuItems = [], 
  onMenuClick, 
  className = '',
  theme = 'light' 
}) => {
  const [activeItem, setActiveItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (item, index) => {
    setActiveItem(index);
    if (onMenuClick) {
      onMenuClick(item, index);
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`menubar ${theme} ${className}`}>
      <div className="menubar-container">
        {/* 로고 영역 */}
        <div className="menubar-logo">
          {logo && (
            typeof logo === 'string' ? 
              <img src={logo} alt="Logo" /> : 
              logo
          )}
        </div>

        {/* 데스크톱 메뉴 */}
        <div className="menubar-items">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`menubar-item ${activeItem === index ? 'active' : ''}`}
              onClick={() => handleMenuClick(item, index)}
              disabled={item.disabled}
            >
              {item.icon && <span className="menubar-icon">{item.icon}</span>}
              <span className="menubar-text">{item.label}</span>
            </button>
          ))}
        </div>

        {/* 모바일 햄버거 메뉴 */}
        <button 
          className="menubar-mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="메뉴 토글"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* 모바일 메뉴 드롭다운 */}
      {isMobileMenuOpen && (
        <div className="menubar-mobile-menu">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`menubar-mobile-item ${activeItem === index ? 'active' : ''}`}
              onClick={() => handleMenuClick(item, index)}
              disabled={item.disabled}
            >
              {item.icon && <span className="menubar-icon">{item.icon}</span>}
              <span className="menubar-text">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MenuBar;