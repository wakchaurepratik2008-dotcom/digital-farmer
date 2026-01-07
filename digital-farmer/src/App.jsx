import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaLeaf, FaUser, FaChartLine, FaStore, FaCloud, FaBug, FaClipboardList, FaQuestionCircle, FaHome, FaBars, FaTimes } from 'react-icons/fa';
import FarmerForm from './components/FarmerForm';
import FarmerDashboard from './components/FarmerDashboard';
import CropAdvisory from './components/CropAdvisory';
import Schemes from './components/Schemes';
import Market from './components/Market';
import Weather from './components/Weather';
import PestAwareness from './components/PestAwareness';
import Records from './components/Records';
import QueryForm from './components/QueryForm';
import FAQ from './components/FAQ';
import './index.css';

function App() {
  const [farmerData, setFarmerData] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleFormSubmit = (data) => {
    setFarmerData(data);
  };

  const navigation = [
    { path: '/', name: 'होम', icon: <FaHome /> },
    { path: '/register', name: 'नोंदणी', icon: <FaUser /> },
    { path: '/dashboard', name: 'डॅशबोर्ड', icon: <FaChartLine /> },
    { path: '/advisory', name: 'पीक मार्गदर्शन', icon: <FaLeaf /> },
    { path: '/schemes', name: 'योजना', icon: <FaStore /> },
    { path: '/market', name: 'बाजार', icon: <FaStore /> },
    { path: '/weather', name: 'हवामान', icon: <FaCloud /> },
    { path: '/pests', name: 'कीटक', icon: <FaBug /> },
    { path: '/records', name: 'रेकॉर्ड्स', icon: <FaClipboardList /> },
    { path: '/query', name: 'प्रश्न', icon: <FaQuestionCircle /> },
    { path: '/faq', name: 'FAQ', icon: <FaQuestionCircle /> }
  ];

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <div className="card" style={{ 
        background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)', 
        color: 'white', 
        textAlign: 'center',
        padding: '3rem'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          <FaLeaf /> डिजिटल शेतकरी
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          आधुनिक शेतीसाठी डिजिटल उपाय
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/register" className="btn" style={{ fontSize: '1.2rem', padding: '15px 30px' }}>
            <FaUser /> नोंदणी करा
          </Link>
          <Link to="/schemes" className="btn btn-secondary" style={{ fontSize: '1.2rem', padding: '15px 30px' }}>
            <FaStore /> योजना पहा
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-3">
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', color: '#4caf50', marginBottom: '1rem' }}>
            <FaUser />
          </div>
          <h3>शेतकरी नोंदणी</h3>
          <p>डिजिटल पद्धतीने नोंदणी करून वैयक्तिकृत मार्गदर्शन मिळवा</p>
          <Link to="/register" className="btn">नोंदणी करा</Link>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', color: '#ff9800', marginBottom: '1rem' }}>
            <FaChartLine />
          </div>
          <h3>पीक मार्गदर्शन</h3>
          <p>AI आधारित पीक मार्गदर्शन आणि शेती सल्ला</p>
          <Link to="/advisory" className="btn">मार्गदर्शन पहा</Link>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', color: '#2196f3', marginBottom: '1rem' }}>
            <FaStore />
          </div>
          <h3>बाजार माहिती</h3>
          <p>वास्तव-कालीन बाजार किंमत आणि माहिती</p>
          <Link to="/market" className="btn">बाजार पहा</Link>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', color: '#9c27b0', marginBottom: '1rem' }}>
            <FaCloud />
          </div>
          <h3>हवामान</h3>
          <p>अचूक हवामान अंदाज आणि शेती सल्ला</p>
          <Link to="/weather" className="btn">हवामान पहा</Link>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', color: '#f44336', marginBottom: '1rem' }}>
            <FaBug />
          </div>
          <h3>कीटक आणि रोग</h3>
          <p>कीटक आणि रोगांची माहिती आणि उपाय</p>
          <Link to="/pests" className="btn">माहिती पहा</Link>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', color: '#607d8b', marginBottom: '1rem' }}>
            <FaClipboardList />
          </div>
          <h3>शेती रेकॉर्ड्स</h3>
          <p>शेती खर्च आणि रेकॉर्ड्स व्यवस्थापन</p>
          <Link to="/records" className="btn">रेकॉर्ड्स पहा</Link>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-3">
        <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)', color: 'white' }}>
          <h3>१०+</h3>
          <p>सरकारी योजना</p>
        </div>
        <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)', color: 'white' }}>
          <h3>५०+</h3>
          <p>पिकांची माहिती</p>
        </div>
        <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)', color: 'white' }}>
          <h3>२४x७</h3>
          <p>हेल्पलाइन सेवा</p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="card">
        <h3>जलद दुवे</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <Link to="/schemes" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
            <FaStore /> सरकारी योजना
          </Link>
          <Link to="/query" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
            <FaQuestionCircle /> प्रश्न विचारा
          </Link>
          <Link to="/faq" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
            <FaQuestionCircle /> FAQ
          </Link>
          <Link to="/register" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
            <FaUser /> नोंदणी करा
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <Router>
      <div className="app-container">
        {/* Navigation */}
        <nav className="navbar">
          <div className="nav-content">
            <div className="logo">
              <FaLeaf />
              <span>डिजिटल शेतकरी</span>
            </div>
            
            {/* Desktop Navigation */}
            <ul className="nav-links">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="nav-link">
                    {item.icon} {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ 
                background: 'none', 
                border: 'none', 
                fontSize: '1.5rem', 
                cursor: 'pointer',
                display: 'none'
              }}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="mobile-nav">
              <ul>
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path} 
                      className="nav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.icon} {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<FarmerForm onSubmit={handleFormSubmit} />} />
            <Route path="/dashboard" element={farmerData ? <FarmerDashboard farmerData={farmerData} /> : <div className="card"><p>कृपया प्रथम नोंदणी करा</p></div>} />
            <Route path="/advisory" element={<CropAdvisory farmerData={farmerData} />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/market" element={<Market />} />
            <Route path="/weather" element={<Weather farmerData={farmerData} />} />
            <Route path="/pests" element={<PestAwareness farmerData={farmerData} />} />
            <Route path="/records" element={<Records farmerData={farmerData} />} />
            <Route path="/query" element={<QueryForm />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer style={{ 
          background: 'rgba(0,0,0,0.8)', 
          color: 'white', 
          textAlign: 'center', 
          padding: '2rem',
          marginTop: '3rem'
        }}>
          <p>© २०२४ डिजिटल शेतकरी - सर्व हक्क राखीले</p>
          <p>शेतकरी कल्याणासाठी सेवा</p>
          <div style={{ marginTop: '1rem' }}>
            <Link to="/query" style={{ color: 'white', margin: '0 10px' }}>प्रश्न विचारा</Link>
            <Link to="/faq" style={{ color: 'white', margin: '0 10px' }}>FAQ</Link>
            <Link to="/schemes" style={{ color: 'white', margin: '0 10px' }}>योजना</Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
