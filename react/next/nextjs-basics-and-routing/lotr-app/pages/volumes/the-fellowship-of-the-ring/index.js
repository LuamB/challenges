import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheFellowShipOfTheKing() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href={"/volumes"}>← All Volumes</Link><p></p>
      <Link href={`/volumes/${volumes[1].slug}`}>Next Volume →</Link>
      <h1>{volumes[0].title}</h1>
      <p>{volumes[0].description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            <p>{book.ordinal}</p>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
      <Image src={volume.cover} alt="cover image" width={140} height={230} />
    </>
  );
}
