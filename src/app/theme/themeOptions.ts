import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3366FF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#87CEEB",
    },
    success: {
      main: "#28A745",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#FF4136",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FFC107",
      contrastText: "#333333",
    },
    info: {
      main: "#F0F0F0",
      contrastText: "#333333",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F0F0F0",
    },
    text: {
      primary: "#333333",
      secondary: "#87CEEB",
    },
    action: {
      hover: "#87CEEB",
      active: "#007BFF",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
};
