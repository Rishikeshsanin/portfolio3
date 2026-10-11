import { useEffect, useRef, useState } from 'react'
import NeuralBackdrop from './neural.jsx'
import OsLogin from './osLogin.jsx'

/* ABOUT — Rishikesh Munnaluri. The profile and experience are based on the current
   résumé; the project/build milestones are grounded in the portfolio repositories. */

const STATS = [
  { n: '07', l: 'flagship systems in this portfolio' },
  { n: '02', l: 'completed internships' },
  { n: '100K+', l: 'rows used to validate NoCodeML workflows' },
  { n: '2027', l: 'B.Tech graduation' },
]

const SKILLS = [
  ['Python', 92], ['Applied AI · ML', 90], ['Full-Stack Engineering', 89], ['LLM · RAG Systems', 88],
  ['Computer Vision', 86], ['Realtime Systems', 86], ['FastAPI · APIs', 85], ['Data · PostgreSQL', 84],
]

const CHIPS = ['Scikit-learn', 'TensorFlow', 'Gemini API', 'RAG', 'AI Agents', 'Pandas', 'NumPy',
  'React', 'Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'Supabase', 'Firebase', 'LiveKit', 'Vercel', 'Railway']

const EXPERIENCE = [
  { h: 'Assistant Teaching Faculty Intern — CAT Coaching Center', w: 'RICON Technologies · May 2026 — Jul 2026 · Nellore',
    p: 'Supported C and Python theory and lab sessions, prepared and tested practical coding exercises, and mentored students through debugging and core programming concepts.' },
  { h: 'Cybersecurity Intern — Dhee Data Center', w: 'Jun 2024 — Jul 2024',
    p: 'Built a Python malware-detection pipeline from static file features and preprocessing through supervised classification; trained and evaluated Random Forest, SVM and XGBoost models with visual analysis of performance and false positives.' },
]

const WINS = [
  { h: 'Finalist — Karnataka Elevate 2025', w: 'Mew Thetis · Socio Drift',
    p: 'Co-founded Mew Thetis and presented Socio Drift, an AI music-generation platform using LSTM/Transformer modeling and Gemini-based prompt interpretation.' },
  { h: 'Production CV + LLM System — ReturnReview', w: '2026 · Computer Vision + Working with LLMs',
    p: 'Built an evidence-first return-review workflow with category verification, multiclass damage localization, grounded AI review, durable persistence and a human final decision.' },
  { h: 'Guest-first ML Workspace — NoCodeML V3', w: '2026 · Applied ML platform',
    p: 'Designed privacy-by-lifecycle temporary workspaces, model comparison, prediction and export flows across scikit-learn, XGBoost and LightGBM without forcing visitor accounts.' },
]

const EDU = [
  { h: 'RV University, Bengaluru', w: '2023 — 2027',
    p: 'B.Tech in Computer Science and Engineering — Artificial Intelligence & Machine Learning.' },
]

const FOCUS = [
  { h: 'Applied AI that can be audited', w: 'Grounding · evaluation · human control',
    p: 'I prefer systems where model output is bounded by deterministic logic, evidence, policy or explicit evaluation instead of being trusted just because it sounds fluent.' },
  { h: 'Realtime products that survive real devices', w: 'Presence · synchronization · media · multiplayer',
    p: 'Imposter X and Vibify pushed me into the hard parts of state, timing, browser behavior, voice/video and cross-device synchronization.' },
  { h: 'Full-stack ownership', w: 'Interface → API → data → deployment',
    p: 'The common thread across my work is shipping the whole system: product UI, backend boundaries, data models, testing, deployment and the failures between them.' },
]

/* One observer for the whole page rather than one per element, and it disconnects the moment
   everything has been seen — a page this static shouldn't keep a callback alive to the end of
   the session. */
function useReveal() {
  const root = useRef()
  useEffect(() => {
    const els = Array.from(root.current?.querySelectorAll('.rv') ?? [])
    if (!els.length) return
    let left = els.length
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        e.target.classList.add('in')
        // skill bars fill from their data-level once they're actually on screen
        e.target.querySelectorAll('.bar u').forEach(u => { u.style.width = `${u.dataset.level}%` })
        io.unobserve(e.target)
        if (--left === 0) io.disconnect()
      })
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
  return root
}

/* Each section travels in as ONE piece from alternating sides — heading and body together, from
   off the edge of the screen rather than nudging up from below. */
function Section({ tag, title, children, side = 'left' }) {
  return (
    <section className="sec rv" data-side={side}>
      <h2><span className="tag">{tag}</span>{title}</h2>
      <div>{children}</div>
    </section>
  )
}

function Item({ h, w, p }) {
  return (
    <div className="item">
      <h3>{h}</h3>
      <p className="when">{w}</p>
      <p>{p}</p>
    </div>
  )
}

export default function About() {
  const root = useReveal()
  const [booted, setBooted] = useState(false)
  return (
    <div className="about" ref={root}>
      {!booted && <OsLogin onDone={() => setBooted(true)} />}
      <NeuralBackdrop />
      <nav>
        <span className="mark"><a href="/">RM</a></span>
        <a className="link" href="/">Home</a>
        <a className="link" href="/about.html">About</a>
        {/* the contact stage lives at the end of the home page's scroll */}
        <a className="enter" href="/#contact">Contact</a>
      </nav>

      <div className="wrap" data-booted={booted ? '1' : '0'}>
        <header className="ahead">
          <h1 className="rv" data-side="up">About</h1>
          <div className="rv" data-side="up">
            <span className="tag">Player profile</span>
            <p className="lede">
              <strong>AI/ML engineer and full-stack builder</strong> pursuing a B.Tech in CSE with an
              AI/ML specialisation at <em>RV University, Bengaluru</em>. I build applied machine-learning,
              computer-vision, decision-intelligence and realtime products end to end — from data and
              model evaluation to APIs, interfaces and deployment. My strongest work includes
              <em>ReturnReview</em>, <em>Skylark Command</em>, <em>CommercialIQ</em> and <em>NoCodeML</em>.
              I care about systems that are useful, testable and honest about what the AI does not know.
            </p>
            <div className="stats">
              {STATS.map(s => (
                <div className="stat" key={s.l}><b>{s.n}</b><span>{s.l}</span></div>
              ))}
            </div>
          </div>
        </header>

        <Section tag="02 / Skill tree" title="Skills" side="left">
          <div className="skills-grid">
            {SKILLS.map(([name, lvl]) => (
              <div className="skill" key={name}>
                <div className="row"><span>{name}</span><i>LVL {lvl}</i></div>
                <div className="bar"><u data-level={lvl} /></div>
              </div>
            ))}
          </div>
          <div className="chips">{CHIPS.map(c => <span key={c}>{c}</span>)}</div>
        </Section>

        <Section tag="03 / Field work" title="Experience" side="right">
          {EXPERIENCE.map(e => <Item key={e.h} {...e} />)}
        </Section>

        <Section tag="04 / Build log" title="Milestones" side="left">
          {WINS.map(w => <Item key={w.h} {...w} />)}
        </Section>

        <Section tag="05 / Origin story" title="Education" side="right">
          {EDU.map(e => <Item key={e.h} {...e} />)}
        </Section>

        <Section tag="06 / Operating system" title="How I build" side="left">
          {FOCUS.map(f => <Item key={f.h} {...f} />)}
        </Section>

        {/* Contact deliberately left out — it gets its own treatment elsewhere. */}
        <p className="foot">© 2026 Rishikesh Munnaluri · Bengaluru</p>
      </div>
    </div>
  )
}
