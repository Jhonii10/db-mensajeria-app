
import { Quicksand } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Toaster } from "react-hot-toast";


const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Mensajeria app",
  description: "Mensajeria app with using next.js",
};

export default function RootLayout({ children,}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
      <StoreProvider >
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      {children}
      </StoreProvider>
      </body>
    </html>
  );
}
