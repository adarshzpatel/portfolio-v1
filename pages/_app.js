import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Navbar from "../components/layout/Navbar";
import Container from "../components/layout/Container";
import { AnimatePresence } from "framer-motion";


function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>

          <Navbar />
          <Container>
            <Component {...pageProps} key={router.route} />
          </Container>
    </ThemeProvider>
  );
}

export default MyApp;
