import React, { FunctionComponent } from "react";
import { Flex, Text, Link } from "@chakra-ui/core";
import { MdEmail as EmailIcon } from "react-icons/md";
import { FaFacebookSquare as FacebookIcon } from "react-icons/fa";

const emailAccount = "hkumachinelearning@gmail.com";
const facebookAccount = "https://www.facebook.com/HKUMLS";

const FacebookAccount: FunctionComponent = () => (
  <Link href="https://www.facebook.com/HKUMLS" isExternal m={2}>
    <Flex align="center">
      <FacebookIcon size={25} color="#fff" />
      <Text mx={2}>HKUMLS</Text>
    </Flex>
  </Link>
);

const EmailAccount: FunctionComponent = () => (
  <Link href={`mailto:${emailAccount}`} isExternal m={2}>
    <Flex align="center">
      <EmailIcon size={25} color="#fff" />
      <Text mx={2}>{emailAccount}</Text>
    </Flex>
  </Link>
);

export const Contact: FunctionComponent = () => (
  <Flex id="contact" align="center" direction="column" p={[4, 6, 8, 10]}>
    <Text fontSize="3xl" as="b" p={5}>
      Contact
    </Text>
    <Flex flexWrap="wrap" align="center" justify="center" direction="column">
      <FacebookAccount />
      <EmailAccount />
    </Flex>
  </Flex>
);
