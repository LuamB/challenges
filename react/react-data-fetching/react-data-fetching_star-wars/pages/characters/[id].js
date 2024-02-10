import Link from "next/link";
import styled from "styled-components";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occured while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function Character() {
  // get id
  const router = useRouter();
  const id = router.query.id;

  // fetch data per character
  const { data, isLoading, error } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    fetcher
  );
  console.log("data: ", data);

  // loading & error msg
  if (isLoading)
    return (
      <h1 style={{ textAlign: "center", marginTop: "50vh" }}>Loading...</h1>
    );
  if (error)
    return (
      <h1 style={{ textAlign: "center", marginTop: "50vh" }}>
        {error.message}
      </h1>
    );

  // rendering
  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
      <StyledLink href={"/"}>← Back to Overview</StyledLink>
    </Layout>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  align-self: center;
  margin-top: 1em;
  color: lightblue;
`;
