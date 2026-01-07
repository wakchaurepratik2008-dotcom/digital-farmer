import React, { useState } from 'react';
import { FaSeedling, FaCloud, FaTint, FaFlask, FaExclamationTriangle, FaChartLine } from 'react-icons/fa';

const CropAdvisory = ({ farmerData }) => {
  const [selectedCrop, setSelectedCrop] = useState(farmerData?.crop || '');

  const cropAdvisoryData = {
    'भात': {
      season: 'खरीप',
      waterRequirement: 'जास्त',
      irrigation: 'सतत पाणी',
      fertilizer: 'युरिया: 60-80 किलो, DAP: 40-50 किलो, पोटॅश: 30-40 किलो प्रति एकर',
      diseases: ['ब्लास्ट', 'ब्राउन स्पॉट', 'बॅक्टेरियल लीफ ब्लाइट'],
      pests: ['तांब्या डुंगरी', 'गांधील पिडी', 'शेंगदाणे किडा'],
      tips: [
        'नर्सरी तयार करताना वेळीचे रोप वापरा',
        'वाढीच्या काळात योग्य पाणी व्यवस्थापन करा',
        'कीटकनाशकांचा वापर योग्य वेळी करा'
      ]
    },
    'गहू': {
      season: 'रब्बी',
      waterRequirement: 'मध्यम',
      irrigation: 'आठवड्यातून एकदा',
      fertilizer: 'युरिया: 50-60 किलो, DAP: 35-40 किलो, पोटॅश: 20-25 किलो प्रति एकर',
      diseases: ['रस्ट', 'येलो रस्ट', 'लूज स्मट'],
      pests: ['अफिड्स', 'टेराइट', 'गार्म वर्म'],
      tips: [
        'बियाणे उपचारित करून लावा',
        'योग्य वेळी खत द्या',
        'वाढीच्या काळात पाणी नको'
      ]
    },
    'कापूस': {
      season: 'खरीप',
      waterRequirement: 'मध्यम',
      irrigation: '१५-२० दिवसांनी',
      fertilizer: 'युरिया: 80-100 किलो, DAP: 50-60 किलो, पोटॅश: 40-50 किलो प्रति एकर',
      diseases: ['वाल्ट विल्ट', 'बोल रोट', 'अर्लाइफ ब्लाइट'],
      pests: ['पिंक बॉलवर्म', 'अमेरिकन बॉलवर्म', 'जसिड'],
      tips: [
        'वेळीचे तोडणी करा',
        'योग्य पद्धतीने सुकवा',
        'कीटकनाशकांचा वापर मर्यादित करा'
      ]
    },
    'सोयाबीन': {
      season: 'खरीप',
      waterRequirement: 'कमी',
      irrigation: 'आवश्यकतेनुसार',
      fertilizer: 'युरिया: 20-30 किलो, DAP: 60-80 किलो, पोटॅश: 30-40 किलो प्रति एकर',
      diseases: ['रस्ट', 'पर्पल सीड स्ट्रीन', 'अर्लाइफ ब्लाइट'],
      pests: ['सेमी बोरर', 'पोड बोरर', 'ग्रीन लीफ हॉपर'],
      tips: [
        'योग्य बियाणे निवडा',
        'वेळीचे लागवड करा',
        'जैविक खतांचा वापर करा'
      ]
    },
    'मका': {
      season: 'खरीप/झायद',
      waterRequirement: 'मध्यम',
      irrigation: '१०-१५ दिवसांनी',
      fertilizer: 'युरिया: 70-80 किलो, DAP: 45-55 किलो, पोटॅश: 35-45 किलो प्रति एकर',
      diseases: ['नॉर्दन लीफ ब्लाइट', 'चारकोल रॉट', 'कॉर्न स्मट'],
      pests: ['फॉल आर्मीवर्म', 'स्टेम बोरर', 'अफिड्स'],
      tips: [
        'योग्य अंतर ठेवून लागवड करा',
        'वेळीचे खत द्या',
        'काढणीची योग्य वेळ निवडा'
      ]
    }
  };

  const currentAdvisory = cropAdvisoryData[selectedCrop] || {};

  const getWaterLevelBadge = (level) => {
    const badges = {
      'कमी': 'badge-low',
      'मध्यम': 'badge-medium',
      'जास्त': 'badge-high'
    };
    return badges[level] || 'badge-medium';
  };

  const getWeatherBasedAdvice = () => {
    const currentMonth = new Date().getMonth() + 1;
    const season = farmerData?.season || '';
    
    if (currentMonth >= 6 && currentMonth <= 9) {
      return {
        icon: <FaCloud />,
        title: 'पावसाळी हवामान',
        advice: 'अतिवृष्टीची शक्यता. निचरा व्यवस्था तपासा. बोल्ट आणि फंगसनाशक तयार ठेवा.'
      };
    } else if (currentMonth >= 3 && currentMonth <= 5) {
      return {
        icon: <FaTint />,
        title: 'उन्हाळी हवामान',
        advice: 'उच्च तापमान. ठिबक सिंचन शिफारसीय. पाण्याचे व्यवस्थापन करा.'
      };
    } else {
      return {
        icon: <FaChartLine />,
        title: 'अनुकूल हवामान',
        advice: 'शेतीसाठी अनुकूल वातावरण. योग्य वेळी लागवड आणि खत द्या.'
      };
    }
  };

  const weatherAdvice = getWeatherBasedAdvice();

  return (
    <div>
      <div className="card">
        <h2 className="section-title">
          <FaSeedling /> पीक मार्गदर्शन आणि सल्ला
        </h2>

        {/* Crop Selection */}
        <div className="form-group">
          <label className="form-label">पीक निवडा</label>
          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="form-input"
          >
            <option value="">पीक निवडा</option>
            {Object.keys(cropAdvisoryData).map(crop => (
              <option key={crop} value={crop}>{crop}</option>
            ))}
          </select>
        </div>

        {selectedCrop && currentAdvisory && (
          <div className="grid grid-2">
            {/* Basic Information */}
            <div className="card">
              <h3>पीक माहिती</h3>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                <div><strong>हंगाम:</strong> {currentAdvisory.season}</div>
                <div>
                  <strong>पाण्याची गरज:</strong> 
                  <span className={`badge ${getWaterLevelBadge(currentAdvisory.waterRequirement)}`}>
                    {currentAdvisory.waterRequirement}
                  </span>
                </div>
                <div><strong>सिंचन:</strong> {currentAdvisory.irrigation}</div>
              </div>
            </div>

            {/* Fertilizer Information */}
            <div className="card">
              <h3><FaFlask /> खत मार्गदर्शन</h3>
              <p>{currentAdvisory.fertilizer}</p>
            </div>
          </div>
        )}

        {selectedCrop && currentAdvisory && (
          <div className="grid grid-3">
            {/* Diseases */}
            <div className="card">
              <h3 style={{ color: '#d32f2f' }}>
                <FaExclamationTriangle /> रोग
              </h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {currentAdvisory.diseases.map((disease, index) => (
                  <li key={index}>{disease}</li>
                ))}
              </ul>
            </div>

            {/* Pests */}
            <div className="card">
              <h3 style={{ color: '#f57c00' }}>कीटक</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {currentAdvisory.pests.map((pest, index) => (
                  <li key={index}>{pest}</li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="card">
              <h3 style={{ color: '#2e7d32' }}>टिप्स</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {currentAdvisory.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Weather Based Advice */}
        <div className="card" style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)' }}>
          <h3>{weatherAdvice.icon} {weatherAdvice.title}</h3>
          <p>{weatherAdvice.advice}</p>
        </div>
      </div>
    </div>
  );
};

export default CropAdvisory;
