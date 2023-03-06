import { Flex, Box, Heading, Button, Text, Spacer,HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex as={"nav"} p={"10px"} alignItems={"center"} gap={"1rem"}>
      <Heading as={"h1"}>Tasks</Heading>
      <Spacer />
      <HStack spacing={"20px"}>
      <Box bg={"gray.200"} p={"10px"}>
        M
      </Box>
      <Text>chhajedchirag</Text>
      <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
