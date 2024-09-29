import "./globals.css";
import Wrappers from "@/common/providers/wrappers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Wrappers>
          {children}
        </Wrappers>
      </body>
    </html>
  );
}
