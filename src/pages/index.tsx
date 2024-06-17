import type { NextPage } from "next";
import Head from "next/head";
import { Heading, Box, Center } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>eResearch Team Charter</title>
        <meta name="description" content="Our Team Charter" />
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
