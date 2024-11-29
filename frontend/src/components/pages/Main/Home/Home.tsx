import React from 'react';

const Home: React.FC = () => (
  <div className="bg-gray-50 py-12">
    <div className="container mx-auto text-center">
      <h1 className="text-5xl  font-semibold text-black mb-3">
        Master the Game of Trading with Precision Tools
      </h1>
      <p className="text-lg text-gray-600 mb-8">
      Custom indicators and services tailored to your MQL4/5 trading needs
      </p>
      <a
        href="/about"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
      >
        Learn More About Us
      </a>
    </div>
  </div>
);

export default Home;
