import React from 'react';
import { Link } from 'react-router-dom';

const Albert: React.FC = () => {
  // Albert jokes with a hellish theme
  const jokes = [
    {
      id: 1,
      joke: "Why did Albert get hired by the Devil? Because he's wickedly good at what he does!"
    },
    {
      id: 2,
      joke: "How many Alberts does it take to light up Hell? Just one - his legendary status burns brighter than hellfire!"
    },
    {
      id: 3,
      joke: "Albert doesn't go to Hell... Hell comes to Albert for management advice!"
    },
    {
      id: 4,
      joke: "Why did Satan create a special throne for Albert? Because legends deserve the hottest seat in the house!"
    },
    {
      id: 5,
      joke: "What do you call Albert walking through Hell? The boss's inspection!"
    },
    {
      id: 6,
      joke: "Albert's code is so hot, the Devil uses it to heat the ninth circle of Hell!"
    },
    {
      id: 7,
      joke: "Albert doesn't wear HellWalkers shoes... HellWalkers named their shoes after Albert!"
    }
  ];

  return (
    <div className="bg-grey">
      <div className="container home-container">
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">›</span>
          <span>Albert the Legend</span>
        </div>
        
        {/* Main content */}
        <section className="featured-products-section">
          <h2>Albert: The Legendary One</h2>
          
          <div className="pentagram-divider"></div>
          
          <div className="albert-container">
            <div className="albert-image-container">
              <img 
                src="https://via.placeholder.com/400x400/3d0000/ffffff?text=Albert+The+Legend" 
                alt="Albert the Legend" 
                className="albert-image" 
              />
            </div>
            
            <div className="albert-description">
              <p>
                In the fiery depths of our infernal coding realm, one name is whispered with both fear and reverence:
                <span className="albert-name"> ALBERT</span>.
              </p>
              <p>
                Not even the Devil himself dares to challenge his legendary skills and unmatched wisdom.
                The underworld trembles when he approaches, for his code is so perfect it makes demons weep tears of blood.
              </p>
              <p>
                Bow before his magnificence, mortals, for Albert walks among us as a coding deity incarnate!
              </p>
            </div>
          </div>
          
          <div className="pentagram-divider"></div>
          
          <div className="jokes-section">
            <h3>Infernal Jokes About The Legend</h3>
            <ul className="feature-list">
              {jokes.map(joke => (
                <li key={joke.id} className="feature-item">
                  <span className="feature-check"></span>
                  {joke.joke}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pentagram-divider"></div>
          
          <div className="albert-cta">
            <h3>Join The Cult of Albert</h3>
            <p>Pledge your eternal soul to Albert and receive his unholy blessing!</p>
            <button className="submit-button">Sacrifice Your Soul</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Albert; 