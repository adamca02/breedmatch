// Builds a short, readable description of a breed from its trait ratings.

const level = (n, [lo, mid, hi]) => (n >= 4.5 ? hi : n >= 3 ? mid : lo);

const GROUP_BLURB = {
  Sporting: "bred to work alongside hunters in field and water",
  Hound: "bred to pursue game by scent or by sight",
  Working: "bred for serious jobs like guarding, hauling, and rescue",
  Terrier: "bred to hunt vermin with trademark tenacity",
  Toy: "bred first and foremost for companionship",
  "Non-Sporting": "a diverse group with roots in many old professions",
  Herding: "bred to gather and move livestock with brains and hustle",
};

export function describe(b) {
  const sentences = [];

  sentences.push(
    `The ${b.name} is a ${b.group} breed, ${GROUP_BLURB[b.group] || "with a long working history"}.`
  );

  const energy = level(b.energy, ["a calm, low-key companion", "a moderately active dog", "a high-octane athlete"]);
  const exercise = level(b.exercise, [
    "content with short daily outings",
    "happiest with a solid daily walk or play session",
    "needing serious daily exercise to stay sane",
  ]);
  sentences.push(`Expect ${energy}, ${exercise}.`);

  const affection = level(b.affection, ["independent by nature", "warm with its family", "deeply devoted and people-oriented"]);
  const strangers = level(b.friendStrangers, [
    "reserved with strangers",
    "polite with new people",
    "delighted by everyone it meets",
  ]);
  sentences.push(`It tends to be ${affection} and ${strangers}.`);

  const training = level(b.training, [
    "an independent thinker that needs patient, creative training",
    "a capable student with consistent handling",
    "a quick, eager learner",
  ]);
  const grooming = level(b.grooming, ["minimal", "moderate", "substantial"]);
  sentences.push(`Training-wise it's ${training}, and its coat needs ${grooming} upkeep.`);

  if (b.watchdog >= 4 && b.protection >= 4) {
    sentences.push("It's a natural watchdog with real protective instincts.");
  } else if (b.watchdog >= 4) {
    sentences.push("It makes an alert watchdog, though more announcer than enforcer.");
  }

  if (b.coldTol >= 4.5) sentences.push("Built for cold weather, it thrives when temperatures drop.");
  else if (b.heatTol >= 4) sentences.push("It handles warm climates better than most.");

  return sentences.join(" ");
}

export function sizeLine(b) {
  const fmt = (lo, hi, unit) => (lo === hi ? `${lo} ${unit}` : `${lo}\u2013${hi} ${unit}`);
  return (
    `Males: ${fmt(b.hMinM, b.hMaxM, "in")}, ${fmt(b.wMinM, b.wMaxM, "lb")} \u00b7 ` +
    `Females: ${fmt(b.hMinF, b.hMaxF, "in")}, ${fmt(b.wMinF, b.wMaxF, "lb")}`
  );
}
