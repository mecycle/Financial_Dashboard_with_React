export interface FundInfo {
  managers: [{
    firstName: string,
    lastName: string,
    position: string
  }],
  quarters: [{
    title: string,
    details: [{
      name: string,
      value: string
    }]
  }]
}

export interface Allocation {
  category: string,
  value: number
}

export interface Position {
  CustomerId: string,
  Surname: string,
  CreditScore: string,
  Gender: string,
  Age: string,
  Balance: string,
  Exited: string
  // "52_week_high": string,
  // "52_week_low": string,
  // day_change: string,
  // change_pct: string,
  // close_yesterday: string,
  // market_cap: string,
  // volume: string,
  // volume_avg: string,
  // shares: string,
  // stock_exchange_long: string,
  // stock_exchange_short: string,
  // timezone: string,
  // timezone_name: string,
  // gmt_offset: string,
  // last_trade_time: string,
  // pe: string,
  // eps: string
}
