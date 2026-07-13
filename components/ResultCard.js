"use client";
import { useEffect, useState } from "react";
import { describe, sizeLine } from "@/lib/describe";
import { breedImageCandidates } from "@/lib/dogImages";

export default function ResultCard({ result, onRestart }) {
  const { top, runnersUp, relaxedSize } = result;
  const breed = top.breed;

  // Try each extension in turn; if all fail, show the placeholder.
  const candidates = breedImageCandidates(breed.name);
  const [srcIdx, setSrcIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setSrcIdx(0);
    setFailed(false);
  }, [breed.name]);

  const pct = Math.round(Math.max(0, Math.min(1, top.score)) * 100);

  return (
    <div className="card">
      <p className="eyebrow">Your best match</p>

      {relaxedSize && (
        <div className="notice">
          No breed fit your exact size window, so the closest overall matches are shown instead.
        </div>
      )}

      <div className="result-photo-wrap">
        {failed ? (
          <span className="photo-fallback" role="img" aria-label="dog">🐕</span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={candidates[srcIdx]}
            alt={`A ${breed.name}`}
            onError={() => {
              if (srcIdx < candidates.length - 1) setSrcIdx(srcIdx + 1);
              else setFailed(true);
            }}
          />
        )}
      </div>

      <h2 className="result-name">{breed.name}</h2>
      <div className="chip-row">
        <span className="chip">{breed.group} Group</span>
        <span className="chip gold">{pct}% match</span>
      </div>

      <div className="match-meter" aria-hidden="true">
        <div className="bar"><div className="fill" style={{ width: `${pct}%` }} /></div>
      </div>

      <p className="result-desc">{describe(breed)}</p>
      <p className="size-line">{sizeLine(breed)}</p>

      {runnersUp.length > 0 && (
        <div className="runners">
          <h3>Also worth a look</h3>
          {runnersUp.map((r) => (
            <div className="runner" key={r.breed.name}>
              <span>{r.breed.name}</span>
              <span className="pct">{Math.round(Math.max(0, Math.min(1, r.score)) * 100)}%</span>
            </div>
          ))}
        </div>
      )}

      <div className="nav-row">
        <span />
        <button className="btn btn-gold" onClick={onRestart}>Start over</button>
      </div>
    </div>
  );
}
