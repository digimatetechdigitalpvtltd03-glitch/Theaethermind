import { ArrowUpRight, Check, MoveUpRight, Network } from "lucide-react";
import { Link, useParams } from "wouter";
import { getSolution, type SolutionKind } from "@/content/solutions";
import { PublicFooter, PublicHeader } from "@/components/PublicSiteChrome";
import NotFound from "./NotFound";

export default function SolutionDetail() {
  const params = useParams<{ kind: SolutionKind; slug: string }>();
  const solution = getSolution(params.kind, params.slug);

  if (!solution) return <NotFound />;

  const isInstitution = solution.kind === "institutions";
  const questionnaireDestination = isInstitution ? "institutional-transformation" : solution.kind === "schools" ? "global-schooling" : solution.slug;
  const questionnairePath = `/find-your-path?persona=${isInstitution ? "institution" : "learner"}&destination=${questionnaireDestination}`;

  return (
    <div className="detail-shell">
      <PublicHeader />

      <main id="main-content">
        <section className="detail-hero">
          <div className="detail-hero__route detail-hero__route--one" aria-hidden="true" />
          <div className="detail-hero__route detail-hero__route--two" aria-hidden="true" />
          <div className="page-wrap detail-hero__inner">
            <div className="detail-route-label"><span>{solution.index}</span>{solution.route}</div>
            <p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />{solution.eyebrow}</p>
            <h1>{solution.title}<br /><span>{solution.emphasis}</span></h1>
            <p className="detail-hero__lede">{solution.intro}</p>
            <Link href={questionnairePath} className="route-button"><span>{isInstitution ? "Start a conversation" : "Find your fit"}</span><ArrowUpRight size={17} /></Link>
          </div>
          <div className="detail-route-index" aria-hidden="true"><span>Route {solution.index}</span><i /></div>
        </section>

        <section className="detail-section detail-section--ivory">
          <div className="page-wrap detail-intro-grid">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" />{solution.audienceLabel}</p>
              <h2>Designed with the<br /><i>real context</i> in view.</h2>
            </div>
            <div className="detail-audience-list">
              {solution.audience.map((item, index) => <p key={item}><span>0{index + 1}</span>{item}</p>)}
            </div>
          </div>
        </section>

        <section className="detail-section detail-section--ink">
          <div className="page-wrap">
            <div className="detail-section-heading"><p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />What the route connects</p><span>Atlas / {solution.index}</span></div>
            <div className="detail-component-grid">
              {solution.components.map((component, index) => (
                <article key={component.title}>
                  <span className="detail-component-index">0{index + 1}</span>
                  <Network size={23} strokeWidth={1.2} />
                  <h3>{component.title}</h3>
                  <p>{component.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {solution.kind === "schools" && <section className="school-context-strip">
          <div className="page-wrap school-context-strip__inner">
            <div className="school-context-strip__label"><span>School rhythm / illustrative</span><i /></div>
            <div className="school-context-strip__grid"><article><span>Live faculty</span><strong>Teacher-led sessions with room for question, discussion and feedback.</strong></article><article><span>Learning intelligence</span><strong>Visible support signals intended to inform learner, family and educator conversations.</strong></article><article><span>Global community</span><strong>A proposed hybrid environment connecting local routine with wider peer perspectives.</strong></article></div>
          </div>
        </section>}

        <section className="detail-section detail-outcome">
          <div className="detail-outcome__disc detail-outcome__disc--one" aria-hidden="true" />
          <div className="detail-outcome__disc detail-outcome__disc--two" aria-hidden="true" />
          <div className="page-wrap detail-outcome__inner">
            <div className="detail-outcome__mark"><Check size={20} /></div>
            <p className="eyebrow"><span className="eyebrow-dot" />The route ahead</p>
            <h2>{solution.outcome}</h2>
            <p>Begin with a short set of questions. We will use your declared context to direct you to the most relevant AetherMind conversation.</p>
            <Link href={questionnairePath} className="route-button"><span>{isInstitution ? "Build the route" : "Explore this route"}</span><MoveUpRight size={17} /></Link>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
