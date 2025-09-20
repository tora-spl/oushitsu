
import './About.css';
import Gallery from './Gallery';

const About: React.FC = () => {
  return (
    <section id="about" className="about" role="region" aria-labelledby="about-title">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 id="about-title" className="section-title">私たちについて</h2>
            <p className="about-description">
              王室は、1968年の創業以来、福岡県久留米市の夜を彩る特別な場所として多くのお客様に愛されてまいりました。
              先代が52年にわたり築き上げてきた王室の良さを残しつつ、お客様一人ひとりに心に残る特別な体験をお届けすることを使命としております。
            </p>

            <div className="about-features" role="list">
              <div className="about-feature" role="listitem">
                <div className="feature-number" aria-label="特徴1">01</div>
                <div className="feature-content">
                  <h3>熟練のバーテンダー</h3>
                  <p>バーテンダー歴37年のマスターが、厳選された材料で最高品質のカクテルをお作りします。</p>
                </div>
              </div>

              <div className="about-feature" role="listitem">
                <div className="feature-number" aria-label="特徴2">02</div>
                <div className="feature-content">
                  <h3>歴史ある空間</h3>
                  <p>創業当時から設置されているジュークボックスと共に、伝統とモダンが融合した洗練された空間です。</p>
                </div>
              </div>

              <div className="about-feature" role="listitem">
                <div className="feature-number" aria-label="特徴3">03</div>
                <div className="feature-content">
                  <h3>オリジナルカクテル</h3>
                  <p>マスターのオリジナルカクテルやフルーツカクテルを多数ご用意し、特別な体験をお届けします。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-gallery">
            <Gallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;