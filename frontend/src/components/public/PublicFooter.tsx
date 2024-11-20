import React from 'react';

const PublicFooter: React.FC = () => (
  <footer className="bg-gray-900 text-white mt-8">
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        {/* Footer Left */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>

        {/* Footer Right */}
        <div className="space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Facebook
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default PublicFooter;
