import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheReturnOfTheKing() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <>
      <Link href={"/"}>🏠 Home</Link>
      <p></p>
      <Link href={"/volumes"}>📚 All Volumes</Link>
      <p></p>
      <Link href={`/volumes/${volumes[1].slug}`}>⬅️ Last Volume</Link>
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
      <Image src={volume.cover} alt="cover image" width={140} height={230} />
    </>
  );
}
