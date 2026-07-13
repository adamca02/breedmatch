(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/breeds.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Breed data: ratings 1-5 per trait, weights in lb, heights in inches.
__turbopack_context__.s([
    "BREEDS",
    ()=>BREEDS
]);
const BREEDS = [
    {
        "name": "Australian Cattle Dog",
        "group": "Herding",
        "energy": 5,
        "exercise": 5,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 2,
        "friendStrangers": 2,
        "training": 5,
        "watchdog": 5,
        "protection": 4,
        "grooming": 2,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 35,
        "wMaxM": 50,
        "wMinF": 35,
        "wMaxF": 50,
        "hMinM": 18,
        "hMaxM": 20,
        "hMinF": 17,
        "hMaxF": 19
    },
    {
        "name": "Australian Shepherd",
        "group": "Herding",
        "energy": 4,
        "exercise": 5,
        "playfulness": 5,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 2,
        "training": 5,
        "watchdog": 5,
        "protection": 4,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 50,
        "wMaxM": 65,
        "wMinF": 40,
        "wMaxF": 55,
        "hMinM": 20,
        "hMaxM": 23,
        "hMinF": 18,
        "hMaxF": 21
    },
    {
        "name": "Bearded Collie",
        "group": "Herding",
        "energy": 4,
        "exercise": 4,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 4,
        "protection": 2,
        "grooming": 4,
        "coldTol": 4,
        "heatTol": 3,
        "wMinM": 45,
        "wMaxM": 55,
        "wMinF": 45,
        "wMaxF": 55,
        "hMinM": 21,
        "hMaxM": 22,
        "hMinF": 20,
        "hMaxF": 21
    },
    {
        "name": "Beauceron",
        "group": "Herding",
        "energy": 4,
        "exercise": 4,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 1,
        "friendPets": 2,
        "friendStrangers": 1,
        "training": 5,
        "watchdog": 5,
        "protection": 5,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 65,
        "wMaxM": 85,
        "wMinF": 65,
        "wMaxF": 85,
        "hMinM": 25.5,
        "hMaxM": 27.5,
        "hMinF": 24,
        "hMaxF": 26.5
    },
    {
        "name": "Belgian Malinois",
        "group": "Herding",
        "energy": 4,
        "exercise": 5,
        "playfulness": 4,
        "affection": 1,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 5,
        "watchdog": 5,
        "protection": 5,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 60,
        "wMaxM": 80,
        "wMinF": 40,
        "wMaxF": 60,
        "hMinM": 24,
        "hMaxM": 26,
        "hMinF": 22,
        "hMaxF": 24
    },
    {
        "name": "Belgian Sheepdog",
        "group": "Herding",
        "energy": 4,
        "exercise": 5,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 5,
        "watchdog": 5,
        "protection": 5,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 55,
        "wMaxM": 75,
        "wMinF": 45,
        "wMaxF": 60,
        "hMinM": 24,
        "hMaxM": 26,
        "hMinF": 22,
        "hMaxF": 24
    },
    {
        "name": "Belgian Tervuren",
        "group": "Herding",
        "energy": 4,
        "exercise": 5,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 5,
        "watchdog": 5,
        "protection": 5,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 55,
        "wMaxM": 75,
        "wMinF": 45,
        "wMaxF": 60,
        "hMinM": 24,
        "hMaxM": 26,
        "hMinF": 22,
        "hMaxF": 24
    },
    {
        "name": "Border Collie",
        "group": "Herding",
        "energy": 5,
        "exercise": 5,
        "playfulness": 4,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 1,
        "friendStrangers": 2,
        "training": 5,
        "watchdog": 4,
        "protection": 3,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 30,
        "wMaxM": 55,
        "wMinF": 27,
        "wMaxF": 42,
        "hMinM": 19,
        "hMaxM": 22,
        "hMinF": 18,
        "hMaxF": 21
    },
    {
        "name": "Bouvier des Flandres",
        "group": "Herding",
        "energy": 3,
        "exercise": 4,
        "playfulness": 2,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 5,
        "protection": 5,
        "grooming": 4,
        "coldTol": 4,
        "heatTol": 2,
        "wMinM": 70,
        "wMaxM": 110,
        "wMinF": 70,
        "wMaxF": 110,
        "hMinM": 24.5,
        "hMaxM": 27.5,
        "hMinF": 23.5,
        "hMaxF": 26.5
    },
    {
        "name": "Briard",
        "group": "Herding",
        "energy": 3,
        "exercise": 4,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 1,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 1,
        "watchdog": 5,
        "protection": 5,
        "grooming": 4,
        "coldTol": 3,
        "heatTol": 2,
        "wMinM": 55,
        "wMaxM": 100,
        "wMinF": 55,
        "wMaxF": 100,
        "hMinM": 23,
        "hMaxM": 27,
        "hMinF": 22,
        "hMaxF": 25.5
    },
    {
        "name": "Canaan Dog",
        "group": "Herding",
        "energy": 3,
        "exercise": 4,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 2,
        "training": 4,
        "watchdog": 5,
        "protection": 3,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 45,
        "wMaxM": 55,
        "wMinF": 35,
        "wMaxF": 45,
        "hMinM": 20,
        "hMaxM": 24,
        "hMinF": 19,
        "hMaxF": 23
    },
    {
        "name": "Cardigan Welsh Corgi",
        "group": "Herding",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 4,
        "friendStrangers": 3,
        "training": 4,
        "watchdog": 5,
        "protection": 4,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 30,
        "wMaxM": 38,
        "wMinF": 25,
        "wMaxF": 34,
        "hMinM": 10.5,
        "hMaxM": 12.5,
        "hMinF": 10.5,
        "hMaxF": 12.5
    },
    {
        "name": "Collie (Rough)",
        "group": "Herding",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 5,
        "protection": 3,
        "grooming": 4,
        "coldTol": 4,
        "heatTol": 2,
        "wMinM": 60,
        "wMaxM": 75,
        "wMinF": 50,
        "wMaxF": 65,
        "hMinM": 24,
        "hMaxM": 26,
        "hMinF": 22,
        "hMaxF": 24
    },
    {
        "name": "Collie (Smooth)",
        "group": "Herding",
        "energy": 3,
        "exercise": 3,
        "playfulness": 4,
        "affection": 5,
        "friendDogs": 4,
        "friendPets": 4,
        "friendStrangers": 4,
        "training": 4,
        "watchdog": 4,
        "protection": 2,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 60,
        "wMaxM": 75,
        "wMinF": 50,
        "wMaxF": 65,
        "hMinM": 24,
        "hMaxM": 26,
        "hMinF": 22,
        "hMaxF": 24
    },
    {
        "name": "German Shepherd Dog",
        "group": "Herding",
        "energy": 3,
        "exercise": 4,
        "playfulness": 2,
        "affection": 3,
        "friendDogs": 1,
        "friendPets": 3,
        "friendStrangers": 2,
        "training": 5,
        "watchdog": 5,
        "protection": 5,
        "grooming": 2,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 65,
        "wMaxM": 90,
        "wMinF": 50,
        "wMaxF": 70,
        "hMinM": 24,
        "hMaxM": 26,
        "hMinF": 22,
        "hMaxF": 24
    },
    {
        "name": "Old English Sheepdog",
        "group": "Herding",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 5,
        "friendDogs": 3,
        "friendPets": 5,
        "friendStrangers": 4,
        "training": 1,
        "watchdog": 3,
        "protection": 3,
        "grooming": 4,
        "coldTol": 4,
        "heatTol": 2,
        "wMinM": 60,
        "wMaxM": 100,
        "wMinF": 60,
        "wMaxF": 100,
        "hMinM": 22,
        "hMaxM": 23,
        "hMinF": 21,
        "hMaxF": 22
    },
    {
        "name": "Pembroke Welsh Corgi",
        "group": "Herding",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 4,
        "training": 4,
        "watchdog": 5,
        "protection": 4,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 29,
        "wMaxM": 30,
        "wMinF": 27,
        "wMaxF": 28,
        "hMinM": 10,
        "hMaxM": 12,
        "hMinF": 10,
        "hMaxF": 12
    },
    {
        "name": "Polish Lowland Sheepdog",
        "group": "Herding",
        "energy": 4,
        "exercise": 4,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 2,
        "training": 4,
        "watchdog": 5,
        "protection": 4,
        "grooming": 4,
        "coldTol": 4,
        "heatTol": 2,
        "wMinM": 30,
        "wMaxM": 50,
        "wMinF": 30,
        "wMaxF": 50,
        "hMinM": 18,
        "hMaxM": 20,
        "hMinF": 17,
        "hMaxF": 19
    },
    {
        "name": "Puli",
        "group": "Herding",
        "energy": 4,
        "exercise": 3,
        "playfulness": 3,
        "affection": 2,
        "friendDogs": 1,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 2,
        "watchdog": 5,
        "protection": 5,
        "grooming": 5,
        "coldTol": 4,
        "heatTol": 2,
        "wMinM": 25,
        "wMaxM": 35,
        "wMinF": 25,
        "wMaxF": 35,
        "hMinM": 17,
        "hMaxM": 17,
        "hMinF": 16,
        "hMaxF": 16
    },
    {
        "name": "Shetland Sheepdog",
        "group": "Herding",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 4,
        "friendPets": 4,
        "friendStrangers": 1,
        "training": 5,
        "watchdog": 5,
        "protection": 1,
        "grooming": 4,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 15,
        "wMaxM": 25,
        "wMinF": 15,
        "wMaxF": 25,
        "hMinM": 13,
        "hMaxM": 16,
        "hMinF": 13,
        "hMaxF": 16
    },
    {
        "name": "Afghan Hound",
        "group": "Hound",
        "energy": 2,
        "exercise": 3,
        "playfulness": 3,
        "affection": 1,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 2,
        "watchdog": 3,
        "protection": 1,
        "grooming": 4,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 50,
        "wMaxM": 60,
        "wMinF": 50,
        "wMaxF": 60,
        "hMinM": 27,
        "hMaxM": 27,
        "hMinF": 25,
        "hMaxF": 25
    },
    {
        "name": "American Foxhound",
        "group": "Hound",
        "energy": 4,
        "exercise": 4,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 5,
        "friendPets": 4,
        "friendStrangers": 4,
        "training": 2,
        "watchdog": 4,
        "protection": 1,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 65,
        "wMaxM": 70,
        "wMinF": 60,
        "wMaxF": 65,
        "hMinM": 22,
        "hMaxM": 25,
        "hMinF": 21,
        "hMaxF": 24
    },
    {
        "name": "Basenji",
        "group": "Hound",
        "energy": 4,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 1,
        "friendStrangers": 3,
        "training": 2,
        "watchdog": 5,
        "protection": 1,
        "grooming": 1,
        "coldTol": 1,
        "heatTol": 3,
        "wMinM": 24,
        "wMaxM": 24,
        "wMinF": 22,
        "wMaxF": 22,
        "hMinM": 17,
        "hMaxM": 17,
        "hMinF": 16,
        "hMaxF": 16
    },
    {
        "name": "Basset Hound",
        "group": "Hound",
        "energy": 2,
        "exercise": 2,
        "playfulness": 2,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 2,
        "watchdog": 3,
        "protection": 1,
        "grooming": 2,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 40,
        "wMaxM": 65,
        "wMinF": 40,
        "wMaxF": 65,
        "hMinM": 14,
        "hMaxM": 15,
        "hMinF": 14,
        "hMaxF": 15
    },
    {
        "name": "Beagle",
        "group": "Hound",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 5,
        "friendDogs": 5,
        "friendPets": 5,
        "friendStrangers": 5,
        "training": 1,
        "watchdog": 4,
        "protection": 1,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 20,
        "wMaxM": 30,
        "wMinF": 20,
        "wMaxF": 30,
        "hMinM": 13,
        "hMaxM": 15,
        "hMinF": 13,
        "hMaxF": 15
    },
    {
        "name": "Black and Tan Coonhound",
        "group": "Hound",
        "energy": 2,
        "exercise": 4,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 2,
        "training": 1,
        "watchdog": 4,
        "protection": 3,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 65,
        "wMaxM": 110,
        "wMinF": 65,
        "wMaxF": 110,
        "hMinM": 25,
        "hMaxM": 27,
        "hMinF": 23,
        "hMaxF": 25
    },
    {
        "name": "Bloodhound",
        "group": "Hound",
        "energy": 3,
        "exercise": 3,
        "playfulness": 1,
        "affection": 5,
        "friendDogs": 3,
        "friendPets": 5,
        "friendStrangers": 3,
        "training": 1,
        "watchdog": 4,
        "protection": 1,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 2,
        "wMinM": 90,
        "wMaxM": 110,
        "wMinF": 80,
        "wMaxF": 100,
        "hMinM": 25,
        "hMaxM": 27,
        "hMinF": 23,
        "hMaxF": 25
    },
    {
        "name": "Borzoi",
        "group": "Hound",
        "energy": 2,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 2,
        "friendStrangers": 2,
        "training": 2,
        "watchdog": 2,
        "protection": 3,
        "grooming": 3,
        "coldTol": 4,
        "heatTol": 2,
        "wMinM": 75,
        "wMaxM": 105,
        "wMinF": 60,
        "wMaxF": 85,
        "hMinM": 28,
        "hMaxM": 29,
        "hMinF": 26,
        "hMaxF": 27
    },
    {
        "name": "Dachshund (Long)",
        "group": "Hound",
        "energy": 4,
        "exercise": 2,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 2,
        "friendStrangers": 1,
        "training": 2,
        "watchdog": 5,
        "protection": 2,
        "grooming": 2,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 10,
        "wMaxM": 32,
        "wMinF": 10,
        "wMaxF": 32,
        "hMinM": 5,
        "hMaxM": 9,
        "hMinF": 5,
        "hMaxF": 9
    },
    {
        "name": "Dachshund (Smooth)",
        "group": "Hound",
        "energy": 4,
        "exercise": 2,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 2,
        "friendStrangers": 1,
        "training": 2,
        "watchdog": 5,
        "protection": 2,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 10,
        "wMaxM": 32,
        "wMinF": 10,
        "wMaxF": 32,
        "hMinM": 5,
        "hMaxM": 9,
        "hMinF": 5,
        "hMaxF": 9
    },
    {
        "name": "Dachshund (Wire)",
        "group": "Hound",
        "energy": 4,
        "exercise": 2,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 2,
        "friendStrangers": 1,
        "training": 2,
        "watchdog": 5,
        "protection": 2,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 10,
        "wMaxM": 32,
        "wMinF": 10,
        "wMaxF": 32,
        "hMinM": 5,
        "hMaxM": 9,
        "hMinF": 5,
        "hMaxF": 9
    },
    {
        "name": "English Foxhound",
        "group": "Hound",
        "energy": 4,
        "exercise": 4,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 5,
        "friendPets": 3,
        "friendStrangers": 4,
        "training": 2,
        "watchdog": 4,
        "protection": 1,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 60,
        "wMaxM": 75,
        "wMinF": 60,
        "wMaxF": 75,
        "hMinM": 24,
        "hMaxM": 24,
        "hMinF": 24,
        "hMaxF": 24
    },
    {
        "name": "Greyhound",
        "group": "Hound",
        "energy": 2,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 2,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 2,
        "protection": 2,
        "grooming": 1,
        "coldTol": 1,
        "heatTol": 2,
        "wMinM": 65,
        "wMaxM": 70,
        "wMinF": 60,
        "wMaxF": 65,
        "hMinM": 28,
        "hMaxM": 30,
        "hMinF": 27,
        "hMaxF": 28
    },
    {
        "name": "Harrier",
        "group": "Hound",
        "energy": 4,
        "exercise": 4,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 5,
        "friendPets": 3,
        "friendStrangers": 4,
        "training": 2,
        "watchdog": 5,
        "protection": 1,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 45,
        "wMaxM": 60,
        "wMinF": 45,
        "wMaxF": 60,
        "hMinM": 19,
        "hMaxM": 21,
        "hMinF": 19,
        "hMaxF": 21
    },
    {
        "name": "Ibizan Hound (Smooth)",
        "group": "Hound",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 2,
        "friendDogs": 4,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 2,
        "watchdog": 4,
        "protection": 1,
        "grooming": 1,
        "coldTol": 2,
        "heatTol": 3,
        "wMinM": 50,
        "wMaxM": 50,
        "wMinF": 45,
        "wMaxF": 45,
        "hMinM": 23.5,
        "hMaxM": 27.5,
        "hMinF": 22.5,
        "hMaxF": 26
    },
    {
        "name": "Ibizan Hound (Wire)",
        "group": "Hound",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 2,
        "friendDogs": 4,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 2,
        "watchdog": 4,
        "protection": 1,
        "grooming": 3,
        "coldTol": 2,
        "heatTol": 3,
        "wMinM": 50,
        "wMaxM": 50,
        "wMinF": 45,
        "wMaxF": 45,
        "hMinM": 23.5,
        "hMaxM": 27.5,
        "hMinF": 22.5,
        "hMaxF": 26
    },
    {
        "name": "Irish Wolfhound",
        "group": "Hound",
        "energy": 1,
        "exercise": 3,
        "playfulness": 1,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 2,
        "watchdog": 3,
        "protection": 2,
        "grooming": 3,
        "coldTol": 4,
        "heatTol": 1,
        "wMinM": 120,
        "wMaxM": 121,
        "wMinF": 105,
        "wMaxF": 106,
        "hMinM": 32,
        "hMaxM": 33,
        "hMinF": 30,
        "hMaxF": 31
    },
    {
        "name": "Norwegian Elkhound",
        "group": "Hound",
        "energy": 4,
        "exercise": 3,
        "playfulness": 4,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 2,
        "friendStrangers": 4,
        "training": 3,
        "watchdog": 3,
        "protection": 2,
        "grooming": 2,
        "coldTol": 5,
        "heatTol": 2,
        "wMinM": 55,
        "wMaxM": 55,
        "wMinF": 48,
        "wMaxF": 48,
        "hMinM": 20.5,
        "hMaxM": 20.5,
        "hMinF": 19.5,
        "hMaxF": 19.5
    },
    {
        "name": "Otterhound",
        "group": "Hound",
        "energy": 2,
        "exercise": 3,
        "playfulness": 3,
        "affection": 5,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 5,
        "training": 2,
        "watchdog": 4,
        "protection": 1,
        "grooming": 3,
        "coldTol": 4,
        "heatTol": 2,
        "wMinM": 115,
        "wMaxM": 115,
        "wMinF": 80,
        "wMaxF": 80,
        "hMinM": 27,
        "hMaxM": 27,
        "hMinF": 24,
        "hMaxF": 24
    },
    {
        "name": "Petit Basset Griffon Vendeen",
        "group": "Hound",
        "energy": 4,
        "exercise": 3,
        "playfulness": 4,
        "affection": 5,
        "friendDogs": 4,
        "friendPets": 2,
        "friendStrangers": 4,
        "training": 1,
        "watchdog": 4,
        "protection": 1,
        "grooming": 2,
        "coldTol": 3,
        "heatTol": 2,
        "wMinM": 25,
        "wMaxM": 40,
        "wMinF": 25,
        "wMaxF": 40,
        "hMinM": 13,
        "hMaxM": 15,
        "hMinF": 13,
        "hMaxF": 15
    },
    {
        "name": "Pharaoh Hound",
        "group": "Hound",
        "energy": 3,
        "exercise": 4,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 4,
        "friendPets": 2,
        "friendStrangers": 2,
        "training": 3,
        "watchdog": 4,
        "protection": 1,
        "grooming": 1,
        "coldTol": 2,
        "heatTol": 3,
        "wMinM": 45,
        "wMaxM": 55,
        "wMinF": 45,
        "wMaxF": 55,
        "hMinM": 23,
        "hMaxM": 25,
        "hMinF": 21,
        "hMaxF": 24
    },
    {
        "name": "Plott",
        "group": "Hound",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 2,
        "friendStrangers": 2,
        "training": 2,
        "watchdog": 4,
        "protection": 4,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 50,
        "wMaxM": 60,
        "wMinF": 40,
        "wMaxF": 55,
        "hMinM": 20,
        "hMaxM": 25,
        "hMinF": 20,
        "hMaxF": 23
    },
    {
        "name": "Redbone Coonhound",
        "group": "Hound",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 4,
        "friendPets": 2,
        "friendStrangers": 3,
        "training": 2,
        "watchdog": 3,
        "protection": 2,
        "grooming": 1,
        "coldTol": 2,
        "heatTol": 3,
        "wMinM": 45,
        "wMaxM": 65,
        "wMinF": 45,
        "wMaxF": 65,
        "hMinM": 22,
        "hMaxM": 27,
        "hMinF": 21,
        "hMaxF": 26
    },
    {
        "name": "Rhodesian Ridgeback",
        "group": "Hound",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 3,
        "watchdog": 4,
        "protection": 4,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 85,
        "wMaxM": 85,
        "wMinF": 70,
        "wMaxF": 70,
        "hMinM": 25,
        "hMaxM": 27,
        "hMinF": 24,
        "hMaxF": 26
    },
    {
        "name": "Saluki (Feathered)",
        "group": "Hound",
        "energy": 2,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 3,
        "watchdog": 3,
        "protection": 2,
        "grooming": 2,
        "coldTol": 2,
        "heatTol": 3,
        "wMinM": 40,
        "wMaxM": 65,
        "wMinF": 40,
        "wMaxF": 65,
        "hMinM": 23,
        "hMaxM": 28,
        "hMinF": 22,
        "hMaxF": 27
    },
    {
        "name": "Saluki (Smooth)",
        "group": "Hound",
        "energy": 2,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 3,
        "watchdog": 3,
        "protection": 2,
        "grooming": 1,
        "coldTol": 2,
        "heatTol": 3,
        "wMinM": 40,
        "wMaxM": 65,
        "wMinF": 40,
        "wMaxF": 65,
        "hMinM": 23,
        "hMaxM": 28,
        "hMinF": 22,
        "hMaxF": 27
    },
    {
        "name": "Scottish Deerhound",
        "group": "Hound",
        "energy": 2,
        "exercise": 3,
        "playfulness": 2,
        "affection": 3,
        "friendDogs": 4,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 2,
        "watchdog": 1,
        "protection": 2,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 2,
        "wMinM": 85,
        "wMaxM": 110,
        "wMinF": 75,
        "wMaxF": 95,
        "hMinM": 30,
        "hMaxM": 32,
        "hMinF": 28,
        "hMaxF": 29
    },
    {
        "name": "Whippet",
        "group": "Hound",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 5,
        "friendPets": 4,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 4,
        "protection": 1,
        "grooming": 1,
        "coldTol": 1,
        "heatTol": 3,
        "wMinM": 25,
        "wMaxM": 40,
        "wMinF": 25,
        "wMaxF": 40,
        "hMinM": 19,
        "hMaxM": 22,
        "hMinF": 18,
        "hMaxF": 21
    },
    {
        "name": "American Eskimo Dog",
        "group": "Non-Sporting",
        "energy": 3,
        "exercise": 3,
        "playfulness": 4,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 2,
        "friendStrangers": 2,
        "training": 4,
        "watchdog": 5,
        "protection": 1,
        "grooming": 3,
        "coldTol": 4,
        "heatTol": 1,
        "wMinM": 6,
        "wMaxM": 35,
        "wMinF": 6,
        "wMaxF": 35,
        "hMinM": 9,
        "hMaxM": 19,
        "hMinF": 9,
        "hMaxF": 19
    },
    {
        "name": "Bichon Frise",
        "group": "Non-Sporting",
        "energy": 4,
        "exercise": 2,
        "playfulness": 5,
        "affection": 5,
        "friendDogs": 4,
        "friendPets": 4,
        "friendStrangers": 5,
        "training": 4,
        "watchdog": 4,
        "protection": 1,
        "grooming": 5,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 12,
        "wMaxM": 18,
        "wMinF": 12,
        "wMaxF": 18,
        "hMinM": 9.5,
        "hMaxM": 11.5,
        "hMinF": 9.5,
        "hMaxF": 11.5
    },
    {
        "name": "Boston Terrier",
        "group": "Non-Sporting",
        "energy": 3,
        "exercise": 1,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 5,
        "protection": 1,
        "grooming": 1,
        "coldTol": 1,
        "heatTol": 1,
        "wMinM": 12,
        "wMaxM": 25,
        "wMinF": 12,
        "wMaxF": 25,
        "hMinM": 15,
        "hMaxM": 17,
        "hMinF": 15,
        "hMaxF": 17
    },
    {
        "name": "Bulldog",
        "group": "Non-Sporting",
        "energy": 1,
        "exercise": 1,
        "playfulness": 4,
        "affection": 5,
        "friendDogs": 1,
        "friendPets": 4,
        "friendStrangers": 4,
        "training": 2,
        "watchdog": 1,
        "protection": 2,
        "grooming": 2,
        "coldTol": 1,
        "heatTol": 1,
        "wMinM": 50,
        "wMaxM": 50,
        "wMinF": 40,
        "wMaxF": 40,
        "hMinM": 14,
        "hMaxM": 15,
        "hMinF": 14,
        "hMaxF": 15
    },
    {
        "name": "Chinese Shar-Pei",
        "group": "Non-Sporting",
        "energy": 3,
        "exercise": 3,
        "playfulness": 1,
        "affection": 1,
        "friendDogs": 1,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 1,
        "watchdog": 5,
        "protection": 4,
        "grooming": 2,
        "coldTol": 3,
        "heatTol": 2,
        "wMinM": 45,
        "wMaxM": 60,
        "wMinF": 45,
        "wMaxF": 60,
        "hMinM": 18,
        "hMaxM": 20,
        "hMinF": 18,
        "hMaxF": 20
    },
    {
        "name": "Chow Chow (Rough)",
        "group": "Non-Sporting",
        "energy": 1,
        "exercise": 2,
        "playfulness": 1,
        "affection": 2,
        "friendDogs": 1,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 1,
        "watchdog": 5,
        "protection": 4,
        "grooming": 4,
        "coldTol": 5,
        "heatTol": 1,
        "wMinM": 45,
        "wMaxM": 70,
        "wMinF": 45,
        "wMaxF": 70,
        "hMinM": 17,
        "hMaxM": 20,
        "hMinF": 17,
        "hMaxF": 20
    },
    {
        "name": "Chow Chow (Smooth)",
        "group": "Non-Sporting",
        "energy": 1,
        "exercise": 2,
        "playfulness": 1,
        "affection": 2,
        "friendDogs": 1,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 1,
        "watchdog": 5,
        "protection": 4,
        "grooming": 2,
        "coldTol": 5,
        "heatTol": 1,
        "wMinM": 45,
        "wMaxM": 70,
        "wMinF": 45,
        "wMaxF": 70,
        "hMinM": 17,
        "hMaxM": 20,
        "hMinF": 17,
        "hMaxF": 20
    },
    {
        "name": "Dalmatian",
        "group": "Non-Sporting",
        "energy": 4,
        "exercise": 3,
        "playfulness": 3,
        "affection": 5,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 4,
        "protection": 3,
        "grooming": 2,
        "coldTol": 2,
        "heatTol": 3,
        "wMinM": 45,
        "wMaxM": 70,
        "wMinF": 45,
        "wMaxF": 70,
        "hMinM": 19,
        "hMaxM": 24,
        "hMinF": 19,
        "hMaxF": 24
    },
    {
        "name": "Finnish Spitz",
        "group": "Non-Sporting",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 3,
        "watchdog": 4,
        "protection": 3,
        "grooming": 3,
        "coldTol": 4,
        "heatTol": 2,
        "wMinM": 25,
        "wMaxM": 33,
        "wMinF": 20,
        "wMaxF": 28,
        "hMinM": 17.5,
        "hMaxM": 20,
        "hMinF": 15.5,
        "hMaxF": 18
    },
    {
        "name": "French Bulldog",
        "group": "Non-Sporting",
        "energy": 3,
        "exercise": 1,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 1,
        "training": 2,
        "watchdog": 3,
        "protection": 1,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 1,
        "wMinM": 27,
        "wMaxM": 28,
        "wMinF": 27,
        "wMaxF": 28,
        "hMinM": 11,
        "hMaxM": 13,
        "hMinF": 11,
        "hMaxF": 13
    },
    {
        "name": "Keeshond",
        "group": "Non-Sporting",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 5,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 4,
        "training": 3,
        "watchdog": 5,
        "protection": 1,
        "grooming": 3,
        "coldTol": 4,
        "heatTol": 1,
        "wMinM": 35,
        "wMaxM": 45,
        "wMinF": 35,
        "wMaxF": 45,
        "hMinM": 18,
        "hMaxM": 18,
        "hMinF": 17,
        "hMaxF": 17
    },
    {
        "name": "Lhasa Apso",
        "group": "Non-Sporting",
        "energy": 3,
        "exercise": 2,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 1,
        "watchdog": 5,
        "protection": 1,
        "grooming": 4,
        "coldTol": 3,
        "heatTol": 2,
        "wMinM": 12,
        "wMaxM": 18,
        "wMinF": 12,
        "wMaxF": 18,
        "hMinM": 10,
        "hMaxM": 11,
        "hMinF": 10,
        "hMaxF": 11
    },
    {
        "name": "L\u00f6wchen",
        "group": "Non-Sporting",
        "energy": 4,
        "exercise": 1,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 4,
        "friendPets": 4,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 4,
        "protection": 1,
        "grooming": 4,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 15,
        "wMaxM": 15,
        "wMinF": 15,
        "wMaxF": 15,
        "hMinM": 12,
        "hMaxM": 14,
        "hMinF": 12,
        "hMaxF": 14
    },
    {
        "name": "Poodle (Miniature)",
        "group": "Non-Sporting",
        "energy": 4,
        "exercise": 3,
        "playfulness": 5,
        "affection": 4,
        "friendDogs": 4,
        "friendPets": 3,
        "friendStrangers": 4,
        "training": 5,
        "watchdog": 5,
        "protection": 1,
        "grooming": 5,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 10,
        "wMaxM": 15,
        "wMinF": 10,
        "wMaxF": 15,
        "hMinM": 10,
        "hMaxM": 15,
        "hMinF": 10,
        "hMaxF": 15
    },
    {
        "name": "Poodle (Standard)",
        "group": "Non-Sporting",
        "energy": 3,
        "exercise": 4,
        "playfulness": 4,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 3,
        "training": 5,
        "watchdog": 5,
        "protection": 4,
        "grooming": 5,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 60,
        "wMaxM": 70,
        "wMinF": 40,
        "wMaxF": 50,
        "hMinM": 15,
        "hMaxM": 16,
        "hMinF": 15,
        "hMaxF": 16
    },
    {
        "name": "Schipperke",
        "group": "Non-Sporting",
        "energy": 4,
        "exercise": 3,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 2,
        "training": 3,
        "watchdog": 5,
        "protection": 4,
        "grooming": 2,
        "coldTol": 3,
        "heatTol": 2,
        "wMinM": 10,
        "wMaxM": 16,
        "wMinF": 10,
        "wMaxF": 16,
        "hMinM": 11,
        "hMaxM": 13,
        "hMinF": 10,
        "hMaxF": 12
    },
    {
        "name": "Shiba Inu",
        "group": "Non-Sporting",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 2,
        "friendStrangers": 3,
        "training": 2,
        "watchdog": 5,
        "protection": 3,
        "grooming": 3,
        "coldTol": 4,
        "heatTol": 2,
        "wMinM": 23,
        "wMaxM": 23,
        "wMinF": 17,
        "wMaxF": 17,
        "hMinM": 14.5,
        "hMaxM": 16.5,
        "hMinF": 13.5,
        "hMaxF": 15.5
    },
    {
        "name": "Tibetan Spaniel",
        "group": "Non-Sporting",
        "energy": 3,
        "exercise": 2,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 4,
        "friendPets": 4,
        "friendStrangers": 1,
        "training": 3,
        "watchdog": 5,
        "protection": 1,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 2,
        "wMinM": 9,
        "wMaxM": 15,
        "wMinF": 9,
        "wMaxF": 15,
        "hMinM": 10,
        "hMaxM": 10,
        "hMinF": 10,
        "hMaxF": 10
    },
    {
        "name": "Tibetan Terrier",
        "group": "Non-Sporting",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 2,
        "training": 3,
        "watchdog": 4,
        "protection": 1,
        "grooming": 4,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 18,
        "wMaxM": 30,
        "wMinF": 18,
        "wMaxF": 30,
        "hMinM": 14,
        "hMaxM": 17,
        "hMinF": 14,
        "hMaxF": 17
    },
    {
        "name": "American Water Spaniel",
        "group": "Sporting",
        "energy": 4,
        "exercise": 3,
        "playfulness": 4,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 3,
        "friendStrangers": 2,
        "training": 3,
        "watchdog": 4,
        "protection": 3,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 30,
        "wMaxM": 45,
        "wMinF": 25,
        "wMaxF": 40,
        "hMinM": 15,
        "hMaxM": 18,
        "hMinF": 15,
        "hMaxF": 18
    },
    {
        "name": "Brittany",
        "group": "Sporting",
        "energy": 4,
        "exercise": 5,
        "playfulness": 4,
        "affection": 5,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 5,
        "training": 4,
        "watchdog": 4,
        "protection": 1,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 30,
        "wMaxM": 40,
        "wMinF": 30,
        "wMaxF": 40,
        "hMinM": 17.5,
        "hMaxM": 20.5,
        "hMinF": 17.5,
        "hMaxF": 20.5
    },
    {
        "name": "Chesapeake Bay Retriever",
        "group": "Sporting",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 2,
        "training": 3,
        "watchdog": 4,
        "protection": 3,
        "grooming": 2,
        "coldTol": 4,
        "heatTol": 3,
        "wMinM": 65,
        "wMaxM": 80,
        "wMinF": 55,
        "wMaxF": 70,
        "hMinM": 23,
        "hMaxM": 26,
        "hMinF": 21,
        "hMaxF": 24
    },
    {
        "name": "Clumber Spaniel",
        "group": "Sporting",
        "energy": 2,
        "exercise": 2,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 2,
        "protection": 1,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 2,
        "wMinM": 70,
        "wMaxM": 85,
        "wMinF": 55,
        "wMaxF": 70,
        "hMinM": 18,
        "hMaxM": 20,
        "hMinF": 17,
        "hMaxF": 19
    },
    {
        "name": "Cocker Spaniel",
        "group": "Sporting",
        "energy": 3,
        "exercise": 3,
        "playfulness": 4,
        "affection": 5,
        "friendDogs": 5,
        "friendPets": 5,
        "friendStrangers": 4,
        "training": 4,
        "watchdog": 4,
        "protection": 1,
        "grooming": 4,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 25,
        "wMaxM": 30,
        "wMinF": 20,
        "wMaxF": 25,
        "hMinM": 15,
        "hMaxM": 15,
        "hMinF": 14,
        "hMaxF": 14
    },
    {
        "name": "Curly-Coated Retriever",
        "group": "Sporting",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 2,
        "training": 3,
        "watchdog": 4,
        "protection": 2,
        "grooming": 1,
        "coldTol": 4,
        "heatTol": 3,
        "wMinM": 60,
        "wMaxM": 95,
        "wMinF": 60,
        "wMaxF": 95,
        "hMinM": 25,
        "hMaxM": 27,
        "hMinF": 23,
        "hMaxF": 25
    },
    {
        "name": "English Cocker Spaniel",
        "group": "Sporting",
        "energy": 3,
        "exercise": 3,
        "playfulness": 4,
        "affection": 5,
        "friendDogs": 5,
        "friendPets": 5,
        "friendStrangers": 4,
        "training": 4,
        "watchdog": 4,
        "protection": 2,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 28,
        "wMaxM": 34,
        "wMinF": 26,
        "wMaxF": 32,
        "hMinM": 16,
        "hMaxM": 17,
        "hMinF": 15,
        "hMaxF": 16
    },
    {
        "name": "English Setter",
        "group": "Sporting",
        "energy": 4,
        "exercise": 4,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 5,
        "training": 3,
        "watchdog": 4,
        "protection": 2,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 65,
        "wMaxM": 80,
        "wMinF": 45,
        "wMaxF": 55,
        "hMinM": 25,
        "hMaxM": 27,
        "hMinF": 23,
        "hMaxF": 25
    },
    {
        "name": "English Springer Spaniel",
        "group": "Sporting",
        "energy": 3,
        "exercise": 4,
        "playfulness": 4,
        "affection": 5,
        "friendDogs": 3,
        "friendPets": 5,
        "friendStrangers": 4,
        "training": 5,
        "watchdog": 4,
        "protection": 2,
        "grooming": 4,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 50,
        "wMaxM": 50,
        "wMinF": 40,
        "wMaxF": 40,
        "hMinM": 20,
        "hMaxM": 20,
        "hMinF": 19,
        "hMaxF": 19
    },
    {
        "name": "Field Spaniel",
        "group": "Sporting",
        "energy": 4,
        "exercise": 4,
        "playfulness": 4,
        "affection": 5,
        "friendDogs": 3,
        "friendPets": 5,
        "friendStrangers": 3,
        "training": 4,
        "watchdog": 4,
        "protection": 2,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 35,
        "wMaxM": 50,
        "wMinF": 35,
        "wMaxF": 50,
        "hMinM": 18,
        "hMaxM": 18,
        "hMinF": 17,
        "hMaxF": 17
    },
    {
        "name": "Flat-Coated Retriever",
        "group": "Sporting",
        "energy": 3,
        "exercise": 3,
        "playfulness": 4,
        "affection": 5,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 4,
        "training": 5,
        "watchdog": 4,
        "protection": 2,
        "grooming": 2,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 60,
        "wMaxM": 70,
        "wMinF": 60,
        "wMaxF": 70,
        "hMinM": 23,
        "hMaxM": 24.5,
        "hMinF": 22,
        "hMaxF": 23.5
    },
    {
        "name": "German Shorthaired Pointer",
        "group": "Sporting",
        "energy": 3,
        "exercise": 3,
        "playfulness": 5,
        "affection": 5,
        "friendDogs": 5,
        "friendPets": 5,
        "friendStrangers": 5,
        "training": 5,
        "watchdog": 3,
        "protection": 2,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 55,
        "wMaxM": 70,
        "wMinF": 45,
        "wMaxF": 60,
        "hMinM": 23,
        "hMaxM": 25,
        "hMinF": 21,
        "hMaxF": 23
    },
    {
        "name": "German Wirehaired Pointer",
        "group": "Sporting",
        "energy": 5,
        "exercise": 5,
        "playfulness": 4,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 3,
        "friendStrangers": 2,
        "training": 3,
        "watchdog": 5,
        "protection": 4,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 60,
        "wMaxM": 70,
        "wMinF": 50,
        "wMaxF": 60,
        "hMinM": 24,
        "hMaxM": 26,
        "hMinF": 22,
        "hMaxF": 24
    },
    {
        "name": "Golden Retriever",
        "group": "Sporting",
        "energy": 4,
        "exercise": 3,
        "playfulness": 5,
        "affection": 5,
        "friendDogs": 4,
        "friendPets": 5,
        "friendStrangers": 5,
        "training": 5,
        "watchdog": 3,
        "protection": 2,
        "grooming": 2,
        "coldTol": 4,
        "heatTol": 3,
        "wMinM": 65,
        "wMaxM": 80,
        "wMinF": 55,
        "wMaxF": 70,
        "hMinM": 23,
        "hMaxM": 24,
        "hMinF": 21.5,
        "hMaxF": 22.5
    },
    {
        "name": "Gordon Setter",
        "group": "Sporting",
        "energy": 4,
        "exercise": 4,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 2,
        "friendPets": 4,
        "friendStrangers": 2,
        "training": 3,
        "watchdog": 4,
        "protection": 3,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 55,
        "wMaxM": 80,
        "wMinF": 45,
        "wMaxF": 70,
        "hMinM": 24,
        "hMaxM": 27,
        "hMinF": 23,
        "hMaxF": 26
    },
    {
        "name": "Irish Setter",
        "group": "Sporting",
        "energy": 5,
        "exercise": 5,
        "playfulness": 5,
        "affection": 5,
        "friendDogs": 4,
        "friendPets": 4,
        "friendStrangers": 5,
        "training": 3,
        "watchdog": 4,
        "protection": 1,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 70,
        "wMaxM": 70,
        "wMinF": 60,
        "wMaxF": 60,
        "hMinM": 27,
        "hMaxM": 27,
        "hMinF": 25,
        "hMaxF": 25
    },
    {
        "name": "Irish Water Spaniel",
        "group": "Sporting",
        "energy": 5,
        "exercise": 5,
        "playfulness": 5,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 2,
        "training": 5,
        "watchdog": 4,
        "protection": 3,
        "grooming": 3,
        "coldTol": 4,
        "heatTol": 3,
        "wMinM": 55,
        "wMaxM": 68,
        "wMinF": 45,
        "wMaxF": 58,
        "hMinM": 22,
        "hMaxM": 24,
        "hMinF": 21,
        "hMaxF": 23
    },
    {
        "name": "Labrador Retriever",
        "group": "Sporting",
        "energy": 4,
        "exercise": 3,
        "playfulness": 5,
        "affection": 5,
        "friendDogs": 4,
        "friendPets": 5,
        "friendStrangers": 5,
        "training": 5,
        "watchdog": 4,
        "protection": 2,
        "grooming": 2,
        "coldTol": 4,
        "heatTol": 3,
        "wMinM": 65,
        "wMaxM": 80,
        "wMinF": 55,
        "wMaxF": 70,
        "hMinM": 22.5,
        "hMaxM": 24.5,
        "hMinF": 21.5,
        "hMaxF": 23.5
    },
    {
        "name": "Nova Scotia Duck Tolling Retriever",
        "group": "Sporting",
        "energy": 5,
        "exercise": 5,
        "playfulness": 5,
        "affection": 5,
        "friendDogs": 5,
        "friendPets": 5,
        "friendStrangers": 3,
        "training": 4,
        "watchdog": 2,
        "protection": 2,
        "grooming": 2,
        "coldTol": 4,
        "heatTol": 3,
        "wMinM": 35,
        "wMaxM": 50,
        "wMinF": 35,
        "wMaxF": 50,
        "hMinM": 18,
        "hMaxM": 21,
        "hMinF": 17,
        "hMaxF": 20
    },
    {
        "name": "Pointer",
        "group": "Sporting",
        "energy": 4,
        "exercise": 4,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 4,
        "friendPets": 4,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 4,
        "protection": 3,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 55,
        "wMaxM": 75,
        "wMinF": 45,
        "wMaxF": 65,
        "hMinM": 25,
        "hMaxM": 28,
        "hMinF": 23,
        "hMaxF": 26
    },
    {
        "name": "Spinone Italiano",
        "group": "Sporting",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 4,
        "training": 3,
        "watchdog": 4,
        "protection": 1,
        "grooming": 2,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 71,
        "wMaxM": 82,
        "wMinF": 62,
        "wMaxF": 71,
        "hMinM": 23,
        "hMaxM": 27,
        "hMinF": 22,
        "hMaxF": 25
    },
    {
        "name": "Sussex Spaniel",
        "group": "Sporting",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 3,
        "training": 2,
        "watchdog": 4,
        "protection": 3,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 35,
        "wMaxM": 45,
        "wMinF": 35,
        "wMaxF": 45,
        "hMinM": 13,
        "hMaxM": 15,
        "hMinF": 13,
        "hMaxF": 15
    },
    {
        "name": "Vizsla",
        "group": "Sporting",
        "energy": 3,
        "exercise": 3,
        "playfulness": 4,
        "affection": 5,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 5,
        "training": 3,
        "watchdog": 4,
        "protection": 1,
        "grooming": 1,
        "coldTol": 2,
        "heatTol": 3,
        "wMinM": 55,
        "wMaxM": 60,
        "wMinF": 44,
        "wMaxF": 55,
        "hMinM": 22,
        "hMaxM": 24,
        "hMinF": 21,
        "hMaxF": 23
    },
    {
        "name": "Weimaraner",
        "group": "Sporting",
        "energy": 5,
        "exercise": 4,
        "playfulness": 4,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 2,
        "friendStrangers": 2,
        "training": 4,
        "watchdog": 5,
        "protection": 4,
        "grooming": 1,
        "coldTol": 2,
        "heatTol": 3,
        "wMinM": 70,
        "wMaxM": 90,
        "wMinF": 55,
        "wMaxF": 75,
        "hMinM": 25,
        "hMaxM": 27,
        "hMinF": 23,
        "hMaxF": 25
    },
    {
        "name": "Welsh Springer Spaniel",
        "group": "Sporting",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 2,
        "training": 3,
        "watchdog": 4,
        "protection": 2,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 35,
        "wMaxM": 50,
        "wMinF": 35,
        "wMaxF": 50,
        "hMinM": 18,
        "hMaxM": 19,
        "hMinF": 17,
        "hMaxF": 18
    },
    {
        "name": "Wirehaired Pointing Griffon",
        "group": "Sporting",
        "energy": 4,
        "exercise": 4,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 5,
        "protection": 3,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 2,
        "wMinM": 50,
        "wMaxM": 70,
        "wMinF": 35,
        "wMaxF": 50,
        "hMinM": 22,
        "hMaxM": 24,
        "hMinF": 20,
        "hMaxF": 22
    },
    {
        "name": "Airedale Terrier",
        "group": "Terrier",
        "energy": 4,
        "exercise": 3,
        "playfulness": 4,
        "affection": 3,
        "friendDogs": 1,
        "friendPets": 2,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 4,
        "protection": 4,
        "grooming": 4,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 50,
        "wMaxM": 70,
        "wMinF": 50,
        "wMaxF": 70,
        "hMinM": 23,
        "hMaxM": 23,
        "hMinF": 23,
        "hMaxF": 23
    },
    {
        "name": "American Staffordshire Terrier",
        "group": "Terrier",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 1,
        "friendPets": 1,
        "friendStrangers": 3,
        "training": 4,
        "watchdog": 5,
        "protection": 5,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 55,
        "wMaxM": 70,
        "wMinF": 40,
        "wMaxF": 55,
        "hMinM": 18,
        "hMaxM": 19,
        "hMinF": 17,
        "hMaxF": 18
    },
    {
        "name": "Australian Terrier",
        "group": "Terrier",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 2,
        "training": 2,
        "watchdog": 5,
        "protection": 1,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 15,
        "wMaxM": 20,
        "wMinF": 15,
        "wMaxF": 20,
        "hMinM": 10,
        "hMaxM": 11,
        "hMinF": 10,
        "hMaxF": 11
    },
    {
        "name": "Bedlington Terrier",
        "group": "Terrier",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 2,
        "friendStrangers": 4,
        "training": 2,
        "watchdog": 5,
        "protection": 1,
        "grooming": 5,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 17,
        "wMaxM": 23,
        "wMinF": 17,
        "wMaxF": 23,
        "hMinM": 16.5,
        "hMaxM": 16.5,
        "hMinF": 15.5,
        "hMaxF": 15.5
    },
    {
        "name": "Border Terrier",
        "group": "Terrier",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 2,
        "friendStrangers": 3,
        "training": 4,
        "watchdog": 4,
        "protection": 1,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 13,
        "wMaxM": 15.5,
        "wMinF": 11.5,
        "wMaxF": 14,
        "hMinM": 12,
        "hMaxM": 15,
        "hMinF": 12,
        "hMaxF": 15
    },
    {
        "name": "Bull Terrier",
        "group": "Terrier",
        "energy": 4,
        "exercise": 3,
        "playfulness": 5,
        "affection": 3,
        "friendDogs": 1,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 1,
        "watchdog": 5,
        "protection": 4,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 50,
        "wMaxM": 70,
        "wMinF": 50,
        "wMaxF": 70,
        "hMinM": 21,
        "hMaxM": 22,
        "hMinF": 21,
        "hMaxF": 22
    },
    {
        "name": "Cairn Terrier",
        "group": "Terrier",
        "energy": 4,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 1,
        "friendStrangers": 1,
        "training": 1,
        "watchdog": 5,
        "protection": 1,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 14,
        "wMaxM": 14,
        "wMinF": 13,
        "wMaxF": 13,
        "hMinM": 10,
        "hMaxM": 10,
        "hMinF": 9.5,
        "hMaxF": 9.5
    },
    {
        "name": "Dandie Dinmont Terrier",
        "group": "Terrier",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 2,
        "watchdog": 4,
        "protection": 1,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 18,
        "wMaxM": 24,
        "wMinF": 18,
        "wMaxF": 24,
        "hMinM": 8,
        "hMaxM": 11,
        "hMinF": 8,
        "hMaxF": 11
    },
    {
        "name": "Fox Terrier (Smooth)",
        "group": "Terrier",
        "energy": 4,
        "exercise": 3,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 2,
        "friendStrangers": 4,
        "training": 4,
        "watchdog": 5,
        "protection": 1,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 17,
        "wMaxM": 19,
        "wMinF": 15,
        "wMaxF": 17,
        "hMinM": 14.5,
        "hMaxM": 15.5,
        "hMinF": 13.5,
        "hMaxF": 14.5
    },
    {
        "name": "Fox Terrier (Wire)",
        "group": "Terrier",
        "energy": 4,
        "exercise": 3,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 1,
        "friendPets": 2,
        "friendStrangers": 4,
        "training": 4,
        "watchdog": 5,
        "protection": 1,
        "grooming": 4,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 17,
        "wMaxM": 19,
        "wMinF": 15,
        "wMaxF": 17,
        "hMinM": 14.5,
        "hMaxM": 15.5,
        "hMinF": 13.5,
        "hMaxF": 14.5
    },
    {
        "name": "Glen of Imaal Terrier",
        "group": "Terrier",
        "energy": 3,
        "exercise": 3,
        "playfulness": 5,
        "affection": 4,
        "friendDogs": 2,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 2,
        "protection": 2,
        "grooming": 2,
        "coldTol": 3,
        "heatTol": 2,
        "wMinM": 35,
        "wMaxM": 35,
        "wMinF": 34,
        "wMaxF": 34,
        "hMinM": 12.5,
        "hMaxM": 14,
        "hMinF": 12.5,
        "hMaxF": 14
    },
    {
        "name": "Irish Terrier",
        "group": "Terrier",
        "energy": 3,
        "exercise": 3,
        "playfulness": 5,
        "affection": 2,
        "friendDogs": 1,
        "friendPets": 1,
        "friendStrangers": 2,
        "training": 1,
        "watchdog": 5,
        "protection": 4,
        "grooming": 4,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 27,
        "wMaxM": 27,
        "wMinF": 25,
        "wMaxF": 25,
        "hMinM": 18,
        "hMaxM": 18,
        "hMinF": 18,
        "hMaxF": 18
    },
    {
        "name": "Kerry Blue Terrier",
        "group": "Terrier",
        "energy": 3,
        "exercise": 3,
        "playfulness": 4,
        "affection": 3,
        "friendDogs": 1,
        "friendPets": 1,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 5,
        "protection": 4,
        "grooming": 5,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 33,
        "wMaxM": 40,
        "wMinF": 32,
        "wMaxF": 39,
        "hMinM": 18,
        "hMaxM": 19.5,
        "hMinF": 17.5,
        "hMaxF": 19
    },
    {
        "name": "Lakeland Terrier",
        "group": "Terrier",
        "energy": 4,
        "exercise": 3,
        "playfulness": 5,
        "affection": 3,
        "friendDogs": 1,
        "friendPets": 1,
        "friendStrangers": 1,
        "training": 1,
        "watchdog": 5,
        "protection": 1,
        "grooming": 4,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 17,
        "wMaxM": 17,
        "wMinF": 17,
        "wMaxF": 17,
        "hMinM": 14.5,
        "hMaxM": 14.5,
        "hMinF": 13.5,
        "hMaxF": 13.5
    },
    {
        "name": "Manchester Terrier",
        "group": "Terrier",
        "energy": 4,
        "exercise": 3,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 1,
        "friendStrangers": 1,
        "training": 2,
        "watchdog": 5,
        "protection": 1,
        "grooming": 1,
        "coldTol": 1,
        "heatTol": 4,
        "wMinM": 12,
        "wMaxM": 22,
        "wMinF": 12,
        "wMaxF": 22,
        "hMinM": 15,
        "hMaxM": 16,
        "hMinF": 15,
        "hMaxF": 16
    },
    {
        "name": "Miniature Bull Terrier",
        "group": "Terrier",
        "energy": 4,
        "exercise": 3,
        "playfulness": 5,
        "affection": 2,
        "friendDogs": 2,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 1,
        "watchdog": 5,
        "protection": 3,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 18,
        "wMaxM": 28,
        "wMinF": 18,
        "wMaxF": 28,
        "hMinM": 10,
        "hMaxM": 14,
        "hMinF": 10,
        "hMaxF": 14
    },
    {
        "name": "Miniature Schnauzer",
        "group": "Terrier",
        "energy": 3,
        "exercise": 3,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 5,
        "protection": 1,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 11,
        "wMaxM": 18,
        "wMinF": 10,
        "wMaxF": 15,
        "hMinM": 12,
        "hMaxM": 14,
        "hMinF": 12,
        "hMaxF": 14
    },
    {
        "name": "Norfolk Terrier",
        "group": "Terrier",
        "energy": 4,
        "exercise": 3,
        "playfulness": 3,
        "affection": 1,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 2,
        "watchdog": 5,
        "protection": 1,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 11,
        "wMaxM": 12,
        "wMinF": 11,
        "wMaxF": 12,
        "hMinM": 9,
        "hMaxM": 10,
        "hMinF": 9,
        "hMaxF": 10
    },
    {
        "name": "Norwich Terrier",
        "group": "Terrier",
        "energy": 4,
        "exercise": 3,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 5,
        "protection": 1,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 12,
        "wMaxM": 12,
        "wMinF": 12,
        "wMaxF": 12,
        "hMinM": 10,
        "hMaxM": 10,
        "hMinF": 10,
        "hMaxF": 10
    },
    {
        "name": "Parson Russell Terrier (Broken)",
        "group": "Terrier",
        "energy": 5,
        "exercise": 4,
        "playfulness": 5,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 1,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 5,
        "protection": 2,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 13,
        "wMaxM": 17,
        "wMinF": 13,
        "wMaxF": 17,
        "hMinM": 14,
        "hMaxM": 14,
        "hMinF": 13,
        "hMaxF": 13
    },
    {
        "name": "Parson Russell Terrier (Smooth)",
        "group": "Terrier",
        "energy": 5,
        "exercise": 4,
        "playfulness": 5,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 1,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 5,
        "protection": 2,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 13,
        "wMaxM": 17,
        "wMinF": 13,
        "wMaxF": 17,
        "hMinM": 14,
        "hMaxM": 14,
        "hMinF": 13,
        "hMaxF": 13
    },
    {
        "name": "Scottish Terrier",
        "group": "Terrier",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 1,
        "watchdog": 5,
        "protection": 2,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 1,
        "wMinM": 19,
        "wMaxM": 22,
        "wMinF": 18,
        "wMaxF": 21,
        "hMinM": 10,
        "hMaxM": 10,
        "hMinF": 10,
        "hMaxF": 10
    },
    {
        "name": "Sealyham Terrier",
        "group": "Terrier",
        "energy": 2,
        "exercise": 2,
        "playfulness": 2,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 1,
        "watchdog": 4,
        "protection": 1,
        "grooming": 4,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 23,
        "wMaxM": 24,
        "wMinF": 22,
        "wMaxF": 23,
        "hMinM": 10.5,
        "hMaxM": 10.5,
        "hMinF": 10.5,
        "hMaxF": 10.5
    },
    {
        "name": "Skye Terrier",
        "group": "Terrier",
        "energy": 2,
        "exercise": 2,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 1,
        "friendPets": 1,
        "friendStrangers": 1,
        "training": 3,
        "watchdog": 5,
        "protection": 1,
        "grooming": 3,
        "coldTol": 4,
        "heatTol": 2,
        "wMinM": 45,
        "wMaxM": 45,
        "wMinF": 40,
        "wMaxF": 40,
        "hMinM": 10,
        "hMaxM": 10,
        "hMinF": 9.5,
        "hMaxF": 9.5
    },
    {
        "name": "Soft Coated Wheaten Terrier",
        "group": "Terrier",
        "energy": 3,
        "exercise": 3,
        "playfulness": 4,
        "affection": 5,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 4,
        "training": 3,
        "watchdog": 4,
        "protection": 2,
        "grooming": 4,
        "coldTol": 3,
        "heatTol": 1,
        "wMinM": 35,
        "wMaxM": 40,
        "wMinF": 30,
        "wMaxF": 35,
        "hMinM": 18,
        "hMaxM": 19,
        "hMinF": 17,
        "hMaxF": 18
    },
    {
        "name": "Staffordshire Bull Terrier",
        "group": "Terrier",
        "energy": 3,
        "exercise": 3,
        "playfulness": 5,
        "affection": 4,
        "friendDogs": 2,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 3,
        "protection": 3,
        "grooming": 1,
        "coldTol": 2,
        "heatTol": 2,
        "wMinM": 28,
        "wMaxM": 38,
        "wMinF": 24,
        "wMaxF": 34,
        "hMinM": 14,
        "hMaxM": 16,
        "hMinF": 14,
        "hMaxF": 16
    },
    {
        "name": "Welsh Terrier",
        "group": "Terrier",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 1,
        "friendStrangers": 1,
        "training": 1,
        "watchdog": 5,
        "protection": 1,
        "grooming": 4,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 20,
        "wMaxM": 20,
        "wMinF": 20,
        "wMaxF": 20,
        "hMinM": 15,
        "hMaxM": 15,
        "hMinF": 15,
        "hMaxF": 15
    },
    {
        "name": "West Highland White Terrier",
        "group": "Terrier",
        "energy": 4,
        "exercise": 3,
        "playfulness": 3,
        "affection": 5,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 4,
        "training": 4,
        "watchdog": 4,
        "protection": 1,
        "grooming": 4,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 15,
        "wMaxM": 20,
        "wMinF": 15,
        "wMaxF": 20,
        "hMinM": 11,
        "hMaxM": 11,
        "hMinF": 10,
        "hMaxF": 10
    },
    {
        "name": "Affenpinscher",
        "group": "Toy",
        "energy": 4,
        "exercise": 3,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 5,
        "protection": 1,
        "grooming": 4,
        "coldTol": 2,
        "heatTol": 2,
        "wMinM": 7,
        "wMaxM": 10,
        "wMinF": 7,
        "wMaxF": 10,
        "hMinM": 9,
        "hMaxM": 11.5,
        "hMinF": 9,
        "hMaxF": 11.5
    },
    {
        "name": "Brussels Griffon (Rough)",
        "group": "Toy",
        "energy": 4,
        "exercise": 2,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 2,
        "training": 3,
        "watchdog": 5,
        "protection": 1,
        "grooming": 4,
        "coldTol": 2,
        "heatTol": 1,
        "wMinM": 8,
        "wMaxM": 10,
        "wMinF": 8,
        "wMaxF": 10,
        "hMinM": 7,
        "hMaxM": 10,
        "hMinF": 7,
        "hMaxF": 10
    },
    {
        "name": "Brussels Griffon (Smooth)",
        "group": "Toy",
        "energy": 4,
        "exercise": 2,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 2,
        "training": 3,
        "watchdog": 5,
        "protection": 1,
        "grooming": 1,
        "coldTol": 2,
        "heatTol": 1,
        "wMinM": 8,
        "wMaxM": 10,
        "wMinF": 8,
        "wMaxF": 10,
        "hMinM": 7,
        "hMaxM": 10,
        "hMinF": 7,
        "hMaxF": 10
    },
    {
        "name": "Cavalier King Charles Spaniel",
        "group": "Toy",
        "energy": 3,
        "exercise": 3,
        "playfulness": 4,
        "affection": 5,
        "friendDogs": 5,
        "friendPets": 5,
        "friendStrangers": 5,
        "training": 4,
        "watchdog": 3,
        "protection": 1,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 2,
        "wMinM": 13,
        "wMaxM": 18,
        "wMinF": 13,
        "wMaxF": 18,
        "hMinM": 12,
        "hMaxM": 13,
        "hMinF": 12,
        "hMaxF": 13
    },
    {
        "name": "Chihuahua (Long)",
        "group": "Toy",
        "energy": 5,
        "exercise": 1,
        "playfulness": 2,
        "affection": 2,
        "friendDogs": 1,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 2,
        "watchdog": 5,
        "protection": 1,
        "grooming": 2,
        "coldTol": 1,
        "heatTol": 4,
        "wMinM": 5,
        "wMaxM": 6,
        "wMinF": 5,
        "wMaxF": 6,
        "hMinM": 5,
        "hMaxM": 8,
        "hMinF": 5,
        "hMaxF": 8
    },
    {
        "name": "Chihuahua (Smooth)",
        "group": "Toy",
        "energy": 5,
        "exercise": 1,
        "playfulness": 2,
        "affection": 2,
        "friendDogs": 1,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 2,
        "watchdog": 5,
        "protection": 1,
        "grooming": 1,
        "coldTol": 1,
        "heatTol": 4,
        "wMinM": 5,
        "wMaxM": 6,
        "wMinF": 5,
        "wMaxF": 6,
        "hMinM": 5,
        "hMaxM": 8,
        "hMinF": 5,
        "hMaxF": 8
    },
    {
        "name": "Chinese Crested",
        "group": "Toy",
        "energy": 3,
        "exercise": 1,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 5,
        "friendStrangers": 5,
        "training": 3,
        "watchdog": 4,
        "protection": 1,
        "grooming": 3,
        "coldTol": 1,
        "heatTol": 4,
        "wMinM": 8,
        "wMaxM": 12,
        "wMinF": 8,
        "wMaxF": 12,
        "hMinM": 11,
        "hMaxM": 13,
        "hMinF": 11,
        "hMaxF": 13
    },
    {
        "name": "English Toy Spaniel",
        "group": "Toy",
        "energy": 1,
        "exercise": 1,
        "playfulness": 3,
        "affection": 2,
        "friendDogs": 4,
        "friendPets": 4,
        "friendStrangers": 2,
        "training": 3,
        "watchdog": 4,
        "protection": 1,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 1,
        "wMinM": 8,
        "wMaxM": 14,
        "wMinF": 8,
        "wMaxF": 14,
        "hMinM": 9,
        "hMaxM": 10,
        "hMinF": 9,
        "hMaxF": 10
    },
    {
        "name": "Havanese",
        "group": "Toy",
        "energy": 4,
        "exercise": 3,
        "playfulness": 5,
        "affection": 5,
        "friendDogs": 4,
        "friendPets": 4,
        "friendStrangers": 5,
        "training": 4,
        "watchdog": 4,
        "protection": 1,
        "grooming": 3,
        "coldTol": 2,
        "heatTol": 3,
        "wMinM": 7,
        "wMaxM": 13,
        "wMinF": 7,
        "wMaxF": 13,
        "hMinM": 8.5,
        "hMaxM": 11.5,
        "hMinF": 8.5,
        "hMaxF": 11.5
    },
    {
        "name": "Italian Greyhound",
        "group": "Toy",
        "energy": 4,
        "exercise": 2,
        "playfulness": 3,
        "affection": 5,
        "friendDogs": 4,
        "friendPets": 4,
        "friendStrangers": 2,
        "training": 3,
        "watchdog": 3,
        "protection": 1,
        "grooming": 1,
        "coldTol": 1,
        "heatTol": 4,
        "wMinM": 7,
        "wMaxM": 14,
        "wMinF": 7,
        "wMaxF": 14,
        "hMinM": 13,
        "hMaxM": 15,
        "hMinF": 13,
        "hMaxF": 15
    },
    {
        "name": "Japanese Chin",
        "group": "Toy",
        "energy": 3,
        "exercise": 1,
        "playfulness": 4,
        "affection": 5,
        "friendDogs": 4,
        "friendPets": 4,
        "friendStrangers": 5,
        "training": 3,
        "watchdog": 5,
        "protection": 1,
        "grooming": 3,
        "coldTol": 2,
        "heatTol": 2,
        "wMinM": 7,
        "wMaxM": 11,
        "wMinF": 7,
        "wMaxF": 11,
        "hMinM": 8,
        "hMaxM": 11,
        "hMinF": 8,
        "hMaxF": 11
    },
    {
        "name": "Maltese",
        "group": "Toy",
        "energy": 4,
        "exercise": 1,
        "playfulness": 4,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 3,
        "watchdog": 5,
        "protection": 1,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 2,
        "wMinM": 6,
        "wMaxM": 7,
        "wMinF": 6,
        "wMaxF": 7,
        "hMinM": 7,
        "hMaxM": 9,
        "hMinF": 7,
        "hMaxF": 9
    },
    {
        "name": "Miniature Pinscher",
        "group": "Toy",
        "energy": 5,
        "exercise": 2,
        "playfulness": 5,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 1,
        "friendStrangers": 1,
        "training": 1,
        "watchdog": 5,
        "protection": 1,
        "grooming": 1,
        "coldTol": 1,
        "heatTol": 3,
        "wMinM": 8,
        "wMaxM": 10,
        "wMinF": 8,
        "wMaxF": 10,
        "hMinM": 10,
        "hMaxM": 12.5,
        "hMinF": 10,
        "hMaxF": 12.5
    },
    {
        "name": "Papillon",
        "group": "Toy",
        "energy": 4,
        "exercise": 1,
        "playfulness": 5,
        "affection": 5,
        "friendDogs": 4,
        "friendPets": 4,
        "friendStrangers": 4,
        "training": 5,
        "watchdog": 5,
        "protection": 1,
        "grooming": 3,
        "coldTol": 1,
        "heatTol": 3,
        "wMinM": 5,
        "wMaxM": 10,
        "wMinF": 5,
        "wMaxF": 10,
        "hMinM": 8,
        "hMaxM": 11,
        "hMinF": 8,
        "hMaxF": 11
    },
    {
        "name": "Pekingese",
        "group": "Toy",
        "energy": 1,
        "exercise": 1,
        "playfulness": 1,
        "affection": 2,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 2,
        "training": 1,
        "watchdog": 5,
        "protection": 1,
        "grooming": 5,
        "coldTol": 3,
        "heatTol": 1,
        "wMinM": 13,
        "wMaxM": 14,
        "wMinF": 13,
        "wMaxF": 14,
        "hMinM": 6,
        "hMaxM": 9,
        "hMinF": 6,
        "hMaxF": 9
    },
    {
        "name": "Pomeranian",
        "group": "Toy",
        "energy": 4,
        "exercise": 1,
        "playfulness": 4,
        "affection": 1,
        "friendDogs": 1,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 1,
        "watchdog": 5,
        "protection": 1,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 3,
        "wMaxM": 7,
        "wMinF": 3,
        "wMaxF": 7,
        "hMinM": 6,
        "hMaxM": 7,
        "hMinF": 6,
        "hMaxF": 7
    },
    {
        "name": "Poodle (Toy)",
        "group": "Toy",
        "energy": 4,
        "exercise": 2,
        "playfulness": 5,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 4,
        "training": 5,
        "watchdog": 5,
        "protection": 1,
        "grooming": 5,
        "coldTol": 2,
        "heatTol": 3,
        "wMinM": 4,
        "wMaxM": 6,
        "wMinF": 4,
        "wMaxF": 6,
        "hMinM": 9,
        "hMaxM": 10,
        "hMinF": 9,
        "hMaxF": 10
    },
    {
        "name": "Pug",
        "group": "Toy",
        "energy": 3,
        "exercise": 2,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 2,
        "training": 3,
        "watchdog": 5,
        "protection": 1,
        "grooming": 2,
        "coldTol": 3,
        "heatTol": 1,
        "wMinM": 14,
        "wMaxM": 18,
        "wMinF": 14,
        "wMaxF": 18,
        "hMinM": 10,
        "hMaxM": 13,
        "hMinF": 10,
        "hMaxF": 13
    },
    {
        "name": "Shih Tzu",
        "group": "Toy",
        "energy": 3,
        "exercise": 1,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 4,
        "friendPets": 4,
        "friendStrangers": 4,
        "training": 2,
        "watchdog": 3,
        "protection": 1,
        "grooming": 4,
        "coldTol": 2,
        "heatTol": 1,
        "wMinM": 9,
        "wMaxM": 16,
        "wMinF": 9,
        "wMaxF": 16,
        "hMinM": 9,
        "hMaxM": 10.5,
        "hMinF": 9,
        "hMaxF": 10.5
    },
    {
        "name": "Silky Terrier",
        "group": "Toy",
        "energy": 4,
        "exercise": 2,
        "playfulness": 4,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 5,
        "protection": 1,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 10,
        "wMaxM": 10,
        "wMinF": 10,
        "wMaxF": 10,
        "hMinM": 9,
        "hMaxM": 10,
        "hMinF": 9,
        "hMaxF": 10
    },
    {
        "name": "Toy Fox Terrier",
        "group": "Toy",
        "energy": 4,
        "exercise": 2,
        "playfulness": 5,
        "affection": 5,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 2,
        "training": 4,
        "watchdog": 5,
        "protection": 2,
        "grooming": 1,
        "coldTol": 1,
        "heatTol": 3,
        "wMinM": 3.5,
        "wMaxM": 7,
        "wMinF": 3.5,
        "wMaxF": 7,
        "hMinM": 8.5,
        "hMaxM": 11.5,
        "hMinF": 8.5,
        "hMaxF": 11.5
    },
    {
        "name": "Toy Manchester Terrier",
        "group": "Toy",
        "energy": 4,
        "exercise": 1,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 1,
        "friendPets": 2,
        "friendStrangers": 1,
        "training": 1,
        "watchdog": 5,
        "protection": 1,
        "grooming": 1,
        "coldTol": 1,
        "heatTol": 4,
        "wMinM": 6,
        "wMaxM": 12,
        "wMinF": 6,
        "wMaxF": 12,
        "hMinM": 10,
        "hMaxM": 12,
        "hMinF": 10,
        "hMaxF": 12
    },
    {
        "name": "Yorkshire Terrier",
        "group": "Toy",
        "energy": 4,
        "exercise": 1,
        "playfulness": 4,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 2,
        "friendStrangers": 3,
        "training": 2,
        "watchdog": 5,
        "protection": 1,
        "grooming": 4,
        "coldTol": 1,
        "heatTol": 2,
        "wMinM": 7,
        "wMaxM": 7,
        "wMinF": 7,
        "wMaxF": 7,
        "hMinM": 7,
        "hMaxM": 8,
        "hMinF": 7,
        "hMaxF": 8
    },
    {
        "name": "Akita",
        "group": "Working",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 1,
        "friendPets": 2,
        "friendStrangers": 1,
        "training": 3,
        "watchdog": 5,
        "protection": 4,
        "grooming": 2,
        "coldTol": 5,
        "heatTol": 1,
        "wMinM": 100,
        "wMaxM": 130,
        "wMinF": 70,
        "wMaxF": 100,
        "hMinM": 26,
        "hMaxM": 28,
        "hMinF": 24,
        "hMaxF": 26
    },
    {
        "name": "Alaskan Malamute",
        "group": "Working",
        "energy": 3,
        "exercise": 4,
        "playfulness": 3,
        "affection": 5,
        "friendDogs": 1,
        "friendPets": 1,
        "friendStrangers": 4,
        "training": 1,
        "watchdog": 3,
        "protection": 3,
        "grooming": 3,
        "coldTol": 5,
        "heatTol": 1,
        "wMinM": 85,
        "wMaxM": 85,
        "wMinF": 75,
        "wMaxF": 75,
        "hMinM": 25,
        "hMaxM": 25,
        "hMinF": 23,
        "hMaxF": 23
    },
    {
        "name": "Anatolian Shepherd Dog",
        "group": "Working",
        "energy": 2,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 1,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 3,
        "watchdog": 5,
        "protection": 5,
        "grooming": 2,
        "coldTol": 4,
        "heatTol": 3,
        "wMinM": 110,
        "wMaxM": 150,
        "wMinF": 80,
        "wMaxF": 120,
        "hMinM": 29,
        "hMaxM": 29,
        "hMinF": 27,
        "hMaxF": 27
    },
    {
        "name": "Bernese Mountain Dog",
        "group": "Working",
        "energy": 2,
        "exercise": 3,
        "playfulness": 2,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 3,
        "training": 4,
        "watchdog": 3,
        "protection": 2,
        "grooming": 3,
        "coldTol": 5,
        "heatTol": 1,
        "wMinM": 80,
        "wMaxM": 115,
        "wMinF": 70,
        "wMaxF": 95,
        "hMinM": 25,
        "hMaxM": 27.5,
        "hMinF": 23,
        "hMaxF": 26
    },
    {
        "name": "Black Russian Terrier",
        "group": "Working",
        "energy": 2,
        "exercise": 3,
        "playfulness": 2,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 1,
        "training": 3,
        "watchdog": 5,
        "protection": 5,
        "grooming": 3,
        "coldTol": 4,
        "heatTol": 2,
        "wMinM": 80,
        "wMaxM": 130,
        "wMinF": 80,
        "wMaxF": 120,
        "hMinM": 27,
        "hMaxM": 30,
        "hMinF": 26,
        "hMaxF": 29
    },
    {
        "name": "Boxer",
        "group": "Working",
        "energy": 5,
        "exercise": 3,
        "playfulness": 5,
        "affection": 5,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 3,
        "protection": 5,
        "grooming": 1,
        "coldTol": 2,
        "heatTol": 1,
        "wMinM": 65,
        "wMaxM": 80,
        "wMinF": 50,
        "wMaxF": 65,
        "hMinM": 23,
        "hMaxM": 25,
        "hMinF": 21.5,
        "hMaxF": 23.5
    },
    {
        "name": "Bullmastiff",
        "group": "Working",
        "energy": 1,
        "exercise": 2,
        "playfulness": 1,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 4,
        "friendStrangers": 1,
        "training": 1,
        "watchdog": 5,
        "protection": 5,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 1,
        "wMinM": 110,
        "wMaxM": 130,
        "wMinF": 100,
        "wMaxF": 120,
        "hMinM": 25,
        "hMaxM": 27,
        "hMinF": 24,
        "hMaxF": 26
    },
    {
        "name": "Doberman Pinscher",
        "group": "Working",
        "energy": 4,
        "exercise": 3,
        "playfulness": 3,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 5,
        "watchdog": 5,
        "protection": 5,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 75,
        "wMaxM": 100,
        "wMinF": 60,
        "wMaxF": 90,
        "hMinM": 26,
        "hMaxM": 28,
        "hMinF": 24,
        "hMaxF": 26
    },
    {
        "name": "German Pinscher",
        "group": "Working",
        "energy": 4,
        "exercise": 3,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 2,
        "friendPets": 1,
        "friendStrangers": 2,
        "training": 3,
        "watchdog": 5,
        "protection": 3,
        "grooming": 1,
        "coldTol": 1,
        "heatTol": 4,
        "wMinM": 25,
        "wMaxM": 45,
        "wMinF": 25,
        "wMaxF": 45,
        "hMinM": 17,
        "hMaxM": 20,
        "hMinF": 17,
        "hMaxF": 20
    },
    {
        "name": "Giant Schnauzer",
        "group": "Working",
        "energy": 3,
        "exercise": 4,
        "playfulness": 4,
        "affection": 1,
        "friendDogs": 1,
        "friendPets": 2,
        "friendStrangers": 1,
        "training": 3,
        "watchdog": 5,
        "protection": 5,
        "grooming": 3,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 60,
        "wMaxM": 85,
        "wMinF": 55,
        "wMaxF": 75,
        "hMinM": 25.5,
        "hMaxM": 27.5,
        "hMinF": 23.5,
        "hMaxF": 25.5
    },
    {
        "name": "Great Dane",
        "group": "Working",
        "energy": 2,
        "exercise": 2,
        "playfulness": 2,
        "affection": 4,
        "friendDogs": 2,
        "friendPets": 2,
        "friendStrangers": 4,
        "training": 3,
        "watchdog": 4,
        "protection": 3,
        "grooming": 1,
        "coldTol": 2,
        "heatTol": 2,
        "wMinM": 140,
        "wMaxM": 175,
        "wMinF": 110,
        "wMaxF": 140,
        "hMinM": 30,
        "hMaxM": 32,
        "hMinF": 28,
        "hMaxF": 30
    },
    {
        "name": "Great Pyrenees",
        "group": "Working",
        "energy": 1,
        "exercise": 3,
        "playfulness": 2,
        "affection": 3,
        "friendDogs": 2,
        "friendPets": 3,
        "friendStrangers": 2,
        "training": 1,
        "watchdog": 5,
        "protection": 4,
        "grooming": 3,
        "coldTol": 5,
        "heatTol": 1,
        "wMinM": 100,
        "wMaxM": 101,
        "wMinF": 85,
        "wMaxF": 86,
        "hMinM": 27,
        "hMaxM": 32,
        "hMinF": 25,
        "hMaxF": 29
    },
    {
        "name": "Greater Swiss Mountain Dog",
        "group": "Working",
        "energy": 2,
        "exercise": 3,
        "playfulness": 2,
        "affection": 3,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 2,
        "training": 4,
        "watchdog": 4,
        "protection": 3,
        "grooming": 1,
        "coldTol": 4,
        "heatTol": 2,
        "wMinM": 115,
        "wMaxM": 140,
        "wMinF": 85,
        "wMaxF": 110,
        "hMinM": 25.5,
        "hMaxM": 28.5,
        "hMinF": 23.5,
        "hMaxF": 27
    },
    {
        "name": "Komondor",
        "group": "Working",
        "energy": 3,
        "exercise": 3,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 1,
        "friendPets": 4,
        "friendStrangers": 1,
        "training": 3,
        "watchdog": 5,
        "protection": 5,
        "grooming": 3,
        "coldTol": 4,
        "heatTol": 2,
        "wMinM": 100,
        "wMaxM": 101,
        "wMinF": 80,
        "wMaxF": 81,
        "hMinM": 27.5,
        "hMaxM": 28.5,
        "hMinF": 25.5,
        "hMaxF": 26.5
    },
    {
        "name": "Kuvasz",
        "group": "Working",
        "energy": 3,
        "exercise": 4,
        "playfulness": 3,
        "affection": 1,
        "friendDogs": 1,
        "friendPets": 4,
        "friendStrangers": 1,
        "training": 1,
        "watchdog": 5,
        "protection": 5,
        "grooming": 3,
        "coldTol": 4,
        "heatTol": 2,
        "wMinM": 100,
        "wMaxM": 115,
        "wMinF": 70,
        "wMaxF": 90,
        "hMinM": 28,
        "hMaxM": 30,
        "hMinF": 26,
        "hMaxF": 28
    },
    {
        "name": "Mastiff",
        "group": "Working",
        "energy": 1,
        "exercise": 2,
        "playfulness": 1,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 2,
        "training": 3,
        "watchdog": 5,
        "protection": 4,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 2,
        "wMinM": 160,
        "wMaxM": 230,
        "wMinF": 120,
        "wMaxF": 170,
        "hMinM": 30,
        "hMaxM": 31,
        "hMinF": 27.5,
        "hMaxF": 28.5
    },
    {
        "name": "Neapolitan Mastiff",
        "group": "Working",
        "energy": 2,
        "exercise": 1,
        "playfulness": 1,
        "affection": 4,
        "friendDogs": 1,
        "friendPets": 2,
        "friendStrangers": 1,
        "training": 2,
        "watchdog": 5,
        "protection": 5,
        "grooming": 2,
        "coldTol": 4,
        "heatTol": 1,
        "wMinM": 150,
        "wMaxM": 150,
        "wMinF": 110,
        "wMaxF": 110,
        "hMinM": 26,
        "hMaxM": 31,
        "hMinF": 24,
        "hMaxF": 29
    },
    {
        "name": "Newfoundland",
        "group": "Working",
        "energy": 2,
        "exercise": 2,
        "playfulness": 3,
        "affection": 5,
        "friendDogs": 4,
        "friendPets": 5,
        "friendStrangers": 5,
        "training": 3,
        "watchdog": 3,
        "protection": 4,
        "grooming": 3,
        "coldTol": 5,
        "heatTol": 1,
        "wMinM": 130,
        "wMaxM": 150,
        "wMinF": 100,
        "wMaxF": 120,
        "hMinM": 28,
        "hMaxM": 28,
        "hMinF": 26,
        "hMaxF": 26
    },
    {
        "name": "Portuguese Water Dog",
        "group": "Working",
        "energy": 4,
        "exercise": 4,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 4,
        "protection": 3,
        "grooming": 5,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 42,
        "wMaxM": 60,
        "wMinF": 35,
        "wMaxF": 50,
        "hMinM": 20,
        "hMaxM": 23,
        "hMinF": 17,
        "hMaxF": 21
    },
    {
        "name": "Rottweiler",
        "group": "Working",
        "energy": 3,
        "exercise": 3,
        "playfulness": 2,
        "affection": 2,
        "friendDogs": 1,
        "friendPets": 2,
        "friendStrangers": 1,
        "training": 3,
        "watchdog": 5,
        "protection": 5,
        "grooming": 1,
        "coldTol": 3,
        "heatTol": 2,
        "wMinM": 95,
        "wMaxM": 135,
        "wMinF": 80,
        "wMaxF": 100,
        "hMinM": 24,
        "hMaxM": 27,
        "hMinF": 22,
        "hMaxF": 25
    },
    {
        "name": "Saint Bernard (Long)",
        "group": "Working",
        "energy": 2,
        "exercise": 2,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 2,
        "protection": 1,
        "grooming": 3,
        "coldTol": 5,
        "heatTol": 1,
        "wMinM": 120,
        "wMaxM": 180,
        "wMinF": 120,
        "wMaxF": 180,
        "hMinM": 28,
        "hMaxM": 30,
        "hMinF": 26,
        "hMaxF": 28
    },
    {
        "name": "Saint Bernard (Smooth)",
        "group": "Working",
        "energy": 2,
        "exercise": 2,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 4,
        "friendStrangers": 3,
        "training": 3,
        "watchdog": 2,
        "protection": 1,
        "grooming": 2,
        "coldTol": 5,
        "heatTol": 1,
        "wMinM": 120,
        "wMaxM": 180,
        "wMinF": 120,
        "wMaxF": 180,
        "hMinM": 28,
        "hMaxM": 30,
        "hMinF": 26,
        "hMaxF": 28
    },
    {
        "name": "Samoyed",
        "group": "Working",
        "energy": 3,
        "exercise": 3,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 5,
        "friendStrangers": 4,
        "training": 2,
        "watchdog": 5,
        "protection": 1,
        "grooming": 3,
        "coldTol": 5,
        "heatTol": 1,
        "wMinM": 45,
        "wMaxM": 65,
        "wMinF": 35,
        "wMaxF": 50,
        "hMinM": 21,
        "hMaxM": 23.5,
        "hMinF": 19,
        "hMaxF": 21
    },
    {
        "name": "Siberian Husky",
        "group": "Working",
        "energy": 3,
        "exercise": 4,
        "playfulness": 4,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 5,
        "training": 1,
        "watchdog": 3,
        "protection": 1,
        "grooming": 3,
        "coldTol": 5,
        "heatTol": 1,
        "wMinM": 45,
        "wMaxM": 60,
        "wMinF": 35,
        "wMaxF": 50,
        "hMinM": 21,
        "hMaxM": 23.5,
        "hMinF": 20,
        "hMaxF": 22
    },
    {
        "name": "Standard Schnauzer",
        "group": "Working",
        "energy": 4,
        "exercise": 3,
        "playfulness": 3,
        "affection": 2,
        "friendDogs": 2,
        "friendPets": 3,
        "friendStrangers": 1,
        "training": 3,
        "watchdog": 5,
        "protection": 5,
        "grooming": 4,
        "coldTol": 3,
        "heatTol": 3,
        "wMinM": 35,
        "wMaxM": 50,
        "wMinF": 30,
        "wMaxF": 45,
        "hMinM": 18.5,
        "hMaxM": 19.5,
        "hMinF": 17.5,
        "hMaxF": 18.5
    },
    {
        "name": "Tibetan Mastiff",
        "group": "Working",
        "energy": 2,
        "exercise": 2,
        "playfulness": 3,
        "affection": 4,
        "friendDogs": 3,
        "friendPets": 3,
        "friendStrangers": 2,
        "training": 2,
        "watchdog": 5,
        "protection": 5,
        "grooming": 3,
        "coldTol": 5,
        "heatTol": 2,
        "wMinM": 90,
        "wMaxM": 150,
        "wMinF": 70,
        "wMaxF": 120,
        "hMinM": 26,
        "hMaxM": 27,
        "hMinF": 24,
        "hMaxF": 25
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/questions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Objective, fact-based questions about the person's home, schedule, climate,
// and the dog's intended role. Each answer sets a target (1-5) for a trait and
// a weight (how much it matters). weight 0 = "this trait is irrelevant".
// Several questions can feed the same trait; the scorer averages them by weight.
__turbopack_context__.s([
    "QUESTIONS",
    ()=>QUESTIONS
]);
const QUESTIONS = [
    // ---------- energy ----------
    {
        trait: "energy",
        label: "Energy level",
        question: "How many days per week does your household currently do 30+ minutes of outdoor activity?",
        options: [
            {
                text: "0–1 days",
                target: 1,
                weight: 1.1
            },
            {
                text: "2–3 days",
                target: 2,
                weight: 1
            },
            {
                text: "4–5 days",
                target: 4,
                weight: 1
            },
            {
                text: "6–7 days",
                target: 5,
                weight: 1.1
            }
        ]
    },
    {
        trait: "energy",
        label: "Energy level",
        question: "Which activities will the dog actually join you for?",
        options: [
            {
                text: "None — it will be a companion at home",
                target: 1,
                weight: 1
            },
            {
                text: "Neighborhood walks",
                target: 3,
                weight: 0.9
            },
            {
                text: "Running, hiking, cycling, or dog sports",
                target: 5,
                weight: 1.2
            }
        ]
    },
    {
        trait: "energy",
        label: "Energy level",
        question: "What best describes your home?",
        options: [
            {
                text: "Apartment or condo, no private yard",
                target: 2,
                weight: 0.7
            },
            {
                text: "House with a small yard",
                target: 3,
                weight: 0.5
            },
            {
                text: "House with a large yard or acreage",
                target: 4,
                weight: 0.3
            }
        ]
    },
    // ---------- exercise ----------
    {
        trait: "exercise",
        label: "Exercise requirements",
        question: "How many minutes per day will someone walk or exercise the dog?",
        options: [
            {
                text: "Under 30 minutes",
                target: 1,
                weight: 1.3
            },
            {
                text: "30–60 minutes",
                target: 2,
                weight: 1.1
            },
            {
                text: "60–120 minutes",
                target: 4,
                weight: 1
            },
            {
                text: "More than 120 minutes",
                target: 5,
                weight: 1.1
            }
        ]
    },
    {
        trait: "exercise",
        label: "Exercise requirements",
        question: "What off-leash space can the dog use regularly?",
        options: [
            {
                text: "None",
                target: 2,
                weight: 0.6
            },
            {
                text: "A small fenced yard or nearby park",
                target: 3,
                weight: 0.5
            },
            {
                text: "A large fenced area, trails, or open land",
                target: 4,
                weight: 0.4
            }
        ]
    },
    // ---------- playfulness ----------
    {
        trait: "playfulness",
        label: "Playfulness",
        question: "Are there children under 12 living in your home?",
        options: [
            {
                text: "Yes",
                target: 5,
                weight: 1
            },
            {
                text: "No, but children visit regularly",
                target: 4,
                weight: 0.7
            },
            {
                text: "No",
                target: 3,
                weight: 0.2
            }
        ]
    },
    {
        trait: "playfulness",
        label: "Playfulness",
        question: "How often will someone play games (fetch, tug, hide-and-seek) with the dog?",
        options: [
            {
                text: "Daily",
                target: 5,
                weight: 0.9
            },
            {
                text: "A few times a week",
                target: 4,
                weight: 0.8
            },
            {
                text: "Rarely",
                target: 2,
                weight: 0.8
            }
        ]
    },
    // ---------- affection ----------
    {
        trait: "affection",
        label: "Affection level",
        question: "On a typical weekday, how many hours is someone at home?",
        options: [
            {
                text: "Most of the day (work from home, retired)",
                target: 5,
                weight: 1.1
            },
            {
                text: "About half the day",
                target: 4,
                weight: 1
            },
            {
                text: "Everyone is gone 8+ hours",
                target: 2,
                weight: 1.2
            }
        ]
    },
    {
        trait: "affection",
        label: "Affection level",
        question: "Where will the dog sleep at night?",
        options: [
            {
                text: "In a bedroom or on the bed",
                target: 5,
                weight: 0.9
            },
            {
                text: "Inside the house, in its own space",
                target: 4,
                weight: 0.7
            },
            {
                text: "In a separate room, garage, or outdoors",
                target: 2,
                weight: 0.9
            }
        ]
    },
    // ---------- friendliness toward dogs ----------
    {
        trait: "friendDogs",
        label: "Friendliness toward dogs",
        question: "How many other dogs live in your home?",
        options: [
            {
                text: "None",
                target: 3,
                weight: 0.3
            },
            {
                text: "One",
                target: 4,
                weight: 1.2
            },
            {
                text: "Two or more",
                target: 5,
                weight: 1.5
            }
        ]
    },
    {
        trait: "friendDogs",
        label: "Friendliness toward dogs",
        question: "How often will the dog go to dog parks, daycare, or group walks?",
        options: [
            {
                text: "Never or almost never",
                target: 3,
                weight: 0.2
            },
            {
                text: "A few times a month",
                target: 4,
                weight: 0.8
            },
            {
                text: "Weekly or more",
                target: 5,
                weight: 1.2
            }
        ]
    },
    // ---------- friendliness toward other pets ----------
    {
        trait: "friendPets",
        label: "Friendliness toward other pets",
        question: "Do cats or other small pets (rabbits, birds, rodents) live in your home?",
        options: [
            {
                text: "Yes",
                target: 5,
                weight: 1.6
            },
            {
                text: "No, but we plan to add some",
                target: 4,
                weight: 0.8
            },
            {
                text: "No",
                target: 3,
                weight: 0
            }
        ]
    },
    // ---------- friendliness toward strangers ----------
    {
        trait: "friendStrangers",
        label: "Friendliness toward strangers",
        question: "How many visitors enter your home in a typical week?",
        options: [
            {
                text: "0–1",
                target: 2,
                weight: 0.9
            },
            {
                text: "2–5",
                target: 4,
                weight: 0.9
            },
            {
                text: "6 or more",
                target: 5,
                weight: 1.1
            }
        ]
    },
    {
        trait: "friendStrangers",
        label: "Friendliness toward strangers",
        question: "How often will the dog go to busy public places (stores, cafes, events)?",
        options: [
            {
                text: "Rarely or never",
                target: 2,
                weight: 0.6
            },
            {
                text: "A few times a month",
                target: 4,
                weight: 0.8
            },
            {
                text: "Weekly or more",
                target: 5,
                weight: 1
            }
        ]
    },
    // ---------- ease of training ----------
    {
        trait: "training",
        label: "Ease of training",
        question: "How many dogs have you trained before?",
        options: [
            {
                text: "None — this is my first",
                target: 5,
                weight: 1.2
            },
            {
                text: "One",
                target: 4,
                weight: 0.8
            },
            {
                text: "Several",
                target: 3,
                weight: 0.5
            }
        ]
    },
    {
        trait: "training",
        label: "Ease of training",
        question: "How many hours per week will you spend on training during the first year?",
        options: [
            {
                text: "Less than 1 hour",
                target: 5,
                weight: 1.2
            },
            {
                text: "1–3 hours",
                target: 4,
                weight: 0.8
            },
            {
                text: "More than 3 hours",
                target: 3,
                weight: 0.5
            }
        ]
    },
    // ---------- watchdog ----------
    {
        trait: "watchdog",
        label: "Watchdog ability",
        question: "What are the noise rules where you live?",
        options: [
            {
                text: "Strict — shared walls, quiet hours, or HOA rules",
                target: 1,
                weight: 1.3
            },
            {
                text: "Neighbors are close but there are no formal rules",
                target: 3,
                weight: 0.7
            },
            {
                text: "No restrictions — barking bothers no one",
                target: 3,
                weight: 0.1
            }
        ]
    },
    {
        trait: "watchdog",
        label: "Watchdog ability",
        question: "Is the dog expected to alert you when someone approaches your home?",
        options: [
            {
                text: "No — quiet is preferred",
                target: 1,
                weight: 1
            },
            {
                text: "It would be a nice bonus",
                target: 3,
                weight: 0.6
            },
            {
                text: "Yes — that's part of its job",
                target: 5,
                weight: 1.2
            }
        ]
    },
    // ---------- protection ----------
    {
        trait: "protection",
        label: "Protection ability",
        question: "Will the dog have a guarding role (property, livestock, or personal protection)?",
        options: [
            {
                text: "No",
                target: 1,
                weight: 0.8
            },
            {
                text: "Its presence as a deterrent is enough",
                target: 3,
                weight: 0.8
            },
            {
                text: "Yes — a genuine guardian role",
                target: 5,
                weight: 1.5
            }
        ]
    },
    // ---------- grooming ----------
    {
        trait: "grooming",
        label: "Grooming requirements",
        question: "How many professional grooming appointments per year fit your budget?",
        options: [
            {
                text: "None",
                target: 1,
                weight: 1.2
            },
            {
                text: "A few (every 2–3 months)",
                target: 3,
                weight: 0.7
            },
            {
                text: "Monthly or more",
                target: 5,
                weight: 0.5
            }
        ]
    },
    {
        trait: "grooming",
        label: "Grooming requirements",
        question: "How many minutes per week will someone brush the dog at home?",
        options: [
            {
                text: "Under 15 minutes",
                target: 1,
                weight: 1.1
            },
            {
                text: "15–60 minutes",
                target: 3,
                weight: 0.8
            },
            {
                text: "More than 60 minutes",
                target: 5,
                weight: 0.6
            }
        ]
    },
    // ---------- cold tolerance ----------
    {
        trait: "coldTol",
        label: "Cold tolerance",
        question: "How cold does a typical winter get where you live?",
        options: [
            {
                text: "Rarely below 50°F (10°C)",
                target: 3,
                weight: 0
            },
            {
                text: "Between 20°F and 50°F (-7°C to 10°C)",
                target: 4,
                weight: 0.9
            },
            {
                text: "Regularly below 20°F (-7°C)",
                target: 5,
                weight: 1.3
            }
        ]
    },
    {
        trait: "coldTol",
        label: "Cold tolerance",
        question: "Will the dog spend extended time outdoors in winter?",
        options: [
            {
                text: "No — quick potty breaks only",
                target: 3,
                weight: 0.2
            },
            {
                text: "An hour or so most days",
                target: 4,
                weight: 0.7
            },
            {
                text: "Yes — hours outside daily",
                target: 5,
                weight: 1.2
            }
        ]
    },
    // ---------- heat tolerance ----------
    {
        trait: "heatTol",
        label: "Heat tolerance",
        question: "How hot does a typical summer get where you live?",
        options: [
            {
                text: "Rarely above 80°F (27°C)",
                target: 3,
                weight: 0
            },
            {
                text: "Between 80°F and 95°F (27°C to 35°C)",
                target: 4,
                weight: 0.9
            },
            {
                text: "Regularly above 95°F (35°C)",
                target: 5,
                weight: 1.3
            }
        ]
    },
    {
        trait: "heatTol",
        label: "Heat tolerance",
        question: "Will the dog spend extended time outdoors in summer?",
        options: [
            {
                text: "No — it will mostly be in air conditioning",
                target: 3,
                weight: 0.2
            },
            {
                text: "An hour or so most days",
                target: 4,
                weight: 0.7
            },
            {
                text: "Yes — hours outside daily",
                target: 5,
                weight: 1.2
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/match.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "matchBreeds",
    ()=>matchBreeds
]);
// Scores every breed against the user's answers and size window, returns ranked matches.
function sizeRange(breed, sex) {
    if (sex === "male") return {
        w: [
            breed.wMinM,
            breed.wMaxM
        ],
        h: [
            breed.hMinM,
            breed.hMaxM
        ]
    };
    if (sex === "female") return {
        w: [
            breed.wMinF,
            breed.wMaxF
        ],
        h: [
            breed.hMinF,
            breed.hMaxF
        ]
    };
    return {
        w: [
            Math.min(breed.wMinM, breed.wMinF),
            Math.max(breed.wMaxM, breed.wMaxF)
        ],
        h: [
            Math.min(breed.hMinM, breed.hMinF),
            Math.max(breed.hMaxM, breed.hMaxF)
        ]
    };
}
const overlaps = ([lo, hi], min, max)=>hi >= min && lo <= max;
// How far outside the user's window a breed's range sits (0 = fits).
function gap([lo, hi], min, max) {
    if (hi < min) return min - hi;
    if (lo > max) return lo - max;
    return 0;
}
function matchBreeds(breeds, answers, size) {
    const scored = breeds.map((b)=>{
        let total = 0;
        let maxTotal = 0;
        const perTrait = [];
        for (const a of answers){
            if (a.weight === 0) continue;
            // Symmetric distance: being 2 above the target penalizes the same as 2 below.
            // Squaring emphasizes exact hits: gap 0 -> 1.0, 1 -> 0.56, 2 -> 0.25, 3 -> 0.06, 4 -> 0.
            const linear = 1 - Math.abs(b[a.trait] - a.target) / 4;
            const closeness = linear * linear;
            total += a.weight * closeness;
            maxTotal += a.weight;
            perTrait.push({
                trait: a.trait,
                label: a.label,
                closeness
            });
        }
        let score = maxTotal ? total / maxTotal : 0;
        const r = sizeRange(b, size.sex);
        const fitsSize = overlaps(r.w, size.wMin, size.wMax) && overlaps(r.h, size.hMin, size.hMax);
        if (!fitsSize) {
            // Soft penalty so results degrade gracefully if the window is very narrow.
            const wGap = gap(r.w, size.wMin, size.wMax) / 40;
            const hGap = gap(r.h, size.hMin, size.hMax) / 10;
            score -= 0.35 + Math.min(0.4, wGap + hGap);
        }
        perTrait.sort((x, y)=>y.closeness - x.closeness);
        return {
            breed: b,
            score,
            fitsSize,
            range: r,
            perTrait
        };
    });
    scored.sort((a, b)=>b.score - a.score);
    const anyFit = scored.some((s)=>s.fitsSize);
    const ranked = anyFit ? scored.filter((s)=>s.fitsSize) : scored;
    return {
        top: ranked[0],
        runnersUp: ranked.slice(1, 4),
        relaxedSize: !anyFit
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PawTrail.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PawTrail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const PAW_PATH = "M12 21c-3.2 0-5.6-1.7-5.6-4 0-1.5 1-2.6 2.2-3.7 1-.9 1.9-1.8 2.3-3 .2-.5.6-.8 1.1-.8s.9.3 1.1.8c.4 1.2 1.3 2.1 2.3 3 1.2 1.1 2.2 2.2 2.2 3.7 0 2.3-2.4 4-5.6 4zM5.5 11.5c-1.2.4-2.5-.4-2.9-1.7-.4-1.3.2-2.7 1.4-3.1 1.2-.4 2.5.4 2.9 1.7.4 1.3-.2 2.7-1.4 3.1zM18.5 11.5c-1.2-.4-1.8-1.8-1.4-3.1.4-1.3 1.7-2.1 2.9-1.7 1.2.4 1.8 1.8 1.4 3.1-.4 1.3-1.7 2.1-2.9 1.7zM9.4 7.6c-1.3.2-2.5-.8-2.7-2.2C6.5 4 7.4 2.7 8.7 2.5c1.3-.2 2.5.8 2.7 2.2.2 1.4-.7 2.7-2 2.9zM14.6 7.6c-1.3-.2-2.2-1.5-2-2.9.2-1.4 1.4-2.4 2.7-2.2 1.3.2 2.2 1.5 2 2.9-.2 1.4-1.4 2.4-2.7 2.2z";
function PawTrail({ total, current }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "paw-trail",
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": total,
        "aria-valuenow": Math.min(current, total),
        "aria-label": "Quiz progress",
        children: Array.from({
            length: total
        }, (_, i)=>{
            const cls = i < current ? "paw done" : i === current ? "paw current" : "paw";
            const tilt = i % 2 === 0 ? "-14deg" : "14deg";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: cls,
                style: {
                    "--tilt": tilt
                },
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: PAW_PATH
                }, void 0, false, {
                    fileName: "[project]/components/PawTrail.js",
                    lineNumber: 12,
                    columnNumber: 13
                }, this)
            }, i, false, {
                fileName: "[project]/components/PawTrail.js",
                lineNumber: 11,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/PawTrail.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = PawTrail;
var _c;
__turbopack_context__.k.register(_c, "PawTrail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/describe.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "describe",
    ()=>describe,
    "sizeLine",
    ()=>sizeLine
]);
// Builds a short, readable description of a breed from its trait ratings.
const level = (n, [lo, mid, hi])=>n >= 4.5 ? hi : n >= 3 ? mid : lo;
const GROUP_BLURB = {
    Sporting: "bred to work alongside hunters in field and water",
    Hound: "bred to pursue game by scent or by sight",
    Working: "bred for serious jobs like guarding, hauling, and rescue",
    Terrier: "bred to hunt vermin with trademark tenacity",
    Toy: "bred first and foremost for companionship",
    "Non-Sporting": "a diverse group with roots in many old professions",
    Herding: "bred to gather and move livestock with brains and hustle"
};
function describe(b) {
    const sentences = [];
    sentences.push(`The ${b.name} is a ${b.group} breed, ${GROUP_BLURB[b.group] || "with a long working history"}.`);
    const energy = level(b.energy, [
        "a calm, low-key companion",
        "a moderately active dog",
        "a high-octane athlete"
    ]);
    const exercise = level(b.exercise, [
        "content with short daily outings",
        "happiest with a solid daily walk or play session",
        "needing serious daily exercise to stay sane"
    ]);
    sentences.push(`Expect ${energy}, ${exercise}.`);
    const affection = level(b.affection, [
        "independent by nature",
        "warm with its family",
        "deeply devoted and people-oriented"
    ]);
    const strangers = level(b.friendStrangers, [
        "reserved with strangers",
        "polite with new people",
        "delighted by everyone it meets"
    ]);
    sentences.push(`It tends to be ${affection} and ${strangers}.`);
    const training = level(b.training, [
        "an independent thinker that needs patient, creative training",
        "a capable student with consistent handling",
        "a quick, eager learner"
    ]);
    const grooming = level(b.grooming, [
        "minimal",
        "moderate",
        "substantial"
    ]);
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
function sizeLine(b) {
    const fmt = (lo, hi, unit)=>lo === hi ? `${lo} ${unit}` : `${lo}\u2013${hi} ${unit}`;
    return `Males: ${fmt(b.hMinM, b.hMaxM, "in")}, ${fmt(b.wMinM, b.wMaxM, "lb")} \u00b7 ` + `Females: ${fmt(b.hMinF, b.hMaxF, "in")}, ${fmt(b.wMinF, b.wMaxF, "lb")}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/dogImages.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Local breed photos. Drop your images into /public/dogs/ named by breed slug,
// e.g. "Golden Retriever" -> /public/dogs/golden-retriever.jpg
// "Chihuahua (Long)" -> /public/dogs/chihuahua-long.jpg
// jpg, jpeg, png, and webp all work; the app tries each in that order.
__turbopack_context__.s([
    "breedImageCandidates",
    ()=>breedImageCandidates,
    "breedSlug",
    ()=>breedSlug
]);
function breedSlug(name) {
    return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "") // strip accents (Löwchen -> Lowchen)
    .toLowerCase().replace(/[()]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
const EXTENSIONS = [
    "jpg",
    "jpeg",
    "png",
    "webp"
];
function breedImageCandidates(name) {
    const slug = breedSlug(name);
    return EXTENSIONS.map((ext)=>`/dogs/${slug}.${ext}`);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ResultCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$describe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/describe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dogImages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dogImages.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ResultCard({ result, onRestart }) {
    _s();
    const { top, runnersUp, relaxedSize } = result;
    const breed = top.breed;
    // Try each extension in turn; if all fail, show the placeholder.
    const candidates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dogImages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breedImageCandidates"])(breed.name);
    const [srcIdx, setSrcIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultCard.useEffect": ()=>{
            setSrcIdx(0);
            setFailed(false);
        }
    }["ResultCard.useEffect"], [
        breed.name
    ]);
    const pct = Math.round(Math.max(0, Math.min(1, top.score)) * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: "Your best match"
            }, void 0, false, {
                fileName: "[project]/components/ResultCard.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            relaxedSize && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "notice",
                children: "No breed fit your exact size window, so the closest overall matches are shown instead."
            }, void 0, false, {
                fileName: "[project]/components/ResultCard.js",
                lineNumber: 27,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "result-photo-wrap",
                children: failed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "photo-fallback",
                    role: "img",
                    "aria-label": "dog",
                    children: "🐕"
                }, void 0, false, {
                    fileName: "[project]/components/ResultCard.js",
                    lineNumber: 34,
                    columnNumber: 11
                }, this) : // eslint-disable-next-line @next/next/no-img-element
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: candidates[srcIdx],
                    alt: `A ${breed.name}`,
                    onError: ()=>{
                        if (srcIdx < candidates.length - 1) setSrcIdx(srcIdx + 1);
                        else setFailed(true);
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ResultCard.js",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ResultCard.js",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "result-name",
                children: breed.name
            }, void 0, false, {
                fileName: "[project]/components/ResultCard.js",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chip-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            breed.group,
                            " Group"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ResultCard.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip gold",
                        children: [
                            pct,
                            "% match"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ResultCard.js",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ResultCard.js",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "match-meter",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fill",
                        style: {
                            width: `${pct}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ResultCard.js",
                        lineNumber: 55,
                        columnNumber: 30
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ResultCard.js",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ResultCard.js",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "result-desc",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$describe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["describe"])(breed)
            }, void 0, false, {
                fileName: "[project]/components/ResultCard.js",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "size-line",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$describe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeLine"])(breed)
            }, void 0, false, {
                fileName: "[project]/components/ResultCard.js",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            runnersUp.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "runners",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Also worth a look"
                    }, void 0, false, {
                        fileName: "[project]/components/ResultCard.js",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    runnersUp.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "runner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: r.breed.name
                                }, void 0, false, {
                                    fileName: "[project]/components/ResultCard.js",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pct",
                                    children: [
                                        Math.round(Math.max(0, Math.min(1, r.score)) * 100),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ResultCard.js",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, r.breed.name, true, {
                            fileName: "[project]/components/ResultCard.js",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ResultCard.js",
                lineNumber: 62,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/components/ResultCard.js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-gold",
                        onClick: onRestart,
                        children: "Start over"
                    }, void 0, false, {
                        fileName: "[project]/components/ResultCard.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ResultCard.js",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ResultCard.js",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(ResultCard, "clHcnFSZOxWp2Tg11j9eKPa98cg=");
_c = ResultCard;
var _c;
__turbopack_context__.k.register(_c, "ResultCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breeds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/breeds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/questions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/match.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PawTrail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PawTrail.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ResultCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ResultCard.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const N_Q = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTIONS"].length;
const STEP_SEX = N_Q; // after the trait questions
const STEP_SIZE = N_Q + 1;
const STEP_RESULT = N_Q + 2;
const TOTAL_STEPS = N_Q + 2; // questions + sex + size
const SEX_OPTIONS = [
    {
        value: "male",
        label: "Male"
    },
    {
        value: "female",
        label: "Female"
    },
    {
        value: "any",
        label: "No preference"
    }
];
function Home() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1); // -1 = intro
    const [picks, setPicks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(N_Q).fill(null));
    const [sex, setSex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        hMin: 5,
        hMax: 35,
        wMin: 3,
        wMax: 250
    });
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[result]": ()=>{
            if (step !== STEP_RESULT) return null;
            const answers = picks.map({
                "Home.useMemo[result].answers": (optIdx, i)=>{
                    const q = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTIONS"][i];
                    const o = q.options[optIdx];
                    return {
                        trait: q.trait,
                        label: q.label,
                        target: o.target,
                        weight: o.weight
                    };
                }
            }["Home.useMemo[result].answers"]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchBreeds"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breeds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BREEDS"], answers, {
                sex,
                ...size
            });
        }
    }["Home.useMemo[result]"], [
        step,
        picks,
        sex,
        size
    ]);
    const restart = ()=>{
        setStep(-1);
        setPicks(Array(N_Q).fill(null));
        setSex(null);
        setSize({
            hMin: 5,
            hMax: 35,
            wMin: 3,
            wMax: 250
        });
    };
    const sizeValid = size.hMin >= 0 && size.wMin >= 0 && size.hMax > size.hMin && size.wMax > size.wMin;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "brand",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Fetch Your Match"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "a dog breed finder"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            step >= 0 && step < STEP_RESULT && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PawTrail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                total: TOTAL_STEPS,
                current: step
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 55,
                columnNumber: 9
            }, this),
            step === -1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "hero-title",
                        children: [
                            "The right dog isn't the cutest one.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 62,
                                columnNumber: 48
                            }, this),
                            "It's the one that ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "fits your life."
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 63,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hero-sub",
                        children: [
                            "Answer ",
                            N_Q,
                            " quick questions about your energy, home, and habits — plus your size preferences — and we'll sift through ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breeds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BREEDS"].length,
                            " breeds to find the one built for you."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary",
                        onClick: ()=>setStep(0),
                        children: "Find my breed"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            step >= 0 && step < N_Q && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: [
                            step + 1,
                            " of ",
                            N_Q,
                            " · ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTIONS"][step].label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "q-title",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTIONS"][step].question
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "options",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTIONS"][step].options.map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `option ${picks[step] === i ? "selected" : ""}`,
                                onClick: ()=>{
                                    const next = [
                                        ...picks
                                    ];
                                    next[step] = i;
                                    setPicks(next);
                                    setTimeout(()=>setStep(step + 1), 160);
                                },
                                children: o.text
                            }, i, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-ghost",
                                onClick: ()=>setStep(step === 0 ? -1 : step - 1),
                                children: "← Back"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this)
                ]
            }, step, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 78,
                columnNumber: 9
            }, this),
            step === STEP_SEX && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: "Almost there · Preference"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "q-title",
                        children: "Do you have a preference for your dog's sex?"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hint",
                        style: {
                            marginTop: 0,
                            marginBottom: 16
                        },
                        children: "Males and females of a breed differ in typical size — this tailors the size matching in the next step."
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sex-row",
                        children: SEX_OPTIONS.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `option ${sex === o.value ? "selected" : ""}`,
                                onClick: ()=>{
                                    setSex(o.value);
                                    setTimeout(()=>setStep(STEP_SIZE), 160);
                                },
                                children: o.label
                            }, o.value, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 122,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-ghost",
                                onClick: ()=>setStep(N_Q - 1),
                                children: "← Back"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 113,
                columnNumber: 9
            }, this),
            step === STEP_SIZE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: "Last step · Size"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "q-title",
                        children: "How big a dog are you looking for?"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "size-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "hmin",
                                        children: "Min height (inches)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "hmin",
                                        type: "number",
                                        min: "0",
                                        max: "40",
                                        value: size.hMin,
                                        onChange: (e)=>setSize({
                                                ...size,
                                                hMin: Number(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "hmax",
                                        children: "Max height (inches)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "hmax",
                                        type: "number",
                                        min: "0",
                                        max: "40",
                                        value: size.hMax,
                                        onChange: (e)=>setSize({
                                                ...size,
                                                hMax: Number(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "wmin",
                                        children: "Min weight (lb)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "wmin",
                                        type: "number",
                                        min: "0",
                                        max: "300",
                                        value: size.wMin,
                                        onChange: (e)=>setSize({
                                                ...size,
                                                wMin: Number(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "wmax",
                                        children: "Max weight (lb)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "wmax",
                                        type: "number",
                                        min: "0",
                                        max: "300",
                                        value: size.wMax,
                                        onChange: (e)=>setSize({
                                                ...size,
                                                wMax: Number(e.target.value)
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hint",
                        children: 'For reference: a Chihuahua stands about 5–8 in and 6 lb; a Great Dane 30–32 in and up to 175 lb. Leave the defaults for "any size."'
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-ghost",
                                onClick: ()=>setStep(STEP_SEX),
                                children: "← Back"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary",
                                disabled: !sizeValid,
                                onClick: ()=>setStep(STEP_RESULT),
                                children: "See my match"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 143,
                columnNumber: 9
            }, this),
            step === STEP_RESULT && result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ResultCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                result: result,
                onRestart: restart
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 187,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(Home, "M3dTW8xqEbKZuiWCkLsm4vq1gt0=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_15ooo9c._.js.map