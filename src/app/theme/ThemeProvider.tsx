"use client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeOptions } from "./themeOptions";

type ThemeProviderClientProps = {
  children: React.ReactNode;
};

export default function ThemeProviderClient({ children }: ThemeProviderClientProps) {
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
