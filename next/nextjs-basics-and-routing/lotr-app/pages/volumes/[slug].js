import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { volumes, introduction } from "@/resources/lib/data";

export default function VolumeDetail() {
  // hooks
  const router = useRouter();
  const { slug } = router.query;

  // init relevant vars
  const index = volumes.findIndex((volume) => volume.slug === slug);
  const currentVolume = volumes[index];
  const { title, description, cover, books } = currentVolume;

  // error msg for invalid slug
  if (!currentVolume) {
    return (
      <>
        <h1>This volume does not exist</h1>;
        <Link href="/volumes">⬅️ All Volumes 📚</Link>
      </>
    );
  }

  // main render
  return (
    <>
      <Link href={"/"}>🏠 Home</Link>
      <Link href={"/volumes"}>📚 All Volumes</Link>

      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={ordinal}>
            <h3>
              {ordinal}: {title}
            </h3>
          </li>
        ))}
      </ul>
      <Image src={cover} alt={title} width={140} height={230} />

      {index > 0 && (
        <>
          <Link href={`/volumes/${volumes[index - 1].slug}`}>
            {`⬅️ Last Volume: ${volumes[index - 1].title}`}
          </Link>
          <p></p>
        </>
      )}
      {index < volumes.length - 1 && (
        <Link href={`/volumes/${volumes[index + 1].slug}`}>
          {`➡️ Next Volume: ${volumes[index + 1].title}`}
        </Link>
      )}
    </>
  );
}
