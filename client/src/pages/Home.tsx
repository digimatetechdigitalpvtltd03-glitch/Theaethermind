/**
 * Pathway Cartography: AetherMind's home page uses editorial storytelling,
 * cobalt route markers, atlas annotations, brand seals, and a deep-ink / ivory rhythm.
 */
import {
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
  Building2,
  ChevronRight,
  CircleDot,
  Globe2,
  Orbit,
  Plus,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";
import { PublicFooter, PublicHeader } from "@/components/PublicSiteChrome";

const ecosystem = [
  {
    index: "01",
    kind: "pathways",
    slug: "global-schooling",
    title: "Global Schooling",
    route: "Route A / Borderless",
    copy: "International learning pathways designed to travel beyond geography.",
    icon: Globe2,
  },
  {
    index: "02",
    kind: "pathways",
    slug: "alternative-pathways",
    title: "Alternative Pathways",
    route: "Route B / Flexible",
    copy: "Flexible routes for learners whose goals do not fit one prescribed model.",
    icon: Orbit,
  },
  {
    index: "03",
    kind: "pathways",
    slug: "international-curriculum",
    title: "International Curriculum",
    route: "Route C / Recognised",
    copy: "Choices that connect academic fit with future university and career goals.",
    icon: CircleDot,
  },
  {
    index: "04",
    kind: "pathways",
    slug: "ai-learning",
    title: "AI-Powered Learning",
    route: "Route D / Adaptive",
    copy: "Technology that helps identify the next useful moment of support.",
    icon: BrainCircuit,
  },
  {
    index: "05",
    kind: "pathways",
    slug: "future-skills",
    title: "Future Skills",
    route: "Route E / Human",
    copy: "Human, digital and academic capabilities developed together.",
    icon: Sparkles,
  },
  {
    index: "06",
    kind: "institutions",
    slug: "digital-school-infrastructure",
    title: "Institutional Transformation",
    route: "Route F / Expansive",
    copy: "The infrastructure for a school experience with wider reach and relevance.",
    icon: Building2,
  },
];

const pathwaySteps = ["Learn", "Adapt", "Connect", "Build", "Qualify", "Advance"];

const institutionSolutions = [
  { label: "Digital school infrastructure", slug: "digital-school-infrastructure" },
  { label: "AI learning deployment", slug: "ai-learning-deployment" },
  { label: "National education programmes", slug: "national-education-programmes" },
  { label: "Skills development initiatives", slug: "skills-development-initiatives" },
];

const communityVoiceAudiences = ["Parents & guardians", "Learners", "Teachers", "Institutions", "Partners"] as const;

function ScrollButton({
  target,
  children,
  variant = "primary",
}: {
  target: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "text";
}) {
  const goToTarget = () => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });

  if (variant === "text") {
    return (
      <button onClick={goToTarget} className="text-link" type="button">
        {children} <ArrowDownRight size={18} strokeWidth={1.8} />
      </button>
    );
  }

  return (
    <button onClick={goToTarget} className={`route-button ${variant === "outline" ? "route-button--outline" : ""}`} type="button">
      <span>{children}</span>
      <ArrowRight size={17} strokeWidth={1.9} />
    </button>
  );
}

