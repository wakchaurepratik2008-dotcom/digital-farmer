import React, { useState } from 'react';
import { FaBug, FaExclamationTriangle, FaSearch, FaLeaf, FaSprayCan, FaShieldAlt, FaInfoCircle } from 'react-icons/fa';

const PestAwareness = ({ farmerData }) => {
  const [selectedCrop, setSelectedCrop] = useState(farmerData?.crop || '');
  const [selectedPest, setSelectedPest] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const crops = ['भात', 'गहू', 'कापूस', 'सोयाबीन', 'मका', 'ज्वारी', 'बाजरी', 'तूर', 'उडीद', 'मूग'];

  const pestData = {
    'भात': [
      {
        name: 'तांब्या डुंगरी',
        scientificName: 'Nilaparvata lugens',
        type: 'किडा',
        description: 'भाताच्या रोपांमध्ये रस शोषून घेणारा कीटक',
        symptoms: 'पाने पिवळी पडणे, रोपांची वाढ थांबणे, पिके कोसळणे',
        prevention: [
          'आरोग्य बियाणे वापरा',
          'नियमित निरीक्षण करा',
          'योग्य पाणी व्यवस्थापन',
          'कीटकनाशक फवारा वेळीचा करा'
        ],
        chemicalControl: [
          'इमिडाक्लोप्रिड १७.८% एसएल - २५० मिली/हेक्टर',
          'थायमेथॉक्झाम २५% डब्ल्यूजी - १०० ग्रॅम/हेक्टर',
          'एसिफेट ७५% एसपी - १००० ग्रॅम/हेक्टर'
        ],
        organicControl: [
          'नियंत्रण फवारे तयार करा (मिरची, लसूण, साबूदाणा)',
          'ट्रायकोडर्मा वापरा',
          'जैविक कीटकनाशक वापरा'
        ],
        season: 'खरीप',
        severity: 'उच्च'
      },
      {
        name: 'ब्लास्ट रोग',
        scientificName: 'Pyricularia oryzae',
        type: 'रोग',
        description: 'भाताचा सर्वात धोकादायक रोग',
        symptoms: 'पानांवर तपकिरी ठिपके, गाठींचे फुटणे, पिके कोसळणे',
        prevention: [
          'रोग प्रतिरोधक जाती निवडा',
          'योग्य खत व्यवस्थापन',
          'अतिरिक्त नत्र टाळा',
          'नियमित निरीक्षण करा'
        ],
        chemicalControl: [
          'ट्रायसायक्लाझोल २५% डब्ल्यूजी - १००० ग्रॅम/हेक्टर',
          'आयप्रोडियोन १०% एसपी - ५०० ग्रॅम/हेक्टर',
          'कार्बेन्डाझिम ५०% डब्ल्यूपी - ५०० ग्रॅम/हेक्टर'
        ],
        organicControl: [
          'बोर्डो मिश्रण फवारा',
          'नीम तेल फवारा',
          'ट्रायकोडर्मा वापरा'
        ],
        season: 'खरीप',
        severity: 'उच्च'
      }
    ],
    'कापूस': [
      {
        name: 'पिंक बॉलवर्म',
        scientificName: 'Pectinophora gossypiella',
        type: 'किडा',
        description: 'कापसाच्या कापडाला हानी करणारा कीटक',
        symptoms: 'कापडात छिद्रे, फुलांचे गळणे, लहान किडे',
        prevention: [
          'वेळीची काढणी करा',
          'फसल अवशेष नष्ट करा',
          'फेरोमोन ट्रॅप वापरा',
          'नियमित निरीक्षण करा'
        ],
        chemicalControl: [
          'क्विनालफॉस २५% ईसी - २००० मिली/हेक्टर',
          'क्लोरानट्रानिलिप्रोल २०% एससी - १५० मिली/हेक्टर',
          'स्पिनोसाड ४५% एससी - ५०० मिली/हेक्टर'
        ],
        organicControl: [
          'बीटी कापूस लावा',
          'फेरोमोन ट्रॅप वापरा',
          'जैविक कीटकनाशक वापरा'
        ],
        season: 'खरीप',
        severity: 'उच्च'
      }
    ],
    'गहू': [
      {
        name: 'अफिड्स',
        scientificName: 'Macrosiphum miscanthi',
        type: 'किडा',
        description: 'गहू रोपांचा रस शोषून घेणारे छोटे कीटक',
        symptoms: 'पाने करपटणे, पिवळी पडणे, रोपांची वाख थांबणे',
        prevention: [
          'योग्य बियाणे दर वापरा',
          'नियमित निरीक्षण करा',
          'शेतातील आगळीकरण करा',
          'अनुकूल वेळी लागवड करा'
        ],
        chemicalControl: [
          'डायमेथोएट ३०% ईसी - ५०० मिली/हेक्टर',
          'मेथिल डायमेथॉक्स २५% ईसी - ३०० मिली/हेक्टर',
          'एसिफेट ७५% एसपी - ८०० ग्रॅम/हेक्टर'
        ],
        organicControl: [
          'नीम तेल फवारा',
          'नियंत्रण फवारे तयार करा',
          'जैविक कीटकनाशक वापरा'
        ],
        season: 'रब्बी',
        severity: 'मध्यम'
      }
    ],
    'सोयाबीन': [
      {
        name: 'सेमी बोरर',
        scientificName: 'Acanthoscelides obtectus',
        type: 'किडा',
        description: 'सोयाबीन बियाण्याला हानी करणारा कीटक',
        symptoms: 'बियाण्यात छिद्रे, बियाणांचे वजन कमी होणे',
        prevention: [
          'स्वच्छ बियाणे वापरा',
          'गोदामातील स्वच्छता ठेवा',
          'योग्य साठवण करा',
          'नियमित तपासणी करा'
        ],
        chemicalControl: [
          'फोस्फिन गॅस वापरा',
          'मालाथियॉन ५% डस्ट - २५ किलो/टन',
          'पेराथियॉन ४% डस्ट - २० किलो/टन'
        ],
        organicControl: [
          'नीम पावडर मिसळा',
          'सूर्यप्रकाशात वाळवा',
          'नियंत्रित तापमानात साठवा'
        ],
        season: 'खरीप',
        severity: 'मध्यम'
      }
    ]
  };

  const currentPests = pestData[selectedCrop] || [];
  const selectedPestData = currentPests.find(pest => pest.name === selectedPest);

  const filteredPests = currentPests.filter(pest =>
    pest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pest.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pest.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'उच्च': return '#f44336';
      case 'मध्यम': return '#ff9800';
      case 'कमी': return '#4caf50';
      default: return '#666';
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'किडा': return <FaBug style={{ color: '#f44336' }} />;
      case 'रोग': return <FaExclamationTriangle style={{ color: '#ff9800' }} />;
      default: return <FaInfoCircle style={{ color: '#666' }} />;
    }
  };

  return (
    <div className="card">
      <h2 className="section-title">
        <FaBug /> कीटक आणि रोग जागरूकता
      </h2>

      {/* Crop Selection */}
      <div className="form-group">
        <label className="form-label">
          <FaLeaf /> पीक निवडा
        </label>
        <select
          value={selectedCrop}
          onChange={(e) => {
            setSelectedCrop(e.target.value);
            setSelectedPest('');
          }}
          className="form-input"
        >
          <option value="">पीक निवडा</option>
          {crops.map(crop => (
            <option key={crop} value={crop}>{crop}</option>
          ))}
        </select>
      </div>

      {selectedCrop && (
        <>
          {/* Search */}
          <div className="form-group">
            <label className="form-label">
              <FaSearch /> कीटक/रोग शोधा
            </label>
            <input
              type="text"
              placeholder="कीटक किंवा रोग शोधा..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
            />
          </div>

          {/* Pest List */}
          <div className="grid grid-2">
            {filteredPests.map((pest, index) => (
              <div key={index} className="card" style={{ 
                borderLeft: `5px solid ${getSeverityColor(pest.severity)}`,
                cursor: 'pointer',
                background: selectedPest === pest.name ? '#f5f5f5' : 'white'
              }} onClick={() => setSelectedPest(pest.name)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                  {getTypeIcon(pest.type)}
                  <div>
                    <h4 style={{ margin: 0, color: getSeverityColor(pest.severity) }}>
                      {pest.name}
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
                      {pest.scientificName}
                    </p>
                  </div>
                </div>
                <p style={{ margin: '0.5rem 0', color: '#555' }}>
                  {pest.description}
                </p>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
                  <span><strong>प्रकार:</strong> {pest.type}</span>
                  <span><strong>हंगाम:</strong> {pest.season}</span>
                  <span style={{ color: getSeverityColor(pest.severity) }}>
                    <strong>तीव्रता:</strong> {pest.severity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Information */}
          {selectedPestData && (
            <div className="card" style={{ background: '#fff9c4', borderLeft: '5px solid #fbc02d' }}>
              <h3 style={{ color: '#f57f17' }}>
                {getTypeIcon(selectedPestData.type)} {selectedPestData.name}
              </h3>
              <p style={{ color: '#666', fontStyle: 'italic' }}>
                {selectedPestData.scientificName}
              </p>

              {/* Symptoms */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4><FaExclamationTriangle /> लक्षणे</h4>
                <p>{selectedPestData.symptoms}</p>
              </div>

              {/* Prevention */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4><FaShieldAlt /> प्रतिबंध</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  {selectedPestData.prevention.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Chemical Control */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4><FaSprayCan /> रासायनिक नियंत्रण</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  {selectedPestData.chemicalControl.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Organic Control */}
              <div>
                <h4><FaLeaf /> जैविक नियंत्रण</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  {selectedPestData.organicControl.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* General Tips */}
          <div className="card" style={{ background: '#e8f5e8', borderLeft: '5px solid #4caf50' }}>
            <h3 style={{ color: '#2e7d32' }}>सामान्य टिप्स</h3>
            <ul style={{ paddingLeft: '1.5rem', color: '#2e7d32' }}>
              <li>नियमित शेत निरीक्षण करा - किमान आठवड्यातून एकदा</li>
              <li>कीटक आणि रोगांचे लक्षण लवकर ओळखा</li>
              <li>शेतकऱ्यांच्या गटात राहून माहिती शेअर करा</li>
              <li>कृषी विभागाच्या सूचनांचे पालन करा</li>
              <li>रासायनिक कीटकनाशकांचा वापर मर्यादित करा</li>
              <li>जैविक पद्धतींवर अधिक भर द्या</li>
              <li>कीटकनाशक फवारा करताना सुरक्षा उपाय करा</li>
            </ul>
          </div>
        </>
      )}

      {!selectedCrop && (
        <div className="text-center" style={{ padding: '2rem', color: '#666' }}>
          <FaBug style={{ fontSize: '3rem', marginBottom: '1rem' }} />
          <p>कृपया तुमचे पीक निवडा कीटक आणि रोगांची माहिती मिळवण्यासाठी</p>
        </div>
      )}
    </div>
  );
};

export default PestAwareness;
