"use client";

import UnauthorizedAccess from "@/components/user/UnauthorizedAccess/UnauthorizedAccess";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getSessionId } from "@/utils/apiFunc";

// Contextオブジェクトを作成
export const AuthContext = createContext<string | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

// Providerコンポーネント
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSessionId(setToken, setLoading);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!token) return <UnauthorizedAccess />;

  return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>;
};

// カスタムフック作成
export const useAuth = () => useContext(AuthContext);
