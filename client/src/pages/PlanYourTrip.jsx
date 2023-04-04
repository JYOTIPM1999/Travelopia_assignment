import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  FormControl,
  FormLabel,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function PlanYourTrip() {
  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Explore the World{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, green.400,yellow.400)"
              bgClip="text"
            >
              with
            </Text>{" "}
            Adventurous Travelers
          </Heading>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Join our passionate Travelers
              <Text
                as={"span"}
                bgGradient="linear(to-r, green.400,yellow.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              If you're an amazing traveler with a passion for exploration, we
              want to hear from you!
            </Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Fulll Name"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="name@email.com"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              {/* <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Select Location...
                </MenuButton>
                <MenuList>
                  <MenuItem>India</MenuItem>
                  <MenuItem>Africa</MenuItem>
                  <MenuItem>Europe</MenuItem>
                </MenuList>
              </Menu> */}
              <FormControl>
                {/* <FormLabel>Select Location...</FormLabel> */}
                <Select placeholder="Select country">
                  <option>India</option>
                  <option>Africa</option>
                  <option>Europe</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Select No of Travelers</FormLabel>
                <NumberInput max={500} min={1}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl>
                <FormLabel>Select Budget per Person in $</FormLabel>
                <NumberInput max={500} min={5}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <Input
                placeholder="Total Budget in $"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                disabled="true"
              />
            </Stack>

            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, green.400,yellow.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, blue.400,red.400)",
                boxShadow: "xl",
              }}
            >
              Submit
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
