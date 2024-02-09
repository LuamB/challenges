import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(`/api/products/${id}`, fetcher);
  console.log("data ", data);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <article>
      <span>
        <Link href={"/products"}>Back to Overview</Link>
      </span>
      <br />
      <strong>Name: {data.name}</strong> <br />
      Description: {data.description} <br />
      Price: {data.price} {data.currency} <br />
      Category: {data.category} <br />
      <hr />
    </article>
  );
}
