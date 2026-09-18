import { ArrowLeft, ArrowRight, Check, ChevronRight, LoaderCircle, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { PublicFooter, PublicHeader } from "@/components/PublicSiteChrome";

type Persona = "learner" | "parent" | "institution" | "government";
type Destination = "global-schooling" | "alternative-pathways" | "international-curriculum" | "ai-learning" | "future-skills" | "institutional-transformation";
type Stage = "exploring" | "ready-to-start" | "expanding-an-offering" | "national-programme";

const personas: Array<{ value: Persona; label: string; detail: string }> = [
  { value: "learner", label: "I’m a learner", detail: "I’m planning my own next step." },
  { value: "parent", label: "I’m a parent or carer", detail: "I’m exploring the right route for a learner." },
  { value: "institution", label: "I represent an institution", detail: "I’m building a stronger education model." },
  { value: "government", label: "I represent a public programme", detail: "I’m planning for access at scale." },
];

const learnerDestinations: Array<{ value: Destination; label: string; detail: string }> = [
  { value: "global-schooling", label: "Global schooling", detail: "International academic options with mobility in mind." },
  { value: "alternative-pathways", label: "Alternative pathways", detail: "A more flexible route for an individual context." },
  { value: "international-curriculum", label: "International curriculum", detail: "Programme choice connected to a longer future." },
  { value: "ai-learning", label: "AI-powered learning", detail: "Adaptive learning support with educator context." },
  { value: "future-skills", label: "Future skills", detail: "Human, digital and career-relevant capability." },
];

const institutionalDestinations: Array<{ value: Destination; label: string; detail: string }> = [
  { value: "institutional-transformation", label: "Connected learning infrastructure", detail: "For schools, education groups and mission-led organisations." },
  { value: "future-skills", label: "Skills development initiatives", detail: "For connected human, digital and employability capability." },
  { value: "ai-learning", label: "AI learning deployment", detail: "For responsive support at school or programme scale." },
];

const stages: Array<{ value: Stage; label: string; detail: string }> = [
  { value: "exploring", label: "I’m exploring", detail: "I need orientation before I make a decision." },
  { value: "ready-to-start", label: "I’m ready to start", detail: "I want to understand the next practical step." },
  { value: "expanding-an-offering", label: "I’m expanding an offering", detail: "I’m adding or evolving an institutional model." },
  { value: "national-programme", label: "I’m planning at population scale", detail: "I’m developing a regional or national programme." },
];

function validPersona(value: string | null): value is Persona { return personas.some((persona) => persona.value === value); }
function validDestination(value: string | null): value is Destination { return [...learnerDestinations, ...institutionalDestinations].some((destination) => destination.value === value); }

export default function FindYourPath() {
  const initial = useMemo(() => new URLSearchParams(window.location.search), []);
  const initialPersona = initial.get("persona");
  const initialDestination = initial.get("destination");
  const [step, setStep] = useState(1);
  const [persona, setPersona] = useState<Persona>(validPersona(initialPersona) ? initialPersona : "learner");
  const [destination, setDestination] = useState<Destination>(validDestination(initialDestination) ? initialDestination : "global-schooling");
  const [stage, setStage] = useState<Stage>("exploring");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const submit = trpc.pathfinder.submit.useMutation({
    onSuccess: () => { setSubmitted(true); setFormMessage(""); },
    onError: (error) => setFormMessage(error.message || "We couldn’t save your response. Please try again."),
  });

  const destinationOptions = persona === "institution" || persona === "government" ? institutionalDestinations : learnerDestinations;
  const selectedDestination = destinationOptions.some((option) => option.value === destination) ? destination : destinationOptions[0].value;
  const progress = Math.round(((submitted ? 4 : step) / 4) * 100);
  const title = step === 1 ? "Who is this route for?" : step === 2 ? "What would you like to explore?" : step === 3 ? "Where are you in the journey?" : "Where should we send your route?";
  const prompt = step === 1 ? "Choose the perspective that best describes the decision you are making." : step === 2 ? "Select the route that feels most relevant right now." : step === 3 ? "This helps us frame your next step with the right level of support." : "Share only what we need to send the recommendation and begin a relevant conversation.";

  const choosePersona = (value: Persona) => {
    setPersona(value);
    const options = value === "institution" || value === "government" ? institutionalDestinations : learnerDestinations;
    if (!options.some((option) => option.value === destination)) setDestination(options[0].value);
    setStep(2);
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormMessage("");
    if (!consent) { setFormMessage("Please confirm that AetherMind may contact you about this enquiry."); return; }
    submit.mutate({ firstName, email, organization: organization || undefined, persona, destination: selectedDestination, stage, consentToContact: true });
  };

  if (submitted && submit.data) {
    const recommendationPath = submit.data.recommendation.route === "institutional-transformation"
      ? "/institutions/digital-school-infrastructure"
      : `/pathways/${submit.data.recommendation.route}`;
    return (
      <div className="finder-shell">
        <PublicHeader />
        <main id="main-content" className="finder-result"><div className="finder-result__ring finder-result__ring--one" aria-hidden="true" /><div className="finder-result__ring finder-result__ring--two" aria-hidden="true" /><div className="finder-result__inner"><div className="finder-result__mark"><Check size={24} /></div><p className="eyebrow"><span className="eyebrow-dot" />Route identified</p><h1>Your starting point is<br /><i>{submit.data.recommendation.title}.</i></h1><p>{submit.data.recommendation.summary}</p><p className="finder-result__note">Thanks, {firstName}. Your enquiry has been captured. AetherMind can now continue the conversation from the context you shared.</p><div className="finder-result__actions"><Link className="route-button" href={recommendationPath}><span>Explore the route</span><ArrowRight size={17} /></Link><button type="button" className="text-link" onClick={() => { setSubmitted(false); setStep(1); }}><RotateCcw size={15} />Start again</button></div></div></main>
        <PublicFooter />
      </div>
    );
  }

  return (
    <div className="finder-shell">
      <PublicHeader />
      <main id="main-content" className="finder-main">
        <aside className="finder-aside"><p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />Find your path</p><h1>Start from<br />where <i>you are.</i></h1><p>A short route-finding conversation to reveal the AetherMind pathway most relevant to your declared context.</p><div className="finder-expectations"><span>Before you begin</span><p>Four short questions lead to an on-page route suggestion. Contact details are requested only if you choose to continue.</p></div><div className="finder-aside__map" aria-hidden="true"><i /><i /><i /><i /></div><small>Route calibration / {String(step).padStart(2, "0")} of 04</small></aside>
        <section className="finder-workspace">
          <div className="finder-progress"><span>Step {step} of 4</span><div><i style={{ width: `${progress}%` }} /></div><span>{progress}%</span></div>
          <div className="finder-question"><p className="eyebrow"><span className="eyebrow-dot" />Route calibration</p><h2>{title}</h2><p>{prompt}</p></div>
          {step === 1 && <div className="finder-options">{personas.map((option, index) => <button key={option.value} type="button" onClick={() => choosePersona(option.value)}><span>0{index + 1}</span><strong>{option.label}</strong><small>{option.detail}</small><ChevronRight size={18} /></button>)}</div>}
          {step === 2 && <div className="finder-options">{destinationOptions.map((option, index) => <button key={option.value} type="button" onClick={() => { setDestination(option.value); setStep(3); }}><span>0{index + 1}</span><strong>{option.label}</strong><small>{option.detail}</small><ChevronRight size={18} /></button>)}</div>}
          {step === 3 && <div className="finder-options">{stages.map((option, index) => <button key={option.value} type="button" onClick={() => { setStage(option.value); setStep(4); }}><span>0{index + 1}</span><strong>{option.label}</strong><small>{option.detail}</small><ChevronRight size={18} /></button>)}</div>}
          {step === 4 && <form className="finder-form" onSubmit={submitForm} noValidate>
            <label>First name<input value={firstName} onChange={(event) => setFirstName(event.target.value)} autoComplete="given-name" required /></label>
            <label>Email address<input value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" type="email" required /></label>
            <label>Organisation <span>(optional)</span><input value={organization} onChange={(event) => setOrganization(event.target.value)} autoComplete="organization" /></label>
            <label className="finder-consent"><input checked={consent} onChange={(event) => setConsent(event.target.checked)} type="checkbox" /><span>I agree that AetherMind may contact me about this enquiry.</span></label>
            {formMessage && <p className="finder-form__message" role="alert">{formMessage}</p>}
            <div className="finder-form__actions"><button type="button" className="text-link" onClick={() => setStep(3)}><ArrowLeft size={15} />Back</button><button className="route-button" disabled={submit.isPending} type="submit"><span>{submit.isPending ? "Mapping your route" : "Reveal my route"}</span>{submit.isPending ? <LoaderCircle className="animate-spin" size={17} /> : <ArrowRight size={17} />}</button></div>
          </form>}
          {step < 4 && step > 1 && <button type="button" className="finder-back" onClick={() => setStep((current) => current - 1)}><ArrowLeft size={15} />Back to previous question</button>}
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
