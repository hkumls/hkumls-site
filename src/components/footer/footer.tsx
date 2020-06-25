import React, { FunctionComponent } from "react";
import { Flex, Text, Link } from "@chakra-ui/core";

export const Footer: FunctionComponent = () => (
  <Flex
    align="center"
    direction="column"
    backgroundColor="primary"
    p={[5, 5, 10, 10]}
  >
    <Text>
      Copyright &#169; &nbsp;
      <Link href="">HKU Machine Learning Society</Link>
    </Text>
  </Flex>
);
