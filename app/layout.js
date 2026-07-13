import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display", weight: ["400", "600", "700"] });
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-body", weight: ["400", "600", "700", "800"] });

export const metadata = {
  title: "Fetch Your Match — Dog Breed Finder",
  description: "Answer a short set of questions and get matched to the dog breed that fits your life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${nunito.variable}`}>{children}</body>
    </html>
  );
}
