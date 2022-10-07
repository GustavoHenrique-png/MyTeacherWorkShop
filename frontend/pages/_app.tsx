import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../src/components/Header/Header";
import tema from "../src/themes/theme";
import { ThemeProvider } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
