import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "PhotoFeed",
  description: "PhotoFeed - A simple photo feed app built with next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <div className="container my-4 lg:my-8">{children}</div>
        <div id="modal-root" />
      </body>
    </html>
  );
}
