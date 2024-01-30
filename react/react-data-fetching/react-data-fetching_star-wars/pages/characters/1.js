import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

const id = 1;

function useCharacter(id) {
  const url = "https://swapi.dev/api/people";
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
  const { data, error, isLoading } = useSWR(`${url}/${id}`, fetcher);

  return {
    character: data,
    isLoading,
    isError: error,
  };
}

export default function Character() {
  const { character, isLoading, isError } = useCharacter(id);
  console.log("data: ", character);
  // loading & error msg
  if (isLoading)
    return (
      <h1 style={{ textAlign: "center", marginTop: "50vh" }}>Loading...</h1>
    );
  if (isError)
    return (
      <h1 style={{ textAlign: "center", marginTop: "50vh" }}>
        {isError.message}
      </h1>
    );

  return (
    <Layout>
      <Card
        id={id}
        name={character.name}
        height={character.height}
        eyeColor={character.eye_color}
        birthYear={character.birth_year}
      />
    </Layout>
  );
}
