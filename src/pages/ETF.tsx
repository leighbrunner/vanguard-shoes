import React, { useState } from 'react';

interface Cryptocurrency {
  id: number;
  name: string;
  symbol: string;
  price: number;
  marketCap: string;
  change24h: number;
  description: string;
}

const ETF: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'holdings' | 'performance'>('overview');

  const cryptocurrencies: Cryptocurrency[] = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: 63890.42,
      marketCap: "$1.25T",
      change24h: 2.3,
      description: "The original cryptocurrency created by Satoshi Nakamoto."
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: 3458.17,
      marketCap: "$416.2B",
      change24h: 1.7,
      description: "A decentralized, open-source blockchain with smart contract functionality."
    },
    {
      id: 3,
      name: "Binance Coin",
      symbol: "BNB",
      price: 608.45,
      marketCap: "$93.6B",
      change24h: -0.8,
      description: "Cryptocurrency issued by the Binance exchange."
    },
    {
      id: 4,
      name: "Solana",
      symbol: "SOL",
      price: 137.92,
      marketCap: "$59.7B",
      change24h: 3.2,
      description: "Blockchain platform focused on high performance and low transaction costs."
    },
    {
      id: 5,
      name: "XRP",
      symbol: "XRP",
      price: 0.5284,
      marketCap: "$29.1B",
      change24h: -1.5,
      description: "Digital asset specifically designed for payment networks and digital exchanges."
    },
    {
      id: 6,
      name: "Cardano",
      symbol: "ADA",
      price: 0.4573,
      marketCap: "$16.1B",
      change24h: 0.9,
      description: "Proof-of-stake blockchain platform with multi-layer architecture."
    },
    {
      id: 7,
      name: "Dogecoin",
      symbol: "DOGE",
      price: 0.1508,
      marketCap: "$21.6B",
      change24h: 4.1,
      description: "Originally created as a joke, now a popular meme cryptocurrency."
    },
    {
      id: 8,
      name: "Polkadot",
      symbol: "DOT",
      price: 6.72,
      marketCap: "$8.79B",
      change24h: -0.3,
      description: "Enables cross-blockchain transfers of any data or asset types."
    },
    {
      id: 9,
      name: "Chainlink",
      symbol: "LINK",
      price: 14.23,
      marketCap: "$8.37B",
      change24h: 2.1,
      description: "Decentralized oracle network connecting smart contracts with real-world data."
    },
    {
      id: 10,
      name: "Polygon",
      symbol: "MATIC",
      price: 0.5723,
      marketCap: "$5.62B",
      change24h: 1.3,
      description: "Ethereum scaling platform enabling fast, low-cost transactions."
    },
    {
      id: 11,
      name: "Litecoin",
      symbol: "LTC",
      price: 73.42,
      marketCap: "$5.43B",
      change24h: -0.7,
      description: "Peer-to-peer cryptocurrency inspired by and technically similar to Bitcoin."
    },
    {
      id: 12,
      name: "Avalanche",
      symbol: "AVAX",
      price: 28.65,
      marketCap: "$10.75B",
      change24h: 2.6,
      description: "Layer one blockchain offering high throughput and fast finality."
    },
    {
      id: 13,
      name: "Uniswap",
      symbol: "UNI",
      price: 8.73,
      marketCap: "$4.51B",
      change24h: -1.1,
      description: "Automated liquidity protocol for decentralized token exchange."
    },
    {
      id: 14,
      name: "Cosmos",
      symbol: "ATOM",
      price: 7.93,
      marketCap: "$3.08B",
      change24h: 0.4,
      description: "Ecosystem of blockchains designed to scale and interoperate with each other."
    },
    {
      id: 15,
      name: "Stellar",
      symbol: "XLM",
      price: 0.1172,
      marketCap: "$3.43B",
      change24h: -0.8,
      description: "Open network for storing and moving money that allows for global financial inclusion."
    },
    {
      id: 16,
      name: "Algorand",
      symbol: "ALGO",
      price: 0.1623,
      marketCap: "$1.29B",
      change24h: 1.5,
      description: "Public blockchain and protocol with fast transaction speeds."
    },
    {
      id: 17,
      name: "Filecoin",
      symbol: "FIL",
      price: 4.97,
      marketCap: "$2.39B",
      change24h: 3.7,
      description: "Decentralized storage network designed to store humanity's most important information."
    },
    {
      id: 18,
      name: "VeChain",
      symbol: "VET",
      price: 0.0231,
      marketCap: "$1.68B",
      change24h: -0.5,
      description: "Blockchain platform focused on supply chain management and business processes."
    },
    {
      id: 19,
      name: "The Graph",
      symbol: "GRT",
      price: 0.1432,
      marketCap: "$1.36B",
      change24h: 2.1,
      description: "Indexing protocol for querying networks like Ethereum and IPFS."
    },
    {
      id: 20,
      name: "Tezos",
      symbol: "XTZ",
      price: 0.9231,
      marketCap: "$891.7M",
      change24h: 0.3,
      description: "Self-amending cryptographic ledger with formal verification of smart contracts."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-vanguard-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Vanguard Crypto20 ETF
            </h1>
            <div className="bg-white/10 inline-block px-4 py-1 rounded-full text-sm font-medium mb-6">
              Ticker: VCRYP
            </div>
            <p className="text-xl max-w-3xl mx-auto">
              Our newest ETF tracks the performance of the top 20 cryptocurrencies by market capitalization
            </p>
          </div>
        </div>
      </section>

      {/* ETF Details Tabs */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap border-b">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'text-vanguard-red border-b-2 border-vanguard-red'
                  : 'text-gray-500 hover:text-vanguard-navy'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('holdings')}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'holdings'
                  ? 'text-vanguard-red border-b-2 border-vanguard-red'
                  : 'text-gray-500 hover:text-vanguard-navy'
              }`}
            >
              Holdings
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'performance'
                  ? 'text-vanguard-red border-b-2 border-vanguard-red'
                  : 'text-gray-500 hover:text-vanguard-navy'
              }`}
            >
              Performance
            </button>
          </div>
        </div>
      </section>

      {/* Content Based on Active Tab */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'overview' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2 text-vanguard-navy">ETF Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Net Asset Value</span>
                      <span className="font-medium">$35.76</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expense Ratio</span>
                      <span className="font-medium">0.45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Inception Date</span>
                      <span className="font-medium">May 1, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Assets Under Management</span>
                      <span className="font-medium">$248.7M</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2 text-vanguard-navy">Fund Characteristics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Number of Holdings</span>
                      <span className="font-medium">20</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rebalancing Frequency</span>
                      <span className="font-medium">Quarterly</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Market Capitalization</span>
                      <span className="font-medium">$1.89T</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Volatility (30-day)</span>
                      <span className="font-medium">High</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2 text-vanguard-navy">Trading Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Exchange</span>
                      <span className="font-medium">NYSE Arca</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average Daily Volume</span>
                      <span className="font-medium">1.25M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">52-Week Range</span>
                      <span className="font-medium">$27.58 - $41.32</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Distribution Yield</span>
                      <span className="font-medium">0.35%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-vanguard-navy">About Vanguard Crypto20 ETF</h3>
                <p className="mb-4 text-gray-700">
                  The Vanguard Crypto20 ETF (VCRYP) provides investors with exposure to the dynamic cryptocurrency market through a diversified portfolio of the top 20 cryptocurrencies by market capitalization. This innovative fund represents Vanguard's foray into digital assets as part of our 50th anniversary initiative.
                </p>
                <p className="mb-4 text-gray-700">
                  VCRYP offers a balanced approach to cryptocurrency investing, combining established assets like Bitcoin and Ethereum with promising emerging platforms. The fund is rebalanced quarterly to ensure it accurately reflects current market conditions and capitalization rankings.
                </p>
                <p className="mb-4 text-gray-700">
                  With Vanguard's signature low-cost approach, VCRYP provides a simplified way to gain diversified exposure to the cryptocurrency ecosystem without the complexities of managing multiple wallets or exchanges.
                </p>
                <div className="bg-vanguard-gray p-4 rounded-md mt-6">
                  <h4 className="font-medium text-vanguard-navy mb-2">Investment Considerations</h4>
                  <p className="text-sm text-gray-700">
                    Cryptocurrency investments are highly speculative and volatile. The value of the fund's shares may fluctuate significantly in the short term and could lose substantial value. This ETF is considered a high-risk investment and may not be suitable for all investors. Please read the prospectus carefully before investing.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'holdings' && (
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6 text-vanguard-navy">Current Holdings</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Symbol
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Market Cap
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          24h Change
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Weight
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {cryptocurrencies.map((crypto) => (
                        <tr key={crypto.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{crypto.name}</div>
                            <div className="text-sm text-gray-500">{crypto.description.substring(0, 30)}...</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {crypto.symbol}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                            ${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                            {crypto.marketCap}
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm text-right ${crypto.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h}%
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                            {(20 - crypto.id*0.65).toFixed(2)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-vanguard-gray p-6 rounded-lg">
                <h4 className="font-semibold text-vanguard-navy mb-2">Rebalancing Methodology</h4>
                <p className="text-sm text-gray-700 mb-4">
                  The fund rebalances quarterly to maintain appropriate representation of the cryptocurrency market. 
                  Weights are determined primarily by market capitalization, with adjustments to prevent overconcentration 
                  in any single asset. Maximum position size is capped at 20% to ensure diversification.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div>
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6 text-vanguard-navy">Historical Performance</h3>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-medium text-vanguard-navy">Cumulative Returns</h4>
                    <div className="text-xs text-gray-500">Since Inception (May 1, 2024)</div>
                  </div>
                  <div className="h-64 w-full bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-500">Performance chart will be available after 3 months of trading history</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h4 className="font-medium text-vanguard-navy mb-4">Performance as of May 31, 2024</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">1 Month</span>
                        <span className="font-medium text-green-600">+5.32%</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">3 Month</span>
                        <span className="font-medium text-gray-500">N/A</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">YTD</span>
                        <span className="font-medium text-green-600">+5.32%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Since Inception</span>
                        <span className="font-medium text-green-600">+5.32%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h4 className="font-medium text-vanguard-navy mb-4">Risk Metrics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Volatility (Annualized)</span>
                        <span className="font-medium">78.5%</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Sharpe Ratio</span>
                        <span className="font-medium text-gray-500">N/A</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Beta (vs. S&P 500)</span>
                        <span className="font-medium">1.76</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Maximum Drawdown</span>
                        <span className="font-medium text-red-600">-12.3%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-vanguard-gray p-6 rounded-lg">
                <h4 className="font-semibold text-vanguard-navy mb-2">Performance Disclosure</h4>
                <p className="text-sm text-gray-700">
                  Past performance is not a reliable indicator of future results. The value of your investment may fluctuate 
                  significantly due to the highly volatile nature of cryptocurrency markets. Performance data shown represents 
                  past performance net of all fees and expenses. Current performance may be lower or higher than the performance 
                  data quoted. This fund is new with limited operating history.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-vanguard-navy text-white py-12 mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Invest in the Future of Digital Assets</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            The Vanguard Crypto20 ETF offers a simplified way to gain exposure to the cryptocurrency ecosystem, 
            backed by Vanguard's 50 years of investment expertise.
          </p>
          <button className="bg-white hover:bg-gray-100 text-vanguard-navy px-8 py-3 rounded-md font-semibold text-lg inline-block transition-colors">
            Request Prospectus
          </button>
        </div>
      </section>
    </div>
  );
};

export default ETF; 