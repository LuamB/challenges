import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { volumes, introduction } from "@/resources/lib/data";

export default function Volumes() {
  const [randomVolume, setRandomVolume] = useState(null);

  // functions
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  function handleRandomVolume() {
    const selectedVolume = getRandomElement(volumes);
    setRandomVolume(selectedVolume);
    router.push(`volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <Link href={"/"}>🏠 Home</Link>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((vol) => (
          <li key={vol.slug}>
            <Link href={`volumes/${vol.slug}`}>
              <h3>👉 {vol.title}</h3>{" "}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomVolume}>Pick Random Volume</button>
      {randomVolume && (
        <>
          <Link href={`volume/${randomVolume.slug}`}>
            <h3>{randomVolume.title}</h3>
          </Link>
        </>
      )}
    </>
  );
}
