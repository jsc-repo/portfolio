import { Stack } from "@chakra-ui/react";
import { useRef } from "react";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Samuel Choi - Portfolio</title>
        <meta name="description" content="Portfolio website" />
        <meta name="author" content="Samuel Choi" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Stack spacing={20}>
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </Stack>
      </main>
    </div>
  );
}
