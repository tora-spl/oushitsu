import { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
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
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} id="nav-menu" role="navigation" aria-label="メインナビゲーション">
          <ul className="nav-list">
            <li><button onClick={() => scrollToSection('home')} aria-label="ホームセクションへ移動">ホーム</button></li>
            <li><button onClick={() => scrollToSection('about')} aria-label="私たちについてセクションへ移動">私たちについて</button></li>
            <li><button onClick={() => scrollToSection('menu')} aria-label="メニューセクションへ移動">メニュー</button></li>
            <li><button onClick={() => scrollToSection('gallery')} aria-label="ギャラリーセクションへ移動">ギャラリー</button></li>
            <li><button onClick={() => scrollToSection('contact')} aria-label="お問い合わせセクションへ移動">お問い合わせ</button></li>
          </ul>
        </nav>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleMenu();
            }
          }}
          aria-label="メニューを開く"
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
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