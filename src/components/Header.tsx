import { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      // スクロール時にメニューを閉じる
      if (isMenuOpen) {
        closeMenu();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

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
        
        <nav 
          ref={navRef}
          className={`nav ${isMenuOpen ? 'nav-open' : ''}`} 
          id="nav-menu" 
          role="navigation" 
          aria-label="メインナビゲーション"
        >
          <ul className="nav-list">
            <li><button onClick={() => scrollToSection('home')} aria-label="ホームセクションへ移動">ホーム</button></li>
            <li><button onClick={() => scrollToSection('about')} aria-label="私たちについてセクションへ移動">私たちについて</button></li>
            <li><button onClick={() => scrollToSection('menu')} aria-label="メニューセクションへ移動">メニュー</button></li>
            <li><button onClick={() => scrollToSection('gallery')} aria-label="ギャラリーセクションへ移動">ギャラリー</button></li>
            {/* <li><button onClick={() => scrollToSection('contact')} aria-label="お問い合わせセクションへ移動">お問い合わせ</button></li> */}
          </ul>
        </nav>
        
        <div className="header-social">
          <a 
            href="https://www.instagram.com/bar.ohshitsu1205/"
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon instagram-icon"
            aria-label="InstagramでBAR王室をフォロー"
          >
            <img src="/instagram.png" alt="Instagram" className="social-icon-image" />
          </a>
          <a 
            href="https://www.google.co.jp/maps/place/BAR%E7%8E%8B%E5%AE%A4/@33.3155836,130.5100585,11z/data=!4m6!3m5!1s0x3541a4f9263faac3:0x36b0ad016eb220fb!8m2!3d33.3156269!4d130.509912!16s%2Fg%2F1tctjkpj?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon map-icon"
            aria-label="GoogleマップでBAR王室の場所を表示"
          >
            <img src="/googleMap.png" alt="Google Maps" className="social-icon-image" />
          </a>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="メニューを開く"
          aria-expanded={isMenuOpen}
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