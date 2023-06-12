import React from 'react';

const Footer = () => {
    return (
      <div>
        <footer className="bg-secondary py-6 ms-8 me-8 rounded-md">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <div className="text-center md:text-left">
                <p className="text-gray-300 hover:transform hover:scale-110 transition-transform duration-300">
                  © 2023 Hotel Baraite. All rights reserved.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <ul className="flex space-x-4">
                  <li>
                    <p className="text-gray-300 hover:text-white hover:transform hover:scale-110 transition-transform duration-300 ">
                      About Us
                    </p>
                  </li>
                  <li>
                    <p className="text-gray-300 hover:text-white hover:transform hover:scale-110 transition-transform duration-300">
                      Menu
                    </p>
                  </li>
                  <li>
                    <p className="text-gray-300 hover:text-white hover:transform hover:scale-110 transition-transform duration-300">
                      Reservations
                    </p>
                  </li>
                  <li>
                    <p className="text-gray-300 hover:text-white hover:transform hover:scale-110 transition-transform duration-300">
                      Contact
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;