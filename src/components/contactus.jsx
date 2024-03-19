import React from "react";

const CallbackForm = () => {
  return (
    <div
      id="contactus"
      className="flex sm:border-t-[4px] justify-center w-[100vw] h-[100vh] items-center pt-[78rem] md:pt-0  "
    >
      <div className="max-w-4xl w-full flex flex-col md:flex-row bg-gray-900 bg-opacity-90 shadow-lg rounded-lg p-8">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Get in Touch
          </h2>
          <form action="#" method="POST" className="space-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-gray-300 font-semibold mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-200 bg-gray-800 text-white focus:text-gray-900"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-300 font-semibold mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="xyz@abc.com"
                className="border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-200 bg-gray-800 text-white focus:text-gray-900"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-gray-300 font-semibold mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we assist you?"
                rows="4"
                className="border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-200 bg-gray-800 text-white focus:text-gray-900"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Send Message
            </button>
          </form>
          <div className="mt-6 text-gray-300 text-sm text-center">
            <p>
              Or reach us directly at{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-500 hover:underline"
              >
                78897#####
                {/* add phone NUMBER */}{" "}
              </a>
            </p>
          </div>
          <div className="mt-4 flex justify-center space-x-3">
            <a
              href="#"
              className="text-gray-300 hover:text-gray-400 transition duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* insta linkedin or any other social media here */}
              </svg>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <iframe
            className="w-full h-[60vh] rounded-lg"
            src="https://maps.google.com/maps?q=&output=embed"
            title="Google Maps"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CallbackForm;
