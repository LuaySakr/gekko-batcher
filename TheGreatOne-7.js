const config = {}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          GENERAL SETTINGS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Name of batch (will show up in generated csv's file name )
config.name = 'TheGreatOne-7'

// Save results to csv
config.saveToCsv = true

config.gekkoPath = '../ProjectA/'
config.gekkoConfigFileName = 'TheGreatOne-7_config.js'

// URL that serving Gekko UI
config.apiUrl = 'http://localhost:3000'

// Keep it lower than the number of cores you have
// Note: 2 is recommended value for import mode
config.parallelQueries = 20

config.candleSizes = [1,5]

config.historySizes = [0]

// Format: [exchange, currency, asset]
config.tradingPairs = [
  ['binance', 'usdt', 'btc']
  // ,
  // ['poloniex', 'eth', 'zec']
]

// Note: only one daterange for "import" mode allowed if parallelQueries > 1
// It's related to constraints with database
config.dateranges = [{
  from: '2020-01-01 00:00',
  to: '2020-01-02 00:00'
}
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

  'TheGreatOne-7'
  // ,'RSI' , 'MACD', 'StochRSI', 'CCI'
]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          BRUTEFORCE SEARCHER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Specify strategy you want for bruteforce
config.method = 'TheGreatOne-7'

// Specify ranges settings for the given method. It generates all
// possible combinations of a set of settings with given ranges
// Format for range: 'start:step:end' or 'true|false'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          STRATEGY SETTINGS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


config.ranges = 
{ ADVICE: { long: 1000, short: -1000 },
  MainIndicators: { SMA: 1 },
  SMA: 
   { optInTimePeriod: 7,
     log: true,
     use_1: 1,
     ConditionVector_1: -1,
     ConditionWeight_1: 1000,
     ConditionLimit_1: '0.1:0.1:1',
     ConditionPersistence_1: 100,
     use_2: 1,
     ConditionVector_2: 1,
     ConditionWeight_2: 1000,
     ConditionLimit_2: '0.1:0.1:1',
     ConditionPersistence_2: 100,
     use_3: 1,
     ConditionVector_3: -1,
     ConditionWeight_3: 1000,
     ConditionLimit_3: '0.01:0.01:0.1',
     ConditionPersistence_3: 100,
     use_4: 1,
     ConditionVector_4: 1,
     ConditionWeight_4: 1000,
     ConditionLimit_4: '0.01:0.01:0.1',
     ConditionPersistence_4: 100 },
  FileLog: 
   { fileLog: true,
     logCandles: true,
     logNotImportantCandle: false,
     logFilePath: 'logFilePath.txt',
     candleHeder: '#',
     candleFooter: '*',
     forLength: 50,
     seperator: '@' } }


module.exports = config
