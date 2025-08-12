import React, { useState } from 'react';
import type { MenuCategory } from '../types/index';
import './Menu.css';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const menuData: MenuCategory[] = [
    {
      id: 1,
      name: 'カクテル',
      drinks: [
        { id: 1, name: 'モヒート', description: 'フレッシュなミントとライムの爽やかなカクテル', price: 1200, category: 'cocktail' },
        { id: 2, name: 'マルガリータ', description: 'テキーラベースのクラシックなカクテル', price: 1300, category: 'cocktail' },
        { id: 3, name: 'オールドファッションド', description: 'バーボンとビターズの伝統的なカクテル', price: 1400, category: 'cocktail' },
        { id: 4, name: 'ネグローニ', description: 'ジン、カンパリ、スイートベルモットのバランスの取れたカクテル', price: 1500, category: 'cocktail' }
      ]
    },
    {
      id: 2,
      name: 'ワイン',
      drinks: [
        { id: 5, name: 'シャンパン', description: 'フランス産の高級シャンパン', price: 2500, category: 'wine' },
        { id: 6, name: '赤ワイン', description: 'ボルドー産のフルボディな赤ワイン', price: 1800, category: 'wine' },
        { id: 7, name: '白ワイン', description: 'シャルドネのフルーティーな白ワイン', price: 1600, category: 'wine' }
      ]
    },
    {
      id: 3,
      name: 'ビール',
      drinks: [
        { id: 8, name: 'クラフトビール', description: '地元醸造所の特別なビール', price: 800, category: 'beer' },
        { id: 9, name: '輸入ビール', description: 'ベルギーの伝統的なビール', price: 1000, category: 'beer' }
      ]
    },
    {
      id: 4,
      name: 'スピリッツ',
      drinks: [
        { id: 10, name: 'シングルモルト', description: '18年熟成の高級ウイスキー', price: 2000, category: 'spirit' },
        { id: 11, name: 'プレミアムウォッカ', description: 'ポーランド産の高品質ウォッカ', price: 1200, category: 'spirit' }
      ]
    },
    {
      id: 5,
      name: 'ノンアルコール',
      drinks: [
        { id: 12, name: 'モックテール', description: 'アルコールフリーの特別なドリンク', price: 800, category: 'non-alcoholic' },
        { id: 13, name: 'フレッシュジュース', description: '季節のフルーツを使用したジュース', price: 600, category: 'non-alcoholic' }
      ]
    }
  ];

  const allDrinks = menuData.flatMap(category => category.drinks);
  
  const filteredDrinks = activeCategory === 'all' 
    ? allDrinks 
    : allDrinks.filter(drink => drink.category === activeCategory);

  const categories = [
    { id: 'all', name: 'すべて', icon: '🍷' },
    { id: 'cocktail', name: 'カクテル', icon: '🍸' },
    { id: 'wine', name: 'ワイン', icon: '🍷' },
    { id: 'beer', name: 'ビール', icon: '🍺' },
    { id: 'spirit', name: 'スピリッツ', icon: '🥃' },
    { id: 'non-alcoholic', name: 'ノンアルコール', icon: '🥤' }
  ];

  return (
    <section id="menu" className="menu">
      <div className="menu-container">
        <h2 className="section-title">メニュー</h2>
        <p className="section-subtitle">厳選されたドリンクをお楽しみください</p>
        
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
        
        <div className="menu-grid">
          {filteredDrinks.map(drink => (
            <div key={drink.id} className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3 className="menu-item-name">{drink.name}</h3>
                  <span className="menu-item-price">¥{drink.price.toLocaleString()}</span>
                </div>
                <p className="menu-item-description">{drink.description}</p>
                <div className="menu-item-category">
                  <span className={`category-badge ${drink.category}`}>
                    {categories.find(c => c.id === drink.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="menu-cta">
          <p>特別なリクエストがございましたら、お気軽にお声がけください</p>
          <button className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            お問い合わせ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;