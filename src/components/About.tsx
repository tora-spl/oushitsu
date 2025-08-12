
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">私たちについて</h2>
            <p className="about-description">
              王室は、2010年の創業以来、東京の夜を彩る特別な場所として愛されてきました。
              私たちは、単なる飲み物を提供するだけでなく、お客様一人ひとりに忘れられない体験をお届けすることを使命としています。
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
        
        <div className="about-stats">
          <div className="stat">
            <div className="stat-number">13</div>
            <div className="stat-label">年の歴史</div>
          </div>
          <div className="stat">
            <div className="stat-number">50+</div>
            <div className="stat-label">オリジナルカクテル</div>
          </div>
          <div className="stat">
            <div className="stat-number">1000+</div>
            <div className="stat-label">満足なお客様</div>
          </div>
          <div className="stat">
            <div className="stat-number">24</div>
            <div className="stat-label">時間のサービス</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;