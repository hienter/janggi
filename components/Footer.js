'use client'

import React from 'react';
import { Layout, Row, Col, Space, Typography, Divider } from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined,
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  FacebookOutlined
} from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Title, Text, Link } = Typography;

const Footer = ({ 
  companyName = "회사명", 
  copyright = "2024", 
  links = [],
  socialLinks = [],
  contactInfo = {},
  theme = 'light'
}) => {
  const footerStyle = {
    backgroundColor: theme === 'dark' ? '#001529' : '#f0f2f5',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '40px 24px 24px',
    marginTop: 'auto'
  };

  const titleStyle = {
    color: theme === 'dark' ? '#fff' : '#000',
    marginBottom: '16px'
  };

  const textStyle = {
    color: theme === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.65)'
  };

  const linkStyle = {
    color: theme === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.65)',
    display: 'block',
    marginBottom: '8px',
    textDecoration: 'none'
  };

  const socialIconStyle = {
    fontSize: '20px',
    color: theme === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.65)',
    marginRight: '16px',
    cursor: 'pointer',
    transition: 'color 0.3s'
  };

  return (
    <AntFooter style={footerStyle}>
      <Row gutter={[32, 32]}>
        {/* 회사 정보 섹션 */}
        <Col xs={24} sm={12} md={8}>
          <Title level={4} style={titleStyle}>
            {companyName}
          </Title>
          <Text style={textStyle}>
            혁신적인 기술로 더 나은 세상을 만들어가는 회사입니다.
          </Text>
          
          {/* 소셜 미디어 링크 */}
          {socialLinks.length > 0 && (
            <div style={{ marginTop: '16px' }}>
              <Space>
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={socialIconStyle}
                    onMouseEnter={(e) => e.target.style.color = '#1890ff'}
                    onMouseLeave={(e) => e.target.style.color = theme === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.65)'}
                  >
                    {social.icon}
                  </a>
                ))}
              </Space>
            </div>
          )}
        </Col>

        {/* 빠른 링크 섹션 */}
        {links.length > 0 && (
          <Col xs={24} sm={12} md={8}>
            <Title level={4} style={titleStyle}>
              빠른 링크
            </Title>
            <div>
              {links.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : ""}
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#1890ff'}
                  onMouseLeave={(e) => e.target.style.color = theme === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.65)'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Col>
        )}

        {/* 연락처 정보 섹션 */}
        {Object.keys(contactInfo).length > 0 && (
          <Col xs={24} sm={24} md={8}>
            <Title level={4} style={titleStyle}>
              연락처
            </Title>
            <div>
              {contactInfo.address && (
                <div style={{ marginBottom: '8px' }}>
                  <Space>
                    <EnvironmentOutlined style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.65)' }} />
                    <Text style={textStyle}>{contactInfo.address}</Text>
                  </Space>
                </div>
              )}
              {contactInfo.phone && (
                <div style={{ marginBottom: '8px' }}>
                  <Space>
                    <PhoneOutlined style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.65)' }} />
                    <Link href={`tel:${contactInfo.phone}`} style={textStyle}>
                      {contactInfo.phone}
                    </Link>
                  </Space>
                </div>
              )}
              {contactInfo.email && (
                <div style={{ marginBottom: '8px' }}>
                  <Space>
                    <MailOutlined style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.65)' }} />
                    <Link href={`mailto:${contactInfo.email}`} style={textStyle}>
                      {contactInfo.email}
                    </Link>
                  </Space>
                </div>
              )}
            </div>
          </Col>
        )}
      </Row>

      {/* 구분선 */}
      <Divider style={{ 
        borderColor: theme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)',
        margin: '24px 0 16px'
      }} />

      {/* 저작권 정보 */}
      <div style={{ textAlign: 'center' }}>
        <Text style={textStyle}>
          © {copyright} {companyName}. All rights reserved.
        </Text>
      </div>
    </AntFooter>
  );
};

export default Footer;