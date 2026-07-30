const API_URL = import.meta.env.VITE_API_URL;

export async function api(endpoint, options) {
  const response = await fetch(API_URL + endpoint, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  });

  return response.json();
}