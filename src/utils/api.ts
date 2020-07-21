const API_URL = "https://hacker-news.firebaseio.com/v0";

function getEntityUrl(entityType: string) {
  return `${API_URL}/${entityType}.json`;
}

export async function getFromApi<T = any>(entityType: string) {
  const url = getEntityUrl(entityType);
  const res = await fetch(url);
  const data = await res.json();
  return data as T;
}
