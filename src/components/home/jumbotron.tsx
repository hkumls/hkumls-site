import React from "react";
import { Flex, Box, Text, Button, Grid } from "@chakra-ui/core";
import RobotSVG from "../../assets/robot.svg";

const githubUrl = "https://github.com/hkumls";

export const Jumbotron = () => {
  return (
    <Grid
      alignItems={["", "", "center", "center", "center"]}
      gridGap={[2, 4, 6, 8, 10]}
      gridTemplateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr"]}
    >
      <Box order={[2, 2, 1, 1, 1]}>
        <Text fontSize="3xl" as="b">
          HKU Machine Learning Society
        </Text>
        <Text fontSize="lg">Analyse. Design. Build.</Text>
        <Flex pt={2}>
          <Button
            padding="8px 32px"
            backgroundColor="primary"
            textTransform="uppercase"
            borderRadius={0}
            mr={3}
            _hover={{ backgroundColor: "secondary" }}
          >
            Join Us
          </Button>
          <Button
            padding="8px 32px"
            backgroundColor="transparent"
            border="1px solid"
            borderColor="primary"
            borderRadius={0}
            textTransform="uppercase"
            _hover={{ backgroundColor: "secondary" }}
            onClick={() => window.open(githubUrl, "_blank", "noopener")}
          >
            Github
          </Button>
        </Flex>
      </Box>
      <Box
        as={RobotSVG}
        order={[1, 1, 2, 2, 2]}
        w="100%"
        h={["90vw", "90vw", "40vw", "40vw", "40vw"]}
      />
    </Grid>
  );
};
