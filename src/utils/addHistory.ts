export type History = {
  itemCode: string;
  userId: string;
};

export const addHistory = async (history: History) => {
  try {
    const response = await fetch("http://localhost:3000/api/lookhistory", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(history),
    });
    const data = await response.json();
    if(!data) {
      throw new Error("データが取得できませんでした");
    }
  } catch (error) {
    console.error("エラーが発生しました", error);
  }
};
