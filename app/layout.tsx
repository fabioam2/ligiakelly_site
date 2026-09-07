import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lígia Moreira | Nutricionista da Mulher",
  description: "Nutrição funcional integrativa e cuidado especializado na saúde da mulher, em Campinas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
