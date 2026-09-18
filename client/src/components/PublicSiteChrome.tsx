import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ArrowDownRight, ArrowRight, ChevronDown, Facebook, Linkedin, Menu, X } from "lucide-react";
import { Link } from "wouter";

type PublicLink = { label: string; href: string; note?: string };
type PublicGroup = { label: string; description?: string; links: PublicLink[] };

export const publicNavigationGroups: PublicGroup[] = [
  {
    label: "About us",
    description: "The people, purpose and learning world behind AetherMind.",
    links: [
      { label: "AetherMind overview", href: "/#why", note: "Our purpose" },
      { label: "People Atlas", href: "/people", note: "Leadership & expertise" },
      { label: "Global Ecole", href: "/schools/global-ecole", note: "Proposed hybrid K–12" },
      { label: "Contact us", href: "/contact", note: "Start a conversation" },
    ],
  },
  {
    label: "Learn",
    description: "Routes designed around each learner and their next chapter.",
    links: [
      { label: "Find your path", href: "/find-your-path", note: "Route finder" },
      { label: "Global Schooling", href: "/pathways/global-schooling", note: "International route" },
      { label: "Alternative pathways", href: "/pathways/alternative-pathways", note: "Flexible route" },
      { label: "Learning continuum", href: "/#learning-continuum", note: "K–12 to capability" },
    ],
  },
  {
    label: "Build",
    description: "For institutions and partners shaping education that can travel further.",
    links: [
      { label: "Institution solutions", href: "/#institutions", note: "Infrastructure & reach" },
      { label: "Institutional transformation", href: "/institutions/digital-school-infrastructure", note: "Connected delivery" },
      { label: "Global partners", href: "/network/global-partners", note: "Ecosystem network" },
      { label: "Contact AetherMind", href: "/contact", note: "Start a conversation" },
    ],
  },
  {
    label: "Evidence & impact",
    description: "The records, principles and source boundaries behind each route.",
    links: [
      { label: "Trust & affiliations", href: "/#trust", note: "Source-led signals" },
      { label: "University pathways", href: "/evidence/university-pathways", note: "Progression context" },
      { label: "Impact & CSR", href: "/evidence/impact-csr", note: "SDG 4 alignment" },
      { label: "Community voices", href: "/evidence/voices", note: "Publication standard" },
    ],
  },
];

export const publicFooterGroups: PublicGroup[] = [
  { label: "Explore", links: [
    { label: "AetherMind overview", href: "/#why" },
    { label: "People Atlas", href: "/people" },
    { label: "Global Ecole", href: "/schools/global-ecole" },
    { label: "Contact AetherMind", href: "/contact" },
  ] },
  { label: "Learning", links: [
    { label: "Find your path", href: "/find-your-path" },
    { label: "Global Schooling", href: "/pathways/global-schooling" },
    { label: "Alternative pathways", href: "/pathways/alternative-pathways" },
    { label: "Learning continuum", href: "/#learning-continuum" },
  ] },
  { label: "For organisations", links: [
    { label: "Institution solutions", href: "/#institutions" },
    { label: "Global partners", href: "/network/global-partners" },
    { label: "Impact & CSR", href: "/evidence/impact-csr" },
  ] },
  { label: "Evidence", links: [
    { label: "Affiliations", href: "/evidence/affiliations" },
    { label: "Accreditation", href: "/evidence/accreditation" },
    { label: "University pathways", href: "/evidence/university-pathways" },
    { label: "Case studies", href: "/evidence/case-studies" },
    { label: "Community voices", href: "/evidence/voices" },
  ] },
];

function useHomeAnchor() {
  return (event: MouseEvent<HTMLAnchorElement>, href: string, onComplete?: () => void) => {
    if (!href.startsWith("/#") || window.location.pathname !== "/") return;
    event.preventDefault();
    onComplete?.();
    const target = href.slice(2);
    window.history.pushState(null, "", href);
    window.setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }), 20);
  };
}

