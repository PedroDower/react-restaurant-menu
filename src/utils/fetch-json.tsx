export async function fetchJSON(URL: string): Promise<any> {
  try {
    const response = await fetch(URL);
    return await response.json();
  } catch (err) {
    throw err;
  }
}