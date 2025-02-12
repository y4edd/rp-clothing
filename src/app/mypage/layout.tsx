import { AuthProvider } from "@/contexts/Countcontexts";

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
