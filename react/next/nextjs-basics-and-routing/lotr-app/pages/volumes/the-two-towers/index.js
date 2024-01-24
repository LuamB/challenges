import { volumes } from "@/resources/lib/data";
import Link from "next/link";

export default function TheTwoTowers() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <Link href={"/volumes"}>← All Volumes</Link>
      <Link href={`/volumes/${volumes[0].slug}`}>← Last Volume</Link>
      <Link href={`/volumes/${volumes[2].slug}`}>Next Volume →</Link>
      <h1>{volumes[1].title}</h1>
      <p>{volumes[1].description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            <p>{book.ordinal}</p>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
