import React from "react";
import { Box } from "@chakra-ui/core";
import "./layout.css";
import { Header } from "./header";

export const Layout: React.FC<{ children: React.ReactNode; location: any }> = ({
  children,
  location,
}) => {
  return (
    <>
      <Box
        position="fixed"
        left={0}
        right={0}
        zIndex={10}
        backgroundColor="rgba(0,0,0,0.5)"
      >
        <Header location={location} />
      </Box>
      <Box as="main" flexDirection="column" p={[6, 8]}>
        {children}
      </Box>
    </>
  );
};
