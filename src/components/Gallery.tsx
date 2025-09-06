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

  // ダミーデータ：ライブステージカテゴリー
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
        }, 
               {
            id: 4,
            src: live2Image,
            alt: 'ライブハウスの雰囲気',
            title: '歴史'
          },
          {
            id: 5,
            src: live2Image,
            alt: 'ライブハウスの雰囲気',
            title: '歴史'
          },
          {
            id: 6,
            src: live2Image,
            alt: 'ライブハウスの雰囲気',
            title: '歴史'
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

  // ギャラリーセクションの表示を監視してアニメーションを再開
  useEffect(() => {
    const galleryElement = document.getElementById('gallery');
    if (!galleryElement) return;

    let timer: number;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // ギャラリーが画面に表示されたらアニメーションを再開
            setAnimationStopped(false);
            
            // 既存のタイマーをクリア
            if (timer) clearTimeout(timer);
            
            // 10秒後にアニメーションを停止
            timer = setTimeout(() => {
              setAnimationStopped(true);
            }, 10000);
          }
        });
      },
      { threshold: 0.3 } // 30%表示されたら発火
    );

    observer.observe(galleryElement);

    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, []);

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
        <p className="section-subtitle">クリックして写真を拡大表示</p>
        
        <div className="gallery-categories">
          {galleryCategories.map((category) => (
            <div 
              key={category.id} 
              className={`gallery-category ${animationStopped ? 'animation-stopped' : ''}`}
              onClick={() => openModal(category)}
            >
               <div className="category-image">
                 <img 
                   src={category.thumbnail}
                   alt={category.title}
                   loading="lazy"
                 />
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