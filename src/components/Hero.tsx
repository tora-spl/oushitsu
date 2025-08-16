
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero" role="banner" aria-label="メインビジュアル">
      <div className="hero-background">
        <img src="/hero-bg.png" alt="BAR王室の洗練された内装 - エレガントなバーカウンターと照明" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-logo">
            <img src="/logo.png" alt="BAR王室ロゴ - 王冠のデザイン" />
          </div>
          <h1 className="hero-title">
            <span className="hero-title-main">王室</span>
            <span className="hero-title-sub">エレガントな夜の体験</span>
          </h1>
          
          <p className="hero-description">
            1968年創業、56年の歴史を持つ伝統的なバー<br />
            創業当時から店内に設置されているジュークボックスと共に、<br />
            洗練された雰囲気と最高品質のカクテルで、特別な夜をお過ごしいただきます
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;