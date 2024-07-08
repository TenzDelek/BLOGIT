import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { ClerkProvider} from '@clerk/nextjs'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BLOGIT",
  description: "Write it and blog it ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className} min-h-screen  text-zinc-900 bg-zinc-100`}>
        <Container>
        <Header />
        {children}
        <Footer/>
        </Container>
        </body>
    </html>
    </ClerkProvider>
  );
}
