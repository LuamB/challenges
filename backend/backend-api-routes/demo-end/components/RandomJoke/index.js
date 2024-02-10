import useSWR from "swr";
import Link from "next/link";

// Here's the random joke component we talked about earlier
// instead of using https://example-apis.vercel.app/api/bad-jokes/random we use our own API in the useSWR hook

export default function RandomJoke() {
  const { data, isLoading } = useSWR(`/api/jokes/random`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <small>ID: {data.id}</small>
      <h1>{data.joke} </h1>
      <Link href="/">Back to all</Link>
    </>
  );
}
