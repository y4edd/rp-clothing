export const fetchWatched = async (userId: string) => {
  const res = await fetch("http://localhost:3000/api/lookhistory", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Cookie: `userId=${userId}`,
    },
  });
  return await res.json();
};
