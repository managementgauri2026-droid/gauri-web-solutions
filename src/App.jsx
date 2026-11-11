import React from 'react';
import { Code2, ShoppingCart, Smartphone, Palette, ArrowUpRight, Menu, Globe2, Zap, ShieldCheck } from 'lucide-react';

const services = [
  {icon: <Globe2/>, title: 'Business Websites', desc: 'Professional websites that explain your business and help customers contact you.'},
  {icon: <Code2/>, title: 'React Development', desc: 'Fast, responsive React websites built around your goals.'},
  {icon: <ShoppingCart/>, title: 'E-commerce Websites', desc: 'Online stores with product pages and a clear buying journey.'},
  {icon: <Smartphone/>, title: 'Responsive Design', desc: 'A smooth experience on mobiles, tablets and computers.'},
  {icon: <Palette/>, title: 'Portfolio Websites', desc: 'Showcase your work, skills and services with confidence.'},
  {icon: <ShieldCheck/>, title: 'Website Maintenance', desc: 'Content updates, fixes and ongoing website support.'}
];

function App() {
  const email = 'managementgauri2026@gmail.com';
  const phone = '919602269230';
  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent('Hello Gauri Web Solutions, I need a website.')}`;

  return <div>
    <header className="header">
      <a className="brand" href="#home"><span className="brand-mark">G</span><span>Gauri <b>Web Solutions</b></span></a>
      <nav><a href="#home">Home</a><a href="#services">Services</a><a href="#work">Portfolio</a><a href="#about">About</a><a className="nav-cta" href="#contact">Get a quote <ArrowUpRight size={16}/></a></nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow">WEB DEVELOPMENT & DIGITAL SERVICES</span>
          <h1>Websites that help your <em>business grow.</em></h1>
          <p>We create clean, modern and mobile-friendly websites for businesses, professionals and new ideas.</p>
          <div className="actions"><a className="button primary" href="#contact">Start a project <ArrowUpRight size={17}/></a><a className="button secondary" href="#work">View our work</a></div>
          <div className="trust"><span><Zap size={16}/> Responsive design</span><span><ShieldCheck size={16}/> Clear communication</span></div>
        </div>
        <div className="hero-art"><div className="glow"></div><div className="browser"><div className="browser-top"><i></i><i></i><i></i><span>yourbusiness.com</span></div><div className="browser-body"><div className="mini-logo">G<span>WS</span></div><div className="mock-line wide"></div><div className="mock-line"></div><div className="mock-button"></div><div className="mock-cards"><b></b><b></b><b></b></div></div></div><div className="float-tag">✦ Built for your business</div></div>
      </section>

      <section className="section" id="services"><div className="section-head"><span className="eyebrow">WHAT WE DO</span><h2>Services designed for your next step</h2><p>Practical web solutions, with a focus on usability and a professional first impression.</p></div>
        <div className="service-grid">{services.map((s,i)=><article className="service-card" key={s.title}><div className="service-icon">{s.icon}</div><span className="number">0{i+1}</span><h3>{s.title}</h3><p>{s.desc}</p></article>)}</div>
      </section>

      <section className="about section" id="about"><div><span className="eyebrow">ABOUT GAURI WEB SOLUTIONS</span><h2>Your idea deserves a great website.</h2></div><p>Gauri Web Solutions is an independent web development startup focused on helping small businesses build their online presence. We believe a good website should look professional, work smoothly on mobile and make it easy for customers to take the next step.</p></section>

      <section className="section work" id="work"><div className="section-head"><span className="eyebrow">SELECTED WORK</span><h2>Our portfolio</h2><p>Demo concepts are shown below. Replace these with real projects after you build and receive permission to display them.</p></div>
        <div className="work-grid"><article className="work-card"><div className="work-visual beauty">✿<span>Beauty Studio</span></div><h3>Beauty Parlour Website</h3><p>Demo concept · Services, gallery and appointment enquiry</p></article><article className="work-card"><div className="work-visual cafe">☕<span>Daily Brew</span></div><h3>Restaurant Website</h3><p>Demo concept · Menu, location and table enquiry</p></article><article className="work-card"><div className="work-visual profile">G<span>Portfolio</span></div><h3>Personal Portfolio</h3><p>Demo concept · Skills, projects and contact details</p></article></div>
      </section>

      <section className="section pricing"><div className="section-head"><span className="eyebrow">SIMPLE STARTING PRICES</span><h2>Choose a starting point</h2><p>Final quote depends on pages, features, content and hosting requirements.</p></div><div className="price-grid"><article><h3>Starter</h3><div className="price">₹1,999 <small>starting</small></div><p>One-page portfolio or landing page</p><ul><li>Mobile-friendly layout</li><li>Contact section</li><li>Basic on-page SEO setup</li></ul><a href="#contact">Request a quote →</a></article><article className="featured"><span className="popular">POPULAR</span><h3>Business</h3><div className="price">₹3,999 <small>starting</small></div><p>Small business website</p><ul><li>Up to 5 sections/pages</li><li>WhatsApp enquiry link</li><li>Responsive design</li></ul><a href="#contact">Request a quote →</a></article><article><h3>Custom</h3><div className="price">Let's talk</div><p>Stores and custom functionality</p><ul><li>Custom requirements</li><li>Product or service pages</li><li>Feature-based estimate</li></ul><a href="#contact">Request a quote →</a></article></div><p className="fineprint">Prices are illustrative launch rates, not a binding offer. Domain, hosting, paid assets, taxes and third-party services are quoted separately where applicable.</p></section>

      <section className="contact section" id="contact"><div><span className="eyebrow">LET'S WORK TOGETHER</span><h2>Tell us what you want to build.</h2><p>Share a few details and start a conversation about your website.</p><a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowUpRight size={17}/></a><p className="contact-note">Before publishing, update the WhatsApp number and email in <code>src/App.jsx</code>.</p></div><form action={`mailto:${email}`} method="post" encType="text/plain"><label>Your name<input name="name" placeholder="Enter your name" required/></label><label>Email or phone<input name="contact" placeholder="How can we reach you?" required/></label><label>What website do you need?<select name="project"><option>Business website</option><option>Portfolio website</option><option>E-commerce website</option><option>Other</option></select></label><label>Project details<textarea name="details" rows="4" placeholder="Tell us about your idea..."/></label><button className="button primary" type="submit">Send enquiry <ArrowUpRight size={17}/></button><small>This opens your device's email app. It does not store submissions online.</small></form></section>
    </main>
    <footer><a className="brand footer-brand" href="#home"><span className="brand-mark">G</span><span>Gauri <b>Web Solutions</b></span></a><p>Build · Grow · Succeed</p><small>© {new Date().getFullYear()} Gauri Web Solutions. Demo website — update contact details before publishing.</small></footer>
  </div>;
}
export default App;