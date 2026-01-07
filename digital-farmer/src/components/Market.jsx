import React, { useState, useEffect } from 'react';
import { FaStore, FaChartLine, FaTrendingUp, FaTrendingDown, FaSearch, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Market = () => {
  const [selectedCommodity, setSelectedCommodity] = useState('भात');
  const [selectedMarket, setSelectedMarket] = useState('सर्व बाजारपेठ');
  const [searchTerm, setSearchTerm] = useState('');

  const commodities = [
    { name: 'भात', english: 'Rice', unit: 'क्विंटल' },
    { name: 'गहू', english: 'Wheat', unit: 'क्विंटल' },
    { name: 'ज्वारी', english: 'Jowar', unit: 'क्विंटल' },
    { name: 'बाजरी', english: 'Bajra', unit: 'क्विंटल' },
    { name: 'मका', english: 'Maize', unit: 'क्विंटल' },
    { name: 'तूर', english: 'Tur/Arhar', unit: 'क्विंटल' },
    { name: 'उडीद', english: 'Urad', unit: 'क्विंटल' },
    { name: 'मूग', english: 'Moong', unit: 'क्विंटल' },
    { name: 'सोयाबीन', english: 'Soybean', unit: 'क्विंटल' },
    { name: 'कापूस', english: 'Cotton', unit: 'कांडी' },
    { name: 'गहू', english: 'Sugarcane', unit: 'क्विंटल' },
    { name: 'कांदा', english: 'Onion', unit: 'क्विंटल' },
    { name: 'आलू', english: 'Potato', unit: 'क्विंटल' },
    { name: 'टमाटर', english: 'Tomato', unit: 'क्विंटल' }
  ];

  const markets = [
    'सर्व बाजारपेठ',
    'पुणे',
    'मुंबई',
    'नागपूर',
    'नाशिक',
    'औरंगाबाद',
    'अमरावती',
    'कोल्हापूर',
    'सोलापूर',
    'सातारा',
    'सांगली',
    'जळगाव'
  ];

  const generateMarketPrices = () => {
    const basePrices = {
      'भात': 2500,
      'गहू': 2200,
      'ज्वारी': 1800,
      'बाजरी': 1600,
      'मका': 1400,
      'तूर': 6500,
      'उडीद': 7200,
      'मूग': 6800,
      'सोयाबीन': 4500,
      'कापूस': 5500,
      'गहू': 3000,
      'कांदा': 1200,
      'आलू': 800,
      'टमाटर': 1500
    };

    return markets.slice(1).map(market => ({
      market,
      price: basePrices[selectedCommodity] + Math.floor(Math.random() * 500 - 250),
      minPrice: basePrices[selectedCommodity] - Math.floor(Math.random() * 300),
      maxPrice: basePrices[selectedCommodity] + Math.floor(Math.random() * 300),
      arrival: Math.floor(Math.random() * 1000) + 100,
      trend: Math.random() > 0.5 ? 'up' : Math.random() > 0.5 ? 'down' : 'stable'
    }));
  };

  const [marketPrices, setMarketPrices] = useState([]);

  useEffect(() => {
    setMarketPrices(generateMarketPrices());
  }, [selectedCommodity]);

  const filteredMarkets = marketPrices.filter(market => 
    selectedMarket === 'सर्व बाजारपेठ' || market.market === selectedMarket
  );

  const selectedCommodityData = commodities.find(c => c.name === selectedCommodity);

  const getAveragePrice = () => {
    if (filteredMarkets.length === 0) return 0;
    return Math.round(filteredMarkets.reduce((sum, market) => sum + market.price, 0) / filteredMarkets.length);
  };

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'up': return <FaTrendingUp style={{ color: '#4caf50' }} />;
      case 'down': return <FaTrendingDown style={{ color: '#f44336' }} />;
      default: return <FaChartLine style={{ color: '#ff9800' }} />;
    }
  };

  return (
    <div className="card">
      <h2 className="section-title">
        <FaStore /> बाजारपेठ माहिती
      </h2>

      {/* Filters */}
      <div className="grid grid-3">
        <div className="form-group">
          <label className="form-label">
            <FaSearch /> शेतमाल निवडा
          </label>
          <select
            value={selectedCommodity}
            onChange={(e) => setSelectedCommodity(e.target.value)}
            className="form-input"
          >
            {commodities.map(commodity => (
              <option key={commodity.name} value={commodity.name}>
                {commodity.name} ({commodity.english})
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">
            <FaMapMarkerAlt /> बाजारपेठ निवडा
          </label>
          <select
            value={selectedMarket}
            onChange={(e) => setSelectedMarket(e.target.value)}
            className="form-input"
          >
            {markets.map(market => (
              <option key={market} value={market}>{market}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">शोध</label>
          <input
            type="text"
            placeholder="बाजारपेठ शोधा..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-input"
          />
        </div>
      </div>

      {/* Summary Card */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3>{selectedCommodity}</h3>
            <p>{selectedCommodityData?.english} - {selectedCommodityData?.unit}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <h2>₹{getAveragePrice()}</h2>
            <p>सरासरी किंमत / {selectedCommodityData?.unit}</p>
          </div>
        </div>
      </div>

      {/* Market Prices Table */}
      <div className="card">
        <h3>बाजारपेठ किंमत तपशील</h3>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr style={{ background: '#f5f5f5' }}>
                <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>बाजारपेठ</th>
                <th style={{ padding: '12px', textAlign: 'right', borderBottom: '2px solid #ddd' }}>किंमत (₹)</th>
                <th style={{ padding: '12px', textAlign: 'right', borderBottom: '2px solid #ddd' }}>किमान (₹)</th>
                <th style={{ padding: '12px', textAlign: 'right', borderBottom: '2px solid #ddd' }}>कमाल (₹)</th>
                <th style={{ padding: '12px', textAlign: 'right', borderBottom: '2px solid #ddd' }}>आगमन</th>
                <th style={{ padding: '12px', textAlign: 'center', borderBottom: '2px solid #ddd' }}>ट्रेंड</th>
              </tr>
            </thead>
            <tbody>
              {filteredMarkets
                .filter(market => market.market.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((market, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '12px' }}>{market.market}</td>
                  <td style={{ padding: '12px', textAlign: 'right', fontWeight: 'bold' }}>
                    ₹{market.price}
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right', color: '#666' }}>
                    ₹{market.minPrice}
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right', color: '#666' }}>
                    ₹{market.maxPrice}
                  </td>
                  <td style={{ padding: '12px', textAlign: 'right' }}>
                    {market.arrival} {selectedCommodityData?.unit}
                  </td>
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    {getTrendIcon(market.trend)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredMarkets.filter(market => 
          market.market.toLowerCase().includes(searchTerm.toLowerCase())
        ).length === 0 && (
          <div className="text-center" style={{ padding: '2rem', color: '#666' }}>
            <p>कोणतेही बाजारपेठ सापडली नाही.</p>
          </div>
        )}
      </div>

      {/* Market Information */}
      <div className="grid grid-2">
        <div className="card">
          <h3><FaStore /> बाजारपेठ माहिती</h3>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <div><strong>एकूण बाजारपेठ:</strong> {filteredMarkets.length}</div>
            <div><strong>सरासरी किंमत:</strong> ₹{getAveragePrice()}</div>
            <div><strong>सर्वोच्च किंमत:</strong> ₹{Math.max(...filteredMarkets.map(m => m.maxPrice))}</div>
            <div><strong>किमान किंमत:</strong> ₹{Math.min(...filteredMarkets.map(m => m.minPrice))}</div>
          </div>
        </div>

        <div className="card">
          <h3><FaPhone /> संपर्क माहिती</h3>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <div><strong>महाराष्ट्र राज्य कृषि बाजारपेठ समिती:</strong></div>
            <div>टोल-फ्री: 1800-233-3444</div>
            <div>ईमेल: msamb@maharashtra.gov.in</div>
            <div>वेबसाइट: msamb.maharashtra.gov.in</div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="card" style={{ background: '#e8f5e8', borderLeft: '5px solid #4caf50' }}>
        <h3 style={{ color: '#2e7d32' }}>बाजार टिप्स</h3>
        <ul style={{ paddingLeft: '1.5rem', color: '#2e7d32' }}>
          <li>बाजारातील किंमत दररोज बदलत असतात, त्यामुळे नेहमी अद्ययावत माहिती तपासा</li>
          <li>पिकाची वेळीची काढणी करून उत्तम किंमत मिळवा</li>
          <li>बाजारपेठेतील मागणी आणि पुरवठा तपासून विक्री करा</li>
          <li>ई-नाम पोर्टलवर नोंदणी करून ऑनलाइन व्यवहार करा</li>
        </ul>
      </div>
    </div>
  );
};

export default Market;
