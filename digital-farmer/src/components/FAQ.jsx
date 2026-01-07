import React, { useState } from 'react';
import { FaQuestionCircle, FaSearch, FaBook, FaUsers, FaLightbulb, FaExclamationTriangle } from 'react-icons/fa';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqData = [
    {
      question: 'पीएम-किसान योजनेत नोंदणी कशी करावी?',
      answer: 'पीएम-किसान योजनेत नोंदणी करण्यासाठी तुम्ही pmkisan.gov.in या अधिकृत वेबसाइटवर जाऊ शकता. तुमचे आधार कार्ड, जमीनदारी दाखला आणि बँक खाते तपासणी आवश्यक आहे. तुम्ही जवळच्या कॉमन सर्विस सेंटरवरूनही नोंदणी करू शकता.',
      category: 'schemes',
      difficulty: 'easy'
    },
    {
      question: 'भाताचा ब्लास्ट रोग कसा नियंत्रित करावा?',
      answer: 'ब्लास्ट रोग नियंत्रित करण्यासाठी खालील उपाय करावेत:\n1. रोग प्रतिरोधक जाती निवडा\n2. योग्य खत व्यवस्थापन करा\n3. अतिरिक्त नत्र टाळा\n4. ट्रायसायक्लाझोल २५% डब्ल्यूजी - १००० ग्रॅम/हेक्टर\n5. आयप्रोडियोन १०% एसपी - ५०० ग्रॅम/हेक्टर\n6. नियमित निरीक्षण करा',
      category: 'pest',
      difficulty: 'medium'
    },
    {
      question: 'कापसाचे फवारे कधी करावे?',
      answer: 'कापसाचे फवारे खालील वेळी करावे:\n1. पहिला फवारा: फुलण्याच्या ६० दिवसांनी\n2. दुसरा फवारा: पहिल्या फवऱ्यानंतर २० दिवसांनी\n3. फवाऱ्यापूर्वी शेतातील आर्द्रता तपासा\n4. दिवसाच्या थंड काळात फवारा करा\n5. फवाऱ्यानंतर ६ तास पावसापासून दूर ठेवा',
      category: 'technical',
      difficulty: 'medium'
    },
    {
      question: 'ई-नाम पोर्टलवर नोंदणी कशी करावी?',
      answer: 'ई-नाम पोर्टलवर नोंदणी करण्याची प्रक्रिया:\n1. enam.gov.in वेबसाइटवर जा\n2. "नवीन नोंदणी" वर क्लिक करा\n3. आधार कार्ड, पॅन कार्ड आणि बँक खाते माहिती भरा\n4. ईमेल आणि मोबाईल नंबर तपासणी करा\n5. स्थानिक मंडई कार्यालयातून दस्तऐवज सत्यापन करा\n6. नोंदणी पूर्ण झाल्यावर लॉगिन करा',
      category: 'market',
      difficulty: 'easy'
    },
    {
      question: 'उन्हाळ्यात पाणी कसे वाचवावे?',
      answer: 'उन्हाळ्यात पाणी वाचवण्याच्या उपाय:\n1. ठिबक सिंचन वापरा\n2. सकाळी किंवा संध्याकाळी पाणी द्या\n3. शेतात आच्छादन ठेवा\n4. पाणी साठवण्याची व्यवस्था करा\n5. पाण्याचे वापर योग्य वेळी करा\n6. जमिनीची ओलसर राखण्यासाठी आच्छादन वापरा',
      category: 'general',
      difficulty: 'easy'
    },
    {
      question: 'जैविक शेती कशी करावी?',
      answer: 'जैविक शेती करण्याच्या पायऱ्या:\n1. रासायनिक खते आणि कीटकनाशक वापरणे बंद करा\n2. गोबर खत, वर्मीकम्पोस्ट आणि गायीचे शेण वापरा\n3. फसल फिरवा अंमलात आणा\n4. हरियाली खते वापरा\n5. जैविक कीटकनाशक वापरा\n6. जमिनीची आरोग्य चाचणी करा\n7. प्रमाणित जैविक शेतीची प्रमाणपत्रे मिळवा',
      category: 'technical',
      difficulty: 'hard'
    },
    {
      question: 'सोयाबीन लावण्याची योग्य वेळ कोणती?',
      answer: 'सोयाबीन लावण्याची योग्य वेळ:\n1. खरीप हंगाम: जून महिन्याच्या पहिल्या आठवड्यात\n2. जमिनीचे तापमान २५-३० अंश सेल्सिअस असावे\n3. मान्सून येण्यापूर्वी लावणी पूर्ण करा\n4. बियाणाची दर: ७५-८० किलो प्रति हेक्टर\n5. लावणीची खोली: ३-४ सेंमी\n6. लावणीनंतर लगेच पाणी द्या',
      category: 'technical',
      difficulty: 'medium'
    },
    {
      question: 'पिकांचे बाजारभाव कसे तपासावे?',
      answer: 'पिकांचे बाजारभाव तपासण्याच्या पद्धती:\n1. ई-नाम पोर्टलवर तपासा\n2. जवळच्या मंडईत किंमत विचारा\n3. कृषी विभागाच्या वेबसाइटवर तपासा\n4. मोबाईल अॅप्स वापरा\n5. रेडिओ आणि वृत्तपत्रे बघा\n6. इतर शेतकऱ्यांशी चर्चा करा',
      category: 'market',
      difficulty: 'easy'
    },
    {
      question: 'शेतकऱ्यांसाठी कर्ज कसे मिळेल?',
      answer: 'शेतकऱ्यांसाठी कर्ज मिळवण्याच्या पद्धती:\n1. किसान क्रेडिट कार्ड (केसीसी) योजना\n2. जमीनदारी दाखल्यावर कर्ज\n3. कृषि विकास ऋण\n4. शेतीसाहित्य खरेदी कर्ज\n5. सरकारी बँकांमधून कर्ज\n6. सहकारी बँकांमधून कर्ज\n7. आरबीआय कर्ज योजना',
      category: 'schemes',
      difficulty: 'medium'
    },
    {
      question: 'मृदा स्वास्थ्य कार्ड कसा मिळेल?',
      answer: 'मृदा स्वास्थ्य कार्ड मिळवण्याची प्रक्रिया:\n1. जवळच्या मृदा चाचणी केंद्राला भेट द्या\n2. शेतातून माती चे नमुने गोळा करा\n3. आधार कार्ड आणि जमीनदारी दाखला दाखवा\n4. मोफात मृदा चाचणी करून घ्या\n5. चाचणी अहवाल मिळवा\n6. अहवालानुसार खत मार्गदर्शन मिळवा\n7. मृदा स्वास्थ्य कार्ड डाउनलोड करा',
      category: 'schemes',
      difficulty: 'easy'
    }
  ];

  const categories = [
    { value: 'all', label: 'सर्व श्रेणी' },
    { value: 'schemes', label: 'सरकारी योजना' },
    { value: 'pest', label: 'कीटक आणि रोग' },
    { value: 'technical', label: 'तांत्रिक माहिती' },
    { value: 'market', label: 'बाजार' },
    { value: 'general', label: 'सामान्य शेती' }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'easy': return '#4caf50';
      case 'medium': return '#ff9800';
      case 'hard': return '#f44336';
      default: return '#666';
    }
  };

  const getDifficultyLabel = (difficulty) => {
    switch(difficulty) {
      case 'easy': return 'सोपे';
      case 'medium': return 'मध्यम';
      case 'hard': return 'अवघड';
      default: return '';
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'schemes': <FaBook />,
      'pest': <FaExclamationTriangle />,
      'technical': <FaLightbulb />,
      'market': <FaUsers />,
      'general': <FaQuestionCircle />
    };
    return icons[category] || <FaQuestionCircle />;
  };

  return (
    <div className="card">
      <h2 className="section-title">
        <FaQuestionCircle /> बहुतेक विचारले जाणारे प्रश्न (FAQ)
      </h2>

      {/* Search and Filter */}
      <div className="grid grid-2">
        <div className="form-group">
          <label className="form-label">
            <FaSearch /> प्रश्न शोधा
          </label>
          <input
            type="text"
            placeholder="प्रश्न शोधा..."
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

      {/* Statistics */}
      <div className="grid grid-3">
        <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)', color: 'white' }}>
          <h3>एकूण प्रश्न</h3>
          <h2>{filteredFAQs.length}</h2>
        </div>
        <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)', color: 'white' }}>
          <h3>श्रेणी</h3>
          <h2>{selectedCategory === 'all' ? categories.length - 1 : 1}</h2>
        </div>
        <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)', color: 'white' }}>
          <h3>शोध निकाल</h3>
          <h2>{searchTerm ? filteredFAQs.length : faqData.length}</h2>
        </div>
      </div>

      {/* FAQ List */}
      <div style={{ marginTop: '2rem' }}>
        {filteredFAQs.map((faq, index) => (
          <div key={index} className="card" style={{ 
            marginBottom: '1rem', 
            borderLeft: `5px solid ${getDifficultyColor(faq.difficulty)}`,
            transition: 'transform 0.3s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                <span style={{ fontSize: '1.5rem', color: '#2e7d32' }}>
                  {getCategoryIcon(faq.category)}
                </span>
                <span 
                  style={{ 
                    fontSize: '0.8rem', 
                    color: 'white', 
                    background: getDifficultyColor(faq.difficulty),
                    padding: '2px 8px',
                    borderRadius: '10px'
                  }}
                >
                  {getDifficultyLabel(faq.difficulty)}
                </span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0, color: '#2e7d32', marginBottom: '0.5rem' }}>
                  {faq.question}
                </h3>
                <div style={{ 
                  background: '#f8f9fa', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFAQs.length === 0 && (
        <div className="text-center" style={{ padding: '3rem', color: '#666' }}>
          <FaQuestionCircle style={{ fontSize: '4rem', marginBottom: '1rem', color: '#ddd' }} />
          <h3>कोणतेही प्रश्न सापडले नाहीत</h3>
          <p>कृपया शोध शब्द बदला किंवा वेगळी श्रेणी निवडा.</p>
        </div>
      )}

      {/* Help Section */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)', borderLeft: '5px solid #4caf50' }}>
        <h3 style={{ color: '#2e7d32' }}>अजून मदत हवी आहे?</h3>
        <p style={{ color: '#2e7d32', marginBottom: '1rem' }}>
          तुम्हाला तुमच्या प्रश्नाचे उत्तर सापडले नाही? तर आमच्या प्रश्न फॉर्मवर तुमचा प्रश्न विचारा.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn btn-secondary">
            <FaQuestionCircle /> प्रश्न विचारा
          </button>
          <button className="btn btn-secondary">
            <FaPhone /> हेल्पलाइन कॉल करा
          </button>
          <button className="btn btn-secondary">
            <FaUsers /> शेतकरी गटात सामील व्हा
          </button>
        </div>
      </div>

      {/* Tips */}
      <div className="card" style={{ background: '#fff3e0', borderLeft: '5px solid #ff9800' }}>
        <h3 style={{ color: '#e65100' }}>शोध टिप्स</h3>
        <ul style={{ paddingLeft: '1.5rem', color: '#e65100' }}>
          <li>एका किंवा दोन महत्त्वाच्या शब्दांचा वापर करा</li>
          <li>प्रश्नातील मुख्य विषय शोधा (उदा. "भात", "खत", "रोग")</li>
          <li>श्रेणी निवडून शोध मर्यादित करा</li>
          <li>इंग्रजी शब्द वापरूनही शोध करू शकता</li>
          <li>संबंधित श्रेणीत जाऊन सर्व प्रश्न पाहा</li>
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
