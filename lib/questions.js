// Objective, fact-based questions about the person's home, schedule, climate,
// and the dog's intended role. Each answer sets a target (1-5) for a trait and
// a weight (how much it matters). weight 0 = "this trait is irrelevant".
// Several questions can feed the same trait; the scorer averages them by weight.
export const QUESTIONS = [
  // ---------- energy ----------
  {
    trait: "energy",
    label: "Energy level",
    question: "How many days per week does your household currently do 30+ minutes of outdoor activity?",
    options: [
      { text: "0–1 days", target: 1, weight: 1.1 },
      { text: "2–3 days", target: 2, weight: 1 },
      { text: "4–5 days", target: 4, weight: 1 },
      { text: "6–7 days", target: 5, weight: 1.1 },
    ],
  },
  {
    trait: "energy",
    label: "Energy level",
    question: "Which activities will the dog actually join you for?",
    options: [
      { text: "None — it will be a companion at home", target: 1, weight: 1 },
      { text: "Neighborhood walks", target: 3, weight: 0.9 },
      { text: "Running, hiking, cycling, or dog sports", target: 5, weight: 1.2 },
    ],
  },
  {
    trait: "energy",
    label: "Energy level",
    question: "What best describes your home?",
    options: [
      { text: "Apartment or condo, no private yard", target: 2, weight: 0.7 },
      { text: "House with a small yard", target: 3, weight: 0.5 },
      { text: "House with a large yard or acreage", target: 4, weight: 0.3 },
    ],
  },

  // ---------- exercise ----------
  {
    trait: "exercise",
    label: "Exercise requirements",
    question: "How many minutes per day will someone walk or exercise the dog?",
    options: [
      { text: "Under 30 minutes", target: 1, weight: 1.3 },
      { text: "30–60 minutes", target: 2, weight: 1.1 },
      { text: "60–120 minutes", target: 4, weight: 1 },
      { text: "More than 120 minutes", target: 5, weight: 1.1 },
    ],
  },
  {
    trait: "exercise",
    label: "Exercise requirements",
    question: "What off-leash space can the dog use regularly?",
    options: [
      { text: "None", target: 2, weight: 0.6 },
      { text: "A small fenced yard or nearby park", target: 3, weight: 0.5 },
      { text: "A large fenced area, trails, or open land", target: 4, weight: 0.4 },
    ],
  },

  // ---------- playfulness ----------
  {
    trait: "playfulness",
    label: "Playfulness",
    question: "Are there children under 12 living in your home?",
    options: [
      { text: "Yes", target: 5, weight: 1 },
      { text: "No, but children visit regularly", target: 4, weight: 0.7 },
      { text: "No", target: 3, weight: 0.2 },
    ],
  },
  {
    trait: "playfulness",
    label: "Playfulness",
    question: "How often will someone play games (fetch, tug, hide-and-seek) with the dog?",
    options: [
      { text: "Daily", target: 5, weight: 0.9 },
      { text: "A few times a week", target: 4, weight: 0.8 },
      { text: "Rarely", target: 2, weight: 0.8 },
    ],
  },

  // ---------- affection ----------
  {
    trait: "affection",
    label: "Affection level",
    question: "On a typical weekday, how many hours is someone at home?",
    options: [
      { text: "Most of the day (work from home, retired)", target: 5, weight: 1.1 },
      { text: "About half the day", target: 4, weight: 1 },
      { text: "Everyone is gone 8+ hours", target: 2, weight: 1.2 },
    ],
  },
  {
    trait: "affection",
    label: "Affection level",
    question: "Where will the dog sleep at night?",
    options: [
      { text: "In a bedroom or on the bed", target: 5, weight: 0.9 },
      { text: "Inside the house, in its own space", target: 4, weight: 0.7 },
      { text: "In a separate room, garage, or outdoors", target: 2, weight: 0.9 },
    ],
  },

  // ---------- friendliness toward dogs ----------
  {
    trait: "friendDogs",
    label: "Friendliness toward dogs",
    question: "How many other dogs live in your home?",
    options: [
      { text: "None", target: 3, weight: 0.3 },
      { text: "One", target: 4, weight: 1.2 },
      { text: "Two or more", target: 5, weight: 1.5 },
    ],
  },
  {
    trait: "friendDogs",
    label: "Friendliness toward dogs",
    question: "How often will the dog go to dog parks, daycare, or group walks?",
    options: [
      { text: "Never or almost never", target: 3, weight: 0.2 },
      { text: "A few times a month", target: 4, weight: 0.8 },
      { text: "Weekly or more", target: 5, weight: 1.2 },
    ],
  },

  // ---------- friendliness toward other pets ----------
  {
    trait: "friendPets",
    label: "Friendliness toward other pets",
    question: "Do cats or other small pets (rabbits, birds, rodents) live in your home?",
    options: [
      { text: "Yes", target: 5, weight: 1.6 },
      { text: "No, but we plan to add some", target: 4, weight: 0.8 },
      { text: "No", target: 3, weight: 0 },
    ],
  },

  // ---------- friendliness toward strangers ----------
  {
    trait: "friendStrangers",
    label: "Friendliness toward strangers",
    question: "How many visitors enter your home in a typical week?",
    options: [
      { text: "0–1", target: 2, weight: 0.9 },
      { text: "2–5", target: 4, weight: 0.9 },
      { text: "6 or more", target: 5, weight: 1.1 },
    ],
  },
  {
    trait: "friendStrangers",
    label: "Friendliness toward strangers",
    question: "How often will the dog go to busy public places (stores, cafes, events)?",
    options: [
      { text: "Rarely or never", target: 2, weight: 0.6 },
      { text: "A few times a month", target: 4, weight: 0.8 },
      { text: "Weekly or more", target: 5, weight: 1 },
    ],
  },

  // ---------- ease of training ----------
  {
    trait: "training",
    label: "Ease of training",
    question: "How many dogs have you trained before?",
    options: [
      { text: "None — this is my first", target: 5, weight: 1.2 },
      { text: "One", target: 4, weight: 0.8 },
      { text: "Several", target: 3, weight: 0.5 },
    ],
  },
  {
    trait: "training",
    label: "Ease of training",
    question: "How many hours per week will you spend on training during the first year?",
    options: [
      { text: "Less than 1 hour", target: 5, weight: 1.2 },
      { text: "1–3 hours", target: 4, weight: 0.8 },
      { text: "More than 3 hours", target: 3, weight: 0.5 },
    ],
  },

  // ---------- watchdog ----------
  {
    trait: "watchdog",
    label: "Watchdog ability",
    question: "What are the noise rules where you live?",
    options: [
      { text: "Strict — shared walls, quiet hours, or HOA rules", target: 1, weight: 1.3 },
      { text: "Neighbors are close but there are no formal rules", target: 3, weight: 0.7 },
      { text: "No restrictions — barking bothers no one", target: 3, weight: 0.1 },
    ],
  },
  {
    trait: "watchdog",
    label: "Watchdog ability",
    question: "Is the dog expected to alert you when someone approaches your home?",
    options: [
      { text: "No — quiet is preferred", target: 1, weight: 1 },
      { text: "It would be a nice bonus", target: 3, weight: 0.6 },
      { text: "Yes — that's part of its job", target: 5, weight: 1.2 },
    ],
  },

  // ---------- protection ----------
  {
    trait: "protection",
    label: "Protection ability",
    question: "Will the dog have a guarding role (property, livestock, or personal protection)?",
    options: [
      { text: "No", target: 1, weight: 0.8 },
      { text: "Its presence as a deterrent is enough", target: 3, weight: 0.8 },
      { text: "Yes — a genuine guardian role", target: 5, weight: 1.5 },
    ],
  },

  // ---------- grooming ----------
  {
    trait: "grooming",
    label: "Grooming requirements",
    question: "How many professional grooming appointments per year fit your budget?",
    options: [
      { text: "None", target: 1, weight: 1.2 },
      { text: "A few (every 2–3 months)", target: 3, weight: 0.7 },
      { text: "Monthly or more", target: 5, weight: 0.5 },
    ],
  },
  {
    trait: "grooming",
    label: "Grooming requirements",
    question: "How many minutes per week will someone brush the dog at home?",
    options: [
      { text: "Under 15 minutes", target: 1, weight: 1.1 },
      { text: "15–60 minutes", target: 3, weight: 0.8 },
      { text: "More than 60 minutes", target: 5, weight: 0.6 },
    ],
  },

  // ---------- cold tolerance ----------
  {
    trait: "coldTol",
    label: "Cold tolerance",
    question: "How cold does a typical winter get where you live?",
    options: [
      { text: "Rarely below 50°F (10°C)", target: 3, weight: 0 },
      { text: "Between 20°F and 50°F (-7°C to 10°C)", target: 4, weight: 0.9 },
      { text: "Regularly below 20°F (-7°C)", target: 5, weight: 1.3 },
    ],
  },
  {
    trait: "coldTol",
    label: "Cold tolerance",
    question: "Will the dog spend extended time outdoors in winter?",
    options: [
      { text: "No — quick potty breaks only", target: 3, weight: 0.2 },
      { text: "An hour or so most days", target: 4, weight: 0.7 },
      { text: "Yes — hours outside daily", target: 5, weight: 1.2 },
    ],
  },

  // ---------- heat tolerance ----------
  {
    trait: "heatTol",
    label: "Heat tolerance",
    question: "How hot does a typical summer get where you live?",
    options: [
      { text: "Rarely above 80°F (27°C)", target: 3, weight: 0 },
      { text: "Between 80°F and 95°F (27°C to 35°C)", target: 4, weight: 0.9 },
      { text: "Regularly above 95°F (35°C)", target: 5, weight: 1.3 },
    ],
  },
  {
    trait: "heatTol",
    label: "Heat tolerance",
    question: "Will the dog spend extended time outdoors in summer?",
    options: [
      { text: "No — it will mostly be in air conditioning", target: 3, weight: 0.2 },
      { text: "An hour or so most days", target: 4, weight: 0.7 },
      { text: "Yes — hours outside daily", target: 5, weight: 1.2 },
    ],
  },
];
