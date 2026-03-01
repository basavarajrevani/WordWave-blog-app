import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaUser, FaUserShield, FaFeatherAlt, FaGlobeAmericas, FaShieldAlt,
    FaRocket, FaChartLine, FaUsers, FaLock, FaSearch, FaQuoteLeft,
    FaChevronDown, FaChevronUp, FaPaperPlane, FaCode,
    FaLinkedin, FaGithub, FaBalanceScale, FaUserSecret
} from 'react-icons/fa';

function LandingPage() {
    const currentYear = new Date().getFullYear();
    const [activeFaq, setActiveFaq] = useState(null);

    const faqs = [
        { q: "Is WordWave free to use?", a: "Yes! WordWave is a community-driven platform where you can read and discover content for free. Creators can also sign up and start publishing without any upfront costs." },
        { q: "How do I become an Admin/Creator?", a: "When you register, simply select the 'Admin' role. This will unlock the Creator Dashboard where you can write, edit, and publish your blogs." },
        { q: "Can I switch roles later?", a: "Currently, roles are assigned at registration to ensure account security. If you need a different role, we recommend creating a new account with that specific role." },
        { q: "Is my data secure?", a: "Absolutely. We use enterprise-grade encryption and secure authentication via JWT and Cloudinary for media storage." }
    ];

    return (
        <div className="min-h-screen bg-[#0f172a] flex flex-col items-center relative overflow-x-hidden px-4">
            {/* Background Ambience */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[url('https://parallel.report/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>

            {/* 1. Hero Section */}
            <div className="max-w-6xl w-full relative z-10 text-center space-y-20 pt-32 pb-20 animate-fade-up">
                <div className="space-y-6">
                    <div className="inline-flex items-center space-x-3 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-black tracking-widest uppercase mb-4 animate-fade-in shadow-[0_0_20px_rgba(59,130,246,0.1)] mx-auto">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span>Unleashing Creative Potential</span>
                    </div>

                    <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none drop-shadow-2xl">
                        WordWave<span className="text-blue-500">.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed opacity-90">
                        A premium digital ecosystem for modern storytellers.
                        Join 100+ visionaries sharing their voice with the world.
                    </p>
                </div>

                {/* Primary Auth CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        to="/login"
                        className="w-full sm:w-auto px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all duration-300 shadow-[0_10px_40px_rgba(37,99,235,0.3)] transform hover:-translate-y-1 active:scale-95 text-center"
                    >
                        SIGN IN TO WAVE
                    </Link>
                    <Link
                        to="/register"
                        className="w-full sm:w-auto px-12 py-5 bg-white text-[#0f172a] font-black rounded-2xl hover:bg-slate-100 transition-all shadow-xl active:scale-95 text-center border-2 border-transparent hover:border-slate-200"
                    >
                        CREATE ACCOUNT
                    </Link>
                </div>

                {/* 2. Global Statistics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto py-12 px-6 bg-white/[0.02] border border-white/5 rounded-[3rem] backdrop-blur-sm shadow-2xl">
                    <div className="space-y-2">
                        <div className="text-4xl font-black text-blue-500">15+</div>
                        <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Active Users</div>
                    </div>
                    <div className="space-y-2 border-y sm:border-y-0 sm:border-x border-white/10 py-6 sm:py-0">
                        <div className="text-4xl font-black text-purple-500">12+</div>
                        <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Blogs Published</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl font-black text-emerald-500">10+</div>
                        <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Global Creators</div>
                    </div>
                </div>

                {/* 3. How It Works (3-Step Guide) */}
                <div className="space-y-16 py-10">
                    <div className="text-center space-y-2">
                        <h2 className="text-white text-4xl font-black">How It Works</h2>
                        <p className="text-slate-400 text-sm font-medium">Your journey to digital excellence starts here.</p>
                        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
                        <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                        {[
                            { step: "01", title: "Join WordWave", desc: "Create your professional profile in seconds and choose your unique path.", icon: <FaUsers /> },
                            { step: "02", title: "Share or Read", desc: "Publish deep insights or discover curated stories tailored for you.", icon: <FaFeatherAlt /> },
                            { step: "03", title: "Grow Global", desc: "Build your audience and connect with visionaries across the globe.", icon: <FaGlobeAmericas /> }
                        ].map((item, index) => (
                            <div key={index} className="relative p-10 bg-white/[0.03] border border-white/10 rounded-[2.5rem] space-y-4 hover:bg-white/[0.06] transition-all group">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0f172a] border border-blue-500/50 rounded-full flex items-center justify-center text-blue-400 font-black text-sm group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                                    {item.step}
                                </div>
                                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto text-blue-400 text-2xl group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h4 className="text-white font-black text-xl">{item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Role Selection (Enhanced Visibility) */}
                <div className="max-w-5xl mx-auto bg-white/[0.03] backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 space-y-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-3xl"></div>
                    <div className="space-y-2 relative z-10">
                        <h3 className="text-white text-4xl font-black tracking-tight">
                            Role-Based Strategy
                        </h3>
                        <p className="text-blue-500 text-sm font-black uppercase tracking-[0.5em]">Choose Your Influence</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                        <div className="p-10 bg-blue-600/10 rounded-[3rem] border-2 border-blue-500/20 space-y-6 text-left group hover:bg-blue-600/20 transition-all duration-500 shadow-xl">
                            <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-blue-600/40">
                                <FaUser size={36} />
                            </div>
                            <div>
                                <h4 className="text-white text-3xl font-black italic mb-3 tracking-tighter text-blue-100">The Reader</h4>
                                <p className="text-white font-bold text-lg leading-relaxed opacity-100">
                                    Dive into a sea of knowledge. As a User, you have full access to explore, search, and read every professional blog.
                                </p>
                            </div>
                        </div>

                        <div className="p-10 bg-purple-600/10 rounded-[3rem] border-2 border-purple-500/20 space-y-6 text-left group hover:bg-purple-600/20 transition-all duration-500 shadow-xl">
                            <div className="w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-purple-600/40">
                                <FaUserShield size={36} />
                            </div>
                            <div>
                                <h4 className="text-white text-3xl font-black italic mb-3 tracking-tighter text-purple-100">The Creator</h4>
                                <p className="text-white font-bold text-lg leading-relaxed opacity-100">
                                    Architect the wave. As an Admin, you wield the power to write, draft, and publish your own professional blogs globally.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Testimonials Section */}
                <div className="space-y-16">
                    <div className="text-center space-y-2">
                        <h2 className="text-white text-4xl font-black text-center">Community Voices</h2>
                        <p className="text-slate-400 text-sm">Trusted by thinkers and creators alike.</p>
                        <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Darshan", role: "Engineer", text: "WordWave has completely changed how I publish. The clean UI and powerful reach are unmatched." },
                            { name: "Ayush", role: "Developer", text: "Finally a platform that treats readability as a first-class citizen. A joy for both writing and reading." },
                            { name: "Pradhyumna", role: "Web Developer", text: "The tech stack is rock solid. Fast, secure, and intuitive. My go-to platform for development insights." }
                        ].map((item, index) => (
                            <div key={index} className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-6 text-left hover:border-white/20 transition-all">
                                <FaQuoteLeft className="text-blue-500 text-3xl opacity-50" />
                                <p className="text-slate-300 text-lg italic leading-relaxed font-medium">"{item.text}"</p>
                                <div className="pt-4 border-t border-white/5">
                                    <h5 className="text-white font-black">{item.name}</h5>
                                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">{item.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 6. FAQ Section */}
                <div className="max-w-3xl mx-auto space-y-10">
                    <h2 className="text-white text-3xl font-black text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden text-left">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-white font-bold">{faq.q}</span>
                                    {activeFaq === index ? <FaChevronUp className="text-blue-400" /> : <FaChevronDown className="text-slate-500" />}
                                </button>
                                {activeFaq === index && (
                                    <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed animate-fade-down">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 7. Terms & Privacy Summary Section (NEW) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 border-t border-white/5">
                    <div className="p-10 bg-white/[0.02] border border-white/10 rounded-[3rem] text-left space-y-6 group hover:bg-white/[0.04] transition-all">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                <FaBalanceScale size={20} />
                            </div>
                            <h3 className="text-white text-2xl font-black uppercase tracking-tighter">Terms of Service</h3>
                        </div>
                        <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                            <p><strong className="text-white">Account Responsibility:</strong> You are responsible for all activity on your account. Maintain secrecy of your credentials to protect your digital identity.</p>
                            <p><strong className="text-white">Content Rights:</strong> Creators retain full ownership of their original blogs. By publishing elsewhere, you grant WordWave a non-exclusive license to host and amplify your work globally.</p>
                            <p><strong className="text-white">Professional Conduct:</strong> We maintain a zero-tolerance policy for harmful, illegal, or offensive content. Your voice must respect the integrity of our creative community.</p>
                        </div>
                    </div>

                    <div className="p-10 bg-white/[0.02] border border-white/10 rounded-[3rem] text-left space-y-6 group hover:bg-white/[0.04] transition-all">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 border border-purple-500/20 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                                <FaUserSecret size={20} />
                            </div>
                            <h3 className="text-white text-2xl font-black uppercase tracking-tighter">Privacy Framework</h3>
                        </div>
                        <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                            <p><strong className="text-white">Data Integrity:</strong> We collect only essential data (name, email, profile image) required for account authentication and a personalized user experience.</p>
                            <p><strong className="text-white">Image Hosting:</strong> Your media content is securely processed and hosted by Cloudinary, ensuring high-speed delivery and premium protection.</p>
                            <p><strong className="text-white">Zero Third-Party Sales:</strong> Your personal data is never sold to third parties. We use industry-standard JWT encryption to keep your digital footprint secure and private.</p>
                        </div>
                    </div>
                </div>

                {/* 7.5 About Section (Philosophy) (NEW) */}
                <div className="py-20 space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-white text-5xl font-black italic tracking-tighter">The WordWave Philosophy</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left space-y-8 p-10 bg-white/[0.02] border border-white/10 rounded-[4rem] backdrop-blur-md">
                            <p className="text-2xl text-slate-200 font-bold leading-relaxed italic">
                                "We believe that every word has the power to create a ripple effect. WordWave is more than a blog—it's a digital compass for the modern visionary."
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-6 group">
                                    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                                        <FaFeatherAlt size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black text-xl uppercase tracking-tighter">Artistic Integrity</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">Providing a premium space where quality storytelling is valued over clickbait. We prioritize the craft of writing.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6 group">
                                    <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 border border-purple-500/20 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-xl">
                                        <FaGlobeAmericas size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black text-xl uppercase tracking-tighter">Digital Connection</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">Fostering a global community where ideas transcend borders. Every blog is a bridge to a new perspective.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-8 bg-blue-600/10 border border-blue-500/20 rounded-[3rem] text-center space-y-4 transform hover:scale-105 transition-all">
                                <div className="text-4xl">🚀</div>
                                <h5 className="text-white font-black uppercase text-sm tracking-widest">Innovation</h5>
                            </div>
                            <div className="p-8 bg-purple-600/10 border border-purple-500/20 rounded-[3rem] text-center space-y-4 mt-12 transform hover:scale-105 transition-all">
                                <div className="text-4xl">🎨</div>
                                <h5 className="text-white font-black uppercase text-sm tracking-widest">Creativity</h5>
                            </div>
                            <div className="p-8 bg-emerald-600/10 border border-emerald-500/20 rounded-[3rem] text-center space-y-4 transform hover:scale-105 transition-all">
                                <div className="text-4xl">🤝</div>
                                <h5 className="text-white font-black uppercase text-sm tracking-widest">Community</h5>
                            </div>
                            <div className="p-8 bg-orange-600/10 border border-orange-500/20 rounded-[3rem] text-center space-y-4 mt-12 transform hover:scale-105 transition-all">
                                <div className="text-4xl">💎</div>
                                <h5 className="text-white font-black uppercase text-sm tracking-widest">Quality</h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 8. Tech Stack Showcase */}
                <div className="pt-10 space-y-4 border-t border-white/5 w-full">
                    <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">Built with Decentralized Excellence</p>
                    <div className="flex flex-wrap items-center justify-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all">
                        <div className="flex items-center space-x-2 text-white font-bold"><FaCode size={18} /> <span>React 18</span></div>
                        <div className="flex items-center space-x-2 text-white font-bold"><FaLock size={18} /> <span>JWT Auth</span></div>
                        <div className="flex items-center space-x-2 text-white font-bold"><FaRocket size={18} /> <span>Node.js</span></div>
                        <div className="flex items-center space-x-2 text-white font-bold"><FaChartLine size={18} /> <span>Vite Engine</span></div>
                    </div>
                </div>

                {/* 9. Footer */}
                <footer className="pt-10 space-y-12 w-full pb-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-t border-white/5 pt-12">
                        <div className="text-white font-black text-3xl tracking-tighter">
                            WordWave<span className="text-blue-500">.</span>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-12">
                            <a href="https://github.com/basavarajrevani" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em]">
                                <FaGithub size={20} /> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/basavarajrevani/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em]">
                                <FaLinkedin size={20} /> LinkedIn
                            </a>
                            <Link to="/contact" className="text-slate-500 hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-colors">Support</Link>
                        </div>

                        <div className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] flex flex-col items-center md:items-end gap-1">
                            <span>&copy; {currentYear} WordWave Inc. All Rights Reserved.</span>
                            <span className="text-blue-500 font-black">Built with ❤️ by Basavaraj Revani</span>
                        </div>
                    </div>

                    <p className="text-slate-700 text-[9px] font-black uppercase tracking-[1.5em] opacity-30 text-center">
                        Performance Optimized // Global Ready // WordWave Ecosystem v4.0
                    </p>
                </footer>
            </div>
        </div>
    );
}

export default LandingPage;
