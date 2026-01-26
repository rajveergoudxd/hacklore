import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hacklore | The Kinetic Web Hackathon",
  description: "Join 1,000+ innovators at Hacklore - a 48-hour hackathon where the brightest minds converge to build solutions that matter. $50,000+ in prizes.",
  keywords: ["hackathon", "coding", "innovation", "tech", "AI", "web3", "startup"],
  authors: [{ name: "Hacklore Team" }],
  openGraph: {
    title: "Hacklore | The Kinetic Web Hackathon",
    description: "48 hours of innovation, collaboration, and creation. Apply now!",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hacklore | Build the Kinetic Web",
    description: "48 hours of innovation. $50,000+ in prizes. Apply now!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
