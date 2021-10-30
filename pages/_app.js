import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Navbar from "../components/layout/Navbar";
import Container from "../components/layout/Container";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Navbar />
      <Container>
      
      <Component {...pageProps} />
      </Container>
    
    </ThemeProvider>
  );
}

export default MyApp;
