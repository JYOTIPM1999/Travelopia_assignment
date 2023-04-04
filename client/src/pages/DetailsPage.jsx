import { ChatIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const DetailsPage = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/traveller/getData").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <SimpleGrid
      spacing={4}
      mt={"20px"}
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
      gap={6}
    >
      {data.map((el, i) => {
        return (
          <Card
            _hover={{ bgGradient: "linear(to-r, blue.400,pink.400)" }}
            key={i}
            bgGradient="linear(to-r, green.400,blue.400)"
            boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
            textColor={"white"}
          >
            <CardHeader textAlign={"left"}>
              <Heading size="md">Name-: {el.name}</Heading>
            </CardHeader>
            <CardBody textAlign={"left"}>
              <Heading size="sm"> Contact details-: {el.email}</Heading>
              <Text fontWeight={"bold"} as="i">
                Place-: {el.place}
              </Text>
              <Text fontSize="lg">
                Number of Travellers-: {el.numberofTravellers}
              </Text>
              <Text fontSize="lg">
                Budget per Person-: {el.budgetPerPerson} $
              </Text>
              <br />
              <Heading size="md">Total budget-: {el.total} $</Heading>
            </CardBody>
            {/* <CardFooter>
              <Button>View here</Button>
            </CardFooter> */}
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

export default DetailsPage;
