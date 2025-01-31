export async function fetchData() {
  const res = await fetch("https://fake-coffee-api.vercel.app/api");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}