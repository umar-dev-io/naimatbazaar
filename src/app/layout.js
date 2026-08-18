import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Naimat Bazaar | Har Dana Shifa Ka Khazana",
  description: "100% Khaalis Herbal Wellness & Food Products in Pakistan",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-[#5c0000]`}
    >
      <body className="min-h-screen flex flex-col bg-[#5c0000] text-gray-900 m-0 p-0">
        {children}
      </body>
    </html>
  );
}