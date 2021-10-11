import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import media from "styled-media-query";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const SiteRoot = styled.div`
  box-sizing: border-box;
  margin: 80px 0 0 0;

  ${media.lessThan("medium")`
margin: 80px 20px;
  `}
`;

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Navigation />
      <SiteRoot>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.main
            key={router.route}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: "linear" }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </SiteRoot>
      <Footer />
    </>
  );
};

export default Layout;
