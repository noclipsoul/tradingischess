import React from 'react';

const About: React.FC = () => (
  <div className="bg-gray-50 py-12">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      <p className="text-lg text-gray-600 mb-8">
        We are a passionate team committed to providing the best services in the industry. With years of experience, we strive to meet your needs and exceed your expectations.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
      <p className="text-lg text-gray-600 mb-6">
        Our mission is to offer high-quality solutions that make a real difference. We prioritize customer satisfaction and innovation.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
      <p className="text-lg text-gray-600 mb-6">
        We aim to be the leading provider of digital services, helping businesses grow with innovative tools and a customer-first approach.
      </p>
    </div>
  </div>
);

export default About;
