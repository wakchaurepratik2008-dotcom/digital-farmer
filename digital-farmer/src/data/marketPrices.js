export const commodities = [
  { name: 'भात', english: 'Rice', unit: 'क्विंटल', basePrice: 2500 },
  { name: 'गहू', english: 'Wheat', unit: 'क्विंटल', basePrice: 2200 },
  { name: 'ज्वारी', english: 'Jowar', unit: 'क्विंटल', basePrice: 1800 },
  { name: 'बाजरी', english: 'Bajra', unit: 'क्विंटल', basePrice: 1600 },
  { name: 'मका', english: 'Maize', unit: 'क्विंटल', basePrice: 1400 },
  { name: 'तूर', english: 'Tur/Arhar', unit: 'क्विंटल', basePrice: 6500 },
  { name: 'उडीद', english: 'Urad', unit: 'क्विंटल', basePrice: 7200 },
  { name: 'मूग', english: 'Moong', unit: 'क्विंटल', basePrice: 6800 },
  { name: 'सोयाबीन', english: 'Soybean', unit: 'क्विंटल', basePrice: 4500 },
  { name: 'कापूस', english: 'Cotton', unit: 'कांडी', basePrice: 5500 },
  { name: 'गहू', english: 'Sugarcane', unit: 'क्विंटल', basePrice: 3000 },
  { name: 'कांदा', english: 'Onion', unit: 'क्विंटल', basePrice: 1200 },
  { name: 'आलू', english: 'Potato', unit: 'क्विंटल', basePrice: 800 },
  { name: 'टमाटर', english: 'Tomato', unit: 'क्विंटल', basePrice: 1500 }
];

export const markets = [
  'पुणे', 'मुंबई', 'नागपूर', 'नाशिक', 'औरंगाबाद', 
  'अमरावती', 'कोल्हापूर', 'सोलापूर', 'सातारा', 'सांगली', 'जळगाव'
];

export const generateMarketPrices = (commodity) => {
  const basePrices = commodities.reduce((acc, item) => {
    acc[item.name] = item.basePrice;
    return acc;
  }, {});

  return markets.map(market => ({
    market,
    price: basePrices[commodity] + Math.floor(Math.random() * 500 - 250),
    minPrice: basePrices[commodity] - Math.floor(Math.random() * 300),
    maxPrice: basePrices[commodity] + Math.floor(Math.random() * 300),
    arrival: Math.floor(Math.random() * 1000) + 100,
    trend: Math.random() > 0.5 ? 'up' : Math.random() > 0.5 ? 'down' : 'stable',
    lastUpdated: new Date().toISOString()
  }));
};

export const getAveragePrice = (marketPrices) => {
  if (marketPrices.length === 0) return 0;
  return Math.round(marketPrices.reduce((sum, market) => sum + market.price, 0) / marketPrices.length);
};

export const getMarketSummary = (marketPrices) => {
  if (marketPrices.length === 0) {
    return {
      totalMarkets: 0,
      averagePrice: 0,
      maxPrice: 0,
      minPrice: 0,
      totalArrival: 0
    };
  }

  const prices = marketPrices.map(m => m.price);
  const arrivals = marketPrices.map(m => m.arrival);

  return {
    totalMarkets: marketPrices.length,
    averagePrice: getAveragePrice(marketPrices),
    maxPrice: Math.max(...prices),
    minPrice: Math.min(...prices),
    totalArrival: arrivals.reduce((sum, arrival) => sum + arrival, 0)
  };
};

export const getCommodityTrend = (marketPrices) => {
  const trends = marketPrices.map(m => m.trend);
  const upCount = trends.filter(t => t === 'up').length;
  const downCount = trends.filter(t => t === 'down').length;
  const stableCount = trends.filter(t => t === 'stable').length;

  if (upCount > downCount && upCount > stableCount) return 'bullish';
  if (downCount > upCount && downCount > stableCount) return 'bearish';
  return 'stable';
};

export const getMarketInsights = (marketPrices, commodity) => {
  const summary = getMarketSummary(marketPrices);
  const trend = getCommodityTrend(marketPrices);
  const volatility = ((summary.maxPrice - summary.minPrice) / summary.averagePrice) * 100;

  return {
    trend,
    volatility,
    recommendation: getRecommendation(trend, volatility, commodity),
    bestMarket: marketPrices.reduce((best, current) => 
      current.price > best.price ? current : best
    ),
    worstMarket: marketPrices.reduce((worst, current) => 
      current.price < worst.price ? current : worst
    )
  };
};

const getRecommendation = (trend, volatility, commodity) => {
  if (trend === 'bullish' && volatility < 10) {
    return 'किंमत वाढत आहे, योग्य वेळी विक्री करा';
  } else if (trend === 'bearish' && volatility < 10) {
    return 'किंमत कमी होत आहे, थांबा घालून विक्री करा';
  } else if (volatility > 20) {
    return 'किंमत अस्थिर आहे, बाजाराचे निरीक्षण करून निर्णय घ्या';
  } else {
    return 'बाजार स्थिर आहे, योग्य वेळी विक्री करा';
  }
};
