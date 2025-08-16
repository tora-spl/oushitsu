import { useState } from 'react';
import type { MenuCategory } from '../types/index';
import './Menu.css';

const Menu: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());

  const menuData: MenuCategory[] = [
    {
      id: 1,
      name: 'カクテル',
      drinks: [
        { id: 1, name: 'Lemon Sour', description: 'レモンサワー - 爽やかなレモンの酸味が特徴のクラシックカクテル', price: 900, category: 'cocktail' },
        { id: 2, name: 'Paradice', description: 'パラダイス - エキゾチックなフルーツのハーモニー', price: 1000, category: 'cocktail' },
        { id: 3, name: 'Blue Moon', description: 'ブルームーン - 神秘的な青いカクテル', price: 1000, category: 'cocktail' },
        { id: 4, name: 'X.Y.Z', description: 'エックス ワイジー - ジン、ライム、キュラソーのバランス', price: 1000, category: 'cocktail' },
        { id: 5, name: 'Grasshopper', description: 'グラスホッパー - ミントとチョコレートの甘いカクテル', price: 1000, category: 'cocktail' },
        { id: 6, name: 'Bohemian Dream', description: 'ボヘミアンドリーム - アーティスティックなカクテル', price: 1000, category: 'cocktail' },
        { id: 7, name: 'Vol de Nuit', description: 'ボルドヌイ - 夜の飛行をイメージしたカクテル', price: 1000, category: 'cocktail' },
        { id: 8, name: 'Mei Hua', description: '梅花 - 梅の花をイメージしたエレガントなカクテル', price: 1000, category: 'cocktail' },
        { id: 9, name: 'Margarita', description: 'マルガリータ - テキーラベースのクラシックなカクテル', price: 1100, category: 'cocktail' },
        { id: 10, name: 'Scarlett O\'hara', description: 'スカーレット オハラ - クランベリーの華やかなカクテル', price: 1100, category: 'cocktail' },
        { id: 11, name: 'Moscow Mule', description: 'モスコミュール - ウォッカとジンジャービールの爽やかなカクテル', price: 1100, category: 'cocktail' },
        { id: 12, name: 'Gimlet', description: 'ギムレット - ジンとライムの爽やかなカクテル', price: 1200, category: 'cocktail' },
        { id: 13, name: 'Bloody Caesar', description: 'ブラッディシーザー - トマトジュースベースのスパイシーなカクテル', price: 1200, category: 'cocktail' },
        { id: 14, name: 'Spumoni', description: 'スプモーニ - イタリアンアイスクリームをイメージしたカクテル', price: 1200, category: 'cocktail' },
        { id: 15, name: 'Salty Dog', description: 'ソルティードッグ - ウォッカベースの塩味が効いたカクテル', price: 1300, category: 'cocktail' }
      ]
    },
    {
      id: 2,
      name: 'オリジナルカクテル',
      drinks: [
        { id: 16, name: 'PRIERE', description: 'プリエール - 栗リキュールベース。食後の一杯', price: 1100, category: 'cocktail' },
        { id: 17, name: 'PASTEQUE', description: 'パステーク - ラムベース スイカリキュールカクテル', price: 1100, category: 'cocktail' },
        { id: 18, name: 'WINDLESS', description: '風立ちぬ - チョコレート風味のカクテル', price: 1100, category: 'cocktail' },
        { id: 19, name: 'SAKURA WARMING', description: '桜ウォーミング - 桜リキュールベース。華やかなカクテル', price: 1100, category: 'cocktail' }
      ]
    },
    {
      id: 3,
      name: 'ウイスキー',
      drinks: [
        { id: 20, name: 'Glenmorangie Original 10 y.o', description: 'グレンモーレンジ オリジナル 10年 - スコットランドのシングルモルト', price: 900, category: 'spirit' },
        { id: 21, name: 'Ardbeg 10 y.o', description: 'アードベッグ 10年 - アイラ島のピート香豊かなウイスキー', price: 1100, category: 'spirit' },
        { id: 22, name: 'Bowmore 12 y.o', description: 'ボウモア 12年 - バランスの取れたアイラ島ウイスキー', price: 1100, category: 'spirit' },
        { id: 23, name: 'Laphroaig 10 y.o', description: 'ラフロイグ 10年 - 強烈なピート香のアイラ島ウイスキー', price: 1200, category: 'spirit' },
        { id: 24, name: 'The Macallan 12 y.o', description: 'ザ・マッカラン 12年 - 高級シングルモルトウイスキー', price: 1800, category: 'spirit' },
        { id: 25, name: 'Canadian Club 12 y.o', description: 'カナディアンクラブ 12年 - カナダの代表的なウイスキー', price: 800, category: 'spirit' },
        { id: 26, name: 'Ballantine\'s 12 y.o', description: 'バランタイン 12年 - スコッチブレンデッドウイスキー', price: 800, category: 'spirit' },
        { id: 27, name: 'Dewar\'s 12 y.o', description: 'デュワーズ 12年 - スムースなスコッチブレンド', price: 800, category: 'spirit' },
        { id: 28, name: 'Old Parr 12 y.o', description: 'オールドパー 12年 - 伝統的なスコッチブレンド', price: 900, category: 'spirit' },
        { id: 29, name: 'Chivas Regal Mizunara 12 y.o', description: 'シーバスリーガル ミズナラ 12年 - 日本樽で熟成', price: 900, category: 'spirit' },
        { id: 30, name: 'Ballantine\'s 17 y.o', description: 'バランタイン 17年 - 高級ブレンデッドウイスキー', price: 1600, category: 'spirit' },
        { id: 31, name: 'Jameson', description: 'ジェームソン - アイルランドの代表的なウイスキー', price: 800, category: 'spirit' },
        { id: 32, name: 'Jim Beam Black', description: 'ジムビーム ブラック - バーボンの定番', price: 800, category: 'spirit' },
        { id: 33, name: 'I.W. Harper Gold Medal', description: 'アイ・ダブリュ・ハーパー ゴールドメダル - 高級バーボン', price: 800, category: 'spirit' },
        { id: 34, name: 'Jack Daniel\'s Black', description: 'ジャックダニエル ブラック - テネシーウイスキーの定番', price: 800, category: 'spirit' },
        { id: 35, name: 'Maker\'s Mark', description: 'メーカーズマーク - 小麦を使用したスムースなバーボン', price: 800, category: 'spirit' },
        { id: 36, name: 'Four Roses Black', description: 'フォーローズ ブラック - 複雑な味わいのバーボン', price: 900, category: 'spirit' },
        { id: 37, name: 'Wild Turkey 8 y.o', description: 'ワイルドターキー 8年 - 力強いバーボン', price: 900, category: 'spirit' },
        { id: 38, name: 'Suntory Kakubin', description: 'サントリー 角瓶 - 日本の代表的なブレンデッドウイスキー', price: 700, category: 'spirit' },
        { id: 39, name: 'Suntory Yamazaki', description: 'サントリー 山崎 - 日本を代表するシングルモルト', price: 1300, category: 'spirit' },
        { id: 40, name: 'Nikka Yoichi', description: 'ニッカ 余市 - 北海道余市蒸溜所のシングルモルト', price: 1300, category: 'spirit' },
        { id: 41, name: 'Nikka Taketsuru', description: 'ニッカ 竹鶴 - ピュアモルトウイスキー', price: 1300, category: 'spirit' },
        { id: 42, name: 'Suntory Hibiki', description: 'サントリー 響 - ジャパニーズハーモニー', price: 1400, category: 'spirit' }
      ]
    },
    {
      id: 4,
      name: 'ワイン・シャンパン',
      drinks: [
        { id: 43, name: 'Skyside Chardonnay', description: 'スカイサイド シャルドネ - フルーティーな白ワイン', price: 6000, category: 'wine' },
        { id: 44, name: 'Skyside Red Blend', description: 'スカイサイド レッドブレンド - バランスの取れた赤ワイン', price: 6000, category: 'wine' },
        { id: 45, name: 'Labouré Roi Pinotnoir', description: 'ラブレロワ ピノノワール - エレガントな赤ワイン', price: 6500, category: 'wine' },
        { id: 46, name: 'Satero Pinot Rose', description: 'サテロ ピノロゼ - エレガントなロゼワイン', price: 3500, category: 'wine' },
        { id: 47, name: 'Moet & Chandon B-I', description: 'モエ・エ・シャンドン B-I - 高級シャンパン', price: 15000, category: 'wine' }
      ]
    },
    {
      id: 5,
      name: 'リキュール・その他',
      drinks: [
        { id: 48, name: 'Kahlua Coffee Liqueur', description: 'カルーア コーヒーリキュール - コーヒーの香り豊かなリキュール', price: 700, category: 'spirit' },
        { id: 49, name: 'Lejay Creme de Cassis', description: 'ルジェ クレームドカシス - 黒カシスの甘いリキュール', price: 700, category: 'spirit' },
        { id: 50, name: 'Aragoshi Yuzu', description: '荒樫 ゆず - 国産ゆずのリキュール', price: 700, category: 'spirit' },
        { id: 51, name: 'Aragoshi Momo', description: '荒樫 もも - 国産桃のリキュール', price: 700, category: 'spirit' },
        { id: 52, name: 'Courvoisier V.S.O.P Rouge', description: 'クルボジェ V.S.O.P ルージュ - 高級コニャック', price: 900, category: 'spirit' },
        { id: 53, name: 'Calvados Boulard Grand Solage', description: 'カルバドス ブラール グランソラージュ - フランス産アップルブランデー', price: 900, category: 'spirit' }
      ]
    },
    {
      id: 6,
      name: 'ビール・ソフトドリンク',
      drinks: [
        { id: 54, name: 'Coruba Jamaica Rum', description: 'コルバ ジャマイカラム - カリブ海のラム', price: 800, category: 'beer' },
        { id: 55, name: 'Fukutokuchou Gin Mumei', description: '福徳長 ジン 無名 - 国産ジン', price: 800, category: 'beer' },
        { id: 56, name: 'Kirin Green\'s Free', description: 'キリン グリーンズフリー - ノンアルコールビール', price: 600, category: 'beer' },
        { id: 57, name: 'Kirin Classic Lager', description: 'キリン クラシックラガー - クラシックなラガービール', price: 700, category: 'beer' },
        { id: 58, name: 'Lemon Squash', description: 'レモンスカッシュ - 爽やかなレモンドリンク', price: 800, category: 'non-alcoholic' },
        { id: 59, name: 'Clamato Tomato Cocktail', description: 'クラマト トマト カクテル - トマトベースのドリンク', price: 700, category: 'non-alcoholic' },
        { id: 60, name: 'Tea', description: '紅茶 - 上品な紅茶', price: 600, category: 'non-alcoholic' },
        { id: 61, name: 'Coffee', description: 'コーヒー - 香り豊かなコーヒー', price: 600, category: 'non-alcoholic' },
        { id: 62, name: 'Cranberry Juice', description: 'クランベリージュース - 酸味のあるベリージュース', price: 600, category: 'non-alcoholic' },
        { id: 63, name: 'Oolong Tea', description: '烏龍茶 - 中国茶の定番', price: 600, category: 'non-alcoholic' },
        { id: 64, name: 'Coca Cola', description: 'コカ・コーラ - 世界で愛される炭酸飲料', price: 600, category: 'non-alcoholic' },
        { id: 65, name: 'Wilkinson Ginger Ale', description: 'ウィルキンソン ジンジャエール - ジンジャーの炭酸飲料', price: 600, category: 'non-alcoholic' }
      ]
    }
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
    <section id="menu" className="menu">
      <div className="menu-container">
        <h2 className="section-title">メニュー</h2>
        <p className="section-subtitle">厳選されたドリンクをお楽しみください</p>
        
        <div className="menu-categories">
          {menuData.map(category => (
            <div key={category.id} className="menu-category">
              <div 
                className="category-header"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="category-info">
                  <span className="category-icon">{getCategoryIcon(category.name)}</span>
                  <h3 className="category-name">{category.name}</h3>
                  <span className="category-count">({category.drinks.length}品)</span>
                </div>
                <div className="category-toggle">
                  <span className={`toggle-icon ${expandedCategories.has(category.id) ? 'expanded' : ''}`}>
                    ▼
                  </span>
                </div>
              </div>
              
              {expandedCategories.has(category.id) && (
                <div className="category-content">
                  <div className="menu-items">
                    {category.drinks.map(drink => (
                      <div key={drink.id} className="menu-item">
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
          <p>特別なリクエストがございましたら、お気軽にお声がけください</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;