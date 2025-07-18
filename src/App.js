import React from 'react';
import MenuBar from './components/MenuBar';
import './App.css';

function App() {
  const menuItems = [
    { 
      label: '홈', 
      icon: '🏠',
      action: () => console.log('홈 클릭')
    },
    { 
      label: '서비스', 
      icon: '⚙️',
      action: () => console.log('서비스 클릭')
    },
    { 
      label: '회사소개', 
      icon: '🏢',
      action: () => console.log('회사소개 클릭')
    },
    { 
      label: '문의하기', 
      icon: '📞',
      action: () => console.log('문의하기 클릭')
    },
    { 
      label: '로그인', 
      icon: '👤',
      action: () => console.log('로그인 클릭')
    }
  ];

  const handleMenuClick = (item, index) => {
    console.log(`메뉴 클릭: ${item.label} (인덱스: ${index})`);
    if (item.action) {
      item.action();
    }
  };

  return (
    <div className="App">
      <MenuBar 
        logo="🌟 MyLogo"
        menuItems={menuItems}
        onMenuClick={handleMenuClick}
        theme="light"
        className="custom-menubar"
      />
      
      <main className="main-content">
        <h1>메뉴바 컴포넌트 예시</h1>
        <p>위의 메뉴바는 반응형으로 제작되었습니다.</p>
        <p>화면 크기를 조정해보세요 (768px 이하에서 모바일 메뉴로 전환됩니다).</p>
        
        <div className="features">
          <h2>주요 기능</h2>
          <ul>
            <li>반응형 디자인 (데스크톱/모바일)</li>
            <li>라이트/다크 테마 지원</li>
            <li>아이콘 지원</li>
            <li>활성 상태 표시</li>
            <li>클릭 이벤트 처리</li>
            <li>커스텀 스타일링 가능</li>
          </ul>
        </div>

        <div className="example-section">
          <h2>다크 테마 예시</h2>
          <MenuBar 
            logo="🌙 DarkLogo"
            menuItems={menuItems.slice(0, 3)}
            onMenuClick={handleMenuClick}
            theme="dark"
          />
        </div>
      </main>
    </div>
  );
}

export default App;