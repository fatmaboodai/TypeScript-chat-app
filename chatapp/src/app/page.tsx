'use client';
import Image from "next/image";
import link from "next/link";
export default function Home() {
  return (
<main className="min-h-screen">
    <a href="/chat">chatpage</a>
    <a href="/signup">SIGNUP</a>
</main>
  );
}
