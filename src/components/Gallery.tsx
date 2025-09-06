import { useState, useEffect } from 'react';
import type { GalleryCategory } from '../types/index';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // ダミーデータ：4つのカテゴリー、それぞれに複数の画像
  const galleryCategories: GalleryCategory[] = [
    {
      id: 1,
      title: 'カウンター',
      description: 'エレガントなバーカウンター',
      thumbnail: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=300&h=200&fit=crop',
      images: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop',
          alt: 'エレガントなバーカウンター',
          title: 'カウンター'
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&h=600&fit=crop',
          alt: 'カウンターの夜景',
          title: 'カウンター夜景'
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
          alt: 'カウンターのディテール',
          title: 'カウンターディテール'
        }
      ]
    },
    {
      id: 2,
      title: 'ライブステージ',
      description: '音楽と共に楽しむ空間',
      thumbnail: '/src/assets/images/guiters.jpg',
      images: [
        {
          id: 4,
          src: '/src/assets/images/guiters.jpg',
          alt: 'ギター演奏',
          title: 'ギター演奏'
        },
        {
          id: 5,
          src: '/src/assets/images/live1.jpg',
          alt: 'ライブ演奏',
          title: 'ライブ演奏'
        },
        {
          id: 6,
          src: '/src/assets/images/live2.jpg',
          alt: 'ステージ演奏',
          title: 'ステージ演奏'
        }
      ]
    },

    {
      id: 4,
      title: '歴史',
      description: 'バーの歴史と伝統',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
      images: [
        {
          id: 10,
          src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
          alt: 'バーの歴史',
          title: '歴史'
        },
        {
          id: 11,
          src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop',
          alt: '歴史的な装飾',
          title: '歴史的装飾'
        },
        {
          id: 12,
          src: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&h=600&fit=crop',
          alt: '伝統的な要素',
          title: '伝統的要素'
        }
      ]
    }
  ];

  const openModal = (category: GalleryCategory) => {
    setSelectedCategory(category);
    setSelectedImageIndex(0);
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setSelectedImageIndex(0);
  };


  const goToImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const nextImage = () => {
    if (selectedCategory) {
      setSelectedImageIndex((prev) => 
        prev === selectedCategory.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedCategory) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedCategory.images.length - 1 : prev - 1
      );
    }
  };

  // スマホでの横スクロール対応
  useEffect(() => {
    if (!selectedCategory) return;

    const handleTouchStart = (e: Event) => {
      const touchEvent = e as TouchEvent;
      const startX = touchEvent.touches[0].clientX;
      const startY = touchEvent.touches[0].clientY;
      
      const handleTouchEnd = (e: Event) => {
        const touchEndEvent = e as TouchEvent;
        const endX = touchEndEvent.changedTouches[0].clientX;
        const endY = touchEndEvent.changedTouches[0].clientY;
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // 横方向のスワイプが縦方向より大きい場合のみ処理
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
          if (diffX > 0) {
            // 左スワイプ（次の画像）
            setSelectedImageIndex((prev) => 
              prev === selectedCategory.images.length - 1 ? 0 : prev + 1
            );
          } else {
            // 右スワイプ（前の画像）
            setSelectedImageIndex((prev) => 
              prev === 0 ? selectedCategory.images.length - 1 : prev - 1
            );
          }
        }
        
        document.removeEventListener('touchend', handleTouchEnd);
      };
      
      document.addEventListener('touchend', handleTouchEnd);
    };

    const modalElement = document.querySelector('.modal-content');
    if (modalElement) {
      modalElement.addEventListener('touchstart', handleTouchStart);
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener('touchstart', handleTouchStart);
      }
    };
  }, [selectedCategory]);

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="section-title">ギャラリー</h2>
        <p className="section-subtitle">王室の美しい空間をご覧ください</p>
        
        <div className="gallery-categories">
          {galleryCategories.map((category) => (
            <div 
              key={category.id} 
              className="gallery-category"
              onClick={() => openModal(category)}
            >
              <div className="category-image">
                <img 
                  src={category.thumbnail}
                  alt={category.title}
                  loading="lazy"
                />
                <div className="category-overlay">
                  <div className="category-overlay-content">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Modal */}
      {selectedCategory && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
             <div className="modal-image-container">
               <button className="modal-nav modal-nav-prev" onClick={prevImage}>
                 ←
               </button>
               
               <img 
                 src={selectedCategory.images[selectedImageIndex].src} 
                 alt={selectedCategory.images[selectedImageIndex].alt} 
                 className="modal-main-image"
               />
               
               <button className="modal-nav modal-nav-next" onClick={nextImage}>
                 →
               </button>
             </div>
            
            <div className="modal-info">
              <h3>{selectedCategory.title}</h3>
            </div>

            <div className="modal-thumbnails">
              {selectedCategory.images.map((image, index) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  className={`modal-thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;