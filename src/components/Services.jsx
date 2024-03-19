import React from "react";

const Services = () => {
  return (
    <section
      id="Services"
      className="h-[100vh] w-[100vw] pt-[28rem]  md:pt-0 flex justify-center items-center "
    >
      <div class="container mx-auto px-12 py-12">
        <h1 className="font-bold text-6xl text-center pb-6 text-white mb-8">
          Welcome to our <span className="text-[#00FFFF]">Services</span>{" "}
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="bg-gray-900 rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 hover:scale-105 transition duration-500">
            <div class="p-8 text-white text-center">
              <h2 class="text-3xl font-semibold mb-6">Private Servers</h2>
              <ul class="text-lg">
                <li class="mb-4">Enhanced Security</li>
                <li class="mb-4">Customization and Control</li>
                <li class="mb-4"> Scalability</li>
              </ul>
              <button class="mt-6 bg-white text-gray-900 hover:bg-gray-800 hover:text-white font-semibold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Learn More
              </button>
            </div>
          </div>
          <div class="bg-gray-900 rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 hover:scale-105 transition duration-500">
            <div class="p-8 text-white text-center">
              <h2 class="text-2xl font-semibold mb-6">
                Self-hosted Applications
              </h2>
              <ul class="text-lg">
                <li class="mb-4">Autonomy and Independence</li>
                <li class="mb-4">Cost-effectiveness</li>
                <li class="mb-4">Flexibility and Customization</li>
              </ul>
              <button class="mt-6 bg-white text-gray-900 hover:bg-gray-800 hover:text-white font-semibold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Learn More
              </button>
            </div>
          </div>
          <div class="bg-gray-900 rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 hover:scale-105 transition duration-500">
            <div class="p-8 text-white text-center">
              <h2 class="text-3xl font-semibold mb-6">
                Federated Applications
              </h2>
              <ul class="text-lg">
                <li class="mb-4">Resilience and Redundancy</li>
                <li class="mb-4">Data Privacy and Ownership</li>
                <li class="mb-4">Community Collaboration</li>
              </ul>
              <button class="mt-6 bg-white text-gray-900 hover:bg-gray-800 hover:text-white font-semibold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
