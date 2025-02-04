import { FavConditionProps } from "@/types/search/search";

// 新着アイテムの取得関数
export const getNewItems = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/items/newItems", {
      next: { revalidate: 3600 }, //１時間で再検証
    });
    if (!response.ok) {
      throw new Error("データを取得できませんでした。");
    }
    const items = await response.json();
    return items.items;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// 楽天APIから検索結果を取得する関数
export const fetchResults = async (query: string) => {
  if (!query) return null;

  const apiURL = `http://localhost:3000/api/items/searchByQuery?${query}`;

  try {
    const res = await fetch(apiURL, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("データを取得できませんでした");
    }
    const items = await res.json();
    return items.items;
  } catch (err) {
    console.error("データの取得に失敗しました:", err);
    return null;
  }
};

// 検索条件を保存する非同期関数
export const postCondition = async(req:FavConditionProps) => {
  try{
    const response = await fetch("http://localhost:3000/api/condition", {
      method: "POST",
      body: JSON.stringify(req),
    })
  } catch(err) {
    console.error("通信に失敗しました", err);
    return null;
  }
};

// 検索条件を編集する非同期関数
export const editCondition = async(req:FavConditionProps) => {
  try {
    const response = await fetch("http://localhost:3000/api/condition", {
      method: "PATCH",
      body: JSON.stringify(req),
    })
  } catch(err) {
  console.error("通信に失敗しました", err);
  return null;
  }
};

// 検索条件を取得する非同期関数
export const getCondition = async() => {
  try{
    const response = await fetch("http://localhost:3000/api/condition", {
      method: "GET",
    });
    const res = await response.json();
    return res;
  } catch(err) {
    console.error("通信に失敗しました",err);
    return null;
  }
};

export const deleteCondition = async() => {
  try{
    const response = await fetch("http://localhost:3000/api/condition", {
      method: "DELETE",
    });
    const res = await response.json();
    return res;
  } catch(err) {
    console.error("通信に失敗しました",err);
    return null;
  }
};