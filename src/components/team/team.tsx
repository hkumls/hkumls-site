import React, { FunctionComponent } from "react";
import { Flex, Text } from "@chakra-ui/core";
import { Member } from "./member";
import { membersData } from "./membersData";

export const Team: FunctionComponent = () => {
  return (
    <Flex id="team" align="center" direction="column" p={[4, 6, 8, 10]}>
      <Text fontSize="3xl" as="b" p={5}>
        Team
      </Text>
      <Flex>
        {membersData.map((memberData, index) => (
          <Member key={index} data={memberData} />
        ))}
      </Flex>
    </Flex>
  );
};
