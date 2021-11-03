import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Navbar from "../components/layout/Navbar";
import Container from "../components/layout/Container";
import { AnimatePresence } from "framer-motion";

// const variants = {
//   hidden: { opacity: 0, x: 0, y: 20 },
//   enter: { opacity: 1, x: 0, y: 20 },
//   exit: { opacity: 0, x: 0, y: 20 },
// };

// const AnimateLayout = ({ children }) => (
//   <motion.div
//     initial="hidden"
//     animate="enter"
//     exit="exit"
//     variants={variants}
//     transition={{ duration: 0.4, type: "easeInOut" }}
//     style={{ position: "relative" }}
//   >
//     {children}
//   </motion.div>
// );

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <AnimatePresence exitBeforeEnter initial={true}>
          <Navbar />
        {/* <AnimateLayout> */}
          <Container>
                      <Component {...pageProps} key={router.route} />
          </Container>
        {/* </AnimateLayout> */}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
