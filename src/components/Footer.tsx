
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
                      <div className="footer-logo">
            <div className="footer-logo-image">
              <img src="/logo.png" alt="王室ロゴ" />
            </div>
            <div className="footer-logo-text">
              <h3>王室</h3>
              <p>エレガントな夜の体験</p>
            </div>
          </div>
            <p className="footer-description">
              最高品質のカクテルと洗練された空間で、<br />
              特別な夜をお過ごしいただきます。
            </p>
          </div>
          
          <div className="footer-section">
            <h4>営業時間</h4>
            <ul className="footer-list">
              <li>月曜日 - 日曜日</li>
              <li>18:00 - 翌4:00</li>
              <li>年中無休</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>お問い合わせ</h4>
            <ul className="footer-list">
              <li>📞 03-1234-5678</li>
              <li>✉️ info@luxebar.tokyo</li>
              <li>📍 東京都渋谷区神南1-2-3</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>フォローする</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                📷 Instagram
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                🐦 Twitter
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                👥 Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
                  <div className="footer-bottom-content">
          <p>&copy; {currentYear} 王室. All rights reserved.</p>
            <div className="footer-links">
              <a href="#" className="footer-link">プライバシーポリシー</a>
              <a href="#" className="footer-link">利用規約</a>
              <a href="#" className="footer-link">サイトマップ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;