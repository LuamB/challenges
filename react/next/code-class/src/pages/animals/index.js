import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import animals from "../../data/animals.json";

export default function Animals() {
  return (
    <>
      <Head>
        <title>Animals</title>
      </Head>
      <main>
        <h1>List of Animals</h1>
        <section>
          {animals.map((animal, i) => (
            <div key={i}>
              <Link href={`/animals/${animal.name.toLocaleLowerCase()}`}>
                <div>
                  <Image
                    src={animal.image}
                    alt={animal.name}
                    width={540}
                    height={326}
                  />
                </div>
                <h1>{animal.name}</h1>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
