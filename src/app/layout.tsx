import { Inter } from "next/font/google";
import "./globals.css";
import ProjectThemeProvider from "@/features/theme/components/ProjectThemeProvider";
import MainLayout from "@/ui/components/Layouts/MainLayout";
import "@mantine/core/styles.css";
import { Metadata } from "next";
import "@mantine/carousel/styles.css";

export const metadata: Metadata = {
  title: "Ada Kayu",
  description: "Ada Kayu is a platform for buying and selling used furniture.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body
        className={inter.className}
        style={{ overflowY: "auto", height: "100vh" }}
      >
        <ProjectThemeProvider>
          <MainLayout>{children}</MainLayout>
        </ProjectThemeProvider>
      </body>
    </html>
  );
}
