import useSWR from "swr";
import Link from "next/link";

export default function Products() {
  const { data } = useSWR("/api/products");

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {data.map(({ category, currency, description, id, name, price }) => {
        return (
          <Link href={`/products/${id}`}>
            <li key={id}>
              <h1>{name}</h1>
              <p>{category}</p>
              <p>{description}</p>
              <p>
                {price}
                {currency}
              </p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
