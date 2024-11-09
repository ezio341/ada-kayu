"use client";

import { MantineProvider } from "@mantine/core";

export default function ProjectThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider defaultColorScheme="light">{children}</MantineProvider>
  );
}
