import React, { FunctionComponent } from "react";
import { Image, Link } from "@chakra-ui/core";

interface SponsorDetails {
  name: string;
  logo: string;
  url?: string;
}

interface SponsorComponentProps {
  sponsorDetails: SponsorDetails;
}

export const Sponsor: FunctionComponent<SponsorComponentProps> = ({
  sponsorDetails: { name, logo, url },
}) => (
  <Link href={url} isExternal size={"min(300px, 80%)"} m={[2, 2, 5, 5]}>
    <Image src={logo} alt={name} />
  </Link>
);
