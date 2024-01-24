import { volumes } from "@/resources/lib/data";
import Link from "next/link";

export default function TheReturnOfTheKing() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <>
      <Link href={"/volumes"}>← Volumes</Link>
      <h1>{volumes[2].title}</h1>
      <p>{volumes[2].description}</p>
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
