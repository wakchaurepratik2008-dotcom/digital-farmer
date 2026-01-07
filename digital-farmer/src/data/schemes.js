export const schemes = [
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
    icon: 'coins'
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
    icon: 'shield'
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
    icon: 'store'
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
    icon: 'test-tube'
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
    icon: 'mobile'
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
    icon: 'credit-card'
  }
];

export const categories = [
  { value: 'all', label: 'सर्व योजना' },
  { value: 'financial', label: 'आर्थिक सहाय्य' },
  { value: 'insurance', label: 'विमा' },
  { value: 'market', label: 'बाजार' },
  { value: 'technical', label: 'तांत्रिक' },
  { value: 'digital', label: 'डिजिटल' }
];
