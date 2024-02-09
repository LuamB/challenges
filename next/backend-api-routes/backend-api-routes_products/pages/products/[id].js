import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const StyledLink = styled(Link)`
  text-decoration: none;
  color: green;
`;

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(`/api/products/${id}`, fetcher);
  console.log("data ", data);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <article>
      <StyledLink href={"/products"}>← Back to Overview</StyledLink> <br />
      <strong>Name: {data.name}</strong> <br />
      Description: {data.description} <br />
      Price: {data.price} {data.currency} <br />
      Category: {data.category} <br />
      <hr />
    </article>
  );
}
