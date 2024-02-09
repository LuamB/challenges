import useSWR from "swr";
import Link from "next/link";
import styled from "styled-components";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const StyledList = styled.ul`
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: green;
`;

export default function AllProducts() {
  const { data, isLoading, error } = useSWR("api/products", fetcher);
  console.log("data", data);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading ...</div>;

  return (
    <StyledList>
      {data?.map(({ id, name, price, currency }) => {
        return (
          <>
            <li key={id}>
              <strong>Name: {name}</strong> <br />
              Price: {price} {currency} <br />
              <StyledLink href={`products/${id}`}>More Details</StyledLink>
              <hr />
            </li>
          </>
        );
      })}
    </StyledList>
  );
}

{
  /* <ul>
      {moviesData.map(({ id, title, year }) => {
        // find the movie in the state and destructure the isFavorite property
        // if it is not in the state, default isFavorite to false
        const { isFavorite } = moviesInfo.find((info) => info.id === id) ?? {
          isFavorite: false,
        };

        return (
          <li key={id}>
            {title} ({year})
            <button type="button" onClick={handleToggleFavorite(id)}>
              {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </button>
          </li>
        );
      })}
    </ul> */
}
