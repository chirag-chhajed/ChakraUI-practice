import { Box,SimpleGrid,Text } from "@chakra-ui/react";

export default function Dashboard() {

  return (
    <SimpleGrid p={"1rem"} columns={4} spacing={10} minChildWidth={"250px"}>
      <Box bg="white" h={"200px"} border={"1px solid"}>
        <Text color={{base: 'pink',md: 'blue'}}>Hello</Text>
      </Box>
      <Box bg="white" h={"200px"} border={"1px solid"}></Box>
      <Box bg="white" h={"200px"} border={"1px solid"}></Box>
      <Box bg="white" h={"200px"} border={"1px solid"}></Box>

      <Box bg="white" h={"200px"} border={"1px solid"}></Box>
      <Box bg="white" h={"200px"} border={"1px solid"}></Box>
      <Box bg="white" h={"200px"} border={"1px solid"}></Box>
      <Box bg="white" h={"200px"} border={"1px solid"}></Box>

      <Box bg="white" h={"200px"} border={"1px solid"}></Box>
      <Box bg="white" h={"200px"} border={"1px solid"}></Box>
      <Box bg="white" h={"200px"} border={"1px solid"}></Box>
      <Box bg="white" h={"200px"} border={"1px solid"}></Box>

    </SimpleGrid>
  );
}
