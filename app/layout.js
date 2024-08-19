import { Inter } from "next/font/google";
import "./globals.css";
import Context from "./(context)/Context";
import NavBar from "./components/NavBar/NavBar";
import TopBar from "./components/TopBar/TopBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShoppaMee",
  description: "Products from the World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <Context>
          <div className="minorFix">{children}</div>
        </Context>
        <NavBar />
      </body>
    </html>
  );
}
