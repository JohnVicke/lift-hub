"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import { TRPCReactProvider } from "~/trpc/react";

export function RootProviders({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <TRPCReactProvider>{children}</TRPCReactProvider>
    </ThemeProvider>
  );
}
