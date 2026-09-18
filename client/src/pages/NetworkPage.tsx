import { ArrowUpRight, Network, Orbit } from "lucide-react";
import { Link, useParams } from "wouter";
import { getNetworkPage, type NetworkPageSlug } from "@/content/networkPages";
import { PublicFooter, PublicHeader } from "@/components/PublicSiteChrome";
import NotFound from "./NotFound";

/** A shared atlas-like interior page for approved public ecosystem information. */
export default function NetworkPage() {
  const params = useParams<{ page: NetworkPageSlug }>();
  const page = getNetworkPage(params.page);
  if (!page) return <NotFound />;

  return (
    <div className="network-shell">
      <PublicHeader />
      <main id="main-content">
        <section className="network-hero">
          <div className="network-hero__orbit network-hero__orbit--one" aria-hidden="true" />
          <div className="network-hero__orbit network-hero__orbit--two" aria-hidden="true" />
          <div className="page-wrap network-hero__inner">
            <span className="network-hero__index">Atlas / {page.index}</span>
            <p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />{page.eyebrow}</p>
            <h1>{page.title}<br /><span>{page.emphasis}</span></h1>
            <p>{page.intro}</p>
            <Link href="/contact" className="route-button"><span>Start a conversation</span><ArrowUpRight size={17} /></Link>
          </div>
        </section>
        <section className="network-context">
          <div className="page-wrap network-context__grid">
            <div><p className="eyebrow"><span className="eyebrow-dot" />A clear public record</p><h2>Build trust through<br /><i>specificity.</i></h2></div>
            <p>{page.perspective}</p>
          </div>
        </section>
        <section className="network-atlas">
          <div className="page-wrap"><div className="network-atlas__heading"><p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />The connected points</p><span>Route / {page.index}</span></div><div className="network-atlas__grid">
            {page.cards.map((card, index) => <article key={card.title}><span>{card.label}</span><Orbit size={22} strokeWidth={1.25} /><h3>{card.title}</h3><p>{card.copy}</p><b>0{index + 1}</b></article>)}
          </div></div>
        </section>
        <section className="network-evidence"><div className="page-wrap network-evidence__inner"><Network size={22} /><div><p className="eyebrow"><span className="eyebrow-dot" />Evidence note</p><p>{page.sourceNote}</p></div><Link href="/contact">Contact AetherMind <ArrowUpRight size={16} /></Link></div></section>
      </main>
      <PublicFooter />
    </div>
  );
}
