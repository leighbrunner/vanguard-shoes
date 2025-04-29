import React from 'react';
import { Link } from 'react-router-dom';

interface Milestone {
  year: number;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const milestones: Milestone[] = [
    {
      year: 1974,
      title: "Founding of Vanguard",
      description: "John C. Bogle establishes The Vanguard Group as a client-owned company with a unique corporate structure designed to keep costs low."
    },
    {
      year: 1976,
      title: "First Index Fund",
      description: "Vanguard launches the First Index Investment Trust (now Vanguard 500 Index Fund), the world's first index mutual fund available to individual investors."
    },
    {
      year: 1986,
      title: "Bond Index Fund Pioneer",
      description: "Introduction of the first bond index fund, making indexing available across both equity and fixed income markets."
    },
    {
      year: 1992,
      title: "International Expansion",
      description: "Vanguard begins serving clients outside the United States, starting its global expansion journey."
    },
    {
      year: 2001,
      title: "ETF Innovation",
      description: "Vanguard introduces its first exchange-traded funds (ETFs), expanding access to low-cost investments."
    },
    {
      year: 2010,
      title: "Target Retirement Funds",
      description: "Vanguard's Target Retirement Funds gain widespread popularity, simplifying retirement investing for millions."
    },
    {
      year: 2018,
      title: "$5 Trillion in Assets",
      description: "Vanguard reaches a historic milestone, managing over $5 trillion in global assets, reflecting investors' trust and the success of the low-cost investment model."
    },
    {
      year: 2024,
      title: "50th Anniversary",
      description: "Vanguard celebrates 50 years of investment excellence with special initiatives including the commemorative shoe collection and new Crypto20 ETF."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-vanguard-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Celebrating 50 Years of Excellence
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Our journey from 1974 to today - Five decades of helping investors achieve financial success
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-vanguard-navy mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                For 50 years, Vanguard has been putting investors first. Founded in 1974 by John C. Bogle, 
                Vanguard pioneered a new way of investing centered on low costs, long-term perspective, 
                and client ownership.
              </p>
              <p className="text-gray-700 mb-4">
                What began as a small, maverick mutual fund company has grown into one of the world's 
                largest investment management firms. Throughout our history, we've remained committed to 
                our founding principles: low costs, client alignment, and investment excellence.
              </p>
              <p className="text-gray-700 mb-4">
                As we celebrate our 50th anniversary, we're not just looking back at our accomplishments - 
                we're looking forward to the next 50 years of investment innovation and client service.
              </p>
            </div>
            <div className="bg-vanguard-gray p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-vanguard-navy mb-4">Vanguard By The Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-vanguard-red mb-2">$8.9T+</div>
                  <div className="text-sm text-gray-600">Assets Under Management</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-vanguard-red mb-2">30M+</div>
                  <div className="text-sm text-gray-600">Investors Worldwide</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-vanguard-red mb-2">200+</div>
                  <div className="text-sm text-gray-600">US Funds</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-vanguard-red mb-2">20+</div>
                  <div className="text-sm text-gray-600">Countries with Presence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-vanguard-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-vanguard-navy mb-12">50 Years of Milestones</h2>
          
          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-vanguard-red"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Year circle for desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-vanguard-red text-white items-center justify-center z-10">
                    <div className="font-bold text-sm">{milestone.year.toString().substring(2)}</div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      {/* Year circle for mobile */}
                      <div className="md:hidden w-10 h-10 rounded-full bg-vanguard-red text-white flex items-center justify-center mb-3">
                        <div className="font-bold text-sm">{milestone.year.toString().substring(2)}</div>
                      </div>
                      
                      <div className="flex items-start mb-3">
                        <span className="text-xl font-bold text-vanguard-navy">{milestone.year}</span>
                        <span className="ml-3 text-lg font-semibold text-vanguard-navy">{milestone.title}</span>
                      </div>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Spacer for alternate side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 50th Anniversary Celebration */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-vanguard-navy mb-6">50th Anniversary Celebration</h2>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            To commemorate this special milestone, we're launching exclusive products and initiatives 
            that honor our heritage while looking toward the future.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-vanguard-navy mb-4">Anniversary Shoe Collection</h3>
              <p className="text-gray-700 mb-6">
                Our limited edition shoe collection combines Vanguard's iconic design elements with modern footwear, 
                creating wearable pieces of our history. Each of the four styles represents a key aspect of 
                Vanguard's identity and investment philosophy.
              </p>
              <Link to="/shoes" className="inline-block bg-vanguard-red hover:bg-vanguard-darkRed text-white px-6 py-2 rounded-md font-semibold transition-colors">
                Explore Collection
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-vanguard-navy mb-4">Crypto20 ETF Launch</h3>
              <p className="text-gray-700 mb-6">
                Bridging tradition with innovation, our new Crypto20 ETF represents Vanguard's forward-looking 
                approach. This fund provides investors with diversified exposure to the emerging cryptocurrency 
                asset class while maintaining our core principles of simplicity and low costs.
              </p>
              <Link to="/etf" className="inline-block bg-vanguard-red hover:bg-vanguard-darkRed text-white px-6 py-2 rounded-md font-semibold transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-16 bg-vanguard-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg className="w-12 h-12 mx-auto mb-6 text-vanguard-red" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
          <blockquote className="text-2xl font-semibold mb-6">
            The Vanguard idea has always been to give honest-to-God, down-to-earth human beings — people who are investing their own money for their own retirement — a fair shake.
          </blockquote>
          <cite className="text-lg">— John C. Bogle, Founder of Vanguard</cite>
        </div>
      </section>
    </div>
  );
};

export default About; 