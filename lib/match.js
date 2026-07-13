// Scores every breed against the user's answers and size window, returns ranked matches.

function sizeRange(breed, sex) {
  if (sex === "male")
    return { w: [breed.wMinM, breed.wMaxM], h: [breed.hMinM, breed.hMaxM] };
  if (sex === "female")
    return { w: [breed.wMinF, breed.wMaxF], h: [breed.hMinF, breed.hMaxF] };
  return {
    w: [Math.min(breed.wMinM, breed.wMinF), Math.max(breed.wMaxM, breed.wMaxF)],
    h: [Math.min(breed.hMinM, breed.hMinF), Math.max(breed.hMaxM, breed.hMaxF)],
  };
}

const overlaps = ([lo, hi], min, max) => hi >= min && lo <= max;

// How far outside the user's window a breed's range sits (0 = fits).
function gap([lo, hi], min, max) {
  if (hi < min) return min - hi;
  if (lo > max) return lo - max;
  return 0;
}

export function matchBreeds(breeds, answers, size) {
  const scored = breeds.map((b) => {
    let total = 0;
    let maxTotal = 0;
    const perTrait = [];
    for (const a of answers) {
      if (a.weight === 0) continue;
      // Symmetric distance: being 2 above the target penalizes the same as 2 below.
      // Squaring emphasizes exact hits: gap 0 -> 1.0, 1 -> 0.56, 2 -> 0.25, 3 -> 0.06, 4 -> 0.
      const linear = 1 - Math.abs(b[a.trait] - a.target) / 4;
      const closeness = linear * linear;
      total += a.weight * closeness;
      maxTotal += a.weight;
      perTrait.push({ trait: a.trait, label: a.label, closeness });
    }
    let score = maxTotal ? total / maxTotal : 0;

    const r = sizeRange(b, size.sex);
    const fitsSize =
      overlaps(r.w, size.wMin, size.wMax) && overlaps(r.h, size.hMin, size.hMax);
    if (!fitsSize) {
      // Soft penalty so results degrade gracefully if the window is very narrow.
      const wGap = gap(r.w, size.wMin, size.wMax) / 40;
      const hGap = gap(r.h, size.hMin, size.hMax) / 10;
      score -= 0.35 + Math.min(0.4, wGap + hGap);
    }

    perTrait.sort((x, y) => y.closeness - x.closeness);
    return { breed: b, score, fitsSize, range: r, perTrait };
  });

  scored.sort((a, b) => b.score - a.score);
  const anyFit = scored.some((s) => s.fitsSize);
  const ranked = anyFit ? scored.filter((s) => s.fitsSize) : scored;
  return { top: ranked[0], runnersUp: ranked.slice(1, 4), relaxedSize: !anyFit };
}
