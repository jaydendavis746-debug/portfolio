import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jayden Davis",
  description: "Jayden's portfolio page ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black page-transition">
        <nav className="p-6 flex gap-6 border-b">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        <main className="max-w-4xl mx-auto p-6 bg-[linear-gradient(to_bottom,white,rgba(240,240,240,0.6))]">
          {children}
        </main>

        <ScrollToTop />

        <footer className="p-6 text-center border-t mt-10">
          © {new Date().getFullYear()} Jayden Davis
        </footer>
      </body>
    </html>
  );
}
