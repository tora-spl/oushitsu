import React from 'react';
import { useState } from 'react';
import type { MenuCategory } from '../types/index';
import './Menu.css';

const Menu: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());

  const menuData: MenuCategory[] = [
    {
      id: 1,
      name: 'Scotch Whisky : ウイスキー',
      drinks: [
        // Scotch Whisky
        { id: 1, name: 'Ballantine\'s 12y', description: 'バランタイン 12年 / Ballantine\'s 12y', price: 800, category: 'spirit' },
        { id: 2, name: 'Dewar\'s 12y', description: 'デュワーズ 12年 / Dewar\'s 12y', price: 800, category: 'spirit' },
        { id: 3, name: 'Old Parr 12y', description: 'オールドパー 12年 / Old Parr 12y', price: 900, category: 'spirit' },
        { id: 4, name: 'Chivas Regal Mizunara 12y', description: 'シーバスリーガル ミズナラ 12年 / Chivas Regal Mizunara 12y', price: 900, category: 'spirit' },
        { id: 5, name: 'Ballantine\'s 17y', description: 'バランタイン 17年 / Ballantine\'s 17y', price: 1600, category: 'spirit' },
        // Malt Whisky
        { id: 6, name: 'Glenmorangie Original 10y', description: 'グレンモーレンジ オリジナル 10年 / Glenmorangie Original 10y', price: 900, category: 'spirit' },
        { id: 7, name: 'Ardbeg 10y', description: 'アードベッグ 10年 / Ardbeg 10y', price: 1100, category: 'spirit' },
        { id: 8, name: 'Bowmore 12y', description: 'ボウモア 12年 / Bowmore 12y', price: 1100, category: 'spirit' },
        { id: 9, name: 'Laphroaig 10y', description: 'ラフロイグ 10年 / Laphroaig 10y', price: 1200, category: 'spirit' },
        { id: 10, name: 'The Macallan 12y', description: 'ザ・マッカラン 12年 / The Macallan 12y', price: 1800, category: 'spirit' },
        // Irish Whiskey
        { id: 11, name: 'Jameson', description: 'ジェムソン / Jameson', price: 800, category: 'spirit' },
        // American Whiskey
        { id: 12, name: 'Jim Beam Black', description: 'ジムビーム ブラック / Jim Beam Black', price: 800, category: 'spirit' },
        { id: 13, name: 'J.W. Harper Gold Medal', description: 'L.W.ハーパーゴールドメダル / J.W. Harper Gold Medal', price: 800, category: 'spirit' },
        { id: 14, name: 'Jack Daniel\'s Black', description: 'ジャックダニエル ブラック / Jack Daniel\'s Black', price: 800, category: 'spirit' },
        { id: 15, name: 'Maker\'s Mark', description: 'メーカーズマーク / Maker\'s Mark', price: 800, category: 'spirit' },
        { id: 16, name: 'Four Roses Black', description: 'フォアローゼス ブラック / Four Roses Black', price: 900, category: 'spirit' },
        { id: 17, name: 'Wild Turkey 8y/o', description: 'ワイルドターキー 8年 / Wild Turkey 8y/o', price: 900, category: 'spirit' },
        // Canadian Whisky
        { id: 18, name: 'Canadian Club 12y/o', description: 'カナディアンクラブ 12年 / Canadian Club 12y/o', price: 800, category: 'spirit' }
      ]
    },
    {
      id: 1,
      name: 'Whisky : ウイスキー',
      drinks: [
        // Scotch Whisky
        { id: 1, name: 'Ballantine\'s 12y', description: 'バランタイン 12年 / Ballantine\'s 12y', price: 800, category: 'spirit' },
        { id: 2, name: 'Dewar\'s 12y', description: 'デュワーズ 12年 / Dewar\'s 12y', price: 800, category: 'spirit' },
        { id: 3, name: 'Old Parr 12y', description: 'オールドパー 12年 / Old Parr 12y', price: 900, category: 'spirit' },
        { id: 4, name: 'Chivas Regal Mizunara 12y', description: 'シーバスリーガル ミズナラ 12年 / Chivas Regal Mizunara 12y', price: 900, category: 'spirit' },
        { id: 5, name: 'Ballantine\'s 17y', description: 'バランタイン 17年 / Ballantine\'s 17y', price: 1600, category: 'spirit' },
        // Malt Whisky
        { id: 6, name: 'Glenmorangie Original 10y', description: 'グレンモーレンジ オリジナル 10年 / Glenmorangie Original 10y', price: 900, category: 'spirit' },
        { id: 7, name: 'Ardbeg 10y', description: 'アードベッグ 10年 / Ardbeg 10y', price: 1100, category: 'spirit' },
        { id: 8, name: 'Bowmore 12y', description: 'ボウモア 12年 / Bowmore 12y', price: 1100, category: 'spirit' },
        { id: 9, name: 'Laphroaig 10y', description: 'ラフロイグ 10年 / Laphroaig 10y', price: 1200, category: 'spirit' },
        { id: 10, name: 'The Macallan 12y', description: 'ザ・マッカラン 12年 / The Macallan 12y', price: 1800, category: 'spirit' },
        // Irish Whiskey
        { id: 11, name: 'Jameson', description: 'ジェムソン / Jameson', price: 800, category: 'spirit' },
        // American Whiskey
        { id: 12, name: 'Jim Beam Black', description: 'ジムビーム ブラック / Jim Beam Black', price: 800, category: 'spirit' },
        { id: 13, name: 'J.W. Harper Gold Medal', description: 'L.W.ハーパーゴールドメダル / J.W. Harper Gold Medal', price: 800, category: 'spirit' },
        { id: 14, name: 'Jack Daniel\'s Black', description: 'ジャックダニエル ブラック / Jack Daniel\'s Black', price: 800, category: 'spirit' },
        { id: 15, name: 'Maker\'s Mark', description: 'メーカーズマーク / Maker\'s Mark', price: 800, category: 'spirit' },
        { id: 16, name: 'Four Roses Black', description: 'フォアローゼス ブラック / Four Roses Black', price: 900, category: 'spirit' },
        { id: 17, name: 'Wild Turkey 8y/o', description: 'ワイルドターキー 8年 / Wild Turkey 8y/o', price: 900, category: 'spirit' },
        // Canadian Whisky
        { id: 18, name: 'Canadian Club 12y/o', description: 'カナディアンクラブ 12年 / Canadian Club 12y/o', price: 800, category: 'spirit' }
      ]
    },
  ];

  const toggleCategory = (categoryId: number) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const getCategoryIcon = (categoryName: string) => {
    const iconMap: { [key: string]: string } = {
      'カクテル': '🍸',
      'オリジナルカクテル': '🍹',
      'ウイスキー': '🥃',
      'ワイン・シャンパン': '🍷',
      'リキュール・その他': '🍾',
      'ビール・ソフトドリンク': '🍺'
    };
    return iconMap[categoryName] || '🍷';
  };

  return (
    <section id="menu" className="menu" role="region" aria-labelledby="menu-title">
      <div className="menu-container">
        <h2 id="menu-title" className="section-title">メニュー</h2>
        <p className="section-subtitle">厳選されたドリンクをお楽しみください</p>

        <div className="menu-categories" role="list">
          {menuData.map(category => (
            <div key={category.id} className="menu-category" role="listitem">
              <div
                className="category-header"
                onClick={() => toggleCategory(category.id)}
                role="button"
                tabIndex={0}
                aria-expanded={expandedCategories.has(category.id)}
                aria-controls={`category-${category.id}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCategory(category.id);
                  }
                }}
              >
                <div className="category-info">
                  <span className="category-icon" aria-hidden="true">{getCategoryIcon(category.name)}</span>
                  <h3 className="category-name">{category.name}</h3>
                  <span className="category-count">({category.drinks.length}品)</span>
                </div>
                <div className="category-toggle">
                  <span className={`toggle-icon ${expandedCategories.has(category.id) ? 'expanded' : ''}`} aria-hidden="true">
                    ▼
                  </span>
                </div>
              </div>

              {expandedCategories.has(category.id) && (
                <div className="category-content" id={`category-${category.id}`} role="region" aria-labelledby={`category-${category.id}-title`}>
                  <div className="menu-items" role="list">
                    {category.drinks.map(drink => (
                      <div key={drink.id} className="menu-item" role="listitem">
                        <div className="menu-item-content">
                          <div className="menu-item-header">
                            <h4 className="menu-item-name">{drink.name}</h4>
                            <span className="menu-item-price">¥{drink.price.toLocaleString()}</span>
                          </div>
                          <p className="menu-item-description">{drink.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="menu-cta">
          <p>特別なリクエストがございましたら</p>
          <p>お気軽にお声がけください</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;