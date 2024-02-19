import useSWR from "swr";

export default function HomePage() {
  const { data } = useSWR("/api/products");
  return (
    <div>
      <h1>Welcome to Next.js API Routes!</h1>
    </div>
  );
}
