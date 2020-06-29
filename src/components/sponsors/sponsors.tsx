import React, { FunctionComponent } from "react";
import { Flex, Text, Grid } from "@chakra-ui/core";
import { Sponsor } from "./sponsor";

import { listOfSponsors } from "./listOfSponsors.ts";

export const Sponsors: FunctionComponent = () => {
  return (
    <Flex align="center" direction="column">
      <Text fontSize="3xl" as="b" p={5}>
        Supported by
      </Text>
      <Flex maxW="100vw" wrap="wrap" align="center" justify="center">
        {listOfSponsors.map((sponsorDetails, index) => (
          <Sponsor key={index} sponsorDetails={sponsorDetails} />
        ))}
      </Flex>
    </Flex>
  );
};
