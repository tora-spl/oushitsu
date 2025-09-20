
import './Footer.css';
import { useState } from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showModal, setShowModal] = useState<'privacy' | 'terms' | 'sitemap' | null>(null);

  const openModal = (type: 'privacy' | 'terms' | 'sitemap') => {
    setShowModal(type);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  const getModalContent = () => {
    switch (showModal) {
      case 'privacy':
        return {
          title: 'プライバシーポリシー',
          content: `
            <h3>個人情報の取り扱いについて</h3>
            <p>BAR王室（以下「当店」）は、お客様の個人情報を適切に管理し、保護することをお約束いたします。</p>
            
            <h4>1. 個人情報の収集</h4>
            <p>当店では、以下の場合に個人情報を収集する場合があります：</p>
            <ul>
              <li>お問い合わせやご予約の際</li>
              <li>サービス提供の際</li>
            </ul>
            
            <h4>2. 個人情報の利用目的</h4>
            <p>収集した個人情報は、以下の目的で利用いたします：</p>
            <ul>
              <li>サービスの提供</li>
              <li>お問い合わせへの対応</li>
              <li>ご予約の管理</li>
            </ul>
            
            <h4>3. 個人情報の第三者提供</h4>
            <p>当店は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。</p>
            
            <h4>4. お問い合わせ</h4>
            <p>個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください：</p>
            <p>電話：0942-656062<br>メール：bar.ohshitsu1205@gmail.com</p>
          `
        };
      case 'terms':
        return {
          title: '利用規約',
          content: `
            <h3>BAR王室 利用規約</h3>
            <p>BAR王室（以下「当店」）をご利用いただく際の規約です。</p>
            
            <h4>1. 営業時間</h4>
            <p>火曜日 - 日曜日：20:00 - 翌2:00<br>定休日：月曜日</p>
            
            <h4>2. ご利用について</h4>
            <ul>
              <li>20歳未満の方のご入店はお断りしております</li>
              <li>他のお客様にご迷惑をおかけする行為はお控えください</li>
              <li>店内での撮影は事前にご相談ください</li>
            </ul>
            
            <h4>3. お支払いについて</h4>
            <p>現金でのお支払いをお願いしております。</p>
            
            <h4>4. 免責事項</h4>
            <p>当店は、お客様のご利用により生じた損害について、法令に基づく場合を除き、責任を負いません。</p>
            
            <h4>5. 規約の変更</h4>
            <p>当店は、必要に応じて本規約を変更する場合があります。</p>
          `
        };
      case 'sitemap':
        return {
          title: 'サイトマップ',
          content: `
            <h3>サイトマップ</h3>
            <p>BAR王室のウェブサイトの構成です。</p>
            
            <h4>メインページ</h4>
            <ul>
              <li><a href="#hero">トップページ</a></li>
              <li><a href="#about">私たちについて</a></li>
              <li><a href="#menu">メニュー</a></li>
              <li><a href="#gallery">ギャラリー</a></li>
            </ul>
            
            <h4>お問い合わせ</h4>
            <ul>
              <li>電話：0942-656062</li>
              <li>メール：bar.ohshitsu1205@gmail.com</li>
              <li>住所：〒830-0017 福岡県久留米市日吉町５−１７</li>
            </ul>
            
            <h4>SNS</h4>
            <ul>
              <li><a href="https://www.instagram.com/bar.ohshitsu1205/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          `
        };
      default:
        return { title: '', content: '' };
    }
  };

  const modalContent = getModalContent();

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
              <button onClick={() => openModal('privacy')} className="footer-link">プライバシーポリシー</button>
              <button onClick={() => openModal('terms')} className="footer-link">利用規約</button>
              <button onClick={() => openModal('sitemap')} className="footer-link">サイトマップ</button>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Modal */}
      {showModal && (
        <div className="footer-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true" aria-labelledby="footer-modal-title">
          <div className="footer-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="footer-modal-close" onClick={closeModal} aria-label="モーダルを閉じる">×</button>
            <h2 id="footer-modal-title" className="footer-modal-title">{modalContent.title}</h2>
            <div className="footer-modal-body" dangerouslySetInnerHTML={{ __html: modalContent.content }} />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;