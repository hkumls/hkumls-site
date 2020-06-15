import React, { FunctionComponent } from "react";
import { Flex, Text, Grid } from "@chakra-ui/core";
import { Sponsor } from "./sponsor";
import iDendronLogo from "../../assets/sponsors/iDendronLogo.svg";

const sponsors = [
  {
    name: "iDendron",
    logo: iDendronLogo,
    url: "https://idendron.hku.hk/",
  },
];

export const Sponsors: FunctionComponent = () => {
  return (
    <Flex align="center" direction="column">
      <Text fontSize="3xl" as="b" p={5}>
        Supported by
      </Text>
      <Flex maxW="100vw" wrap="wrap" align="center" justify="center">
        {sponsors.map((sponsor, index) => (
          <Sponsor key={index} sponsor={sponsor} />
        ))}
      </Flex>
    </Flex>
  );
};
