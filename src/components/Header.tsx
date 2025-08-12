import { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-image">
            <img src="/logo.png" alt="王室ロゴ" />
          </div>
          <div className="logo-text">
            <h1>王室</h1>
            <span className="tagline">エレガントな夜の体験</span>
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><button onClick={() => scrollToSection('home')}>ホーム</button></li>
            <li><button onClick={() => scrollToSection('about')}>私たちについて</button></li>
            <li><button onClick={() => scrollToSection('menu')}>メニュー</button></li>
            <li><button onClick={() => scrollToSection('gallery')}>ギャラリー</button></li>
            <li><button onClick={() => scrollToSection('contact')}>お問い合わせ</button></li>
          </ul>
        </nav>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;