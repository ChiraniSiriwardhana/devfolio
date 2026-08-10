import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chirani Siriwardhana | Software Engineer",
  description:
    "Personal portfolio of Chirani Siriwardhana, showcasing web development, AI, and software engineering projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Added suppressHydrationWarning here */}
      <body
        suppressHydrationWarning
        className="min-h-full font-sans bg-[#0c0c0c] text-neutral-300 selection:bg-neutral-800 selection:text-white"
      >
        <div className="max-w-2xl px-6 py-12 md:py-20 mx-auto md:mx-0 md:ml-64 lg:ml-72">
          {children}
        </div>
      </body>
    </html>
  );
}