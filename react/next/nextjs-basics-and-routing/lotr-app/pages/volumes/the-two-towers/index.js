import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheTwoTowers() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <Link href={"/"}>🏠 Home</Link>
      <p></p>
      <Link href={"/volumes"}>📚 All Volumes</Link>
      <p></p>
      <Link href={`/volumes/${volumes[0].slug}`}>⬅️ Last Volume</Link>
      <p></p>

      <h1>{volumes[1].title}</h1>
      <p>{volumes[1].description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            <h3>
              {book.ordinal}: {book.title}
            </h3>
          </li>
        ))}
      </ul>
      <Image src={volume.cover} alt="cover image" width={140} height={230} />
      <p></p>
      <Link href={`/volumes/${volumes[2].slug}`}>Next Volume ➡️</Link>
    </>
  );
}
