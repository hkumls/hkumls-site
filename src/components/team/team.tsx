import React, { FunctionComponent } from "react";
import { Flex, Text, Grid } from "@chakra-ui/core";
import { Member } from "./member";
import { membersData } from "./membersData";

const teamIntro =
  "The team at HKU MLS consists of like-minded individuals from diverse backgrounds who are committed to bringing about positive change in society with the power of machine learning and artificial intelligence. Its current members are:";
export const Team: FunctionComponent = () => {
  return (
    <Flex id="team" align="center" direction="column" p={[4, 6, 8, 10]}>
      <Text fontSize="3xl" as="b" p={5}>
        Team
      </Text>
      <Text fontSize={["l", "l", "xl", "xl"]} pb={5}>
        {" "}
        {teamIntro}{" "}
      </Text>

      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" width="100%">
        {membersData.map((memberData, index) => (
          <Member key={index} memberData={memberData} />
        ))}
      </Grid>
    </Flex>
  );
};
