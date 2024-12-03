import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//Header.jsx de carpeta components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"] ,
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: "Tadeo Vázquez Manzo",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable}`}>
      <Header/>
        <StairTransition/>
        <PageTransition>
            <div className="pt-32">
                {children}
            </div>
        </PageTransition>
        </body>
    </html>
  );
}
