import React from 'react';

const Home: React.FC = () => (
  <div className="bg-gray-50 py-12">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to MyWebsite
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        We offer the best services to help you achieve your goals. Explore our features and get started today!
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
