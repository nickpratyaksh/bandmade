import { useState } from "react";
import { lightTheme } from "./ui/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [current_theme, changeTheme] = useState(lightTheme);

  return (
    <html lang="en">
      <body>
        <themeContext>{children}</themeContext>
      </body>
    </html>
  );
}
