import { ArrowUpRight, Linkedin, Mail, Orbit, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { advisoryProfileSlots, expertiseRoutes, publicLeadership, routeGuildProfileSlots } from "@/content/people";
import { PublicFooter, PublicHeader } from "@/components/PublicSiteChrome";

/**
 * People Atlas keeps personal-profile publishing evidence-led: only a publicly
 * attributable leadership profile is named; further member entries activate after approval.
 */
export default function PeopleAtlas() {
  return (
    <div className="people-shell">
      <PublicHeader />
      <main id="main-content">
        <section className="people-hero">
          <div className="people-hero__route people-hero__route--one" aria-hidden="true" />
          <div className="people-hero__route people-hero__route--two" aria-hidden="true" />
          <div className="page-wrap people-hero__inner">
            <span className="people-hero__index">People Atlas / 10</span>
            <p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />People & practice</p>
            <h1>Every route needs<br />people who <span>care.</span></h1>
            <p>AetherMind brings educators, learning designers, learner-success teams, delivery specialists and institutional collaborators into one shared global education practice.</p>
            <div className="people-hero__legend"><span><i />Learning architecture</span><span><i />Human support</span><span><i />Global delivery</span></div>
          </div>
        </section>

        <section className="people-leadership">
          <div className="page-wrap people-leadership__grid">
            <div className="people-section-heading"><p className="eyebrow"><span className="eyebrow-dot" />Leadership coordinate</p><h2>Direction<br />with <i>care.</i></h2><p>The public people directory names a profile only when its role and link are attributable. Direct individual contact is routed safely through AetherMind.</p></div>
            <article className="public-profile-card">
              <div className="public-profile-card__portrait" aria-hidden="true"><span>A</span><Orbit size={70} strokeWidth={0.8} /></div>
              <div className="public-profile-card__meta"><span>{publicLeadership.role}</span><b>{publicLeadership.name}</b><p>{publicLeadership.summary}</p></div>
              <div className="public-profile-card__connect"><a href={publicLeadership.linkedin} target="_blank" rel="noreferrer" aria-label={`View ${publicLeadership.name} on LinkedIn`}><Linkedin size={17} /></a><a href={publicLeadership.email} aria-label={`Email AetherMind regarding ${publicLeadership.name}`}><Mail size={17} /></a><small>{publicLeadership.sourceLabel}</small></div>
            </article>
          </div>
        </section>

        <section className="people-advisory">
          <div className="page-wrap"><div className="people-advisory__heading"><div><p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />Advisory circle</p><h2>Perspective keeps<br />the route <i>honest.</i></h2></div><p>Advisor names, portraits and individual links are activated only after written profile approval. Until then, these cards make the advisory contribution visible without implying a person or connection.</p></div><div className="profile-slot-grid profile-slot-grid--dark">
            {advisoryProfileSlots.map((profile) => <article className="profile-pending-card" key={profile.index} aria-label={`${profile.role}: reserved record, publication approval pending`}><div className="profile-pending-card__top"><span>{profile.index} / {profile.focus}</span><Sparkles size={18} strokeWidth={1.25} /></div><div className="profile-pending-card__avatar" aria-hidden="true"><Orbit size={32} strokeWidth={0.9} /><i /></div><div className="profile-pending-card__copy"><span>{profile.role}</span><h3>{profile.name}</h3><p>{profile.summary}</p></div><div className="profile-pending-card__connect" aria-label="Individual connection details pending approval"><span title="LinkedIn pending approval"><Linkedin size={15} /></span><span title="Email pending approval"><Mail size={15} /></span><small>Publication hold</small></div></article>)}
          </div></div>
        </section>

        <section className="route-guild">
          <div className="page-wrap"><div className="route-guild__heading"><div><p className="eyebrow"><span className="eyebrow-dot" />The Route Guild</p><h2>Many disciplines.<br /><i>One learner promise.</i></h2></div><p><strong>The Route Guild</strong> is how AetherMind names the distributed practice behind its global service: people who connect learning, support, technology, institutional change and opportunity across different domains.</p></div><div className="expertise-gallery">
            {expertiseRoutes.map((route) => <article key={route.index}><img src={route.image} alt={route.alt} /><div className="expertise-gallery__wash" /><div className="expertise-gallery__copy"><span>{route.index} / {route.label}</span><h3>{route.title}</h3><p>{route.copy}</p></div></article>)}
          </div><div className="route-guild__profile-note"><span>Reserved profile register / approval required</span><p>These source-ready cards reserve the future team profile experience. They do not represent named people, images, personal email addresses or social links.</p></div><div className="profile-slot-grid profile-slot-grid--light">
            {routeGuildProfileSlots.map((profile) => <article className="profile-pending-card" key={profile.index} aria-label={`${profile.role}: reserved record, publication approval pending`}><div className="profile-pending-card__top"><span>{profile.index} / {profile.focus}</span><Sparkles size={18} strokeWidth={1.25} /></div><div className="profile-pending-card__avatar" aria-hidden="true"><Orbit size={32} strokeWidth={0.9} /><i /></div><div className="profile-pending-card__copy"><span>{profile.role}</span><h3>{profile.name}</h3><p>{profile.summary}</p></div><div className="profile-pending-card__connect" aria-label="Individual connection details pending approval"><span title="LinkedIn pending approval"><Linkedin size={15} /></span><span title="Email pending approval"><Mail size={15} /></span><small>Publication hold</small></div></article>)}
          </div></div>
        </section>

        <section className="people-contact"><div className="page-wrap people-contact__inner"><div><p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />Connect with AetherMind</p><h2>Bring the right<br />people into the room.</h2></div><Link href="/contact" className="route-button"><span>Start a conversation</span><ArrowUpRight size={17} /></Link></div></section>
      </main>
      <PublicFooter />
    </div>
  );
}
