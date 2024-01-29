import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <head>
      <title>Find Starknet Friends :)</title>
      <meta property="og:title" content="Frame" />
        <meta property="og:image" content="https://quizframe.xyz/api/og/eyJ2IjoxLCJzdGF0ZSI6eyJ0eXBlIjoiaW50cm8iLCJuYW1lIjoiT25seSBFbGRlciBNaWxsZW5pYWxzIHdpbGwga25vdyEifX0"/>
        <meta property="fc:frame" content="vNext"/><meta property="fc:frame:image" content="https://quizframe.xyz/api/og/eyJ2IjoxLCJzdGF0ZSI6eyJ0eXBlIjoiaW50cm8iLCJuYW1lIjoiT25seSBFbGRlciBNaWxsZW5pYWxzIHdpbGwga25vdyEifX0"/>
        <meta property="fc:frame:button:1" content="Start"/>
        <meta property="fc:frame:post_url" content="https://quizframe.xyz/q/44f3867b-519f-48b5-aa58-267a0a48f3cc?state=eyJpbmRleCI6MCwic2NvcmUiOjAsInNlbGVjdGVkIjpudWxsfQ"/>
    </head>
    <h1>
      Starknet follow fellow builders
    </h1>
    </>
  );
}
