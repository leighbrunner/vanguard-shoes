import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-vanguard-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Celebrating 50 Years of Vanguard
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Commemorating five decades of financial leadership with exclusive anniversary products
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/shoes" className="bg-vanguard-red hover:bg-vanguard-darkRed text-white px-6 py-3 rounded-md font-semibold text-lg transition-colors">
                View Anniversary Shoes
              </Link>
              <Link to="/etf" className="bg-white hover:bg-gray-100 text-vanguard-navy px-6 py-3 rounded-md font-semibold text-lg transition-colors">
                Explore Crypto ETF
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Anniversary Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-vanguard-red rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Limited Edition Shoes</h3>
              <p className="text-gray-600">
                Four exclusive shoe designs celebrating Vanguard's 50th anniversary, combining style with our rich heritage.
              </p>
              <Link to="/shoes" className="inline-block mt-4 text-vanguard-red font-medium">
                Learn more →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-vanguard-red rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovative Crypto ETF</h3>
              <p className="text-gray-600">
                A new ETF tracking the top 20 cryptocurrencies, combining Vanguard's investment expertise with digital asset innovation.
              </p>
              <Link to="/etf" className="inline-block mt-4 text-vanguard-red font-medium">
                Learn more →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-vanguard-red rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">50 Years of Leadership</h3>
              <p className="text-gray-600">
                Explore our journey from 1974 to today, celebrating five decades of helping investors achieve their financial goals.
              </p>
              <Link to="/about" className="inline-block mt-4 text-vanguard-red font-medium">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-vanguard-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our 50th Anniversary Celebration</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Limited edition products available while supplies last. Don't miss this opportunity to be part of Vanguard history.
          </p>
          <Link to="/shoes" className="bg-vanguard-red hover:bg-vanguard-darkRed text-white px-6 py-3 rounded-md font-semibold text-lg inline-block transition-colors">
            Explore Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 