import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#E0E0DB",
    },
    secondary: {
      main: "#2A2829",
    },
    tertiary: {
      main: "#253551",
    },
  },
  typography: { fontFamily: "Poppins" },
});

export default Theme;
