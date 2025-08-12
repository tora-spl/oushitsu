import { useState } from 'react';
import type { GalleryImage } from '../types/index';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryData: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop',
      alt: 'エレガントなバーカウンター',
      title: 'メインカウンター'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      alt: '洗練されたインテリア',
      title: 'VIPエリア'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      alt: 'アートなカクテル',
      title: 'シグネチャーカクテル'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop',
      alt: 'ライブ音楽ステージ',
      title: 'ライブステージ'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      alt: 'プライベートルーム',
      title: 'プライベートルーム'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      alt: '特別なイベント',
      title: 'イベントスペース'
    }
  ];

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="section-title">ギャラリー</h2>
        <p className="section-subtitle">王室の美しい空間をご覧ください</p>
        
        <div className="gallery-grid">
          {galleryData.map((image, index) => (
            <div 
              key={image.id} 
              className={`gallery-item gallery-item-${index + 1}`}
              onClick={() => openModal(image)}
            >
              <div className="gallery-image">
                <img src={image.src} alt={image.alt} />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>{image.title}</h3>
                    <span className="view-icon">👁️</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="gallery-cta">
          <p>実際の空間で特別な体験をお楽しみください</p>
          <button className="btn btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            予約する
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;