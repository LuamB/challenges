import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheFellowShipOfTheKing() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href={"/"}>🏠 Home</Link>
      <p></p>
      <Link href={"/volumes"}>📚 All Volumes</Link>
      <h1>{volumes[0].title}</h1>
      <p>{volumes[0].description}</p>
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
      <Link href={`/volumes/${volumes[1].slug}`}>Next Volume ➡️</Link>
    </>
  );
}
