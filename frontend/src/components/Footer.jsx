import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                <span className="text-white text-xl font-bold">W</span>
              </div>
              <div className="font-black text-2xl tracking-tighter text-white">
                WordWave<span className="text-blue-500">Blog</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Empowering voices and sharing stories that matter. Join our community
              of thinkers, creators, and readers shaping the future of digital narratives.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { icon: FaInstagram, link: "https://www.instagram.com/basavaraj_revani" },
                { icon: FaLinkedin, link: "https://www.linkedin.com/in/basavarajrevani" },
                { icon: FaGithub, link: "https://github.com/basavarajrevani" },
                { icon: FaTwitter, link: "#" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "Blogs", "Creators", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm font-medium hover:text-blue-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-1">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Categories</h4>
            <ul className="space-y-4">
              {["Technology", "Lifestyle", "Business", "Sports", "Entertainment"].map((item) => (
                <li key={item}>
                  <Link to="/blogs" className="text-sm font-medium hover:text-blue-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Let's Connect</h4>
            <div className="space-y-4 font-medium text-sm">
              <p>basavarajrevani@example.com</p>
              <p>Gajendragad, Karnataka, India</p>
              <div className="pt-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
                  Subscribe for Waves
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <p>© 2024 WordWave Blog. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <p className="flex items-center">
              Developed by <span className="text-blue-500 ml-1">Basavaraj Revani</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
