import { useState, useEffect } from 'react';
import type { GalleryCategory, GalleryImage } from '../types/index';
import './Gallery.css';
import guitersImage from '../assets/images/guiters.jpg';
import live1Image from '../assets/images/live1.jpg';
import live2Image from '../assets/images/live2.jpg';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [animationStopped, setAnimationStopped] = useState<boolean>(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [categoryImageIndex, setCategoryImageIndex] = useState<{[key: number]: number}>({});
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isAutoSliding, setIsAutoSliding] = useState<boolean>(true);

  // ギャラリーカテゴリーデータ（1つのカテゴリーに統合）
  const galleryCategories: GalleryCategory[] = [
    {
      id: 1,
      title: 'ライブステージ',
      description: '音楽と共に楽しむ空間',
      thumbnail: guitersImage,
      images: [
        {
          id: 1,
          src: guitersImage,
          alt: 'ギタースタジオ',
          title: 'ギタースタジオ'
        },
        {
          id: 2,
          src: live1Image,
          alt: 'ライブ演奏の様子',
          title: 'ライブ演奏'
        },
        {
          id: 3,
          src: live2Image,
          alt: 'ライブハウスの雰囲気',
          title: 'ライブハウス'
        }
      ]
    }
  ];

  const handleIndicatorClick = (categoryId: number, imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setIsAutoSliding(false);
    
    // 10秒後に自動スライドを再開
    setTimeout(() => {
      setIsAutoSliding(true);
    }, 10000);
  };

  const openModal = (category: GalleryCategory, imageIndex: number = 0) => {
    setSelectedCategory(category);
    setSelectedImageIndex(imageIndex);
  };

  // 自動スライド機能
  useEffect(() => {
    if (!isAutoSliding) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % 3); // 3枚の写真をループ
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoSliding]);

  // 現在の画像インデックスを全カテゴリーに適用
  useEffect(() => {
    const newCategoryImageIndex: {[key: number]: number} = {};
    galleryCategories.forEach(category => {
      newCategoryImageIndex[category.id] = currentImageIndex;
    });
    setCategoryImageIndex(newCategoryImageIndex);
  }, [currentImageIndex]);

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
        <div className="gallery-header">
          <h2 className="section-title">ギャラリー</h2>
          <p className="section-subtitle">クリックして写真を拡大表示</p>
        </div>
        
        <div className="gallery-categories">
          {galleryCategories.map((category) => (
            <div 
              key={category.id} 
              className="gallery-category"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              onClick={() => openModal(category, categoryImageIndex[category.id] || 0)}
            >
               <div className="category-image">
                 <img 
                   src={category.images[categoryImageIndex[category.id] || 0].src}
                   alt={category.images[categoryImageIndex[category.id] || 0].alt}
                   loading="lazy"
                 />
               </div>
               <div className="category-info">
                 <h3 className="category-title">{category.title}</h3>
                 <p className="category-description">{category.description}</p>
                 
                 <div className="category-photos-indicator">
                   {category.images.map((_, index) => (
                     <div 
                       key={index} 
                       className={`category-photo-dot ${categoryImageIndex[category.id] === index ? 'active' : ''}`}
                       onClick={(e) => {
                         e.stopPropagation();
                         handleIndicatorClick(category.id, index);
                       }}
                     />
                   ))}
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
              {selectedCategory.images.map((image: GalleryImage, index: number) => (
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