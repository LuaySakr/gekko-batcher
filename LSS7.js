const config = {}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          GENERAL SETTINGS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Name of batch (will show up in generated csv's file name )
config.name = 'LSS7'

// Save results to csv
config.saveToCsv = true

config.gekkoPath = '../mamadede/'
config.gekkoConfigFileName = 'LSS7_config.js'

// URL that serving Gekko UI
config.apiUrl = 'http://localhost:3001'

// Keep it lower than the number of cores you have
// Note: 2 is recommended value for import mode
config.parallelQueries = 5

config.candleSizes = [5]

config.historySizes = [10]

// Format: [exchange, currency, asset]
config.tradingPairs = [
  ['binance', 'usdt', 'bnb']
  // ,
  // ['poloniex', 'eth', 'zec']
]

// Note: only one daterange for "import" mode allowed if parallelQueries > 1
// It's related to constraints with database
config.dateranges = [
  
//   {
//   from: '2020-11-29 19:14',
//   to: '2020-12-08 14:09'
// }
//   ,
   {
  from: '2020-05-01 00:00',
  to: '2020-06-01 00:00'
  }
]

// Shuffle generated combinations of method's configs
config.shuffle = true

// Initial balance, fees and slippage/spread
config.paperTrader = {
  simulationBalance: {
    currency: 100,
    asset: 0
  },
  feeMaker: 0.016,
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

  'LSS7'
  // ,'RSI' , 'MACD', 'StochRSI', 'CCI'
]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          BRUTEFORCE SEARCHER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Specify strategy you want for bruteforce
config.method = 'LSS7'

// Specify ranges settings for the given method. It generates all
// possible combinations of a set of settings with given ranges
// Format for range: 'start:step:end' or 'true|false'
// #CANDLE_4
// # extreamly negative
// use_4                   = 1
// ConditionVector_4       = -1
// ConditionWeight_4       = 4
// ConditionLimit_4        = 0
// ConditionPersistence_4  = 0.9

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          STRATEGY SETTINGS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


config.ranges ={
  ADVICE: {
    long: '-10:1:10',//0.1,
    short: '-10:1:10',//-0.1,
    stoploss: 2,
    flexibility: 0,
    exposed: false
  },
  SMA: {
    optInTimePeriod: 50,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 2,
    ConditionLimit_1: 0.2,
    ConditionPersistence_1: 1,
    use_3: 1,
    ConditionVector_3: -1,
    ConditionWeight_3: 10,
    ConditionLimit_3: 0.2,
    ConditionPersistence_3: 0
  },
  EMA: {
    optInTimePeriod: 50,
    log: true,
    use_1: 1,
    ConditionVector_1: 0,
    ConditionWeight_1: 2,
    ConditionLimit_1: 0.2,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: 0,
    ConditionWeight_2: 10,
    ConditionLimit_2: 0.2,
    ConditionPersistence_2: 0
  },
  DEMA: {
    optInTimePeriod: 50,
    log: true,
    use_1: 1,
    ConditionVector_1: 0,
    ConditionWeight_1: 2,
    ConditionLimit_1: 0.2,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: 0,
    ConditionWeight_2: 10,
    ConditionLimit_2: 0.2,
    ConditionPersistence_2: 0
  },
  ADX: {
    optInTimePeriod: 50,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 1,
    ConditionLimit_1: 7,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 1,
    ConditionLimit_2: 23,
    ConditionPersistence_2: 0
  },
  ADXR: {
    optInTimePeriod: 50,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 1,
    ConditionLimit_1: 10,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 1,
    ConditionLimit_2: 23,
    ConditionPersistence_2: 0
  },
  APO: {
    optInFastPeriod: 10,
    optInSlowPeriod: 21,
    optInMAType: 1,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 0,
    ConditionLimit_1: 0,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 0,
    ConditionLimit_2: 0,
    ConditionPersistence_2: 0
  },
  AROON: {
    log: true,
    optInTimePeriod: 100,
    use_1: 1,
    ConditionVector_1: -1,
    ConditionWeight_1: 1,
    ConditionLimit_1: 100,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: 1,
    ConditionWeight_2: 1,
    ConditionLimit_2: 100,
    ConditionPersistence_2: 0,
    use_3: 1,
    ConditionVector_3: -1,
    ConditionWeight_3: 1,
    ConditionLimit_3: 0,
    ConditionPersistence_3: 0,
    use_4: 1,
    ConditionVector_4: -1,
    ConditionWeight_4: 1,
    ConditionLimit_4: 0,
    ConditionPersistence_4: 0,
    use_5: 1,
    ConditionVector_5: 1,
    ConditionWeight_5: 1,
    ConditionLimit_5: 100,
    ConditionPersistence_5: 0
  },
  AROONOSC: {
    log: true,
    optInTimePeriod: 100,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 1,
    ConditionLimit_1: -100,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 1,
    ConditionLimit_2: 100,
    ConditionPersistence_2: 0,
    use_3: 0,
    ConditionVector_3: -1,
    ConditionWeight_3: 1,
    ConditionLimit_3: 100,
    ConditionPersistence_3: 0
  },
  BOP: {
    log: true,
    use_1: 1,
    ConditionVector_1: -1,
    ConditionWeight_1: 1,
    ConditionLimit_1: 0.99,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: 1,
    ConditionWeight_2: 1,
    ConditionLimit_2: -0.99,
    ConditionPersistence_2: 0
  },
  CCI: {
    log: true,
    optInTimePeriod: 14,
    use_1: 1,
    ConditionVector_1: -1,
    ConditionWeight_1: 1,
    ConditionLimit_1: 200,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: 1,
    ConditionWeight_2: 1,
    ConditionLimit_2: -230,
    ConditionPersistence_2: 0
  },
  CMO: {
    log: true,
    optInTimePeriod: 14,
    use_1: 1,
    ConditionVector_1: -1,
    ConditionWeight_1: 1,
    ConditionLimit_1: 50,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: 1,
    ConditionWeight_2: 1,
    ConditionLimit_2: 10,
    ConditionPersistence_2: 0
  },
  DX: {
    optInTimePeriod: 50,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 1,
    ConditionLimit_1: 10,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 1,
    ConditionLimit_2: 35,
    ConditionPersistence_2: 0
  },
  MACD: {
    log: true,
    optInFastPeriod: 10,
    optInSlowPeriod: 21,
    optInSignalPeriod: 9,
    use_1: 1,
    ConditionVector_1: -1,
    ConditionWeight_1: 1,
    ConditionLimit_1: 0.1,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: 1,
    ConditionWeight_2: 1,
    ConditionLimit_2: -0.4,
    ConditionPersistence_2: 0,
    use_3: 0,
    ConditionVector_3: -1,
    ConditionWeight_3: 1,
    ConditionLimit_3: 0,
    ConditionPersistence_3: 0,
    use_4: 0,
    ConditionVector_4: -1,
    ConditionWeight_4: 1,
    ConditionLimit_4: 0,
    ConditionPersistence_4: 0,
    use_5: 0,
    ConditionVector_5: 0,
    ConditionWeight_5: 0,
    ConditionLimit_5: 0,
    ConditionPersistence_5: 0,
    use_6: 0,
    ConditionVector_6: 0,
    ConditionWeight_6: 0,
    ConditionLimit_6: 0,
    ConditionPersistence_6: 0,
    use_7: 1,
    ConditionVector_7: 1,
    ConditionWeight_7: 1,
    ConditionLimit_7: 0,
    ConditionPersistence_7: 0
  },
  PPO: {
    log: true,
    optInFastPeriod: 12,
    optInSlowPeriod: 26,
    optInSignalPeriod: 9,
    optInMAType: 1,
    optInTimePeriod: 100,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 1,
    ConditionLimit_1: -0.1,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 1,
    ConditionLimit_2: 0.4,
    ConditionPersistence_2: 0,
    use_3: 0,
    ConditionVector_3: 1,
    ConditionWeight_3: 1,
    ConditionLimit_3: 40,
    ConditionPersistence_3: 0
  },
  RSI: {
    log: true,
    optInTimePeriod: 30,
    use_1: 1,
    ConditionVector_1: -1,
    ConditionWeight_1: 1,
    ConditionLimit_1: 70,
    ConditionPersistence_1: 0,
    use_2: 0,
    ConditionVector_2: 1,
    ConditionWeight_2: 1,
    ConditionLimit_2: 85,
    ConditionPersistence_2: 0,
    use_3: 1,
    ConditionVector_3: 1,
    ConditionWeight_3: 1,
    ConditionLimit_3: 40,
    ConditionPersistence_3: 0
  },
  STOCH: {
    log: true,
    optInFastK_Period: 1,
    optInSlowK_Period: 3,
    optInSlowK_MAType: 1,
    optInSlowD_Period: 50,
    optInSlowD_MAType: 1,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 1,
    ConditionLimit_1: 25,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 1,
    ConditionLimit_2: 90,
    ConditionPersistence_2: 0
  },
  CANDLE: {
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 1,
    ConditionLimit_1: 1,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: 1,
    ConditionWeight_2: 1,
    ConditionLimit_2: 80,
    ConditionPersistence_2: 0,
    use_3: 0,
    ConditionVector_3: 1,
    ConditionWeight_3: 1,
    ConditionLimit_3: 90,
    ConditionPersistence_3: 0,
    use_4: 0,
    ConditionVector_4: -1,
    ConditionWeight_4: 1,
    ConditionLimit_4: 0,
    ConditionPersistence_4: -0.3,
    use_5: 0,
    ConditionVector_5: -1,
    ConditionWeight_5: 1,
    ConditionLimit_5: 0,
    ConditionPersistence_5: 0.3,
    use_6: 0,
    ConditionVector_6: 1,
    ConditionWeight_6: 1,
    ConditionLimit_6: 0.11,
    ConditionPersistence_6: 0,
    use_7: 0,
    ConditionVector_7: 1,
    ConditionWeight_7: 1,
    ConditionLimit_7: 0.31,
    ConditionPersistence_7: 0
  },
  MainIndicators: {
    SMA: 0,
    EMA: 0,
    DEMA: 0,
    ADX: 1,
    ADXR: 1,
    APO: 1,
    AROON: 1,
    AROONOSC: 1,
    BOP: 1,
    CCI: 1,
    CMO: 1,
    DX: 1,
    MACD: 1,
    PPO: 1,
    RSI: 1,
    STOCH: 1,
    ADOSC: 0,
    OBV: 0,
    ATR: 0,
    NATR: 0,
    TRANGE: 0,
    AVGPRICE: 0,
    MEDPRICE: 0,
    TYPPRICE: 0,
    WCLPRICE: 0,
    HT_DCPERIOD: 0,
    HT_DCPHASE: 0,
    HT_SINE: 0,
    AD: 0,
    HT_PHASOR: 0,
    HT_TRENDMODE: 0,
    CDLHARAMICROSS: 0,
    CANDLE: 1
  },
  AD: {
    optInTimePeriod: 50,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 0,
    ConditionLimit_1: 0,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 0,
    ConditionLimit_2: 0,
    ConditionPersistence_2: 0
  },
  Ticker: { _tickerSize: 12, SMA: 1, MACD: 1 },
  OBV: {
    optInTimePeriod: 50,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 2,
    ConditionLimit_1: 0.2,
    ConditionPersistence_1: 1,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 10,
    ConditionLimit_2: 0.2,
    ConditionPersistence_2: 0
  },
  ADOSC: {
    optInFastPeriod: 50,
    optInSlowPeriod: 50,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 2,
    ConditionLimit_1: 0.2,
    ConditionPersistence_1: 1,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 10,
    ConditionLimit_2: 0.2,
    ConditionPersistence_2: 0
  },
  ATR: {
    optInTimePeriod: 50,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 2,
    ConditionLimit_1: 0.2,
    ConditionPersistence_1: 1,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 10,
    ConditionLimit_2: 0.2,
    ConditionPersistence_2: 0
  },
  NATR: {
    optInTimePeriod: 50,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 2,
    ConditionLimit_1: 0.2,
    ConditionPersistence_1: 1,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 10,
    ConditionLimit_2: 0.2,
    ConditionPersistence_2: 0
  },
  TRANGE: {
    optInTimePeriod: 50,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 2,
    ConditionLimit_1: 0.2,
    ConditionPersistence_1: 1,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 10,
    ConditionLimit_2: 0.2,
    ConditionPersistence_2: 0
  },
  AVGPRICE: {
    optInTimePeriod: 50,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 2,
    ConditionLimit_1: 0.2,
    ConditionPersistence_1: 1,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 10,
    ConditionLimit_2: 0.2,
    ConditionPersistence_2: 0
  },
  MEDPRICE: {
    optInTimePeriod: 50,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 2,
    ConditionLimit_1: 0.2,
    ConditionPersistence_1: 1,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 10,
    ConditionLimit_2: 0.2,
    ConditionPersistence_2: 0
  },
  TYPPRICE: {
    optInTimePeriod: 50,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 2,
    ConditionLimit_1: 0.2,
    ConditionPersistence_1: 1,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 10,
    ConditionLimit_2: 0.2,
    ConditionPersistence_2: 0
  },
  WCLPRICE: {
    optInTimePeriod: 50,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 2,
    ConditionLimit_1: 0.2,
    ConditionPersistence_1: 1,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 10,
    ConditionLimit_2: 0.2,
    ConditionPersistence_2: 0
  },
  HT_DCPERIOD: {
    optInFastPeriod: 50,
    optInSlowPeriod: 50,
    optInMAType: 1,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 2,
    ConditionLimit_1: 0.2,
    ConditionPersistence_1: 1,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 10,
    ConditionLimit_2: 0.2,
    ConditionPersistence_2: 0
  },
  HT_DCPHASE: {
    optInFastPeriod: 50,
    optInSlowPeriod: 50,
    optInMAType: 1,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 2,
    ConditionLimit_1: 0.2,
    ConditionPersistence_1: 1,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 10,
    ConditionLimit_2: 0.2,
    ConditionPersistence_2: 0
  },
  HT_SINE: {
    optInFastPeriod: 50,
    optInSlowPeriod: 50,
    optInMAType: 1,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 2,
    ConditionLimit_1: 0.2,
    ConditionPersistence_1: 1,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 10,
    ConditionLimit_2: 0.2,
    ConditionPersistence_2: 0
  },
  HT_TRENDMODE: {
    optInTimePeriod: 50,
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 2,
    ConditionLimit_1: 0.2,
    ConditionPersistence_1: 1,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 10,
    ConditionLimit_2: 0.2,
    ConditionPersistence_2: 0
  },
  TickerMACD: {
    log: true,
    optInFastPeriod: 10,
    optInSlowPeriod: 21,
    optInSignalPeriod: 9,
    use_1: 1,
    ConditionVector_1: -1,
    ConditionWeight_1: 1.1,
    ConditionLimit_1: -13,
    ConditionPersistence_1: 0
  },
  TickerSMA: {
    optInTimePeriod: 3,
    log: true,
    use_1: 1,
    ConditionVector_1: -1,
    ConditionWeight_1: 1,
    ConditionLimit_1: 0,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: 1,
    ConditionWeight_2: 1,
    ConditionLimit_2: 0,
    ConditionPersistence_2: 0,
    use_3: 1,
    ConditionVector_3: -1,
    ConditionWeight_3: 0.9,
    ConditionLimit_3: 0,
    ConditionPersistence_3: 0,
    use_4: 1,
    ConditionVector_4: 1,
    ConditionWeight_4: 1,
    ConditionLimit_4: 0,
    ConditionPersistence_4: 0
  },
  FileLog: {
    fileLog: true,
    logCandles: true,
    logNotImportantCandle: true,
    logFilePath: 'logFilePath.txt',
    candleHeder: '#',
    candleFooter: '*',
    forLength: 50,
    seperator: '@'
  },
  CDLHARAMICROSS: {
    log: true,
    use_1: 0,
    ConditionVector_1: 1,
    ConditionWeight_1: 0.1,
    ConditionLimit_1: 0,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: 1,
    ConditionWeight_2: 0.1,
    ConditionLimit_2: 0,
    ConditionPersistence_2: 0
  },
  HT_PHASOR: {
    log: true,
    use_1: 1,
    ConditionVector_1: 1,
    ConditionWeight_1: 3.11,
    ConditionLimit_1: -50,
    ConditionPersistence_1: 0,
    use_2: 1,
    ConditionVector_2: -1,
    ConditionWeight_2: 3,
    ConditionLimit_2: 140,
    ConditionPersistence_2: 0
  },
  test: { certainty: 0, certaintySMA: 0 }
}



module.exports = config
