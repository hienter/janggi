'use client'

import React from 'react';
import { Layout, Typography } from 'antd';
import { 
  HomeOutlined, 
  SettingOutlined, 
  TeamOutlined, 
  PhoneOutlined, 
  UserOutlined,
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined 
} from '@ant-design/icons';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';

const { Header, Content } = Layout;
const { Title } = Typography;

export default function Home() {
  const menuItems = [
    { 
      key: 'home',
      label: '홈', 
      icon: <HomeOutlined />,
      action: () => console.log('홈 클릭')
    },
    { 
      key: 'services',
      label: '서비스', 
      icon: <SettingOutlined />,
      action: () => console.log('서비스 클릭')
    },
    { 
      key: 'about',
      label: '회사소개', 
      icon: <TeamOutlined />,
      action: () => console.log('회사소개 클릭')
    },
    { 
      key: 'contact',
      label: '문의하기', 
      icon: <PhoneOutlined />,
      action: () => console.log('문의하기 클릭')
    },
    { 
      key: 'login',
      label: '로그인', 
      icon: <UserOutlined />,
      action: () => console.log('로그인 클릭')
    }
  ];

  const footerLinks = [
    { label: '홈', url: '#home' },
    { label: '서비스', url: '#services' },
    { label: '회사소개', url: '#about' },
    { label: '문의하기', url: '#contact' },
    { label: '개인정보처리방침', url: '#privacy' },
    { label: '이용약관', url: '#terms' }
  ];

  const socialLinks = [
    { icon: <GithubOutlined />, url: 'https://github.com', name: 'GitHub' },
    { icon: <TwitterOutlined />, url: 'https://twitter.com', name: 'Twitter' },
    { icon: <LinkedinOutlined />, url: 'https://linkedin.com', name: 'LinkedIn' }
  ];

  const contactInfo = {
    address: '서울특별시 강남구 테헤란로 123',
    phone: '02-1234-5678',
    email: 'contact@company.com'
  };

  const handleMenuClick = (item, key) => {
    console.log(`메뉴 클릭: ${item.label} (키: ${key})`);
    if (item.action) {
      item.action();
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 헤더 - 메뉴바 */}
      <Header style={{ padding: 0, height: 'auto' }}>
        <MenuBar 
          logo="🚀 NextJS Company"
          menuItems={menuItems}
          onMenuClick={handleMenuClick}
          theme="light"
        />
      </Header>

      {/* 메인 컨텐츠 */}
      <Content style={{ padding: '24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Title level={1} style={{ textAlign: 'center', marginBottom: '32px' }}>
            대시보드
          </Title>
        </div>
      </Content>

      {/* 푸터 */}
      <Footer
        companyName="NextJS Company"
        copyright="2024"
        links={footerLinks}
        socialLinks={socialLinks}
        contactInfo={contactInfo}
        theme="light"
      />
    </Layout>
  );
}