import React, { useState } from 'react';
import { FaClipboardList, FaPlus, FaEdit, FaTrash, FaSave, FaTimes, FaCalendarAlt, FaSeedling, FaTint, FaFlask, FaChartLine } from 'react-icons/fa';

const Records = ({ farmerData }) => {
  const [records, setRecords] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    activity: '',
    crop: farmerData?.crop || '',
    details: '',
    cost: '',
    notes: ''
  });

  const activities = [
    'लागवड',
    'खत देणे',
    'सिंचन',
    'कीटकनाशक फवारा',
    'काढणी',
    'बियाणे खरेदी',
    'शेती साहित्य खरेदी',
    'इतर'
  ];

  const crops = ['भात', 'गहू', 'कापूस', 'सोयाबीन', 'मका', 'ज्वारी', 'बाजरी', 'तूर', 'उडीद', 'मूग'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingRecord) {
      setRecords(prev => prev.map(record => 
        record.id === editingRecord.id 
          ? { ...formData, id: editingRecord.id }
          : record
      ));
      setEditingRecord(null);
    } else {
      const newRecord = {
        ...formData,
        id: Date.now()
      };
      setRecords(prev => [...prev, newRecord]);
    }

    setFormData({
      date: new Date().toISOString().split('T')[0],
      activity: '',
      crop: farmerData?.crop || '',
      details: '',
      cost: '',
      notes: ''
    });
    setShowForm(false);
  };

  const handleEdit = (record) => {
    setFormData(record);
    setEditingRecord(record);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('हे रेकॉर्ड हटवायचे?')) {
      setRecords(prev => prev.filter(record => record.id !== id));
    }
  };

  const getTotalCost = () => {
    return records.reduce((total, record) => {
      return total + (parseFloat(record.cost) || 0);
    }, 0);
  };

  const getCostByActivity = () => {
    const costByActivity = {};
    records.forEach(record => {
      if (record.cost) {
        costByActivity[record.activity] = (costByActivity[record.activity] || 0) + parseFloat(record.cost);
      }
    });
    return costByActivity;
  };

  const getActivityIcon = (activity) => {
    const icons = {
      'लागवड': <FaSeedling />,
      'खत देणे': <FaFlask />,
      'सिंचन': <FaTint />,
      'कीटकनाशक फवारा': <FaTint />,
      'काढणी': <FaChartLine />
    };
    return icons[activity] || <FaClipboardList />;
  };

  return (
    <div className="card">
      <h2 className="section-title">
        <FaClipboardList /> शेती रेकॉर्ड्स
      </h2>

      {/* Add Button */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <button
          onClick={() => setShowForm(true)}
          className="btn"
        >
          <FaPlus /> नवीन रेकॉर्ड जोडा
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="card" style={{ background: '#f5f5f5' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3>{editingRecord ? 'रेकॉर्ड संपादित करा' : 'नवीन रेकॉर्ड जोडा'}</h3>
            <button
              onClick={() => {
                setShowForm(false);
                setEditingRecord(null);
                setFormData({
                  date: new Date().toISOString().split('T')[0],
                  activity: '',
                  crop: farmerData?.crop || '',
                  details: '',
                  cost: '',
                  notes: ''
                });
              }}
              style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}
            >
              <FaTimes />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-2">
              <div className="form-group">
                <label className="form-label">
                  <FaCalendarAlt /> दिनांक *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">क्रिया *</label>
                <select
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">क्रिया निवडा</option>
                  {activities.map(activity => (
                    <option key={activity} value={activity}>{activity}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <FaSeedling /> पीक
                </label>
                <select
                  name="crop"
                  value={formData.crop}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">पीक निवडा</option>
                  {crops.map(crop => (
                    <option key={crop} value={crop}>{crop}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">खर्च (₹)</label>
                <input
                  type="number"
                  name="cost"
                  value={formData.cost}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">तपशील</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                className="form-input"
                rows="3"
                placeholder="क्रियेचे तपशील लिहा..."
              />
            </div>

            <div className="form-group">
              <label className="form-label">टिप्पण्या</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="form-input"
                rows="2"
                placeholder="अतिरिक्त टिप्पण्या..."
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <button type="submit" className="btn">
                <FaSave /> {editingRecord ? 'अपडेट करा' : 'जतन करा'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Statistics */}
      {records.length > 0 && (
        <div className="grid grid-3">
          <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)', color: 'white' }}>
            <h3>एकूण रेकॉर्ड्स</h3>
            <h2>{records.length}</h2>
          </div>
          <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)', color: 'white' }}>
            <h3>एकूण खर्च</h3>
            <h2>₹{getTotalCost().toFixed(2)}</h2>
          </div>
          <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)', color: 'white' }}>
            <h3>सरासरी खर्च</h3>
            <h2>₹{records.length > 0 ? (getTotalCost() / records.length).toFixed(2) : '0.00'}</h2>
          </div>
        </div>
      )}

      {/* Cost by Activity */}
      {records.length > 0 && Object.keys(getCostByActivity()).length > 0 && (
        <div className="card">
          <h3>क्रियानुसार खर्च</h3>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            {Object.entries(getCostByActivity()).map(([activity, cost]) => (
              <div key={activity} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem', background: '#f5f5f5', borderRadius: '5px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {getActivityIcon(activity)}
                  <span>{activity}</span>
                </div>
                <strong>₹{cost.toFixed(2)}</strong>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Records List */}
      {records.length > 0 ? (
        <div className="card">
          <h3>रेकॉर्ड्स यादी</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>दिनांक</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>क्रिया</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>पीक</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>तपशील</th>
                  <th style={{ padding: '12px', textAlign: 'right', borderBottom: '2px solid #ddd' }}>खर्च</th>
                  <th style={{ padding: '12px', textAlign: 'center', borderBottom: '2px solid #ddd' }}>क्रिया</th>
                </tr>
              </thead>
              <tbody>
                {records.sort((a, b) => new Date(b.date) - new Date(a.date)).map((record) => (
                  <tr key={record.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px' }}>{new Date(record.date).toLocaleDateString('mr-IN')}</td>
                    <td style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        {getActivityIcon(record.activity)}
                        {record.activity}
                      </div>
                    </td>
                    <td style={{ padding: '12px' }}>{record.crop}</td>
                    <td style={{ padding: '12px' }}>
                      <div>
                        {record.details && <div>{record.details}</div>}
                        {record.notes && <div style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>{record.notes}</div>}
                      </div>
                    </td>
                    <td style={{ padding: '12px', textAlign: 'right' }}>
                      {record.cost ? `₹${parseFloat(record.cost).toFixed(2)}` : '-'}
                    </td>
                    <td style={{ padding: '12px', textAlign: 'center' }}>
                      <button
                        onClick={() => handleEdit(record)}
                        style={{ background: 'none', border: 'none', color: '#2196f3', cursor: 'pointer', marginRight: '10px' }}
                        title="संपादित करा"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(record.id)}
                        style={{ background: 'none', border: 'none', color: '#f44336', cursor: 'pointer' }}
                        title="हटवा"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center" style={{ padding: '2rem', color: '#666' }}>
          <FaClipboardList style={{ fontSize: '3rem', marginBottom: '1rem' }} />
          <p>अजून कोणतेही रेकॉर्ड नाहीत. तुमचे पहिले रेकॉर्ड जोडा!</p>
        </div>
      )}

      {/* Tips */}
      <div className="card" style={{ background: '#e8f5e8', borderLeft: '5px solid #4caf50' }}>
        <h3 style={{ color: '#2e7d32' }}>रेकॉर्ड ठेवण्याचे फायदे</h3>
        <ul style={{ paddingLeft: '1.5rem', color: '#2e7d32' }}>
          <li>खर्चाचे योग्य नियोजन करा</li>
          <li>शेतीचा नफा-तोटा मोजा</li>
          <li>पुढील हंगामासाठी नियोजन करा</li>
          <li>कर्ज मिळवण्यासाठी माहिती वापरा</li>
          <li>शेतीतील सुधारणा करा</li>
        </ul>
      </div>
    </div>
  );
};

export default Records;
