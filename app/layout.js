import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`className="layout-container  max-w-screen-xl mx-auto px-0"${inter.className}`}
      >
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
