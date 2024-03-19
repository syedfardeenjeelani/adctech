import React from "react";

const Footer = () => {
  return (
    <footer className="  pt-[48rem] md:pt-[20px] sm:border-t-[4px] bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-8">
        <div className="w-full md:w-1/4">
          <h2 className="text-lg font-semibold mb-4 text-center">Contact Us</h2>
          <p className="mb-2 text-center">Have questions? Call us:</p>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition duration-300 block mb-4 text-center"
          >
            ###-###-###-####
          </a>
          <p className="text-center">ADtech Inc</p>
        </div>
        <div className="w-full md:w-1/4">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Useful Links
          </h2>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition duration-300 block mb-2 text-center"
          >
            FAQ
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition duration-300 block mb-2 text-center"
          >
            Investor Relations
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition duration-300 block mb-2 text-center"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition duration-300 block mb-2 text-center"
          >
            Speed Test
          </a>
        </div>
        <div className="w-full md:w-1/4">
          <h2 className="text-lg font-semibold mb-4 text-center">Company</h2>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition duration-300 block mb-2 text-center"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition duration-300 block mb-2 text-center"
          >
            Jobs
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition duration-300 block mb-2 text-center"
          >
            Press
          </a>
        </div>
        <div className="w-full md:w-1/4">
          <h2 className="text-lg font-semibold mb-4 text-center">Follow Us</h2>
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="text-center">
            &copy; {new Date().getFullYear()} ADtech Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
