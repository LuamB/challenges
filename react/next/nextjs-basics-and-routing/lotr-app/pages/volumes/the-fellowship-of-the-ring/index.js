import { volumes } from "@/resources/lib/data";
import Link from "next/link";

export default function TheFellowShipOfTheKing() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  console.log("volume ", volume);
  return (
    <>
      <Link href={"/volumes"}>← Volumes</Link>
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
    </>
  );
}