export function PublicHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const desktopNavRef = useRef<HTMLElement>(null);
  const handleAnchor = useHomeAnchor();

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const closeOnPointerDown = (event: PointerEvent) => {
      if (!desktopNavRef.current?.contains(event.target as Node)) setActiveDropdown(null);
    };
    document.addEventListener("pointerdown", closeOnPointerDown);
    return () => document.removeEventListener("pointerdown", closeOnPointerDown);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [menuOpen]);

  const closeAll = () => { setMenuOpen(false); setActiveDropdown(null); };
  const handleEscape = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") closeAll();
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <Link href="/" className="brand" onClick={closeAll} aria-label="Go to AetherMind home">
          <span className="brand-mark-fallback" aria-hidden="true" style={{width:31,height:31,borderRadius:"50%",background:"var(--cobalt)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:800,color:"#fff",flexShrink:0}}>A</span>
          <span className="brand-wordmark" style={{fontSize:13,letterSpacing:"0.19em",lineHeight:1,whiteSpace:"nowrap"}}>AETHER<strong>MIND</strong></span>
          <span className="brand-coordinate" aria-hidden="true">Route / 00</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation" ref={desktopNavRef} onKeyDown={handleEscape}>
          {publicNavigationGroups.map((group) => {
            const menuId = `nav-${group.label.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`;
            const isActive = activeDropdown === group.label;
            return (
              <div className="nav-dropdown" key={group.label} onMouseEnter={() => setActiveDropdown(group.label)} onMouseLeave={() => setActiveDropdown(null)} onFocus={() => setActiveDropdown(group.label)}>
                <button className="nav-dropdown__trigger" type="button" onClick={() => setActiveDropdown(isActive ? null : group.label)} aria-expanded={isActive} aria-controls={menuId}>
                  {group.label}<ChevronDown size={13} strokeWidth={1.8} />
                </button>
                <div id={menuId} className={`nav-mega ${isActive ? "nav-mega--active" : ""}`}>
                  <p>{group.description}</p>
                  <div>
                    {group.links.map((item, index) => (
                      <Link href={item.href} key={item.label} onClick={(event) => handleAnchor(event, item.href, closeAll)}>
                        <span>{String(index + 1).padStart(2, "0")}</span><strong>{item.label}</strong><small>{item.note}</small><ArrowDownRight size={15} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="header-actions">
          <Link className="header-cta" href="/find-your-path" onClick={closeAll}>Find your path <ArrowRight size={14} /></Link>
          <button className="menu-toggle" onClick={() => setMenuOpen(true)} type="button" aria-label="Open navigation menu" aria-expanded={menuOpen}><Menu size={23} /></button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`} role="dialog" aria-modal="true" aria-label="Site navigation" aria-hidden={!menuOpen} onKeyDown={handleEscape}>
        <div className="mobile-menu__top">
          <span className="eyebrow"><span className="eyebrow-dot" />Navigation</span>
          <button className="menu-toggle menu-toggle--close" onClick={closeAll} type="button" aria-label="Close navigation menu"><X size={25} /></button>
        </div>
        <div className="mobile-menu__links">
          {publicNavigationGroups.map((group, groupIndex) => (
            <section className="mobile-menu__group" key={group.label}>
              <p><span>{String(groupIndex + 1).padStart(2, "0")}</span>{group.label}</p>
              {group.links.map((item) => <Link href={item.href} key={item.label} onClick={(event) => handleAnchor(event, item.href, closeAll)}>{item.label}<ArrowDownRight size={18} /></Link>)}
            </section>
          ))}
        </div>
        <div className="mobile-menu__footer">A future without fixed boundaries.</div>
      </div>
    </>
  );
}

export function PublicFooter() {
  const handleAnchor = useHomeAnchor();
  return (
    <footer className="site-footer">
      <div className="page-wrap footer-grid">
        <div className="footer-brand">
          <span style={{width:38,height:38,borderRadius:"50%",background:"var(--cobalt)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:800,color:"#fff"}}>A</span>
          <span style={{fontSize:13,letterSpacing:"0.19em",lineHeight:1,color:"var(--ivory)"}}>AETHER<strong>MIND</strong></span>
          <p>Reimagining how the world learns.</p>
        </div>
        {publicFooterGroups.map((group) => (
          <div className="footer-nav" key={group.label}>
            <span>{group.label}</span>
            {group.links.map((item) => <Link href={item.href} key={item.label} onClick={(event) => handleAnchor(event, item.href)}>{item.label}</Link>)}
          </div>
        ))}
        <div className="footer-connect">
          <span>Follow</span>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/aethemind/" target="_blank" rel="noreferrer" aria-label="AetherMind on LinkedIn"><Linkedin size={16} /></a>
            <a href="https://www.facebook.com/aethermind.official/" target="_blank" rel="noreferrer" aria-label="AetherMind on Facebook"><Facebook size={16} /></a>
          </div>
        </div>
        <div className="footer-claim"><span>© 2026 AetherMind</span><span>Global education ecosystem</span></div>
      </div>
    </footer>
  );
}
