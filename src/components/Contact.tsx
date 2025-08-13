import { useState } from 'react';
import type { ContactInfo } from '../types/index';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo: ContactInfo = {
    address: '東京都渋谷区神南1-2-3 LUXEビル 5F',
    phone: '03-1234-5678',
    email: 'info@luxebar.tokyo',
    hours: '18:00 - 翌4:00 (年中無休)'
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'お名前をご入力ください';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'お名前は2文字以上でご入力ください';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスをご入力ください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスの形式でご入力ください';
    }
    
    if (formData.phone.trim() && !/^[\d\-\(\)\s]+$/.test(formData.phone)) {
      newErrors.phone = '正しい電話番号の形式でご入力ください';
    }
    
    if (!formData.date) {
      newErrors.date = 'ご希望の日付をお選びください';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = '本日以降の日付をお選びください';
      }
    }
    
    if (!formData.time) {
      newErrors.time = 'ご希望の時間をお選びください';
    }
    
    if (!formData.guests) {
      newErrors.guests = 'ご来店予定人数をお選びください';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 入力時にエラーをクリア
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // シミュレーション用の遅延
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // フォームをリセット
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      message: ''
    });
    
    // エラーをクリア
    setErrors({});
    
    // 成功メッセージを3秒後に非表示
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">お問い合わせ</h2>
        <p className="section-subtitle">ご予約・お問い合わせはこちらから</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>店舗情報</h3>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h4>住所</h4>
                <p>{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h4>電話番号</h4>
                <p>{contactInfo.phone}</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h4>メールアドレス</h4>
                <p>{contactInfo.email}</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-content">
                <h4>営業時間</h4>
                <p>{contactInfo.hours}</p>
              </div>
            </div>
            
            <div className="contact-map">
              <div className="map-placeholder">
                <div className="map-overlay">
                  <span>Google Maps</span>
                  <p>地図を表示</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>ご予約・お問い合わせ</h3>
            
            {submitSuccess && (
              <div className="success-message">
                <span>✅</span>
                お問い合わせありがとうございます。<br />
                24時間以内にご返信いたします。
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">お名前 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="山田太郎"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">メールアドレス *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="example@email.com"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">電話番号</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="090-1234-5678"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="date">ご希望日 *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="time">ご希望時間 *</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">時間を選択</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                    <option value="23:00">23:00</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="guests">人数 *</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">人数を選択</option>
                    <option value="1">1名</option>
                    <option value="2">2名</option>
                    <option value="3">3名</option>
                    <option value="4">4名</option>
                    <option value="5">5名</option>
                    <option value="6+">6名以上</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">ご要望・ご質問</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="特別なリクエストやご質問がございましたら、お気軽にお書きください。"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? '送信中...' : '送信する'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;