// layout.js (server component)
import Navbar from "@/components/comman/Navbar";
import "./globals.css";

export const metadata = {
  title: "Dasalon",
  description: "Sidebar with pages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Navbar /> {/* client component */}
          <main className="flex-1 md:pl-13 lg:pl-13 pl-7 overflow-x-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
