const config = {}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          GENERAL SETTINGS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Name of batch (will show up in generated csv's file name )
config.name = 'LSS4'

// Save results to csv
config.saveToCsv = true

config.gekkoPath = '../mamadede/'
config.gekkoConfigFileName = 'LSS4_config.js'

// URL that serving Gekko UI
config.apiUrl = 'http://localhost:3001'

// Keep it lower than the number of cores you have
// Note: 2 is recommended value for import mode
config.parallelQueries = 5

config.candleSizes = [14]

config.historySizes = [0]

// Format: [exchange, currency, asset]
config.tradingPairs = [
  ['binance', 'usdt', 'tusd']
  // ,
  // ['poloniex', 'eth', 'zec']
]

// Note: only one daterange for "import" mode allowed if parallelQueries > 1
// It's related to constraints with database
config.dateranges = [
  
//   {
//   from: '2020-11-29 19:14',
//   to: '2020-12-12 15:24'
// }
//   ,
   {
  from: '2020-04-01 00:00',
  to: '2020-12-12 15:24'
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

  'LSS4'
  // ,'RSI' , 'MACD', 'StochRSI', 'CCI'
]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          BRUTEFORCE SEARCHER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Specify strategy you want for bruteforce
config.method = 'LSS4'

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


config.ranges =

{ ADVICE: { long: 2, short: -3, stoploss: 2, flexibility: 0 ,	exposed : false},
Ticker: { _tickerSize: 4, SMA: 1, MACD: 1 },
MainIndicators: 
 { SMA: 1,
   EMA: 0,
   DEMA: 0,
   AROON: 1,
   AROONOSC: 1,
   BOP: 1,
   CCI: 1,
   CMO: 1,
   MACD: 1,
   PPO: 1,
   RSI: 1,
   STOCH: 1,
   HT_PHASOR: 1,
   HT_TRENDMODE: 1,
   CDLHARAMICROSS: 1,
   CANDLE: 1 },
SMA: 
 { optInTimePeriod: 50,
   log: true,
   use_1: 1,
   ConditionVector_1: 1,
   ConditionWeight_1: 2,//'2:2:10',
   ConditionLimit_1: 0.2,
   ConditionPersistence_1: 1,
   use_3: 1,
   ConditionVector_3: -1,
   ConditionWeight_3: 10,//'8:1:12',//10,
   ConditionLimit_3: 0.2,
   ConditionPersistence_3: 0 },
TickerMACD: 
 { log: true,
   optInFastPeriod: 10,
   optInSlowPeriod: 21,
   optInSignalPeriod: 9,
   use_1: 1,
   ConditionVector_1: -1,
   ConditionWeight_1: 1.1,//'1.0:1:1.5',//1.1,
   ConditionLimit_1: -13,
   ConditionPersistence_1: 0 },
TickerSMA: 
 { optInTimePeriod: 3,
   log: true,
   use_1: 1,
   ConditionVector_1: -1,
   ConditionWeight_1: 1,//'1:1:5',//1,
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
   ConditionPersistence_4: 0 },
FileLog: 
 { fileLog: true,
   logCandles: true,
   logNotImportantCandle: true,
   logFilePath: 'logFilePath.txt',
   candleHeder: '#',
   candleFooter: '*',
   forLength: 50,
   seperator: '@' },
CDLHARAMICROSS: 
 { log: true,
   use_1: 0,
   ConditionVector_1: 1,
   ConditionWeight_1: 0.1,
   ConditionLimit_1: 0,
   ConditionPersistence_1: 0,
   use_2: 1,
   ConditionVector_2: 1,
   ConditionWeight_2: 0.1,
   ConditionLimit_2: 0,
   ConditionPersistence_2: 0 },
MACD: 
 { log: true,
   optInFastPeriod: 10,
   optInSlowPeriod: 21,
   optInSignalPeriod: 9,
   use_1: 1,
   ConditionVector_1: -1,
   ConditionWeight_1: 1,
   ConditionLimit_1: 60,
   ConditionPersistence_1: 0,
   use_2: 1,
   ConditionVector_2: 1,
   ConditionWeight_2: 1,
   ConditionLimit_2: -55,
   ConditionPersistence_2: 0,
   use_3: 1,
   ConditionVector_3: -1,
   ConditionWeight_3: 1,
   ConditionLimit_3: 10,
   ConditionPersistence_3: 0,
   use_4: 1,
   ConditionVector_4: -1,
   ConditionWeight_4: 2.2,
   ConditionLimit_4: 8,
   ConditionPersistence_4: 0,
   use_5: 1,
   ConditionVector_5: 1,
   ConditionWeight_5: 1,
   ConditionLimit_5: -45,
   ConditionPersistence_5: 0,
   use_6: 1,
   ConditionVector_6: 1,
   ConditionWeight_6: 1,
   ConditionLimit_6: -17,
   ConditionPersistence_6: 0,
   use_7: 1,
   ConditionVector_7: 1,
   ConditionWeight_7: 1,
   ConditionLimit_7: -23,
   ConditionPersistence_7: 0 },
RSI: 
 { log: true,
   optInTimePeriod: 30,
   use_1: 1,
   ConditionVector_1: -1,
   ConditionWeight_1: 2.3,
   ConditionLimit_1: 40,
   ConditionPersistence_1: 0,
   use_2: 1,
   ConditionVector_2: 1,
   ConditionWeight_2: 1,
   ConditionLimit_2: 85,
   ConditionPersistence_2: 0,
   use_3: 1,
   ConditionVector_3: 1,
   ConditionWeight_3: 30,
   ConditionLimit_3: 22,
   ConditionPersistence_3: 0 },
HT_PHASOR: 
 { log: true,
   use_1: 1,
   ConditionVector_1: 1,
   ConditionWeight_1: 3.11,
   ConditionLimit_1: -50,
   ConditionPersistence_1: 0,
   use_2: 1,
   ConditionVector_2: -1,
   ConditionWeight_2: 3,
   ConditionLimit_2: 140,
   ConditionPersistence_2: 0 },
AROON: 
 { log: true,
   optInTimePeriod: 14,
   use_1: 0,
   ConditionVector_1: -1,
   ConditionWeight_1: 1,
   ConditionLimit_1: 100,
   ConditionPersistence_1: 0,
   use_2: 1,
   ConditionVector_2: 1,
   ConditionWeight_2: 1,
   ConditionLimit_2: 1,
   ConditionPersistence_2: 0,
   use_3: 0,
   ConditionVector_3: -1,
   ConditionWeight_3: 1,
   ConditionLimit_3: 0,
   ConditionPersistence_3: 0 },
AROONOSC: 
 { log: true,
   optInTimePeriod: 14,
   use_1: 0,
   ConditionVector_1: -1,
   ConditionWeight_1: 1,
   ConditionLimit_1: 0,
   ConditionPersistence_1: 0,
   use_2: 0,
   ConditionVector_2: -1,
   ConditionWeight_2: 1,
   ConditionLimit_2: -1,
   ConditionPersistence_2: 0,
   use_3: 0,
   ConditionVector_3: -1,
   ConditionWeight_3: 1,
   ConditionLimit_3: 100,
   ConditionPersistence_3: 0 },
BOP: 
 { log: true,
   use_1: 1,
   ConditionVector_1: -1,
   ConditionWeight_1: 1,//'1:1:5',//1,
   ConditionLimit_1: 0.99,
   ConditionPersistence_1: 0,
   use_2: 1,
   ConditionVector_2: 1,
   ConditionWeight_2: 1,
   ConditionLimit_2: -0.99,
   ConditionPersistence_2: 0 },
CCI: 
 { log: true,
   optInTimePeriod: 14,
   use_1: 1,
   ConditionVector_1: -1,
   ConditionWeight_1: 1,//'1:1:5',//1,
   ConditionLimit_1: 200,
   ConditionPersistence_1: 0,
   use_2: 1,
   ConditionVector_2: 1,
   ConditionWeight_2: 1,
   ConditionLimit_2: -230,
   ConditionPersistence_2: 0 },
CMO: 
 { log: true,
   optInTimePeriod: 14,
   use_1: 1,
   ConditionVector_1: -1,
   ConditionWeight_1: 1,//'1:1:5',//1,
   ConditionLimit_1: 55,
   ConditionPersistence_1: 0,
   use_2: 1,
   ConditionVector_2: 1,
   ConditionWeight_2: 2,
   ConditionLimit_2: -69,
   ConditionPersistence_2: 0 },
PPO: 
 { log: true,
   optInFastPeriod: 12,
   optInSlowPeriod: 26,
   optInSignalPeriod: 9,
   optInMAType: 1,
   optInTimePeriod: 100,
   use_1: 1,
   ConditionVector_1: 1,
   ConditionWeight_1: 10,
   ConditionLimit_1: -0.2,
   ConditionPersistence_1: 0,
   use_2: 1,
   ConditionVector_2: -1,
   ConditionWeight_2: 1,//'1:1:5',//1,
   ConditionLimit_2: 0.2,
   ConditionPersistence_2: 0,
   use_3: 1,
   ConditionVector_3: 1,
   ConditionWeight_3: 1,
   ConditionLimit_3: 40,
   ConditionPersistence_3: 0 },
STOCH: 
 { log: true,
   optInFastK_Period: 1,
   optInSlowK_Period: 3,
   optInSlowK_MAType: 1,
   optInSlowD_Period: 50,
   optInSlowD_MAType: 1,
   use_1: 1,
   ConditionVector_1: -1,
   ConditionWeight_1: 1,
   ConditionLimit_1: 0,
   ConditionPersistence_1: 0 },
CANDLE: 
 { log: true,
   use_1: 1,
   ConditionVector_1: 1,
   ConditionWeight_1: 10,
   ConditionLimit_1: 0.2,
   ConditionPersistence_1: -0.001,
   use_2: 1,
   ConditionVector_2: 1,
   ConditionWeight_2: 7.5,
   ConditionLimit_2: 90,
   ConditionPersistence_2: 0,
   use_3: 1,
   ConditionVector_3: 1,
   ConditionWeight_3: 1,
   ConditionLimit_3: 90,
   ConditionPersistence_3: 0,
   use_4: 1,
   ConditionVector_4: -1,
   ConditionWeight_4: 4,//'1:1:5',//5,
   ConditionLimit_4: 0,
   ConditionPersistence_4: 0.9,//,
   use_5: 0,
   ConditionVector_5: -1,
   ConditionWeight_5: 1,//'1:1:5',//1,
   ConditionLimit_5: 0,
   ConditionPersistence_5: 0,
   use_6: 1,
   ConditionVector_6: 1,
   ConditionWeight_6: 1,
   ConditionLimit_6: 0.11,
   ConditionPersistence_6: 0,
   use_7: 1,
   ConditionVector_7: 1,
   ConditionWeight_7: 1,
   ConditionLimit_7: 0.31,
   ConditionPersistence_7: 0 },
test: { certainty: 0, certaintySMA: 0 }  }


module.exports = config
