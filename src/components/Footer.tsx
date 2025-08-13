
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
              <li>
                <a 
                  href="https://www.google.co.jp/maps/place/BAR%E7%8E%8B%E5%AE%A4/@33.3155836,130.5100585,11z/data=!4m6!3m5!1s0x3541a4f9263faac3:0x36b0ad016eb220fb!8m2!3d33.3156269!4d130.509912!16s%2Fg%2F1tctjkpj?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-link"
                  aria-label="Googleマップで場所を表示"
                >
                  📍 〒830-0017 福岡県久留米市日吉町５−１７BAR王室
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>フォローする</h4>
            <div className="social-links">
              <a 
                href="https://www.instagram.com/bar.ohshitsu1205/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link instagram-link" 
                aria-label="Instagramで王室をフォロー"
              >
                📷 Instagram
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