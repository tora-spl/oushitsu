import React from 'react';
import { useState } from 'react';
import type { MenuCategory } from '../types/index';
import './Menu.css';

const Menu: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());

  const menuData: MenuCategory[] = [
    {
      id: 1,
      name: 'Whisky (ウイスキー)',
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
        { id: 18, name: 'Canadian Club 12y/o', description: 'カナディアンクラブ 12年 / Canadian Club 12y/o', price: 800, category: 'spirit' },
        // Japanese Whisky
        { id: 19, name: 'Suntory Kakubin', description: 'サントリー 角瓶 / Suntory Kakubin', price: 700, category: 'spirit' },
        { id: 20, name: 'Suntory Single Malt Yamasaki', description: 'サントリーシングルモルト 山崎 / Suntory Single Malt Yamasaki', price: 1300, category: 'spirit' },
        { id: 21, name: 'Nikka Single Malt Yoichi', description: 'ニッカ シングルモルト余市 / Nikka Single Malt Yoichi', price: 1300, category: 'spirit' },
        { id: 22, name: 'Nikka Taketsuru Pure Malt', description: 'ニッカ竹鶴ピュアモルト / Nikka Taketsuru Pure Malt', price: 1300, category: 'spirit' },
        { id: 23, name: 'Suntory Hibiki Japanese Harmony', description: 'サントリー響ジャパニーズハーモニー / Suntory Hibiki Japanese Harmony', price: 1400, category: 'spirit' }
      ]
    },
    {
      id: 2,
      name: 'Brandy (ブランデー)',
      drinks: [
        // Cognac / Calvados
        { id: 1, name: 'Courvoisier V.S.O.P Rouge', description: 'クルボアジェ V.S.O.P ルージュ / Courvoisier V.S.O.P Rouge', price: 900, category: 'spirit' },
        { id: 2, name: 'Calvados Boulard Grand Solage', description: 'カルヴァドス ブラー グランソラージュ / Calvados Boulard Grand Solage', price: 900, category: 'spirit' },
        // Spirits
        { id: 3, name: 'Coruba Jamaica Rum', description: 'コルバ ジャマイカラム / Coruba Jamaica Rum', price: 800, category: 'spirit' },
        { id: 4, name: 'Fukutokuchou Gin Mumei', description: '福徳長 ジン 無銘 / Fukutokuchou Gin Mumei', price: 800, category: 'spirit' }
      ]
    },
    {
      id: 3,
      name: 'Liqueur (リキュール)',
      drinks: [
        { id: 1, name: 'Kahlua Coffee Liqueur', description: 'カルーア コーヒーリキュール / Kahlua Coffee Liqueur', price: 700, category: 'spirit' },
        { id: 2, name: 'Lejay Creme de Cassis', description: 'ルジェ クレームド カシス / Lejay Creme de Cassis', price: 700, category: 'spirit' },
        { id: 3, name: 'Aragoshi Yuzu', description: '梅乃宿 あらごしゆず / Aragoshi Yuzu', price: 700, category: 'spirit' },
        { id: 4, name: 'Aragoshi Momo', description: '梅乃宿 あらごしもも / Aragoshi Momo', price: 700, category: 'spirit' }
      ]
    },
    {
      id: 4,
      name: 'Wine（ワイン）',
      drinks: [
        { id: 1, name: 'Skyside Chardonnay', description: 'スカイサイド シャルドネ / Skyside Chardonnay', price: 6000, category: 'wine' },
        { id: 2, name: 'Skyside Red Blend', description: 'スカイサイド レッドブレンド / Skyside Red Blend', price: 6000, category: 'wine' },
        { id: 3, name: 'Labouré Roi Pinotnoir', description: 'ラブレロワ ピノノワール / Labouré Roi Pinotnoir', price: 6500, category: 'wine' }
      ]
    },
    {
      id: 5,
      name: 'Spumante / Champagne（スパークリングワイン・シャンパン）',
      drinks: [
        { id: 1, name: 'Santero Pinot Rose', description: 'サンテロ ピノロゼ / Santero Pinot Rose', price: 3500, category: 'wine' },
        { id: 2, name: 'Moet & Chandon B-I', description: 'モエ・エ・シャンドン ブリュット アンペリアル / Moet & Chandon B-I', price: 15000, category: 'wine' }
      ]
    },
    {
      id: 6,
      name: 'Beer (ビール)',
      drinks: [
        { id: 1, name: 'Kirin Green\'s Free', description: 'キリン グリーンズフリー / Kirin Green\'s Free', price: 600, category: 'beer' },
        { id: 2, name: 'Kirin Classic Lager', description: 'キリン クラシックラガー（S） / Kirin Classic Lager', price: 700, category: 'beer' }
      ]
    },
    {
      id: 7,
      name: 'Soft Drink (ソフトドリンク)',
      drinks: [
        { id: 1, name: 'Wilkinson Ginger Ale', description: 'ウィルキンソン ジンジャエール / Wilkinson Ginger Ale', price: 600, category: 'non-alcoholic' },
        { id: 2, name: 'Coca Cola', description: 'コカ・コーラ / Coca Cola', price: 600, category: 'non-alcoholic' },
        { id: 3, name: 'Oolong Tea', description: '烏龍茶 / Oolong Tea', price: 600, category: 'non-alcoholic' },
        { id: 4, name: 'Cranberry Juice', description: 'クランベリージュース / Cranberry Juice', price: 600, category: 'non-alcoholic' },
        { id: 5, name: 'Coffee', description: 'コーヒー / Coffee', price: 600, category: 'non-alcoholic' },
        { id: 6, name: 'Tea', description: '紅茶 / Tea', price: 600, category: 'non-alcoholic' },
        { id: 7, name: 'Clamato Tomato Cocktail', description: 'クラマト トマトカクテル / Clamato Tomato Cocktail', price: 700, category: 'non-alcoholic' },
        { id: 8, name: 'Lemon Squash', description: 'レモンスカッシュ / Lemon Squash', price: 800, category: 'non-alcoholic' }
      ]
    },
    {
      id: 8,
      name: 'Original Cocktail（オリジナルカクテル）',
      drinks: [
        { id: 1, name: 'SAKURA WARMING', description: '桜ウォーミング / "SAKURA" WARMING - 桜リキュールベース、色鮮やかなカクテル', price: 1100, category: 'cocktail' },
        { id: 2, name: 'WINDLESS', description: '風立ちぬ / WINDLESS - チョコレートフレーバーのカクテル', price: 1100, category: 'cocktail' },
        { id: 3, name: 'PASTEQUE', description: 'パステーク / PASTEQUE - ラムベースに西瓜リキュールのカクテル', price: 1100, category: 'cocktail' },
        { id: 4, name: 'PRIERE', description: 'プリエール / PRIERE - 栗リキュールベース、食後の一杯に', price: 1100, category: 'cocktail' }
      ]
    },
    {
      id: 9,
      name: 'Cocktail（カクテル）',
      drinks: [
        { id: 1, name: 'Lemon Sour', description: 'レモンサワー / Lemon Sour', price: 900, category: 'cocktail' },
        { id: 2, name: 'Paradise', description: 'パラダイス / Paradise', price: 1000, category: 'cocktail' },
        { id: 3, name: 'Blue Moon', description: 'ブルームーン / Blue Moon', price: 1000, category: 'cocktail' },
        { id: 4, name: 'X.Y.Z', description: 'エックス ワイ ジー / X.Y.Z', price: 1000, category: 'cocktail' },
        { id: 5, name: 'Grasshopper', description: 'グラスホッパー / Grasshopper', price: 1000, category: 'cocktail' },
        { id: 6, name: 'Bohemian Dream', description: 'ボヘミアンドリーム / Bohemian Dream', price: 1000, category: 'cocktail' },
        { id: 7, name: 'Vol de Nuit', description: 'ボルドヌイ / Vol de Nuit', price: 1000, category: 'cocktail' },
        { id: 8, name: 'Mei Hua', description: '梅花 / Mei Hua', price: 1000, category: 'cocktail' },
        { id: 9, name: 'Margarita', description: 'マルガリータ / Margarita', price: 1100, category: 'cocktail' },
        { id: 10, name: 'Scarlett O\'hara', description: 'スカーレット オハラ / Scarlett O\'hara', price: 1100, category: 'cocktail' },
        { id: 11, name: 'Moscow Mule', description: 'モスコミュール / Moscow Mule', price: 1100, category: 'cocktail' },
        { id: 12, name: 'Gimlet', description: 'ギムレット / Gimlet', price: 1200, category: 'cocktail' },
        { id: 13, name: 'Bloody Caesar', description: 'ブラッディシーザー / Bloody Caesar', price: 1200, category: 'cocktail' },
        { id: 14, name: 'Spumoni', description: 'スプモーニ / Spumoni', price: 1200, category: 'cocktail' },
        { id: 15, name: 'Salty Dog', description: 'ソルティドッグ / Salty Dog', price: 1300, category: 'cocktail' }
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
    return iconMap[categoryName] || '';
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