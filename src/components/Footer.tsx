import './Footer.css';
import { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showModal, setShowModal] = useState<'terms' | 'sitemap' | null>(null);

  const openModal = (type: 'terms' | 'sitemap') => {
    setShowModal(type);
    // シンプルなスクロール無効化（位置は保持）
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(null);
    // モーダルを閉じる時にスクロールを確実に復元
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      // フッター要素にスクロール
      const footer = document.querySelector('.footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };


  useEffect(() => {
    // コンポーネントマウント時にスクロールを確実に有効化
    document.body.style.overflow = 'auto';

    (window as any).scrollToSection = (sectionId: string) => {
      closeModal();
      setTimeout(() => {
        // トップページの場合はページの一番上に移動
        if (sectionId === '#home') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          return;
        }

        const element = document.querySelector(sectionId);
        if (element) {
          // 画面サイズに応じて遷移先を調整
          const isMobile = window.innerWidth <= 768;
          let targetSectionId = sectionId;

          // PC時はギャラリーもaboutセクションに遷移
          if (!isMobile && sectionId === '#gallery') {
            targetSectionId = '#about';
          }

          const targetElement = document.querySelector(targetSectionId);
          if (targetElement) {
            // 特定のセクションに対してオフセットを適用
            let offset = 0;
            if (targetSectionId === '#about') {
              offset = -100; // 私たちについての値に合わせる
            } else if (targetSectionId === '#gallery') {
              offset = -100; // ギャラリーのオフセット（スマホ時のみ）
            } else if (targetSectionId === '#menu') {
              offset = -150; // 150px上に表示
            }

            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition + offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 200);
    };

    // コンポーネントがアンマウントされる時にスクロールを確実に復元
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []); // 依存配列を空にして、マウント時のみ実行

  useEffect(() => {
    // ESCキーでモーダルを閉じる
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showModal) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]); // showModalの変更時のみ実行

  const getModalContent = () => {
    switch (showModal) {
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
              <li>お酒の提供は20歳以上の方のみとさせていただきます</li>
              <li>他のお客様にご迷惑をおかけする行為はお控えください</li>
            </ul>
            
            <h4>3. お支払いについて</h4>
            <p>現金でのお支払いをお願いしております。</p>
            
            <h4>4. テーブルチャージ</h4>
            <p>お一人様500円のテーブルチャージを頂戴しております。</p>
            
            <h4>5. 免責事項</h4>
            <p>当店は、お客様のご利用により生じた損害について、法令に基づく場合を除き、責任を負いません。</p>
            
            <h4>6. 規約の変更</h4>
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
              <li><button onclick="window.scrollToSection('#home')" style="background: none; border: none; color: #d4af37; text-decoration: underline; cursor: pointer;">トップページ</button></li>
              <li><button onclick="window.scrollToSection('#about')" style="background: none; border: none; color: #d4af37; text-decoration: underline; cursor: pointer;">私たちについて</button></li>
              <li><button onclick="window.scrollToSection('#gallery')" style="background: none; border: none; color: #d4af37; text-decoration: underline; cursor: pointer;">ギャラリー</button></li>
              <li><button onclick="window.scrollToSection('#menu')" style="background: none; border: none; color: #d4af37; text-decoration: underline; cursor: pointer;">メニュー</button></li>
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
                <a
                  href="https://www.google.co.jp/maps/place/BAR%E7%8E%8B%E5%AE%A4/@33.3155836,130.5100585,11z/data=!4m6!3m5!1s0x3541a4f9263faac3:0x36b0ad016eb220fb!8m2!3d33.3156269!4d130.509912!16s%2Fg%2F1tctjkpj?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-map-link"
                  aria-label="GoogleマップでBAR王室の場所を表示"
                >
                  <span className="footer-text">
                    〒830-0017<br />
                    福岡県久留米市日吉町５−１７<br />
                    BAR王室
                  </span>
                </a>
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
              <button onClick={() => openModal('terms')} className="footer-link">利用規約</button>
              <button onClick={() => openModal('sitemap')} className="footer-link">サイトマップ</button>
            </nav>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="footer-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true" aria-labelledby="footer-modal-title">
          <div
            className="footer-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
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