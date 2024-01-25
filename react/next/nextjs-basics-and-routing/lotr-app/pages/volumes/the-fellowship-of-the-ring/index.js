import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheFellowShipOfTheKing() {
  // I had a different working solution, see commits, but opting for Ada's method of destructuring, here
  const index = volumes.findIndex(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  const volume = volumes[index];
  const { title, description, cover, books } = volume;

  // I had a different working solution for pagination, see commits, but opting for Tillman's below
  return (
    <>
      <Link href={"/"}>🏠 Home</Link>
      <p></p>
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
      <p></p>
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
