import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <header className="py-6 px-4">
        <nav className="flex justify-between items-center">
          <div>
            <a href="#" className="text-xl font-bold">Ready-Market</a>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">Company</a></li>
              <li><a href="#" className="hover:text-gray-400">Products</a></li>
              <li><a href="#" className="hover:text-gray-400">News</a></li>
              <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-hero-image bg-cover bg-center py-48 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8">The Leader of Sports & Fitness Gear</h1>
          <p className="text-lg mb-8">Start where you are. Use what you have. Do what you can.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">Recommend Products</h2>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <img src="/product1.jpg" alt="Product 1" className="mb-4" />
            <h3 className="text-xl font-bold">Product Name 001</h3>
            <p>Ready-Market is a team of 15 time Consulting Consultants, Programmers, Web Designers, SEO Analysts and Market Researchers who provide top-of-trend marketing solutions.</p>
          </div>
          {/* Add remaining product cards */}
        </div>
      </section>

      {/* Well-Being Section */}
      <section className="bg-well-being-image bg-cover bg-center py-48 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">The Well-Being Of Health Has No Compromises</h2>
          <p>Please see a slight reference as the formulation of the section. Only a team of average age and be engaged in life-work. Keep the discipline. Those of well-being will be on behalf of the lifestyle of all human beings.</p>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold">Expert Will Help In Your Time-Tested Projects</h3>
            <p>We analyze it straight to the blade to understand the problems, market trend and buyer's behavior. The statistic grows the algorithm, and then we control the algorithm to design and build websites for you.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700">Read More &rarr;</a>
          </div>
          <div>
            <h3 className="text-xl font-bold">A Basic Guide Of Web Design - HTML And CSS</h3>
            <p>Ready-Market is a team of 15 time Consulting Consultants, Programmers, Web Designers, SEO Analysts and Market Researchers who provide top-of-trend marketing solutions.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700">Read More &rarr;</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4">
        <div className="flex justify-between items-center">
          <div>
            <p>Ready-Market is a Search Engine and web provider that has been in companies web 3 lines solutions ranking issues around for 29 years.</p>
            <p>&copy; 2023 Ready-Market Online Consultants All Rights Reserved.</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">Company</a></li>
              <li><a href="#" className="hover:text-gray-400">Products</a></li>
              <li><a href="#" className="hover:text-gray-400">News</a></li>
              <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;