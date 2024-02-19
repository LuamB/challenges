import useSWR from "swr";

export default function HomePage() {
  const { data } = useSWR("/api/random-character");
  if (!data) {
    return <h1>Loading...</h1>;
  }
  const { firstName, lastName, twitterName, geoHash } = data;
  return (
    <>
      <span>{geoHash}</span>
      <h1>
        Hello {firstName} {lastName}! Your Twitter name is: {twitterName}
      </h1>
    </>
  );
}
