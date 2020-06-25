import React, { FunctionComponent } from "react";
import { Image, Flex, Heading, Link } from "@chakra-ui/core";
import {
  FaLinkedin as LinkedInIcon,
  FaGithub as GithubIcon,
} from "react-icons/fa";

interface MemberData {
  name: string;
  picture: string;
  linkedin?: string;
  github?: string;
}

interface MemberComponentProps {
  memberData: MemberData;
}

const SocialAccounts: FunctionComponent<MemberComponentProps> = ({
  memberData: { linkedin, github },
}) => (
  <Flex align="center" justify="center">
    {linkedin && (
      <Link href={linkedin} isExternal mx={1}>
        <LinkedInIcon size={20} color="#fff" />
      </Link>
    )}
    {github && (
      <Link href={github} isExternal mx={1}>
        <GithubIcon size={20} color="#fff" />
      </Link>
    )}
  </Flex>
);

export const Member: FunctionComponent<MemberComponentProps> = ({
  memberData,
}) => {
  const { name, picture } = memberData;

  return (
    <Flex m={5} direction="column" align="center">
      <Image my={1} src={picture} alt={name} rounded="full" size={200} />
      <Heading my={1} as="h6" size="sm">
        {name}
      </Heading>
      <SocialAccounts memberData={memberData} />
    </Flex>
  );
};
