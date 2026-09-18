import { ArrowUpRight, Building2, HeartHandshake, Mail, MapPin, Phone, School, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { PublicFooter, PublicHeader } from "@/components/PublicSiteChrome";

/** Contact hub: public details are drawn from the existing AetherMind website. */
export default function Contact() {
  return <div className="contact-shell">
    <PublicHeader />
    <main id="main-content">
      <section className="contact-hero"><div className="page-wrap"><p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />Contact AetherMind</p><h1>Start with<br /><span>your context.</span></h1><p>Whether you are a learner, parent, school, education organisation or mission-led partner, a useful conversation begins with what you are trying to make possible.</p></div></section>
      <section className="contact-main"><div className="page-wrap contact-main__grid"><div className="contact-points"><a href="mailto:info@theaethermind.com"><Mail size={19} /><span>Email</span><strong>info@theaethermind.com</strong></a><a href="tel:+919899193417"><Phone size={19} /><span>Phone</span><strong>+91 98991 93417</strong></a><a href="https://maps.app.goo.gl/YsBpHTPV4o25LWqr6" target="_blank" rel="noreferrer"><MapPin size={19} /><span>Office</span><strong>Gurgaon, Haryana, India</strong></a></div><div className="contact-route"><p className="eyebrow"><span className="eyebrow-dot" />Choose a route</p><h2>Tell us what<br /><i>moves you.</i></h2><p>Begin with the route that best reflects your context. Your enquiry will be recorded only after you explicitly consent to contact.</p><div className="contact-route-grid"><Link href="/find-your-path?persona=learner"><School size={18}/><span>Learning route</span><strong>Learner or parent</strong><ArrowUpRight size={15}/></Link><Link href="/find-your-path?persona=parent"><UsersRound size={18}/><span>Family route</span><strong>Global Ecole inquiry</strong><ArrowUpRight size={15}/></Link><Link href="/find-your-path?persona=institution"><Building2 size={18}/><span>Institution route</span><strong>School or university</strong><ArrowUpRight size={15}/></Link><Link href="/find-your-path?persona=government"><HeartHandshake size={18}/><span>Impact route</span><strong>CSR, NGO or public programme</strong><ArrowUpRight size={15}/></Link></div></div></div></section>
    </main>
    <PublicFooter />
  </div>;
}
