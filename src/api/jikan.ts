const BASE_URL = "https://api.jikan.moe/v4";

let currentController: AbortController | null = null;

export async function searchAnime(query: string, page = 1) {
  if (currentController) {
    currentController.abort();
  }
  currentController = new AbortController();
  const res = await fetch(
    `${BASE_URL}/anime?q=${encodeURIComponent(query)}&page=${page}`,
    {
      signal: currentController.signal
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch anime");
  }
  return res.json();
}

export async function getAnimeById(id: string) {
  const res = await fetch(`${BASE_URL}/anime/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch anime detail");
  }
  return res.json();
}
