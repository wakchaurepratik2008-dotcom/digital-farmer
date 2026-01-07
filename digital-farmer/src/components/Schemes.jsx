import React, { useState } from 'react';
import { FaCoins, FaShieldAlt, FaStore, FaMobileAlt, FaExternalLinkAlt, FaPhoneAlt, FaEnvelope, FaSearch } from 'react-icons/fa';

const Schemes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const schemes = [
    {
      id: 1,
      name: 'पीएम-किसान सन्मान निधी योजना',
      englishName: 'PM-Kisan Samman Nidhi',
      category: 'financial',
      description: 'थेट उत्पन्न सहाय्य योजना - प्रति वर्ष ₹६,०००',
      eligibility: 'सर्व लहान आणि सीमांत शेतकरी',
      benefits: 'प्रति वर्ष ₹६,००० तीन हप्त्यांमध्ये',
      website: 'https://pmkisan.gov.in/',
      helpline: '1800-115-526',
      email: 'pmkisan-ict@gov.in',
      documents: ['आधार कार्ड', 'जमीनदारी दाखला', 'बँक खाते'],
      icon: <FaCoins />
    },
    {
      id: 2,
      name: 'प्रधानमंत्री फसल बीमा योजना',
      englishName: 'Pradhan Mantri Fasal Bima Yojana',
      category: 'insurance',
      description: 'पीक विमा योजना - नैसर्गिक आपत्तींपासून संरक्षण',
      eligibility: 'शेतकरी जे पिके वाढवतात',
      benefits: 'प्रीमियमचे २% शेतकरी आणि ९८% सरकार भरते',
      website: 'https://pmfby.gov.in/',
      helpline: '1800-180-1551',
      email: 'pmfby-moa@gov.in',
      documents: ['आधार कार्ड', 'जमीनदारी दाखला', 'बँक खाते', 'पिकाचे तपशील'],
      icon: <FaShieldAlt />
    },
    {
      id: 3,
      name: 'ई-नाम (राष्ट्रीय कृषी बाजार)',
      englishName: 'e-NAM (National Agriculture Market)',
      category: 'market',
      description: 'ऑनलाइन मंडई / किंमत शोध प्रणाली',
      eligibility: 'सर्व शेतकरी आणि व्यापारी',
      benefits: 'उत्तम किंमत मिळवा, पारदर्शक व्यवहार',
      website: 'https://enam.gov.in/',
      helpline: '1800-270-0224',
      email: 'enam.helpdesk@gmail.com',
      documents: ['आधार कार्ड', 'पॅन कार्ड', 'बँक खाते'],
      icon: <FaStore />
    },
    {
      id: 4,
      name: 'मृदा स्वास्थ्य कार्ड योजना',
      englishName: 'Soil Health Card Scheme',
      category: 'technical',
      description: 'मृदा चाचणी आणि खत मार्गदर्शन',
      eligibility: 'सर्व शेतकरी',
      benefits: 'विनामूल्य मृदा चाचणी, खत मार्गदर्शन',
      website: 'https://soilhealth.dac.gov.in/',
      helpline: '1800-180-1551',
      email: 'soilhealth-moa@gov.in',
      documents: ['आधार कार्ड', 'जमीनदारी दाखला'],
      icon: <FaCoins />
    },
    {
      id: 5,
      name: 'उमंग अॅप',
      englishName: 'UMANG App',
      category: 'digital',
      description: 'सरकारी सेवांसाठी एकीकृत मोबाइल अॅप',
      eligibility: 'सर्व नागरिक',
      benefits: 'सर्व सरकारी सेवा एकाच ठिकाणी',
      website: 'https://web.umang.gov.in/',
      helpline: '1800-300-3468',
      email: 'support.umang@gov.in',
      documents: ['मोबाईल नंबर', 'ईमेल आयडी'],
      icon: <FaMobileAlt />
    },
    {
      id: 6,
      name: 'किसान क्रेडिट कार्ड योजना',
      englishName: 'Kisan Credit Card Scheme',
      category: 'financial',
      description: 'शेतीसाठी कर्ज सुविधा',
      eligibility: 'शेतकरी',
      benefits: 'कमी व्याजदरात कर्ज सुविधा',
      website: 'https://www.kisan.gov.in/',
      helpline: '1800-425-0017',
      email: 'kisancredit@rbidocs.rbi.org.in',
      documents: ['आधार कार्ड', 'जमीनदारी दाखला', 'बँक खाते'],
      icon: <FaCoins />
    }
  ];

  const categories = [
    { value: 'all', label: 'सर्व योजना' },
    { value: 'financial', label: 'आर्थिक सहाय्य' },
    { value: 'insurance', label: 'विमा' },
    { value: 'market', label: 'बाजार' },
    { value: 'technical', label: 'तांत्रिक' },
    { value: 'digital', label: 'डिजिटल' }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    const colors = {
      financial: '#4caf50',
      insurance: '#ff9800',
      market: '#2196f3',
      technical: '#9c27b0',
      digital: '#607d8b'
    };
    return colors[category] || '#666';
  };

  return (
    <div className="card">
      <h2 className="section-title">
        <FaCoins /> सरकारी शेती योजना
      </h2>

      {/* Search and Filter */}
      <div className="grid grid-2">
        <div className="form-group">
          <label className="form-label">
            <FaSearch /> योजना शोधा
          </label>
          <input
            type="text"
            placeholder="योजनेचे नाव किंवा वर्णन लिहा..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">श्रेणी</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="form-input"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Schemes List */}
      <div className="grid grid-2">
        {filteredSchemes.map(scheme => (
          <div key={scheme.id} className="card" style={{ borderLeft: `5px solid ${getCategoryColor(scheme.category)}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem', color: getCategoryColor(scheme.category) }}>
                {scheme.icon}
              </span>
              <div>
                <h3 style={{ margin: 0, color: getCategoryColor(scheme.category) }}>
                  {scheme.name}
                </h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                  {scheme.englishName}
                </p>
              </div>
            </div>

            <p style={{ marginBottom: '1rem', color: '#555' }}>
              {scheme.description}
            </p>

            <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1rem' }}>
              <div><strong>पात्रता:</strong> {scheme.eligibility}</div>
              <div><strong>लाभ:</strong> {scheme.benefits}</div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <strong>आवश्यक कागदपत्रे:</strong>
              <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem' }}>
                {scheme.documents.map((doc, index) => (
                  <li key={index} style={{ fontSize: '0.9rem' }}>{doc}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'grid', gap: '0.5rem', fontSize: '0.9rem' }}>
              <div>
                <FaPhoneAlt style={{ color: '#d32f2f' }} /> 
                <strong> हेल्पलाइन:</strong> 
                <a href={`tel:${scheme.helpline}`} style={{ color: '#d32f2f', marginLeft: '5px' }}>
                  {scheme.helpline}
                </a>
              </div>
              <div>
                <FaEnvelope style={{ color: '#1976d2' }} /> 
                <strong> ईमेल:</strong> 
                <a href={`mailto:${scheme.email}`} style={{ color: '#1976d2', marginLeft: '5px' }}>
                  {scheme.email}
                </a>
              </div>
            </div>

            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <a
                href={scheme.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ textDecoration: 'none' }}
              >
                <FaExternalLinkAlt /> अधिकृत वेबसाइट
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredSchemes.length === 0 && (
        <div className="text-center" style={{ padding: '2rem', color: '#666' }}>
          <p>कोणतेही योजना सापडल्या नाहीत. कृपया शोध शब्द बदला.</p>
        </div>
      )}
    </div>
  );
};

export default Schemes;
