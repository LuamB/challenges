import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { volumes, introduction } from "@/resources/lib/data";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  console.log("slug ", router.query);

  const index = volumes.findIndex((volume) => volume.slug === slug);
  const currentVolume = volumes[index];
  // const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return (
      <>
        <h1>This volume does not exist</h1>;
        <Link href="/volumes">⬅️ All Volumes 📚</Link>
      </>
    );
  }

  const { title, description, cover, books } = currentVolume;

  return (
    <>
      {slug !== "" && (
        <>
          <Link href={"/"}>🏠 Home</Link>
          <p></p>
        </>
      )}
      {slug === "volumes" && (
        <>
          <h1>Lord of the Rings</h1>
          <p>{introduction}</p>
          <h2>📚 All Volumes</h2>
          <ul>
            {volumes.map((vol) => (
              <li key={vol.slug}>
                <Link href={`volumes/${vol.slug}`}>
                  <h3>👉 {vol.title}</h3>{" "}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {slug !== "volumes" && (
        <>
          <Link href={"/volumes"}>📚 All Volumes</Link>
          <p></p>
        </>
      )}
      {slug === currentVolume.slug && (
        <>
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
        </>
      )}
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
