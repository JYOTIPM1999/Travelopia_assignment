import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Button,
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
  let [show, setShow] = useState({ view: "table" });
  const handleClick = (e) => {
    if (e === "table") {
      setShow({ view: e });
    } else {
      setShow({ view: e });
    }
  };

  return (
    <>
      <br />
      <Flex
        justifyContent={"space-around"}
        w={["70%", "50%", "30%"]}
        m={"auto"}
      >
        <Button onClick={() => handleClick("table")} colorScheme={"whatsapp"}>
          Table View
        </Button>
        <Button onClick={() => handleClick("card")} colorScheme={"red"}>
          Card View
        </Button>
      </Flex>
      {show.view === "table" ? (
        <TableContainer>
          <br />
          <Text fontWeight={"black"} as="mark" fontSize={["xs", "lg", "xl"]}>
            Explore the World with Adventurous and Amazing Travellers
          </Text>
          <br />
          <Table variant="striped" colorScheme="green">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Place</Th>
                <Th isNumeric>No of Travellers</Th>
                <Th isNumeric>Budget per Person</Th>
                <Th isNumeric>Total Budget</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((el, i) => {
                return (
                  <Tr key={i}>
                    <Td>{el.name}</Td>
                    <Td>{el.email}</Td>
                    <Td>{el.place}</Td>
                    <Td isNumeric>{el.numberofTravellers}</Td>
                    <Td isNumeric>{el.budgetPerPerson}</Td>
                    <Td isNumeric fontWeight={"bold"}>
                      {el.total}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
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
      )}
    </>
  );
};

export default DetailsPage;
