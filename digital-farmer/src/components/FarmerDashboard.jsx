import React from 'react';
import { FaUserCircle, FaMapMarkerAlt, FaSeedling, FaRobot, FaExclamationTriangle, FaTint, FaFlask } from 'react-icons/fa';

const FarmerDashboard = ({ farmerData }) => {
  const generateRecommendations = () => {
    const { season, irrigation, landSize, crop } = farmerData;
    
    // Next Season Suggestion
    let nextSeason = '';
    let suggestedCrops = '';
    
    if (season === 'खरीप') {
      nextSeason = 'रब्बी (Rabi - Nov-March)';
      if (irrigation === 'पावसाळी') {
        suggestedCrops = 'हरभरा (Chickpea), मसूर (Lentil) - कमी पाणी लागणारी पिके';
      } else {
        suggestedCrops = 'गहू (Wheat), कांदा (Onion), लसूण (Garlic)';
      }
    } else if (season === 'रब्बी') {
      nextSeason = 'झायद (Zaid - March-June)';
      suggestedCrops = 'काकडी (Cucumber), खरबूज (Muskmelon), भाजीपाला (Vegetables)';
    } else {
      nextSeason = 'खरीप (Kharif - June-Oct)';
      if (landSize.includes('5')) {
        suggestedCrops = 'कापूस (Cotton), सोयाबीन (Soybean), तूर (Tur)';
      } else {
        suggestedCrops = 'बाजरी (Bajra), मका (Maize), उडीद (Urad)';
      }
    }

    // Fertilizer Guidance
    let fertilizer = '';
    if (landSize === '< 1 एकर') {
      fertilizer = 'युरिया: 25 किलो, DAP: 20 किलो, पोटॅश: 15 किलो प्रति एकर';
    } else if (landSize === '1-2 एकर') {
      fertilizer = 'युरिया: 50 किलो, DAP: 40 किलो, पोटॅश: 30 किलो एकूण';
    } else if (landSize === '2-5 एकर') {
      fertilizer = 'युरिया: 100-125 किलो, DAP: 80-100 किलो, पोटॅश: 60-75 किलो एकूण';
    } else {
      fertilizer = 'युरिया: 150+ किलो, DAP: 120+ किलो, पोटॅश: 90+ किलो एकूण (मृदा चाचणी करा)';
    }

    if (irrigation === 'ठिबक/फवारा') {
      fertilizer += ' | टीप: ठिबक सिंचनामुळे 20-30% खत वाचवता येईल';
    }

    // Water Requirement
    let waterLevel = '';
    let badgeClass = '';
    
    if (irrigation === 'पावसाळी') {
      waterLevel = 'कमी (Low) - पावसावर आधारित';
      badgeClass = 'badge-low';
    } else if (irrigation === 'बोअरवेल') {
      waterLevel = 'मध्यम ते जास्त (Medium-High)';
      badgeClass = 'badge-medium';
    } else if (irrigation === 'कालवा') {
      waterLevel = 'मध्यम (Medium) - नियमित पाणीपुरवठा';
      badgeClass = 'badge-medium';
    } else {
      waterLevel = 'कमी (Low) - कार्यक्षम सिंचन';
      badgeClass = 'badge-low';
    }

    // Risk Alert
    let risk = '';
    const currentMonth = new Date().getMonth() + 1;
    
    if (irrigation === 'पावसाळी') {
      risk = '⚠️ पावसाळी शेतीसाठी सावधानता: पाऊस कमी झाल्यास पीक खराब होण्याचा धोका. पर्यायी पिके विचारात घ्या.';
    } else if (landSize.includes('< 1') || landSize.includes('1-2')) {
      risk = '💡 लहान शेतकरी: मिश्र पीक लावा (multiple crops) जोखीम कमी करण्यासाठी.';
    } else {
      risk = '✅ चांगली स्थिती: तुमची जमीन आणि सिंचन व्यवस्था योग्य आहे. सध्याच्या पद्धती चालू ठेवा.';
    }
    
    if (currentMonth >= 3 && currentMonth <= 5) {
      risk += ' | 🌡️ उन्हाळा: पाण्याचा योग्य वापर करा. ठिबक सिंचन शिफारसीय.';
    } else if (currentMonth >= 6 && currentMonth <= 9) {
      risk += ' | 🌧️ पाऊस हंगाम: अतिवृष्टीसाठी निचरा व्यवस्था तपासा.';
    }

    return { nextSeason, suggestedCrops, fertilizer, waterLevel, badgeClass, risk };
  };

  const recommendations = generateRecommendations();

  return (
    <div>
      {/* Welcome Banner */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)', color: 'white' }}>
        <div className="text-center">
          <h2>🎉 स्वागत आहे, {farmerData.name}! 🎉</h2>
          <p>तुमची नोंदणी यशस्वी झाली आहे | Your registration is successful</p>
          <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
            "शेतकरी हा राष्ट्राचा आधार आहे" - Farmer is the backbone of the nation
          </p>
        </div>
      </div>

      <div className="grid grid-2">
        {/* Farmer Information */}
        <div className="card">
          <h3><FaUserCircle /> तुमची माहिती</h3>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <div><strong>नाव:</strong> {farmerData.name}</div>
            <div><strong>मोबाईल:</strong> {farmerData.mobile}</div>
            <div><strong>गाव:</strong> {farmerData.village}</div>
            <div><strong>जिल्हा:</strong> {farmerData.district}</div>
          </div>
        </div>

        {/* Land Information */}
        <div className="card">
          <h3><FaMapMarkerAlt /> जमीन माहिती</h3>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <div><strong>जमिनीचा आकार:</strong> {farmerData.landSize}</div>
            <div><strong>सिंचन प्रकार:</strong> {farmerData.irrigation}</div>
            <div><strong>चालू हंगाम:</strong> {farmerData.season}</div>
            <div><strong>चालू पीक:</strong> {farmerData.crop}</div>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', color: 'white' }}>
        <h3><FaRobot /> AI-Generated शेती सल्ला</h3>
        
        <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <h4><FaSeedling /> पुढील हंगामाचा सल्ला:</h4>
          <p><strong>पुढील हंगाम:</strong> {recommendations.nextSeason}</p>
          <p><strong>सुचवलेली पिके:</strong> {recommendations.suggestedCrops}</p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <h4><FaFlask /> खत मार्गदर्शन:</h4>
          <p>{recommendations.fertilizer}</p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '8px' }}>
          <h4><FaTint /> पाण्याची आवश्यकता:</h4>
          <span className={`badge ${recommendations.badgeClass}`}>{recommendations.waterLevel}</span>
        </div>
      </div>

      {/* Risk Alert */}
      <div className="card" style={{ background: '#fff3cd', borderLeft: '5px solid #ffc107' }}>
        <h3 style={{ color: '#856404' }}><FaExclamationTriangle /> जोखीम सूचना</h3>
        <p style={{ color: '#856404' }}>{recommendations.risk}</p>
      </div>
    </div>
  );
};

export default FarmerDashboard;
