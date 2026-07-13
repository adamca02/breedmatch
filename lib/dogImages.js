// Local breed photos. Drop your images into /public/dogs/ named by breed slug,
// e.g. "Golden Retriever" -> /public/dogs/golden-retriever.jpg
// "Chihuahua (Long)" -> /public/dogs/chihuahua-long.jpg
// jpg, jpeg, png, and webp all work; the app tries each in that order.

export function breedSlug(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip accents (Löwchen -> Lowchen)
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

export function breedImageCandidates(name) {
  const slug = breedSlug(name);
  return EXTENSIONS.map((ext) => `/dogs/${slug}.${ext}`);
}
