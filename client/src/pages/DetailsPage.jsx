import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

//Used useEffect Hook for fetching data whenever landing into this page.
//Used useState to store array of data received from database.
//API endpoint for retrieving data "https://travelopia-29rz.onrender.com/traveller/getData"
//Page is responsive for all screen sizes.

const DetailsPage = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://travelopia-29rz.onrender.com/traveller/getData")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <SimpleGrid
      spacing={4}
      mt={"20px"}
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(4, 1fr)",
      ]}
      gap={6}
    >
      {data.map((el, i) => {
        return (
          <Card
            _hover={{ bgGradient: "linear(to-r, green.400,blue.400 )" }}
            key={i}
            padding={"4"}
            margin={"2"}
            bgGradient="linear(to-r, blue.400,pink.400)"
            boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
            textColor={"white"}
          >
            <CardHeader textAlign={"left"}>
              <Heading size="md">Name-: {el.name}</Heading>
            </CardHeader>
            <CardBody textAlign={"left"}>
              <Heading size="sm"> Contact details-: {el.email}</Heading>
              <Text fontWeight={"bold"} fontSize={"lg"} as="i">
                Place-: {el.place}
              </Text>
              <Text fontWeight={"bold"} fontSize="lg">
                Number of Travellers-: {el.numberofTravellers}
              </Text>
              <Text fontWeight={"bold"} fontSize="lg">
                Budget per Person-: $ {el.budgetPerPerson}
              </Text>
              <br />
              <Heading size="md">Total budget-: $ {el.total}</Heading>
            </CardBody>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

export default DetailsPage;
