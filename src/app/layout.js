import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "vVv software",
  description:
    "Conduzindo o futuro da tecnologia com soluções inovadoras. Nossa missão é traduzir ideias em software de excelência, impulsionando o potencial de sua visão para além dos limites. Conecte-se à evolução digital com vVv Software - onde a criatividade encontra a codificação.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
