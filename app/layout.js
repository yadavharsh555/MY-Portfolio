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
  title: "Harsh Yadav | Python Developer",
  description: "Experienced Python Developer specializing in backend development, automation, and data analysis. Skilled in Flask, FastAPI, and SQL.",
  keywords: "Python Developer, Backend Developer, Flask, FastAPI, SQL, Automation, Data Analysis, Harsh Yadav",
  author: "Harsh Yadav",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
