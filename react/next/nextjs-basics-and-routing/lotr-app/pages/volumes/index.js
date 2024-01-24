import Head from "next/head";
import Link from "next/link";
import { volumes, introduction } from "@/resources/lib/data";

export default function Volumes() {
  return (
    <>
      <Link href={"/"}>🏠 Home</Link>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
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
  );
}
