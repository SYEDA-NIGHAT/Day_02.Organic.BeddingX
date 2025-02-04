const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Brand Info */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Organic Beddings</h2>
          <p className="text-sm text-gray-300">Eco-friendly and sustainable bedding for your comfort.</p>
        </div>

        {/* Useful Links */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="text-gray-300 space-y-1">
            <li><a href="/" className="hover:text-green-400">Home</a></li>
            <li><a href="/cart" className="hover:text-green-400">Cart</a></li>
            <li><a href="/checkout" className="hover:text-green-400">Checkout</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold">Connect with Us</h3>
          <ul className="text-gray-300 space-y-1">
            <li>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:contact@organicbeddings.com" className="hover:text-green-400">
                Email Us
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center mt-4 border-t border-gray-700 pt-4 text-gray-400 text-sm">
        © 2025 Organic Beddings. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
