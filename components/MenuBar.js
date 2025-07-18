'use client'

import React, { useState, useEffect } from 'react';
import { Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const MenuBar = ({ 
  logo, 
  menuItems = [], 
  onMenuClick, 
  theme = 'light',
  mode = 'horizontal'
}) => {
  const [current, setCurrent] = useState('');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuClick = (e) => {
    setCurrent(e.key);
    const item = menuItems.find(item => item.key === e.key);
    if (onMenuClick && item) {
      onMenuClick(item, e.key);
    }
    setDrawerVisible(false);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  // 메뉴 아이템들을 Ant Design Menu 형식으로 변환
  const menuItemsFormatted = menuItems.map(item => ({
    key: item.key || item.label,
    icon: item.icon,
    label: item.label,
    disabled: item.disabled,
  }));

  return (
    <>
      {/* 데스크톱 메뉴 */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 24px',
        backgroundColor: theme === 'dark' ? '#001529' : '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        {/* 로고 */}
        <div style={{ 
          marginRight: '24px', 
          fontSize: '18px', 
          fontWeight: 'bold',
          color: theme === 'dark' ? '#fff' : '#000'
        }}>
          {logo}
        </div>

        {/* 데스크톱 메뉴 */}
        <div style={{ 
          flex: 1, 
          display: isMobile ? 'none' : 'block'
        }}>
          <Menu
            theme={theme}
            mode={mode}
            selectedKeys={[current]}
            items={menuItemsFormatted}
            onClick={handleMenuClick}
            style={{ 
              border: 'none',
              backgroundColor: 'transparent'
            }}
          />
        </div>

        {/* 모바일 햄버거 버튼 */}
        <div style={{ 
          display: isMobile ? 'block' : 'none',
          marginLeft: 'auto'
        }}>
          <Button 
            type="text" 
            icon={<MenuOutlined />} 
            onClick={showDrawer}
            style={{ 
              color: theme === 'dark' ? '#fff' : '#000'
            }}
          />
        </div>
      </div>

      {/* 모바일 드로어 메뉴 */}
      <Drawer
        title={logo}
        placement="right"
        onClose={onClose}
        open={drawerVisible}
        width={280}
      >
        <Menu
          theme={theme}
          mode="vertical"
          selectedKeys={[current]}
          items={menuItemsFormatted}
          onClick={handleMenuClick}
          style={{ border: 'none' }}
        />
      </Drawer>
    </>
  );
};

export default MenuBar;