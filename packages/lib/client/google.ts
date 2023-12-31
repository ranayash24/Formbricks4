export const authorize = async (environmentId: string, apiHost: string): Promise<string> => {
  const res = await fetch(`${apiHost}/api/google-sheet`, {
    method: "GET",
    headers: { environmentId: environmentId },
  });

  if (!res.ok) {
    console.error(res.text);
    throw new Error("Could not create response");
  }
  const resJSON = await res.json();
  const authUrl = resJSON.authUrl;
  return authUrl;
};
