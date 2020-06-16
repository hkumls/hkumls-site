import React, { FunctionComponent } from "react";
import { Box, Link } from "@chakra-ui/core";

interface SponsorComponentProps {
  name: string;
  logo: string;
  url?: string;
}

export const Sponsor: FunctionComponent<SponsorComponentProps> = ({
  sponsor: { name, logo, url },
}) => (
  <Link href={url} isExternal>
    <Box as={logo} maxW="sm" maxH="sm" h={12} m={5} />
  </Link>
);