export default function Home() {
  const handleNav = (target: string) => {
    window.setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }), 30);
  };

  return (
    <div className="site-shell">
      <PublicHeader />

      <main id="main-content">
        <section id="top" className="hero-section">
          <div className="hero-image" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-route hero-route--one" aria-hidden="true" />
          <div className="hero-route hero-route--two" aria-hidden="true" />
          <div className="hero-content page-wrap">
            <div className="hero-atlas-legend" aria-hidden="true">
              <span style={{width:26,height:26,borderRadius:"50%",background:"var(--cobalt)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,color:"#fff",flexShrink:0}}>A</span>
              <div><span>Route origin</span><strong>AetherMind / global learning map</strong></div>
              <i /><i /><i />
            </div>
            <div className="hero-copy">
              <p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />Global education ecosystem <span className="eyebrow-coordinate">20°N · 77°E</span></p>
              <h1>Reimagining<br />how the world <i>learns.</i></h1>
              <p className="hero-lede">AetherMind connects learners, schools, technology and international pathways to create more flexible ways to learn, qualify and succeed.</p>
              <div className="hero-actions">
                <Link className="route-button" href="/find-your-path"><span>Explore your path</span><ArrowRight size={17} /></Link>
                <ScrollButton target="institutions" variant="outline">Partner with AetherMind</ScrollButton>
              </div>
            </div>

            <div className="hero-foot">
              <div className="route-prompt">
                <span className="route-prompt__index">01</span>
                <span>One ecosystem.<br /><strong>Infinite pathways.</strong></span>
              </div>
              <button className="scroll-cue" onClick={() => handleNav("why")} type="button" aria-label="Scroll to discover more"><span>Discover</span><ArrowDownRight size={19} /></button>
            </div>
          </div>
        </section>

        <section id="why" className="section section--ivory problem-section">
          <div className="section-rail">
            <span className="section-number">01</span>
            <span className="rail-line" />
            <span className="rail-label">Why now</span>
          </div>
          <div className="page-wrap problem-layout">
            <div className="problem-intro">
              <p className="eyebrow"><span className="eyebrow-dot" />The education revolution</p>
              <h2>Education has changed.<br /><i>The system hasn’t.</i></h2>
              <p className="body-copy">A learner’s potential should not be limited by a postcode, timetable, single curriculum or a fixed definition of success. The world has moved forward. Education needs to move with it.</p>
              <ScrollButton target="ecosystem" variant="text">See the model</ScrollButton>
            </div>
            <div className="constraint-list" aria-label="Constraints of traditional education">
              {[
                ["01", "Geography", "Opportunity tied to location"],
                ["02", "One pathway", "One-size-fits-all progression"],
                ["03", "Fixed pace", "Learning constrained by the calendar"],
                ["04", "Fragmented tools", "Technology without understanding"],
              ].map(([number, title, description]) => (
                <article className="constraint-card" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Plus size={17} strokeWidth={1.5} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pathfinder" className="section section--ink model-section">
          <div className="page-wrap">
            <div className="model-heading">
              <div>
                <p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />The AetherMind model</p>
                <h2>Not a product.<br /><i>An expanding route.</i></h2>
              </div>
              <p>A learner begins with an ambition. We connect the academic, human and technological pieces that help turn it into a future.</p>
            </div>
            <div className="pathway-map">
              <div className="map-brand-seal map-brand-seal--model" aria-hidden="true"><span style={{width:35,height:35,borderRadius:"50%",background:"var(--cobalt)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:800,color:"#fff"}}>A</span></div>
              <div className="pathway-map__line" aria-hidden="true" />
              {pathwaySteps.map((step, index) => (
                <div className={`pathway-step pathway-step--${index + 1}`} key={step}>
                  <span className="pathway-step__dot">{index + 1}</span>
                  <div>
                    <span className="pathway-step__number">0{index + 1}</span>
                    <h3>{step}</h3>
                    <p>{[
                      "Global education pathways",
                      "Learning around the individual",
                      "Educators, institutions and opportunity",
                      "Academic, human and digital capability",
                      "Relevant credentials",
                      "University, career and lifelong learning",
                    ][index]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ecosystem" className="section section--mist ecosystem-section">
          <div className="section-rail section-rail--dark">
            <span className="section-number">02</span>
            <span className="rail-line" />
            <span className="rail-label">The ecosystem</span>
          </div>
          <div className="page-wrap">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow"><span className="eyebrow-dot" />One master brand</p>
                <h2>Many ways<br />forward.</h2>
              </div>
              <div className="atlas-caption"><span className="atlas-caption__route">ATLAS 01–06</span><p>Each part of the ecosystem is a destination. Together, they form education infrastructure designed for a world in motion.</p></div>
            </div>
            <div className="ecosystem-grid">
              {ecosystem.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="ecosystem-card" key={item.title}>
                    <div className="ecosystem-card__top"><span>{item.index}</span><span className="ecosystem-card__route">{item.route}</span><Icon size={24} strokeWidth={1.4} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                    <Link href={`/${item.kind}/${item.slug}`} aria-label={`Learn about ${item.title}`}><span>Explore destination</span><ArrowDownRight size={20} /></Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="global-ecole" className="global-ecole-home">
          <div className="global-ecole-home__image" aria-hidden="true" />
          <div className="global-ecole-home__wash" aria-hidden="true" />
          <div className="page-wrap global-ecole-home__inner">
            <div className="global-ecole-home__route"><span>School route / 01</span><i /></div>
            <div className="global-ecole-home__copy">
              <p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />Introducing Global Ecole</p>
              <h2>School, reimagined<br />for a <i>world in motion.</i></h2>
              <p>A proposed global hybrid K–12 learning ecosystem bringing together flexible curriculum pathways, faculty-led learning, live support and a Learning Intelligence System—designed to help millions of learners access a more future-ready school experience across geographies.</p>
              <div className="global-ecole-home__actions"><Link className="route-button" href="/schools/global-ecole"><span>Explore Global Ecole</span><ArrowRight size={17} /></Link><Link className="text-link" href="/find-your-path?persona=learner&destination=global-schooling">Find your school route <ArrowDownRight size={18} /></Link></div>
              <p className="global-ecole-home__note">Proposed model. Programme availability, curriculum recognition and delivery locations will be shared when confirmed.</p>
            </div>
          </div>
        </section>

        <section id="student-world" className="section section--ivory global-student-section">
          <div className="page-wrap">
            <div className="student-world-heading"><div><p className="eyebrow"><span className="eyebrow-dot" />A world of learners</p><h2>More than<br />one way to <i>thrive.</i></h2></div><div className="student-world-heading__note"><span>Global learning atlas / 07–09</span><p>Every learner brings a distinct energy—on the court, in the studio, in the library, on stage and at the drawing board of their next idea.</p></div></div>
            <div className="global-student-grid">
              <article className="global-student-card"><div><span>01 / Build</span><h3>Curious minds<br />in motion.</h3><p>Science, ideas and collaboration.</p></div></article>
              <article className="global-student-card"><div><span>02 / Express</span><h3>Culture as<br />capability.</h3><p>Arts, literature and theatre.</p></div></article>
              <article className="global-student-card"><div><span>03 / Venture</span><h3>Energy into<br />possibility.</h3><p>Sport, enterprise and leadership.</p></div></article>
            </div>
          </div>
        </section>

        <section id="learning-continuum" className="learning-continuum">
          <div className="page-wrap">
            <div className="learning-continuum__heading"><div><p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />A lifelong learning route</p><h2>From the first<br />question to the<br /><i>next frontier.</i></h2></div><p>K–12 discovery, higher-education direction and corporate capability do not live in separate worlds. AetherMind connects each stage to a more legible next step.</p></div>
            <div className="learning-continuum__grid">
              <article><div><span>01 / K–12 discovery</span><h3>Curiosity gets<br />a route.</h3><Link href="/schools/global-ecole">Explore Global Ecole <ArrowDownRight size={16} /></Link></div></article>
              <article><div><span>02 / Higher education</span><h3>Ambition finds<br />direction.</h3><Link href="/evidence/university-pathways">Explore university routes <ArrowDownRight size={16} /></Link></div></article>
              <article><div><span>03 / Corporate learning</span><h3>Capability keeps<br />moving.</h3><Link href="/institutions/skills-development-initiatives">Explore future skills <ArrowDownRight size={16} /></Link></div></article>
            </div>
          </div>
        </section>

        <section className="section trust-section" id="trust">
          <div className="page-wrap">
            <div className="trust-heading">
              <div><p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />Evidence-led ecosystem</p><h2>Trust is built<br />in the <i>open.</i></h2></div>
              <p>We present partner, pathway and impact information as distinct, attributable signals—so a learner or institution can see what sits behind a route.</p>
            </div>
            <div className="trust-grid">
              <article><span>01 / Education & skills ecosystem</span><h3>IBM ICE, delivered via TransNeuron; Maxme; AOBA; Aether Learning; and Routes 2 Roots.</h3><p>Named ecosystem organisations shown on AetherMind’s public platform.</p></article>
              <article><span>02 / Global pathways</span><h3>IB, Cambridge, US Diploma, GED and NIOS pathway options.</h3><p>Programme labels are presented as route options, not a claim of accreditation by AetherMind.</p></article>
              <article><span>03 / Accredited route</span><h3>US High School Diploma pathway stated as accredited via OnFire Academy.</h3><p>Accreditation is attributed to the named diploma route and its provider.</p></article>
              <article><span>04 / Impact alignment</span><h3>UN Sustainable Development Goal 4: Quality Education.</h3><p>Publicly stated alignment around inclusive and equitable access to quality education.</p></article>
            </div>
            <p className="trust-source-note">Source: <a href="https://theaethermind.com/" target="_blank" rel="noreferrer">The AetherMind public website</a>. No unsourced outcome statistics, ratings or accreditation claims are displayed.</p>
          </div>
        </section>

        <section className="community-voices-section" id="voices">
          <div className="page-wrap">
            <div className="community-voices__heading">
              <div><p className="eyebrow"><span className="eyebrow-dot" />Community voices</p><h2>Real experiences,<br /><i>held with care.</i></h2></div>
              <div><p>We will publish parent, learner, educator, institution and partner perspectives only after the speaker approves the wording, attribution and intended audience.</p><Link href="/evidence/voices">View the publication standard <ArrowDownRight size={16} /></Link></div>
            </div>
            <div className="community-voices__grid">
              {communityVoiceAudiences.map((audience, index) => <article key={audience}><div><span>0{index + 1} / {audience}</span><i aria-hidden="true" /></div><h3>Voice held<br />for <i>approval.</i></h3><p>No name, quotation or review is shown until approval and attribution are in place.</p><small>Source-ready slot</small></article>)}
            </div>
          </div>
        </section>

        <section className="learner-section">
          <div className="learner-image" />
          <div className="learner-overlay" />
          <div className="page-wrap learner-layout">
            <div className="learner-note"><span className="learner-note__dot" />Pathway 001<br />Designed around you</div>
            <div className="learner-copy">
              <p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />For learners & parents</p>
              <h2>Your education.<br />A path designed<br /><span>around you.</span></h2>
              <p>From an international curriculum to flexible schooling, AI-assisted support and future skills, the right route is the one that moves with the learner—not against them.</p>
              <Link className="route-button" href="/find-your-path"><span>Discover your path</span><ArrowRight size={17} /></Link>
            </div>
          </div>
        </section>

        <section id="institutions" className="section section--ivory institution-section">
          <div className="page-wrap">
            <div className="section-heading institution-heading">
              <p className="eyebrow"><span className="eyebrow-dot" />For institutions</p>
              <h2>Turn your school into a<br /><span>global learning ecosystem.</span></h2>
              <p>Build a model that combines the best of your campus with digital reach, international pathways, intelligent learning systems and new ways to serve students.</p>
            </div>
            <div className="institution-route-links" aria-label="Institution solutions">
              {institutionSolutions.map((solution, index) => <Link href={`/institutions/${solution.slug}`} key={solution.slug}><span>0{index + 1}</span>{solution.label}<ArrowDownRight size={16} /></Link>)}
            </div>
            <div className="transformation-board">
              <article className="school-state school-state--today">
                <div className="school-state__label"><span>01</span>School today</div>
                <h3>One place.<br />One model.</h3>
                <div className="state-route">
                  <span>Campus</span><i /><span>Local students</span><i /><span>Single curriculum</span><i /><span>Physical capacity</span>
                </div>
              </article>
              <div className="transformation-divider"><span>→</span><small>Transform</small></div>
              <article className="school-state school-state--tomorrow">
                <div className="school-state__label"><span>02</span>School tomorrow</div>
                <h3>One connected<br /><i>ecosystem.</i></h3>
                <div className="state-route state-route--bright">
                  <span>Campus + virtual</span><i /><span>Local + global learners</span><i /><span>Multi-curriculum</span><i /><span>AI-enabled reach</span>
                </div>
              </article>
            </div>
            <div className="institution-bottom">
              <p>For schools, education groups, universities, governments and organisations designing what comes next.</p>
              <ScrollButton target="final-cta">Build with AetherMind</ScrollButton>
            </div>
          </div>
        </section>

        <section id="technology" className="section technology-section">
          <div className="technology-image" />
          <div className="technology-wash" />
          <div className="page-wrap technology-layout">
            <div className="technology-content">
              <p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />Technology with intent</p>
              <div className="tech-coordinate-panel"><span>System signal / 04</span><span>Signal becomes support</span></div>
              <h2>Technology that<br />understands the learner.</h2>
              <p>We see technology as a human amplifier: helping educators recognise needs earlier, personalise support more intelligently and turn data into meaningful progress.</p>
              <div className="technology-human-route" aria-label="AetherMind technology support route"><span>Educator context</span><i /><span>Learner signal</span><i /><span>Actionable support</span></div>
              <ScrollButton target="final-cta" variant="outline">Explore AetherMind technology</ScrollButton>
            </div>
            <div className="learning-loop">
              <div className="learning-loop__orbit" />
              <div className="learning-loop__center"><BrainCircuit size={34} strokeWidth={1.35} /><span>LEARNER</span></div>
              {[
                ["01", "Learning data"],
                ["02", "AI insight"],
                ["03", "Personal support"],
                ["04", "Meaningful progress"],
              ].map(([number, label], index) => (
                <div className={`loop-item loop-item--${index + 1}`} key={number}><span>{number}</span>{label}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="impact" className="section section--ink impact-section">
          <div className="section-rail">
            <span className="section-number">03</span>
            <span className="rail-line" />
            <span className="rail-label">Global impact</span>
          </div>
          <div className="page-wrap impact-layout">
            <div>
              <p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />Education without borders</p>
              <h2>Opportunity should<br />travel further.</h2>
              <div className="impact-atlas-note"><span style={{width:24,height:24,borderRadius:"50%",background:"var(--cobalt)",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:"#fff",flexShrink:0}}>A</span><span>Impact route / access in motion</span></div>
            </div>
            <div className="impact-copy">
              <p>Geography, conflict, infrastructure and circumstance should not permanently determine access to education. AetherMind is exploring the technology, pathways and partnerships that can help learning reach further.</p>
              <div className="impact-tags"><span>Access</span><span>Connection</span><span>Capability</span><span>Continuity</span></div>
              <ScrollButton target="final-cta" variant="text">Explore our impact</ScrollButton>
            </div>
          </div>
          <div className="world-points" aria-hidden="true">
            <i className="world-point world-point--1" /><i className="world-point world-point--2" /><i className="world-point world-point--3" /><i className="world-point world-point--4" /><i className="world-point world-point--5" /><i className="world-point world-point--6" />
          </div>
        </section>

        <section id="final-cta" className="final-cta-section">
          <div className="final-orbit final-orbit--one" aria-hidden="true" />
          <div className="final-orbit final-orbit--two" aria-hidden="true" />
          <div className="page-wrap final-cta-content">
            <p className="eyebrow"><span className="eyebrow-dot" />The next coordinate is yours</p>
            <h2>Where will your<br /><i>education</i> take you?</h2>
            <div className="final-cta-actions"><ScrollButton target="top">Find your path</ScrollButton><ScrollButton target="institutions" variant="outline">Build with AetherMind</ScrollButton></div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
