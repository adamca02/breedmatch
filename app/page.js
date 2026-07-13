"use client";
import { useMemo, useState } from "react";
import { BREEDS } from "@/lib/breeds";
import { QUESTIONS } from "@/lib/questions";
import { matchBreeds } from "@/lib/match";
import PawTrail from "@/components/PawTrail";
import ResultCard from "@/components/ResultCard";

const N_Q = QUESTIONS.length;
const STEP_SEX = N_Q;       // after the trait questions
const STEP_SIZE = N_Q + 1;
const STEP_RESULT = N_Q + 2;
const TOTAL_STEPS = N_Q + 2; // questions + sex + size

const SEX_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "any", label: "No preference" },
];

export default function Home() {
  const [step, setStep] = useState(-1); // -1 = intro
  const [picks, setPicks] = useState(Array(N_Q).fill(null));
  const [sex, setSex] = useState(null);
  const [size, setSize] = useState({ hMin: 5, hMax: 35, wMin: 3, wMax: 250 });

  const result = useMemo(() => {
    if (step !== STEP_RESULT) return null;
    const answers = picks.map((optIdx, i) => {
      const q = QUESTIONS[i];
      const o = q.options[optIdx];
      return { trait: q.trait, label: q.label, target: o.target, weight: o.weight };
    });
    return matchBreeds(BREEDS, answers, { sex, ...size });
  }, [step, picks, sex, size]);

  const restart = () => {
    setStep(-1);
    setPicks(Array(N_Q).fill(null));
    setSex(null);
    setSize({ hMin: 5, hMax: 35, wMin: 3, wMax: 250 });
  };

  const sizeValid =
    size.hMin >= 0 && size.wMin >= 0 && size.hMax > size.hMin && size.wMax > size.wMin;

  return (
    <main className="shell">
      <header className="brand">
        <h1>Fetch Your Match</h1>
        <span>a dog breed finder</span>
      </header>

      {step >= 0 && step < STEP_RESULT && (
        <PawTrail total={TOTAL_STEPS} current={step} />
      )}

      {/* ---------- intro ---------- */}
      {step === -1 && (
        <div className="card">
          <h2 className="hero-title">
            The right dog isn't the cutest one.<br />
            It's the one that <em>fits your life.</em>
          </h2>
          <p className="hero-sub">
            Answer {N_Q} quick questions about your energy, home, and habits — plus your
            size preferences — and we'll sift through {BREEDS.length} breeds to find the
            one built for you.
          </p>
          <button className="btn btn-primary" onClick={() => setStep(0)}>
            Find my breed
          </button>
        </div>
      )}

      {/* ---------- trait questions ---------- */}
      {step >= 0 && step < N_Q && (
        <div className="card" key={step}>
          <p className="eyebrow">
            {step + 1} of {N_Q} · {QUESTIONS[step].label}
          </p>
          <h2 className="q-title">{QUESTIONS[step].question}</h2>
          <div className="options">
            {QUESTIONS[step].options.map((o, i) => (
              <button
                key={i}
                className={`option ${picks[step] === i ? "selected" : ""}`}
                onClick={() => {
                  const next = [...picks];
                  next[step] = i;
                  setPicks(next);
                  setTimeout(() => setStep(step + 1), 160);
                }}
              >
                {o.text}
              </button>
            ))}
          </div>
          <div className="nav-row">
            <button
              className="btn btn-ghost"
              onClick={() => setStep(step === 0 ? -1 : step - 1)}
            >
              ← Back
            </button>
            <span />
          </div>
        </div>
      )}

      {/* ---------- sex preference ---------- */}
      {step === STEP_SEX && (
        <div className="card">
          <p className="eyebrow">Almost there · Preference</p>
          <h2 className="q-title">Do you have a preference for your dog's sex?</h2>
          <p className="hint" style={{ marginTop: 0, marginBottom: 16 }}>
            Males and females of a breed differ in typical size — this tailors the size
            matching in the next step.
          </p>
          <div className="sex-row">
            {SEX_OPTIONS.map((o) => (
              <button
                key={o.value}
                className={`option ${sex === o.value ? "selected" : ""}`}
                onClick={() => {
                  setSex(o.value);
                  setTimeout(() => setStep(STEP_SIZE), 160);
                }}
              >
                {o.label}
              </button>
            ))}
          </div>
          <div className="nav-row">
            <button className="btn btn-ghost" onClick={() => setStep(N_Q - 1)}>← Back</button>
            <span />
          </div>
        </div>
      )}

      {/* ---------- size window ---------- */}
      {step === STEP_SIZE && (
        <div className="card">
          <p className="eyebrow">Last step · Size</p>
          <h2 className="q-title">How big a dog are you looking for?</h2>
          <div className="size-grid">
            <div className="field">
              <label htmlFor="hmin">Min height (inches)</label>
              <input id="hmin" type="number" min="0" max="40" value={size.hMin}
                onChange={(e) => setSize({ ...size, hMin: Number(e.target.value) })} />
            </div>
            <div className="field">
              <label htmlFor="hmax">Max height (inches)</label>
              <input id="hmax" type="number" min="0" max="40" value={size.hMax}
                onChange={(e) => setSize({ ...size, hMax: Number(e.target.value) })} />
            </div>
            <div className="field">
              <label htmlFor="wmin">Min weight (lb)</label>
              <input id="wmin" type="number" min="0" max="300" value={size.wMin}
                onChange={(e) => setSize({ ...size, wMin: Number(e.target.value) })} />
            </div>
            <div className="field">
              <label htmlFor="wmax">Max weight (lb)</label>
              <input id="wmax" type="number" min="0" max="300" value={size.wMax}
                onChange={(e) => setSize({ ...size, wMax: Number(e.target.value) })} />
            </div>
          </div>
          <p className="hint">
            For reference: a Chihuahua stands about 5–8 in and 6 lb; a Great Dane
            30–32 in and up to 175 lb. Leave the defaults for "any size."
          </p>
          <div className="nav-row">
            <button className="btn btn-ghost" onClick={() => setStep(STEP_SEX)}>← Back</button>
            <button
              className="btn btn-primary"
              disabled={!sizeValid}
              onClick={() => setStep(STEP_RESULT)}
            >
              See my match
            </button>
          </div>
        </div>
      )}

      {/* ---------- result ---------- */}
      {step === STEP_RESULT && result && (
        <ResultCard result={result} onRestart={restart} />
      )}
    </main>
  );
}
