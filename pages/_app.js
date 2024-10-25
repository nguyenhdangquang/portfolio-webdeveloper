import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import data from "../data/portfolio.json";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="dark">
        <Head>
            <title>👋{data.name}</title>
        </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
