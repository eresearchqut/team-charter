import type { NextPage } from "next";
import Head from "next/head";
import teamCharter from "../../public/team-charter.json";
import { StickyNotesBoardCarousel } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>eResearch Team Charter</title>
        <meta name="description" content="Our Team Charter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StickyNotesBoardCarousel {...teamCharter} />
    </>
  );
};

export default Home;
