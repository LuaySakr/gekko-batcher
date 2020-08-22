const config = {}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          GENERAL SETTINGS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Name of batch (will show up in generated csv's file name )
config.name = 'TheGreatOne-4'

// Save results to csv
config.saveToCsv = true

config.gekkoPath = '../ProjectA/'
config.gekkoConfigFileName = 'config.js'

// URL that serving Gekko UI
config.apiUrl = 'http://localhost:3000'

// Keep it lower than the number of cores you have
// Note: 2 is recommended value for import mode
config.parallelQueries = 8

config.candleSizes = [1]

config.historySizes = [0]

// Format: [exchange, currency, asset]
config.tradingPairs = [
  ['binance', 'usdt', 'btc']
  // ,
  // ['poloniex', 'eth', 'zec']
]

// Note: only one daterange for "import" mode allowed if parallelQueries > 1
// It's related to constraints with database
config.dateranges = [
  {from : '2020-03-06 00:00', to : '2020-03-20 00:00'}
  // , {
  //   from: '2018-06-05 00:00',
  //   to: '2018-07-30 00:00'
  // }
]

// Shuffle generated combinations of method's configs
config.shuffle = true

// Initial balance, fees and slippage/spread
config.paperTrader = {
  simulationBalance: {
    currency: 100,
    asset: 0
  },
  feeMaker: 0.01,
  feeTaker: 0.01,
  feeUsing: 'maker',
  slippage: 0.05
}

// Where to get method's settings.
// The first has high priority. Then second, if there's no settings in first place and so on.

// batcher – strategy settings below here
// gekko – gekko's config.js
// toml.js – gekko's toml files
config.configPriorityLocations = ['batcher', 'gekko', 'gekko-toml']

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          BACKTEST BATCHER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

config.methods = [

  'TheGreatOne-4'
  // ,'RSI' , 'MACD', 'StochRSI', 'CCI'
]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          BRUTEFORCE SEARCHER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Specify strategy you want for bruteforce
config.method = 'TheGreatOne-4'

// Specify ranges settings for the given method. It generates all
// possible combinations of a set of settings with given ranges
// Format for range: 'start:step:end' or 'true|false'

config.ranges = {


   FileLog: 
    { fileLog: false,
      logFilePath: 'logFilePath.txt',
      candleHeder: '#',
      candleFooter: '*',
      forLength: 50 },
   MainLog: 
    { consoleLog: false,
      logCandles: true,
      seperator: '------------------------------------------------------------------------------',
      candleSeperator: '#################################' },
   ADVICE: { long: 1000, short: -1000 },
   MainIndicators: 
    { SMA: true,
      EMA: false,
      DEMA: false,
      ADX: false,
      ADXR: false,
      AROON: true,
      AROONOSC: true,
      BOP: true,
      CCI: true,
      CMO: true,
      DX: false,
      MACD: true,
      MACDEXT: false,
      MACDFIX: false,
      MFI: false,
      MINUS_DI: false,
      MINUS_DM: false,
      MOM: false,
      PLUS_DI: false,
      PLUS_DM: false,
      PPO: true,
      ROC: false,
      ROCP: false,
      ROCR: false,
      ROCR100: false,
      RSI: true,
      STOCH: false,
      STOCHF: false,
      STOCHRSI: false,
      TRIX: false,
      ULTOSC: false,
      WILLR: false,
      CANDLE: true,
      AD: false,
      ADOSC: false,
      OBV: false,
      ATR: false,
      NATR: false,
      TRANGE: false,
      AVGPRICE: false,
      MEDPRICE: false,
      TYPPRICE: false,
      WCLPRICE: false,
      HT_DCPERIOD: false,
      HT_DCPHASE: false,
      HT_PHASOR: false,
      HT_SINE: false,
      HT_TRENDMODE: false,
      CDL2CROWS: false,
      CDL3BLACKCROWS: false,
      CDL3WHITESOLDIERS: false,
      CDLABANDONEDBABY: false,
      CDLADVANCEBLOCK: false,
      CDLBREAKAWAY: false,
      CDLCONCEALBABYSWALL: false,
      CDLCOUNTERATTACK: false,
      CDLDARKCLOUDCOVER: false,
      CDLDOJI: false,
      CDLDOJISTAR: false,
      CDLDRAGONFLYDOJI: false,
      CDLEVENINGDOJISTAR: false,
      CDLEVENINGSTAR: false,
      CDLGAPSIDESIDEWHITE: false,
      CDLGRAVESTONEDOJI: false,
      CDLHAMMER: false,
      CDLHANGINGMAN: false,
      CDLHARAMI: false,
      CDLHARAMICROSS: false,
      CDLHIGHWAVE: false,
      CDLHIKKAKE: false,
      CDLHIKKAKEMOD: false,
      CDLHOMINGPIGEON: false,
      CDLIDENTICAL3CROWS: false,
      CDLINNECK: false,
      CDLINVERTEDHAMMER: false,
      CDLKICKING: false,
      CDLKICKINGBYLENGTH: false,
      CDLLADDERBOTTOM: false,
      CDLLONGLEGGEDDOJI: false,
      CDLLONGLINE: false,
      CDLMARUBOZU: false,
      CDLMATCHINGLOW: false,
      CDLMATHOLD: false,
      CDLMORNINGDOJISTAR: false,
      CDLMORNINGSTAR: false,
      CDLONNECK: false,
      CDLPIERCING: false,
      CDLRICKSHAWMAN: false,
      CDLRISEFALL3METHODS: false,
      CDLSEPARATINGLINES: false,
      CDLSHOOTINGSTAR: false,
      CDLSHORTLINE: false,
      CDLSPINNINGTOP: false,
      CDLSTALLEDPATTERN: false,
      CDLSTICKSANDWICH: false,
      CDLTAKURI: false,
      CDLTASUKIGAP: false,
      CDLTHRUSTING: false,
      CDLTRISTAR: false,
      CDLUPSIDEGAP2CROWS: false,
      CDLXSIDEGAP3METHODS: false,
      BETA: false,
      CORREL: false,
      LINEARREG: false,
      LINEARREG_ANGLE: false,
      LINEARREG_INTERCEPT: false,
      LINEARREG_SLOPE: false,
      STDDEV: false,
      TSF: false,
      VAR: false },
   ADX: { optInTimePeriod: 14 },
   ADXR: { optInTimePeriod: 14 },
   APO: { optInFastPeriod: 12, optInSlowPeriod: 26, optInMAType: 0 },
   AROON: 
    { log: false,
      optInTimePeriod: 14,
      arnoonUpLimit: 100,
      case1: -100,
      case1LowPersistence: 100,
      arnoonDownLimit: 100,
      case2: 100,
      case2HighPersistence: 12.5,
      case3: -500 },
   AROONOSC: 
    { log: false,
      optInTimePeriod: 14,
      arnoonoscUpLimit: 100,
      case1: -100,
      case1LowPersistence: 1,
      arnoonoscDownLimit: -100,
      case2: 0.5,
      case2HighPersistence: 0.5 },
   BOP: 
    { log: false,
      bopUpLimit: 0.99,
      case1: -1,
      bopDownLimt: -0.99,
      case2: 1 },
   CCI: 
    { log: false,
      optInTimePeriod: 14,
      cciUpLimit: 200,
      case1: -2,
      case1LowPersistence: 1,
      cciDownLimt: -230,
      case2: 50,
      case2HighPersistence: 50 },
   CMO: 
    { log: false,
      optInTimePeriod: 14,
      cmoUpLimit: 55,
      case1: -100,
      case1LowPersistence: 100,
      cmoDownLimt: -69,
      case2: 50,
      case2HighPersistence: 50 },
   DX: { optInTimePeriod: 14 },
   RSI: 
    { log: false,
      optInTimePeriod: 30,
      low: 16,
      high: 77,
      upPercent: 10,
      downPercent: 45,
      case4High: 100,
      case6Low: 1,
      case8High: 100,
      case1: 100,
      case1LowPersistence: 1,
      case2: -100,
      case2HighPersistence: 0.5,
      case3: -1,
      case4: -1,
      case5: 100,
      case6: 0.5,
      case7: -150,
      case8: -1,
      case9: 50,
      case10: -100 },
   PPO: 
    { log: false,
      optInFastPeriod: 12,
      optInSlowPeriod: 26,
      optInSignalPeriod: 9,
      optInMAType: 1,
      optInTimePeriod: 100,
      low: -0.18,
      high: 0.22,
      downPercent: 40,
      case1: 100,
      case2: -100,
      case3: 100 },
   MACD: 
    { log: false,
      optInFastPeriod: 10,
      optInSlowPeriod: 21,
      optInSignalPeriod: 9,
      case1LowPersistence: 100,
      case2HighPersistence: -100,
      case1: '-100:10:10',
      case2: '-100:10:-10',
      case3: 100,
      case4: '-100:10:10',
      case5: 100,
      case6: 100,
      case7: -2,
      case8: 25,
      case9: 25,
      case1Low: 22,
      case2Low: 25,
      case3Min: -18,
      case6Max: -3,
      case7Min: -0.01 },
   CANDLE: 
    { log: false,
      case1: 1,
      case2: 100,
      case3: 1,
      case4: -1.5,
      case5: -1,
      case6: 100,
      case7: -8,
      case1Low: -4,
      case3Min: 0,
      case2Low: -4,
      case6MinProfit: 0.11,
      case7StopLoss: 0.1,
      volumeDownPercent: 50,
      volumeUPPercent: 900 },
   SMA: 
    { log: false,
      optInTimePeriod: 100,
      case1Percent: 0.009,
      case1: -100,
      case1LowPersistence: -25,
      case2Percent: 0.5,
      case2: 100,
      case2HighPersistence: 33 },
   AD: { optInTimePeriod: 14 },
   ADOSC: { optInFastPeriod: 3, optInSlowPeriod: 10 },
   OBV: {},
   ATR: { optInTimePeriod: 14 },
   NATR: { optInTimePeriod: 14 },
   TRANGE: { optInTimePeriod: 14 },
   AVGPRICE: { optInTimePeriod: 100 },
   MEDPRICE: { optInTimePeriod: 100 },
   TYPPRICE: { optInTimePeriod: 100 },
   WCLPRICE: { optInTimePeriod: 100 },
   HT_DCPERIOD: {},
   HT_DCPHASE: {},
   HT_PHASOR: 
    { log: false,
      case1: 1,
      case1LowLimit: 200,
      case1LowPersistence: 0,
      case2: -1,
      case2HighLimit: -40,
      case2HighPersistence: -0.5 },
   HT_SINE: {},
   HT_TRENDMODE: 
    { log: false,
      case1: -1000,
      case1LowLimit: 1,
      case1LowPersistence: 0,
      case2: -1,
      case2HighLimit: -40,
      case2HighPersistence: -0.5 },
   CDL2CROWS: {},
   CDL3BLACKCROWS: {},
   CDL3INSIDE: {},
   CDL3LINESTRIKE: {},
   CDL3OUTSIDE: {},
   CDL3STARSINSOUTH: {},
   CDL3WHITESOLDIERS: {},
   CDLABANDONEDBABY: { optInPenetration: 0 },
   CDLADVANCEBLOCK: {},
   CDLBELTHOLD: {},
   CDLBREAKAWAY: {},
   CDLCLOSINGMARUBOZU: {},
   CDLCONCEALBABYSWALL: {},
   CDLCOUNTERATTACK: {},
   CDLDARKCLOUDCOVER: { optInPenetration: 0 },
   CDLDOJI: {},
   CDLDOJISTAR: {},
   CDLDRAGONFLYDOJI: {},
   CDLENGULFING: {},
   CDLEVENINGDOJISTAR: { optInPenetration: 0 },
   CDLEVENINGSTAR: { optInPenetration: 0 },
   CDLGAPSIDESIDEWHITE: {},
   CDLGRAVESTONEDOJI: {},
   CDLHAMMER: {},
   CDLHANGINGMAN: {},
   CDLHARAMI: {},
   CDLHARAMICROSS: {},
   CDLHIGHWAVE: {},
   CDLHIKKAKE: {},
   CDLHIKKAKEMOD: {},
   CDLHOMINGPIGEON: {},
   CDLIDENTICAL3CROWS: {},
   CDLINNECK: {},
   CDLINVERTEDHAMMER: {},
   CDLKICKING: {},
   CDLKICKINGBYLENGTH: {},
   CDLLADDERBOTTOM: {},
   CDLLONGLEGGEDDOJI: {},
   CDLLONGLINE: {},
   CDLMARUBOZU: {},
   CDLMATCHINGLOW: {},
   CDLMATHOLD: { optInPenetration: 0 },
   CDLMORNINGDOJISTAR: { optInPenetration: 0 },
   CDLMORNINGSTAR: { optInPenetration: 0 },
   CDLONNECK: {},
   CDLPIERCING: {},
   CDLRICKSHAWMAN: {},
   CDLRISEFALL3METHODS: {},
   CDLSEPARATINGLINES: {},
   CDLSHOOTINGSTAR: {},
   CDLSHORTLINE: {},
   CDLSPINNINGTOP: {},
   CDLSTALLEDPATTERN: {},
   CDLSTICKSANDWICH: {},
   CDLTAKURI: {},
   CDLTASUKIGAP: {},
   CDLTHRUSTING: {},
   CDLTRISTAR: {},
   CDLUPSIDEGAP2CROWS: {},
   CDLXSIDEGAP3METHODS: {},
   BETA: {},
   CORREL: {},
   LINEARREG: {},
   LINEARREG_ANGLE: {},
   LINEARREG_INTERCEPT: {},
   LINEARREG_SLOPE: {},
   STDDEV: {},
   TSF: {},
   VAR: {},
   EMA: { log: false, optInTimePeriod: 100 },
   DEMA: { log: false, optInTimePeriod: 100 },
   STOCH: 
    { log: false,
      optInFastK_Period: 1,
      optInSlowK_Period: 3,
      optInSlowK_MAType: 1,
      optInSlowD_Period: 100,
      optInSlowD_MAType: 1,
      case1: -1000 },
   STOCHF: 
    { log: false,
      optInFastK_Period: 1,
      optInFastD_Period: 1,
      optInFastD_MAType: 1 },
   STOCHRSI: 
    { log: false,
      optInFastK_Period: 1,
      optInTimePeriod: 100,
      optInFastD_Period: 1,
      optInFastD_MAType: 1 } 
 
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          STRATEGY SETTINGS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

config.RSI = {
  interval: 15,
  thresholds: {
    low: 25,
    high: 75,
    persistence: 2
  }
}

config.MACD = {
  short: 10,
  long: 21,
  signal: 9,
  thresholds: {
    down: -0.000025,
    up: 0.000025,
    persistence: 1
  }
}

module.exports = config
