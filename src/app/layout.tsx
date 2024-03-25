// src/app/layout.tsx

import React from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import { Inter } from "next/font/google";
import "../styles/globals.css"; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`flex flex-col min-h-screen ${inter.className}`}>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
