"use client";

import { ConditionContextType, FavConditionProps } from "@/types/search/search";
import { getCondition } from "@/utils/apiFunc";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

// Contextの作成
export const ConditionContext = createContext<ConditionContextType>({
  conditions: [],
});

// Providerコンポーネント
export const ConditionProvider = ({ children }: { children: ReactNode }) => {
  const [conditions, setConditions] = useState<FavConditionProps[]>([]);

  useEffect(() => {
    const fetchConditions = async () => {
      const data = await getCondition();
      setConditions(data);
    };

    fetchConditions();
  }, []);

  return (
    <ConditionContext.Provider value={{ conditions }}>
      {children}
    </ConditionContext.Provider>
  );
};

// カスタムフックにする
export const useCondition = () => useContext(ConditionContext);
