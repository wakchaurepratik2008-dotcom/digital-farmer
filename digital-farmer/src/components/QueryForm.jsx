import React, { useState } from 'react';
import { FaQuestionCircle, FaEnvelope, FaPhone, FaUser, FaLeaf, FaBug, FaCloud, FaStore, FaSend, FaSearch } from 'react-icons/fa';

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    category: '',
    subject: '',
    query: '',
    priority: 'medium'
  });

  const [submitted, setSubmitted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { value: 'general', label: 'सामान्य शेती', icon: <FaLeaf /> },
    { value: 'pest', label: 'कीटक आणि रोग', icon: <FaBug /> },
    { value: 'weather', label: 'हवामान', icon: <FaCloud /> },
    { value: 'market', label: 'बाजार', icon: <FaStore /> },
    { value: 'schemes', label: 'सरकारी योजना', icon: <FaLeaf /> },
    { value: 'technical', label: 'तांत्रिक समस्या', icon: <FaLeaf /> }
  ];

  const faqData = [
    {
      question: 'पीएम-किसान योजनेत नोंदणी कसे करावी?',
      answer: 'पीएम-किसान योजनेत नोंदणी करण्यासाठी तुम्ही pmkisan.gov.in या अधिकृत वेबसाइटवर जाऊ शकता. तुमचे आधार कार्ड, जमीनदारी दाखला आणि बँक खाते तपासणी आवश्यक आहे.',
      category: 'schemes'
    },
    {
      question: 'भाताचा ब्लास्ट रोग कसा नियंत्रित करावा?',
      answer: 'ब्लास्ट रोग नियंत्रित करण्यासाठी रोग प्रतिरोधक जाती वापरा, योग्य खत व्यवस्थापन करा, आणि ट्रायसायक्लाझोल किंवा आयप्रोडियोन या फंगसनाशकांचा वापर करा.',
      category: 'pest'
    },
    {
      question: 'कापसाचे फवारे कधी करावे?',
      answer: 'कापसाचे फवारे फुलण्याच्या ६०-७० दिवसांनी करावे. फवाऱ्यापूर्वी शेतातील आर्द्रता तपासा आणि दिवसाच्या थंड काळात फवारा करा.',
      category: 'technical'
    },
    {
      question: 'ई-नाम पोर्टलवर नोंदणी कशी करावी?',
      answer: 'ई-नाम पोर्टलवर नोंदणी करण्यासाठी enam.gov.in वेबसाइटवर जाऊन तुमचे आधार कार्ड, पॅन कार्ड आणि बँक खाते माहिती भरा. स्थानिक मंडई कार्यालयातूनही मदत मिळू शकते.',
      category: 'market'
    },
    {
      question: 'उन्हाळ्यात पाणी कसे वाचवावे?',
      answer: 'उन्हाळ्यात पाणी वाचवण्यासाठी ठिबक सिंचन वापरा, सकाळी किंवा संध्याकाळी पाणी द्या, शेतात आच्छादन ठेवा, आणि पाणी साठवण्याची व्यवस्था करा.',
      category: 'general'
    },
    {
      question: 'जैविक शेती कशी करावी?',
      answer: 'जैविक शेती करण्यासाठी रासायनिक खते आणि कीटकनाशक वापरणे बंद करा, गोबर खत, वर्मीकम्पोस्ट आणि गायीचे शेण वापरा, आणि फसल फिरवा अंमलात आणा.',
      category: 'technical'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to a server
    console.log('Query submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        category: '',
        subject: '',
        query: '',
        priority: 'medium'
      });
    }, 3000);
  };

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryIcon = (category) => {
    const categoryData = categories.find(cat => cat.value === category);
    return categoryData ? categoryData.icon : <FaQuestionCircle />;
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return '#f44336';
      case 'medium': return '#ff9800';
      case 'low': return '#4caf50';
      default: return '#666';
    }
  };

  return (
    <div className="card">
      <h2 className="section-title">
        <FaQuestionCircle /> शेतकरी प्रश्न आणि उत्तरे
      </h2>

      {/* FAQ Section */}
      <div className="card">
        <h3>बहुतेक विचारले जाणारे प्रश्न (FAQ)</h3>
        
        {/* Search */}
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

        {/* FAQ List */}
        <div style={{ marginTop: '1rem' }}>
          {filteredFAQs.map((faq, index) => (
            <div key={index} className="card" style={{ marginBottom: '1rem', borderLeft: '5px solid #2e7d32' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '0.5rem' }}>
                <span style={{ color: '#2e7d32', marginTop: '2px' }}>
                  {getCategoryIcon(faq.category)}
                </span>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, color: '#2e7d32' }}>{faq.question}</h4>
                </div>
              </div>
              <p style={{ margin: '0.5rem 0', color: '#555', paddingLeft: '30px' }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center" style={{ padding: '2rem', color: '#666' }}>
            <p>कोणतेही प्रश्न सापडले नाहीत. कृपया शोध शब्द बदला.</p>
          </div>
        )}
      </div>

      {/* Query Form */}
      <div className="card">
        <h3>तुमचा प्रश्न विचारा</h3>
        
        {submitted ? (
          <div className="success">
            <h4>धन्यवाद!</h4>
            <p>तुमचा प्रश्न यशस्वीपणे सादर केला आहे. आम्ही २४ तासांच्या आत तुमच्याशी संपर्क साधेल.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-2">
              <div className="form-group">
                <label className="form-label">
                  <FaUser /> नाव *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="तुमचे नाव"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <FaPhone /> मोबाईल नंबर *
                </label>
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
                <label className="form-label">
                  <FaEnvelope /> ईमेल
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="तुमचा ईमेल आयडी"
                />
              </div>

              <div className="form-group">
                <label className="form-label">श्रेणी *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">श्रेणी निवडा</option>
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">विषय *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="तुमचा विषय"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">प्राथमिकता</label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="low">कमी</option>
                  <option value="medium">मध्यम</option>
                  <option value="high">उच्च</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">प्रश्न तपशील *</label>
              <textarea
                name="query"
                value={formData.query}
                onChange={handleChange}
                className="form-input"
                rows="5"
                placeholder="तुमचा प्रश्न तपशीलवार लिहा..."
                required
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <button type="submit" className="btn">
                <FaSend /> प्रश्न सादर करा
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Contact Information */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)' }}>
        <h3>संपर्क माहिती</h3>
        <div className="grid grid-2">
          <div>
            <h4>कृषी सहाय्य केंद्र</h4>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <div><FaPhone /> टोल-फ्री: 1800-180-1551</div>
              <div><FaEnvelope /> ईमेल: helpdesk@kisan.gov.in</div>
              <div><FaEnvelope /> व्हॉट्सअॅप: +91-9876543210</div>
            </div>
          </div>
          <div>
            <h4>जिल्हा कृषी कार्यालय</h4>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <div><FaPhone /> फोन: 020-26123456</div>
              <div><FaEnvelope /> ईमेल: agriculture@district.gov.in</div>
              <div><FaStore /> पत्ता: जिल्हा कृषी कार्यालय, जिल्हा मुख्यालय</div>
            </div>
          </div>
        </div>
      </div>

      {/* Helpline Numbers */}
      <div className="card">
        <h3>महत्त्वाचे हेल्पलाइन नंबर</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div className="card" style={{ textAlign: 'center', padding: '1rem' }}>
            <h4>किसान कॉल सेंटर</h4>
            <p><strong>1800-180-1551</strong></p>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>सर्व प्रकारच्या शेती समस्यांसाठी</p>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '1rem' }}>
            <h4>पीएम-किसान हेल्पलाइन</h4>
            <p><strong>1800-115-526</strong></p>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>पीएम-किसान योजना संबंधित</p>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '1rem' }}>
            <h4>ई-नाम हेल्पलाइन</h4>
            <p><strong>1800-270-0224</strong></p>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>ई-नाम बाजारपेठ संबंधित</p>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '1rem' }}>
            <h4>फसल विमा हेल्पलाइन</h4>
            <p><strong>1800-180-1551</strong></p>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>पीक विमा संबंधित</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryForm;
