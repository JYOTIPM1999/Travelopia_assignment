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
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import axios from "axios";

export default function PlanYourTrip() {
  const [trip, setTrip] = useState({
    name: "",
    email: "",
    place: "",
    numberofTravellers: null,
    budgetPerPerson: null,
    total: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrip({ ...trip, [name]: value });
  };

  useEffect(() => {
    const { numberofTravellers, budgetPerPerson } = trip;

    if (numberofTravellers && budgetPerPerson) {
      setTrip({
        ...trip,
        total: numberofTravellers * budgetPerPerson,
      });
    }
  }, [trip.numberofTravellers, trip.budgetPerPerson]);

  const toast = useToast();

  const handleClick = async () => {
    const { name, email, place, numberofTravellers, budgetPerPerson, total } =
      trip;

    if (
      !name ||
      !email ||
      !place ||
      !numberofTravellers ||
      !budgetPerPerson ||
      !total
    ) {
      toast({
        title: "Please Fill all the details",
        description: "You have created trip successfully.",
        status: "warning",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } else {
      if (email.includes("@gmail.com")) {
        let data = await axios
          .post("http://localhost:8080/traveller/register", trip)
          .then((res) => {
            if (res.data === "Data successfully saved") {
              toast({
                title: "Trip saved successfully.",
                description: "You have created trip successfully.",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            } else {
              toast({
                title: "Email already exist",
                description: "You have created Trip previously",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            }
          });
      } else {
        toast({
          title: "Email must contain @gmail.com",
          description: "You have created Trip previously",
          status: "warning",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

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
                onChange={handleChange}
                name="name"
                placeholder="Fulll Name"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                onChange={handleChange}
                name="email"
                placeholder="name@email.com"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <FormControl>
                <Select
                  placeholder="Select country"
                  onChange={handleChange}
                  name="place"
                >
                  <option value="india">India</option>
                  <option value="africa">Africa</option>
                  <option value="europe">Europe</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Select No of Travelers</FormLabel>
                <Input
                  onChange={handleChange}
                  name="numberofTravellers"
                  placeholder="Ex-10"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Select Budget per Person in $</FormLabel>
                <Input
                  onChange={handleChange}
                  name="budgetPerPerson"
                  placeholder="Ex-50 $ per person"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
              </FormControl>
              <Text as={"b"} fontSize="25px" color="green">
                Total Budget - {trip.total} $
              </Text>
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
              onClick={handleClick}
            >
              Submit
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
