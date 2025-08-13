
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">私たちについて</h2>
            <p className="about-description">
              王室は、2010年の創業以来、東京の夜を彩る特別な場所として多くのお客様に愛されてまいりました。
              私たちは、単なる飲み物の提供にとどまらず、お客様一人ひとりに心に残る特別な体験をお届けすることを使命としております。
            </p>
            
            <div className="about-features">
              <div className="about-feature">
                <div className="feature-number">01</div>
                <div className="feature-content">
                  <h3>最高品質のカクテル</h3>
                  <p>熟練したバーテンダーが、厳選された材料を使用して、アートのようなカクテルを作り上げます。</p>
                </div>
              </div>
              
              <div className="about-feature">
                <div className="feature-number">02</div>
                <div className="feature-content">
                  <h3>洗練された空間</h3>
                  <p>アートデコとモダンな照明が織りなす、贅沢で落ち着いた雰囲気の空間です。</p>
                </div>
              </div>
              
              <div className="about-feature">
                <div className="feature-number">03</div>
                <div className="feature-content">
                  <h3>特別な体験</h3>
                  <p>ライブ音楽、カクテルクラス、プライベートイベントなど、様々な特別な体験をご提供します。</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <div className="image-overlay">
                <span>エレガントな空間</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-history">
          <div className="history-line">
            <div className="history-point">
              <div className="history-number">13</div>
              <div className="history-label">年の歴史</div>
            </div>
            <div className="history-connector"></div>
            <div className="history-point">
              <div className="history-number">50+</div>
              <div className="history-label">オリジナルカクテル</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;