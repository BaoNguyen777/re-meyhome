"use client";

import { ArrowDown, ArrowUpRight, Instagram, Menu, MoveRight, Play, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const images = {
  hero: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2200&q=90",
  coast: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
  resort: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1800&q=85",
  architecture: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
  pool: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1800&q=85",
  sunset: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=85",
};

function Nav() {
  const [open, setOpen] = useState(false);
  const items = [["Story", "#story"], ["Collection", "#collection"], ["Lifestyle", "#lifestyle"], ["Contact", "#contact"]];
  return <>
    <header className="nav">
      <a href="#top" className="brand"><span>MEY</span><small>HOMES</small></a>
      <nav className="desktop-nav">{items.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={20}/></button>
    </header>
    {open && <motion.div initial={{opacity:0}} animate={{opacity:1}} className="mobile-menu"><button onClick={()=>setOpen(false)} aria-label="Close menu"><X/></button><div>{items.map(([label, href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}<ArrowUpRight size={20}/></a>)}</div></motion.div>}
  </>;
}

function Reveal({ children, delay=0 }: {children: React.ReactNode; delay?: number}) {
  return <motion.div initial={{opacity:0,y:45}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.9,delay,ease:[.16,1,.3,1]}}>{children}</motion.div>;
}

export default function Home() {
  return <main id="top">
    <Nav />
    <section className="hero">
      <div className="hero-image" style={{backgroundImage:`url(${images.hero})`}} />
      <div className="hero-shade" />
      <div className="hero-meta"><span>PHÚ QUỐC</span><span>10° 17' N / 103° 59' E</span></div>
      <div className="hero-content"><p className="eyebrow">MEYHOMES CAPITAL PHÚ QUỐC</p><h1>A new<br/><em>perspective.</em></h1><p className="hero-copy">A destination imagined around the way you want to live.</p></div>
      <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={17}/></div>
      <div className="hero-index">01 <span>/</span> 07</div>
    </section>

    <section id="story" className="statement section-dark">
      <div className="section-kicker">01 / THE STORY</div>
      <Reveal><h2>More than a destination.<br/><em>A way of living.</em></h2></Reveal>
      <Reveal delay={.1}><p>There are places you visit. And there are places that quietly change your sense of time. This is an invitation to experience Phú Quốc through architecture, nature and everyday rituals.</p></Reveal>
      <div className="statement-line" />
      <div className="stat-grid"><div><strong>01</strong><span>Island<br/>living</span></div><div><strong>02</strong><span>Designed<br/>moments</span></div><div><strong>03</strong><span>A slower<br/>rhythm</span></div></div>
    </section>

    <section className="image-story"><div className="story-photo" style={{backgroundImage:`url(${images.coast})`}}/><div className="image-story-copy"><span>THE ISLAND</span><h2>Where the<br/><em>horizon opens.</em></h2><p>Let the landscape become part of the architecture. Let the sea set the pace.</p><a href="#collection">Discover the experience <MoveRight size={18}/></a></div></section>

    <section className="explore section-cream"><div className="section-kicker dark">02 / EXPLORE</div><div className="explore-head"><Reveal><h2>Phú Quốc,<br/><em>recomposed.</em></h2></Reveal><p>A visual journey through the moods, textures and spaces that define a modern island lifestyle.</p></div><div className="explore-grid"><div className="explore-card tall" style={{backgroundImage:`url(${images.architecture})`}}><span>01 — ARCHITECTURE</span><b>Form follows feeling.</b></div><div className="explore-card" style={{backgroundImage:`url(${images.pool})`}}><span>02 — LEISURE</span><b>Time, beautifully spent.</b></div><div className="explore-card" style={{backgroundImage:`url(${images.resort})`}}><span>03 — RETREAT</span><b>Come back to yourself.</b></div></div></section>

    <section id="collection" className="collection section-dark"><div className="section-kicker">03 / THE COLLECTION</div><div className="collection-title"><h2>Spaces with<br/><em>a point of view.</em></h2><p>Every detail is an opportunity to create a feeling. Explore a collection shaped by light, proportion and the island.</p></div><div className="horizontal"><article><div className="collection-img" style={{backgroundImage:`url(${images.architecture})`}}/><div><small>01 / THE RESIDENCE</small><h3>Quiet luxury,<br/>naturally.</h3></div></article><article><div className="collection-img" style={{backgroundImage:`url(${images.pool})`}}/><div><small>02 / THE RETREAT</small><h3>Private moments,<br/>open skies.</h3></div></article><article><div className="collection-img" style={{backgroundImage:`url(${images.coast})`}}/><div><small>03 / THE HORIZON</small><h3>Wake up<br/>to possibility.</h3></div></article></div></section>

    <section id="lifestyle" className="lifestyle"><div className="lifestyle-bg" style={{backgroundImage:`url(${images.sunset})`}}/><div className="lifestyle-overlay"/><div className="lifestyle-content"><div className="section-kicker">04 / THE LIFESTYLE</div><h2>Life,<br/><em>composed differently.</em></h2><p>Morning light. Barefoot afternoons. Dinners that last longer than expected. The luxury is in having nowhere else to be.</p><button><Play size={14} fill="currentColor"/> PLAY THE STORY</button></div></section>

    <section className="social section-cream"><div className="section-kicker dark">05 / FROM THE COMMUNITY</div><div className="social-head"><h2>See it through<br/><em>their eyes.</em></h2><p>Follow the conversation around the destination.</p></div><div className="facebook-card"><div className="fb-top"><span>MEYHOMES</span><span>FACEBOOK</span></div><a className="facebook-photo-link" href="https://www.facebook.com/MeyhomesCapitalPQ/" target="_blank" rel="noopener noreferrer" aria-label="Open Meyhomes Facebook page"><img src="/postfb.jpg" alt="Meyhomes Facebook post" /></a><a className="facebook-open" href="https://www.facebook.com/MeyhomesCapitalPQ/" target="_blank" rel="noopener noreferrer">OPEN ON FACEBOOK <ArrowUpRight size={16}/></a></div></section>

    <section id="contact" className="contact section-dark"><div className="section-kicker">06 / BEGIN A CONVERSATION</div><div className="contact-wrap"><h2>Ready to see<br/><em>what's next?</em></h2><p>Speak with our team and discover the experience that fits your perspective.</p><a href="mailto:hello@meyhomes.example">Start a conversation <ArrowUpRight size={18}/></a></div><footer><div className="brand"><span>MEY</span><small>HOMES</small></div><div><a href="#top">Instagram <Instagram size={14}/></a><a href="https://www.facebook.com/MeyhomesCapitalPQ/" target="_blank" rel="noopener noreferrer">Facebook <ArrowUpRight size={14}/></a></div><span>© 2026 MEYHOMES / DIGITAL EXPERIENCE CONCEPT</span></footer></section>
  </main>;
}
