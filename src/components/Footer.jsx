const Footer = () => {
  return (
    <footer className="bg-[#14001B] text-white py-6 px-4 border-t border-white/10 shadow-[0_-4px_10px_rgba(255,255,255,0.05)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left - Logo + Text */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <a href="/">
            <span className="font-semibold text-white">Siddhi.</span>
          </a>
        </div>

        {/* Right - Text aligned to top-left */}
        <div className="text-right md:text-left text-sm leading-tight text-white">
          <p className="mb-1">
            Copyright © 2025. <span>All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
