import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaBalanceScale, FaUserSecret, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Footer = () => {
  const [showPolicies, setShowPolicies] = useState({ terms: false, privacy: false });

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        {/* Policy Interactive Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Terms of Service Card */}
          <div className={`p-8 rounded-[2rem] border transition-all duration-500 ${showPolicies.terms ? 'bg-white/[0.04] border-blue-500/30' : 'bg-white/[0.02] border-white/5'}`}>
            <button
              onClick={() => setShowPolicies(prev => ({ ...prev, terms: !prev.terms }))}
              className="w-full flex items-center justify-between text-left group"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${showPolicies.terms ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'}`}>
                  <FaBalanceScale size={20} />
                </div>
                <div>
                  <h3 className="text-white font-black uppercase tracking-tighter text-lg">Terms of Service</h3>
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Click to {showPolicies.terms ? 'close' : 'view'} details</p>
                </div>
              </div>
              {showPolicies.terms ? <FaChevronUp className="text-blue-400" /> : <FaChevronDown className="text-slate-500" />}
            </button>

            {showPolicies.terms && (
              <div className="mt-8 space-y-4 text-slate-400 text-sm leading-relaxed animate-fade-down">
                <p><strong className="text-white">Account Responsibility:</strong> You are responsible for all activity on your account. Maintain secrecy of your credentials to protect your digital identity.</p>
                <p><strong className="text-white">Content Rights:</strong> Creators retain full ownership of their original blogs. By publishing, you grant WordWave a non-exclusive license to host your work.</p>
                <p><strong className="text-white">Professional Conduct:</strong> Zero-tolerance for harmful content. Your voice must respect the integrity of our creative community.</p>
              </div>
            )}
          </div>

          {/* Privacy Framework Card */}
          <div className={`p-8 rounded-[2rem] border transition-all duration-500 ${showPolicies.privacy ? 'bg-white/[0.04] border-purple-500/30' : 'bg-white/[0.02] border-white/5'}`}>
            <button
              onClick={() => setShowPolicies(prev => ({ ...prev, privacy: !prev.privacy }))}
              className="w-full flex items-center justify-between text-left group"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${showPolicies.privacy ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20' : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'}`}>
                  <FaUserSecret size={20} />
                </div>
                <div>
                  <h3 className="text-white font-black uppercase tracking-tighter text-lg">Privacy Framework</h3>
                  <p className="text-[10px] font-bold text-purple-500 uppercase tracking-widest">Click to {showPolicies.privacy ? 'close' : 'view'} details</p>
                </div>
              </div>
              {showPolicies.privacy ? <FaChevronUp className="text-purple-400" /> : <FaChevronDown className="text-slate-500" />}
            </button>

            {showPolicies.privacy && (
              <div className="mt-8 space-y-4 text-slate-400 text-sm leading-relaxed animate-fade-down">
                <p><strong className="text-white">Data Integrity:</strong> We collect only essential data (name, email) required for authentication and personalized experience.</p>
                <p><strong className="text-white">Secure Hosting:</strong> Your media content is securely processed and hosted by Cloudinary with premium protection.</p>
                <p><strong className="text-white">No Data Sales:</strong> Your personal data is never sold. We use industry-standard JWT encryption for all digital footprints.</p>
              </div>
            )}
          </div>
        </div>

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
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 text-blue-500">Navigation</h4>
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
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 text-blue-500">Categories</h4>
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
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6 text-blue-500">Let's Connect</h4>
            <div className="space-y-4 font-medium text-sm">
              <p>basavarajrevani15@gmail.com</p>
              <p>Tumkur, Karnataka, India</p>
              <div className="pt-4">
                {/* <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                  Subscribe for Waves
                </button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <p>© {new Date().getFullYear()} WordWave Blog. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => setShowPolicies(p => ({ ...p, privacy: true }))} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => setShowPolicies(p => ({ ...p, terms: true }))} className="hover:text-white transition-colors">Terms of Service</button>
            <p className="flex items-center">
              Built with ❤️ by <span className="text-blue-500 ml-1">Basavaraj Revani</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
