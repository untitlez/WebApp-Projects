const URL = "https://679348b45eae7e5c4d8e2507.mockapi.io/api";
// const URL = "https://fake-coffee-api.vercel.app/api";

export async function fetchData(
    endpoint = "", 
    method = "GET", 
    body = null
) {
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : null,
  };
  const response = await fetch(`${URL}/${endpoint}`, options);
  if (!response.ok) throw new Error(`Failed to ${method} data`);
  return response.json();
}
