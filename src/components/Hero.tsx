
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img src="/hero-bg.png" alt="バー背景" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
                  <div className="hero-text">
            <div className="hero-logo">
              <img src="/logo.png" alt="王室ロゴ" />
            </div>
            <h1 className="hero-title">
            <span className="hero-title-main">王室</span>
            <span className="hero-title-sub">エレガントな夜の体験</span>
          </h1>
          
          <p className="hero-description">
            洗練された雰囲気と最高品質のカクテルで、<br />
            特別な夜をお過ごしいただきます
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
              メニューを見る
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              予約する
            </button>
          </div>
        </div>
        

      </div>
      
      {/* スクロールインジケーターは削除 */}
    </section>
  );
};

export default Hero;