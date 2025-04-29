import React, { useState } from 'react';

interface Shoe {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  features: string[];
}

const Shoes: React.FC = () => {
  const [activeShoe, setActiveShoe] = useState<number | null>(null);

  const shoes: Shoe[] = [
    {
      id: 1,
      name: "The Vanguard Classic",
      description: "Our flagship anniversary shoe featuring Vanguard's signature red and navy color scheme. Built for comfort and style, each pair commemorates 50 years of pioneering financial leadership.",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      features: [
        "Premium leather and mesh construction",
        "Vanguard 50th anniversary embossed logo",
        "Memory foam insole for all-day comfort",
        "Signature red and navy colorway",
        "Limited edition collector's box"
      ]
    },
    {
      id: 2,
      name: "The Index Tracker",
      description: "Inspired by Vanguard's revolutionary index funds, these performance running shoes combine stability and efficiency - just like a well-balanced portfolio.",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      features: [
        "Responsive cushioning technology",
        "Breathable knit upper with Vanguard pattern",
        "Reflective 'Index' detailing",
        "Performance outsole for maximum traction",
        "Includes commemorative Vanguard pin"
      ]
    },
    {
      id: 3,
      name: "The Bogle Originals",
      description: "Named after Vanguard's legendary founder, these vintage-inspired casual shoes embody the timeless principles of simplicity, integrity, and fair value.",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      features: [
        "Classic silhouette with modern upgrades",
        "Sustainable materials honoring responsible investing",
        "Embroidered quote from Jack Bogle",
        "Extra-durable construction for long-term value",
        "Conservative yet stylish design"
      ]
    },
    {
      id: 4,
      name: "The ETF Innovator",
      description: "Celebrating Vanguard's innovation in exchange-traded funds, these contemporary sneakers feature cutting-edge design elements and lightweight technology.",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
      features: [
        "Ultra-lightweight construction",
        "Adaptive fit technology",
        "Digital asset-inspired design elements",
        "QR code linking to Vanguard's history timeline",
        "Numbered limited edition (only 1,974 pairs made)"
      ]
    }
  ];

  const toggleDetails = (id: number) => {
    setActiveShoe(activeShoe === id ? null : id);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-vanguard-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              50th Anniversary Collection
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Four exclusive shoe designs celebrating Vanguard's legacy of innovation and leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Shoes Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {shoes.map((shoe) => (
              <div key={shoe.id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <img 
                    src={`${shoe.image}?auto=format&fit=crop&w=800&q=80`} 
                    alt={shoe.name} 
                    className="object-cover w-full h-64"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-vanguard-navy">{shoe.name}</h3>
                    <span className="bg-vanguard-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ${shoe.price}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-600">{shoe.description}</p>
                  
                  <button
                    onClick={() => toggleDetails(shoe.id)}
                    className="mt-4 flex items-center text-vanguard-red font-semibold"
                  >
                    {activeShoe === shoe.id ? 'Hide Details' : 'View Details'}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`ml-1 h-5 w-5 transform transition-transform ${activeShoe === shoe.id ? 'rotate-180' : ''}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {activeShoe === shoe.id && (
                    <div className="mt-4 border-t pt-4">
                      <h4 className="font-semibold text-vanguard-navy">Key Features:</h4>
                      <ul className="mt-2 space-y-1">
                        {shoe.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-vanguard-red mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <button className="w-full bg-vanguard-red hover:bg-vanguard-darkRed text-white py-2 rounded-md font-semibold transition-colors">
                          Pre-order Now
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Collection Note */}
      <section className="bg-vanguard-gray py-12 mb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Limited Edition Release</h2>
          <p className="text-lg text-gray-700">
            The Vanguard 50th Anniversary Shoe Collection is a commemorative release celebrating 
            five decades of investment innovation. Each design represents a key aspect of Vanguard's 
            legacy and commitment to investor success.
          </p>
          <p className="mt-4 text-vanguard-navy font-semibold">
            Available for pre-order starting June 1, 2024
          </p>
        </div>
      </section>
    </div>
  );
};

export default Shoes; 