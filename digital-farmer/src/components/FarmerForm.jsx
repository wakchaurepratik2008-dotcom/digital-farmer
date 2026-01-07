import React, { useState } from 'react';
import { FaUser, FaPhone, FaMapMarkerAlt, FaSeedling, FaTint, FaCheckCircle } from 'react-icons/fa';

const FarmerForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    village: '',
    district: '',
    state: 'महाराष्ट्र',
    landSize: '',
    irrigation: '',
    season: '',
    crop: ''
  });

  const districts = [
    'अहमदनगर', 'जालना', 'औरंगाबाद', 'बीड', 'लातूर', 
    'नांदेड', 'परभणी', 'उस्मानाबाद', 'पुणे', 'मुंबई', 'नागपूर'
  ];

  const seasons = [
    { value: 'खरीप', label: 'खरीप (Kharif - June-Oct)' },
    { value: 'रब्बी', label: 'रब्बी (Rabi - Nov-March)' },
    { value: 'झायद', label: 'झायद (Zaid - March-June)' }
  ];

  const crops = {
    'खरीप': ['भात', 'ज्वारी', 'बाजरी', 'मका', 'तूर', 'उडीद', 'मूग', 'सोयाबीन', 'भुईमूग', 'कापूस', 'गहू'],
    'रब्बी': ['गहू', 'हरभरा', 'मसूर', 'वाटाणा', 'मोहरी', 'तीळ', 'कोथिंबीर', 'कांदा', 'लसूण', 'आलू'],
    'झायद': ['काकडी', 'खरबूज', 'टरबूज', 'कारली', 'भोपळा', 'भाजीपाला', 'मका', 'मूग']
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'season' && { crop: '' })
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="card">
      <h2 className="section-title">
        <FaUser /> शेतकरी नोंदणी फॉर्म
      </h2>
      
      <form onSubmit={handleSubmit}>
        {/* Farmer Information */}
        <div className="form-section">
          <h3><FaUser /> शेतकरी ओळख माहिती</h3>
          
          <div className="form-group">
            <label className="form-label">नाव (Name) *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="तुमचे पूर्ण नाव"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">मोबाईल नंबर *</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="form-input"
              placeholder="10 अंकी मोबाईल नंबर"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">गाव *</label>
            <input
              type="text"
              name="village"
              value={formData.village}
              onChange={handleChange}
              className="form-input"
              placeholder="तुमचे गाव"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">जिल्हा *</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">जिल्हा निवडा</option>
              {districts.map(district => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">राज्य *</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="महाराष्ट्र">महाराष्ट्र (Maharashtra)</option>
            </select>
          </div>
        </div>

        {/* Land Information */}
        <div className="form-section">
          <h3><FaMapMarkerAlt /> जमीन माहिती</h3>
          
          <div className="form-group">
            <label className="form-label">एकूण जमीन *</label>
            <select
              name="landSize"
              value={formData.landSize}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">जमीनीचा आकार निवडा</option>
              <option value="&lt; 1 एकर">&lt; 1 एकर</option>
              <option value="1-2 एकर">1-2 एकर</option>
              <option value="2-5 एकर">2-5 एकर</option>
              <option value="&gt; 5 एकर">&gt; 5 एकर</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">सिंचन प्रकार *</label>
            <select
              name="irrigation"
              value={formData.irrigation}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">सिंचन प्रकार निवडा</option>
              <option value="पावसाळी">पावसाळी (Rainfed)</option>
              <option value="बोअरवेल">बोअरवेल (Borewell)</option>
              <option value="कालवा">कालवा (Canal)</option>
              <option value="ठिबक/फवारा">ठिबक/फवारा (Drip)</option>
            </select>
          </div>
        </div>

        {/* Crop Selection */}
        <div className="form-section">
          <h3><FaSeedling /> पीक निवड</h3>
          
          <div className="form-group">
            <label className="form-label">चालू हंगाम *</label>
            <select
              name="season"
              value={formData.season}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">हंगाम निवडा</option>
              {seasons.map(season => (
                <option key={season.value} value={season.value}>{season.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">चालू पीक *</label>
            <select
              name="crop"
              value={formData.crop}
              onChange={handleChange}
              className="form-input"
              required
              disabled={!formData.season}
            >
              <option value="">
                {formData.season ? 'पीक निवडा' : 'प्रथम हंगाम निवडा'}
              </option>
              {formData.season && crops[formData.season]?.map(crop => (
                <option key={crop} value={crop}>{crop}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-center mt-2">
          <button type="submit" className="btn">
            <FaCheckCircle /> नोंदणी पूर्ण करा
          </button>
        </div>
      </form>
    </div>
  );
};

export default FarmerForm;
