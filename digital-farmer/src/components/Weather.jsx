import React, { useState, useEffect } from 'react';
import { FaCloud, FaSun, FaCloudRain, FaTint, FaWind, FaThermometerHalf, FaEye, FaMapMarkerAlt } from 'react-icons/fa';

const Weather = ({ farmerData }) => {
  const [selectedLocation, setSelectedLocation] = useState(farmerData?.district || 'पुणे');
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState([]);

  const locations = [
    'पुणे', 'मुंबई', 'नागपूर', 'नाशिक', 'औरंगाबाद', 
    'अमरावती', 'कोल्हापूर', 'सोलापूर', 'सातारा', 'सांगली'
  ];

  const generateWeatherData = () => {
    const currentMonth = new Date().getMonth() + 1;
    const baseTemp = currentMonth >= 3 && currentMonth <= 5 ? 35 : 
                    currentMonth >= 6 && currentMonth <= 9 ? 28 : 
                    currentMonth >= 10 && currentMonth <= 2 ? 22 : 25;

    return {
      location: selectedLocation,
      temperature: baseTemp + Math.floor(Math.random() * 8 - 4),
      humidity: 60 + Math.floor(Math.random() * 30),
      windSpeed: 5 + Math.floor(Math.random() * 15),
      rainfall: currentMonth >= 6 && currentMonth <= 9 ? Math.floor(Math.random() * 50) : 0,
      visibility: 8 + Math.floor(Math.random() * 4),
      pressure: 1000 + Math.floor(Math.random() * 20),
      condition: currentMonth >= 6 && currentMonth <= 9 ? 'rainy' : 
                 currentMonth >= 3 && currentMonth <= 5 ? 'sunny' : 'partly_cloudy',
      description: currentMonth >= 6 && currentMonth <= 9 ? 'पावसाळी' : 
                   currentMonth >= 3 && currentMonth <= 5 ? 'उन्हाळी' : 'हिवाळी'
    };
  };

  const generateForecast = () => {
    const days = ['सोमवार', 'मंगळवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार', 'रविवार'];
    const today = new Date().getDay();
    
    return Array.from({ length: 7 }, (_, index) => {
      const dayIndex = (today + index) % 7;
      const temp = 25 + Math.floor(Math.random() * 15);
      const rainfall = Math.random() > 0.6 ? Math.floor(Math.random() * 30) : 0;
      
      return {
        day: days[dayIndex],
        date: new Date(Date.now() + index * 24 * 60 * 60 * 1000).toLocaleDateString('mr-IN'),
        maxTemp: temp + Math.floor(Math.random() * 5),
        minTemp: temp - Math.floor(Math.random() * 5),
        rainfall: rainfall,
        condition: rainfall > 0 ? 'rainy' : Math.random() > 0.5 ? 'sunny' : 'partly_cloudy'
      };
    });
  };

  useEffect(() => {
    setWeatherData(generateWeatherData());
    setForecast(generateForecast());
  }, [selectedLocation]);

  const getWeatherIcon = (condition) => {
    switch(condition) {
      case 'sunny': return <FaSun style={{ color: '#ffc107', fontSize: '3rem' }} />;
      case 'rainy': return <FaCloudRain style={{ color: '#2196f3', fontSize: '3rem' }} />;
      case 'partly_cloudy': return <FaCloud style={{ color: '#9e9e9e', fontSize: '3rem' }} />;
      default: return <FaSun style={{ color: '#ffc107', fontSize: '3rem' }} />;
    }
  };

  const getAgriculturalAdvice = () => {
    if (!weatherData) return '';

    const { temperature, humidity, rainfall, condition } = weatherData;
    const currentSeason = farmerData?.season || '';
    
    let advice = [];

    // Temperature based advice
    if (temperature > 35) {
      advice.push('🌡️ उच्च तापमान: ठिबक सिंचन वापरा, शेतात पाणी टाकण्याची वेळ सकाळी किंवा संध्याकाळी ठेवा');
    } else if (temperature < 20) {
      advice.push('🌡️ कमी तापमान: थंडगार पिकांसाठी योग्य वेळ, पाण्याचे व्यवस्थापन करा');
    }

    // Rainfall based advice
    if (rainfall > 30) {
      advice.push('🌧️ जोरदार पाऊस: निचरा व्यवस्था तपासा, बोल्ट आणि फंगसनाशक तयार ठेवा');
    } else if (rainfall > 0 && rainfall < 10) {
      advice.push('🌦️ हलका पाऊस: पिकांना फायदा होईल, पाण्याची वाचत करा');
    }

    // Humidity based advice
    if (humidity > 80) {
      advice.push('💧 जास्त आर्द्रता: रोग आणि कीटकांची शक्यता, निरीक्षण वाढवा');
    }

    // Season specific advice
    if (currentSeason === 'खरीप') {
      advice.push('🌾 खरीप हंगाम: पावसाच्या अपेक्षेत असल्याने, वेळीचे बियाणे लावा');
    } else if (currentSeason === 'रब्बी') {
      advice.push('🌾 रब्बी हंगाम: सिंचन व्यवस्था तपासा, पाणी बचत करा');
    }

    return advice.length > 0 ? advice.join(' | ') : '✅ हवामान शेतीसाठी अनुकूल आहे';
  };

  const getCropSpecificAdvice = () => {
    const crop = farmerData?.crop || '';
    const condition = weatherData?.condition || '';
    
    const cropAdvice = {
      'भात': {
        'rainy': '🌾 भात: पावसाळी हंगामासाठी अनुकूल, पाणी व्यवस्थापन करा',
        'sunny': '🌾 भात: नियमित सिंचन आवश्यक, पाणी टाकण्याची वेळ लक्षात ठेवा',
        'partly_cloudy': '🌾 भात: योग्य वाढीसाठी नियमित पाणी द्या'
      },
      'गहू': {
        'rainy': '🌾 गहू: जास्त पाऊस टाळा, निचरा व्यवस्था करा',
        'sunny': '🌾 गहू: वाढीच्या काळात पाणी द्या, परंतु जास्त नको',
        'partly_cloudy': '🌾 गहू: अनुकूल हवामान, योग्य वाढ होईल'
      },
      'कापूस': {
        'rainy': '🌾 कापूस: जास्त पाऊस हानिकारक, रोग प्रतिबंधक उपाय करा',
        'sunny': '🌾 कापूस: चांगल्या सूर्यप्रकाशासाठी अनुकूल',
        'partly_cloudy': '🌾 कापूस: योग्य हवामान, वेळीचे तोडणी करा'
      }
    };

    return cropAdvice[crop]?.[condition] || '';
  };

  if (!weatherData) {
    return <div className="loading">हवामान माहिती लोड करत आहे...</div>;
  }

  return (
    <div className="card">
      <h2 className="section-title">
        <FaCloud /> हवामान माहिती
      </h2>

      {/* Location Selector */}
      <div className="form-group">
        <label className="form-label">
          <FaMapMarkerAlt /> ठिकाण निवडा
        </label>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="form-input"
        >
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>

      {/* Current Weather */}
      <div className="card" style={{ background: 'linear-gradient(135deg, #87ceeb 0%, #4682b4 100%)', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3>{weatherData.location}</h3>
            <p>{weatherData.description}</p>
            <h1>{weatherData.temperature}°C</h1>
          </div>
          <div style={{ textAlign: 'center' }}>
            {getWeatherIcon(weatherData.condition)}
            <p style={{ marginTop: '0.5rem' }}>{weatherData.rainfall}mm पाऊस</p>
          </div>
        </div>

        <div className="grid grid-4" style={{ marginTop: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <FaTint style={{ fontSize: '1.5rem' }} />
            <p>आर्द्रता</p>
            <p><strong>{weatherData.humidity}%</strong></p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaWind style={{ fontSize: '1.5rem' }} />
            <p>वेग</p>
            <p><strong>{weatherData.windSpeed} km/h</strong></p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaEye style={{ fontSize: '1.5rem' }} />
            <p>दृश्यमानता</p>
            <p><strong>{weatherData.visibility} km</strong></p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaThermometerHalf style={{ fontSize: '1.5rem' }} />
            <p>दाब</p>
            <p><strong>{weatherData.pressure} mb</strong></p>
          </div>
        </div>
      </div>

      {/* Agricultural Advice */}
      <div className="card" style={{ background: '#e8f5e8', borderLeft: '5px solid #4caf50' }}>
        <h3 style={{ color: '#2e7d32' }}>शेती सल्ला</h3>
        <p style={{ color: '#2e7d32', marginBottom: '1rem' }}>{getAgriculturalAdvice()}</p>
        {getCropSpecificAdvice() && (
          <p style={{ color: '#2e7d32', fontWeight: 'bold' }}>{getCropSpecificAdvice()}</p>
        )}
      </div>

      {/* 7-Day Forecast */}
      <div className="card">
        <h3>७ दिवसांचा अंदाज</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
          {forecast.map((day, index) => (
            <div key={index} className="card" style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ fontWeight: 'bold' }}>{day.day}</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>{day.date}</div>
              <div style={{ margin: '0.5rem 0' }}>
                {getWeatherIcon(day.condition)}
              </div>
              <div style={{ fontSize: '0.9rem' }}>
                <div>{day.maxTemp}°</div>
                <div style={{ color: '#666' }}>{day.minTemp}°</div>
              </div>
              {day.rainfall > 0 && (
                <div style={{ fontSize: '0.8rem', color: '#2196f3' }}>
                  {day.rainfall}mm
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Weather Alerts */}
      <div className="card" style={{ background: '#fff3cd', borderLeft: '5px solid #ffc107' }}>
        <h3 style={{ color: '#856404' }}>हवामान सूचना</h3>
        <ul style={{ paddingLeft: '1.5rem', color: '#856404' }}>
          {weatherData.temperature > 35 && <li>🔥 उच्च तापमान सूचना: शेतकऱ्यांनी दुपारी शेतीची कामे टाळावीत</li>}
          {weatherData.rainfall > 30 && <li>🌧️ जोरदार पाऊस सूचना: निचरा व्यवस्था करा, बोल्ट तयार ठेवा</li>}
          {weatherData.humidity > 80 && <li>💧 जास्त आर्द्रता: रोग आणि कीटकांची शक्यता, निरीक्षण वाढवा</li>}
          {weatherData.windSpeed > 20 && <li>💨 जोरदार वारे: झाडे आणि पिकांचे संरक्षण करा</li>}
          {!weatherData.temperature > 35 && !weatherData.rainfall > 30 && !weatherData.humidity > 80 && !weatherData.windSpeed > 20 && (
            <li>✅ हवामान शेतीसाठी अनुकूल आहे, कोणतीही विशेष सूचना नाही</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Weather;
