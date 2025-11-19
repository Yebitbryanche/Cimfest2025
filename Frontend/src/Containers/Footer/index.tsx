import { Link } from "react-router-dom";
import images from "../../types/images";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

function Footer() {
  return (
    <footer className="bg-black/80 text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & tagline */}
        <div className="flex flex-col gap-2">
          <img src={images.logo} alt="BeatFlow Logo" className="w-32" />
          <p className="text-gray-400 text-sm">
            The future of music collaboration and distribution.
          </p>
        </div>

        {/* Platform links */}
        <div>
          <h2 className="font-semibold mb-3">Platform</h2>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>
              <Link to="/">Browse Beats</Link>
            </li>
            <li>
              <Link to="/">Upload Music</Link>
            </li>
            <li>
              <Link to="/">AI Tools</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
          </ul>
        </div>

        {/* Resources links */}
        <div>
          <h2 className="font-semibold mb-3">Resources</h2>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>
              <Link to="/">Documentation</Link>
            </li>
            <li>
              <Link to="/">API</Link>
            </li>
            <li>
              <Link to="/">Support</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="font-semibold mb-3">Connect</h2>
          <div className="flex gap-4 text-gray-400">
            <LuInstagram className="cursor-pointer hover:text-pink-500 transition-colors duration-200" />
            <FaFacebookF className="cursor-pointer hover:text-blue-600 transition-colors duration-200" />
            <FaTiktok className="cursor-pointer hover:text-black transition-colors duration-200" />
          </div>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>©2025 Mutumbu. All rights reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <Link to="/">Privacy</Link>
          <Link to="/">Terms</Link>
          <Link to="/">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
