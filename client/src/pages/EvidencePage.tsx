import { ArrowUpRight, BadgeCheck, FileCheck2 } from "lucide-react";
import { Link, useParams } from "wouter";
import { getEvidencePage, type EvidencePageSlug } from "@/content/evidencePages";
import { PublicFooter, PublicHeader } from "@/components/PublicSiteChrome";
import NotFound from "./NotFound";

/** Evidence pages make the claimed source and its limits visible at the point of reading. */
export default function EvidencePage() {
  const params = useParams<{ page: EvidencePageSlug }>();
  const page = getEvidencePage(params.page);
  if (!page) return <NotFound />;
  return <div className="network-shell">
    <PublicHeader />
    <main id="main-content">
      <section className="network-hero evidence-hero"><div className="network-hero__orbit network-hero__orbit--one" aria-hidden="true" /><div className="network-hero__orbit network-hero__orbit--two" aria-hidden="true" /><div className="page-wrap network-hero__inner"><span className="network-hero__index">Evidence / {page.index}</span><p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />{page.eyebrow}</p><h1>{page.title}<br /><span>{page.emphasis}</span></h1><p>{page.intro}</p></div></section>
      <section className="network-context"><div className="page-wrap network-context__grid"><div><p className="eyebrow"><span className="eyebrow-dot" />How we present proof</p><h2>Separate the claim<br />from the <i>evidence.</i></h2></div><p>{page.perspective}</p></div></section>
      <section className="network-atlas"><div className="page-wrap"><div className="network-atlas__heading"><p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />{params.page === "voices" ? "Voice register" : "Evidence map"}</p><span>{params.page === "voices" ? "Reserved records" : "Record"} / {page.index}</span></div>{params.page === "voices" ? <div className="network-atlas__grid evidence-grid evidence-voice-grid">{page.cards.map((card)=><article className="voice-placeholder-card" key={card.label} aria-label={`${card.label}: reserved testimonial record, publication approval pending`}><div className="voice-placeholder-card__top"><span>{card.label}</span><i aria-hidden="true" /></div><div className="voice-placeholder-card__avatar" aria-hidden="true"><em>…</em></div><h3>{card.title}</h3><p>{card.copy}</p><small>Wording · consent · attribution</small></article>)}</div> : <div className="network-atlas__grid evidence-grid">{page.cards.map((card,index)=><article key={card.title}><span>{card.label}</span><BadgeCheck size={22} strokeWidth={1.25}/><h3>{card.title}</h3><p>{card.copy}</p><b>0{index+1}</b></article>)}</div>}</div></section>
      <section className="network-evidence"><div className="page-wrap network-evidence__inner"><FileCheck2 size={22}/><div><p className="eyebrow"><span className="eyebrow-dot" />Source boundary</p><p>{page.sourceNote}</p>{page.sources.length > 0 && <div className="evidence-source-links">{page.sources.map(source=><a href={source.href} key={source.href} target="_blank" rel="noreferrer">{source.label} <ArrowUpRight size={13}/></a>)}</div>}</div><Link href="/contact">Discuss a route <ArrowUpRight size={16}/></Link></div></section>
    </main><PublicFooter />
  </div>;
}
