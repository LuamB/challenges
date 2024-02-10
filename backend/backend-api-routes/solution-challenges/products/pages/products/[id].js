import { useRouter } from "next/router";
import useSWR from "swr";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(`/api/products/${id}`);

  if (!data) {
    return <h1>Loading...</h1>;
  }
  const { category, currency, description, name, price } = data;

  return (
    <li key={id}>
      <h1>{name}</h1>
      <p>{category}</p>
      <p>{description}</p>
      <p>
        {price}
        {currency}
      </p>
    </li>
  );
}
