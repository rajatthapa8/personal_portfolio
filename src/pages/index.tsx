import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rajat | Front-End Developer</title>
        <meta
          name="description"
          content="UI UX Web developer Devloper in Canberra Front-end Developer in canberra australia sydney gradaute developer"
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <header>
        <Navbar />
      </header>
    </>
  );
}
