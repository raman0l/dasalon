import "./globals.css";
import LayoutWrapper from "@/components/comman/LayoutWrapper";

export const metadata = {
  title: "Da Salon",
  description: "Next.js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
