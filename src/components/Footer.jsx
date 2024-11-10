import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        {/* Links Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/announcements" className="hover:underline">
                Announcements
              </Link>
            </li>
            <li>
              <Link to="/media-gallery" className="hover:underline">
                Media Gallery
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Details Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p>Phone: +63 0917... / 0917....</p>
          <p>Email: pangasinanassessorsoffice@gmail.com</p>
          <p>Address: pangasinan assessorrs office</p>
        </div>

        {/* Location Map Section */}
        <div className="w-full md:w-1/3">
          <h3 className="font-semibold text-lg mb-4">Our Location</h3>
          <div className="w-full h-40 bg-gray-400 rounded">
            {/* Placeholder for the map */}
            <p className="text-center py-16">Map placeholder</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
