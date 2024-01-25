import Link from "next/link";
import { movies } from "../../../lib/data";

import { useRouter } from "next/router";

export default function Movie() {
  const router = useRouter()
  const {slug} = router.query

  console.log(router);


  const currentMovie = movies.find((movie) => movie.slug === slug);

  if (!currentMovie) {
    return (<><h1>This movie doesnt exist</h1>;
<Link href="/movies">← Back to all movies</Link>
    </>)
  }


  const { title, description, year } = currentMovie;

  return (
    <>
      <h1>
        {title} <small>{year}</small>
      </h1>
      <p>{description}</p>
      <Link href="/movies">← Back to all movies</Link>
    </>
  );
}
