import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  Heading,
  Box,
  Center,
  UnorderedList,
  ListItem,
  Flex,
} from "@chakra-ui/react";

type Routes = {
  text: string;
  route: string;
};

const Home: NextPage = () => {
  const routesArr: Routes[] = [
    { text: "See Counter example component", route: "counter-example" },
    { text: "See Fetch example component", route: "fetch-example" },
  ];

  return (
    <div>
      <Head>
        <title>eResearch Team Charter</title>
        <meta
          name="description"
          content="Our Team Charter"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Center>
          <Heading
            role="heading"
            as="h1"
            color="white"
            borderRadius={4}
            mt={8}
            p={4}
            bg="#2464ec"
          >
            eResearch Team Charter
          </Heading>
        </Center>
      </Box>
    </div>
  );
};

export default Home;
