
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo" aria-label="サイトフッター">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>営業時間</h4>
            <ul className="footer-list" role="list">
              <li role="listitem">
                <span className="footer-icon" aria-hidden="true">📅</span>
                <span className="footer-text">火曜日 - 日曜日</span>
              </li>
              <li role="listitem">
                <span className="footer-icon" aria-hidden="true">🕒</span>
                <span className="footer-text">20:00 - 翌2:00</span>
              </li>
              <li role="listitem">
                <span className="footer-icon" aria-hidden="true">🚫</span>
                <span className="footer-text">定休日：月曜日</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>お問い合わせ</h4>
            <ul className="footer-list" role="list">
              <li role="listitem">
                <span className="footer-icon" aria-hidden="true">📞</span>
                <a 
                  href="tel:0942-656062"
                  className="footer-phone-link"
                  aria-label="0942-656062に電話をかける"
                >
                  <span className="footer-text">0942-656062</span>
                </a>
              </li>
              <li role="listitem">
                <span className="footer-icon" aria-hidden="true">✉️</span>
                <a 
                  href="mailto:bar.ohshitsu1205@gmail.com"
                  className="footer-email-link"
                  aria-label="bar.ohshitsu1205@gmail.comにメールを送る"
                >
                  <span className="footer-text">bar.ohshitsu1205@gmail.com</span>
                </a>
              </li>
              <li role="listitem">
                <span className="footer-icon" aria-hidden="true">📍</span>
                <span className="footer-text">
                  〒830-0017<br />
                  福岡県久留米市日吉町５−１７<br />
                  BAR王室
                </span>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>フォローする</h4>
            <ul className="footer-list" role="list">
              <li role="listitem">
                <span className="footer-icon" aria-hidden="true">📷</span>
                <a 
                  href="https://www.instagram.com/bar.ohshitsu1205/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link instagram-link" 
                  aria-label="InstagramでBAR王室をフォロー"
                >
                  <span className="footer-text">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} 王室. All rights reserved.</p>
            <nav className="footer-links" role="navigation" aria-label="フッターナビゲーション">
              <a href="#" className="footer-link">プライバシーポリシー</a>
              <a href="#" className="footer-link">利用規約</a>
              <a href="#" className="footer-link">サイトマップ</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;