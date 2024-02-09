import Link from "next/link";
import {movies} from "../../lib/data.js"

import { useRouter } from "next/router";

export default function Movies() {

  const router=useRouter()

  return (
    <>
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie)=>{
          return (
            <li key={movie.id}>
                <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
            </li>
          )
        })
        }

      </ul>
      <button onClick={()=>{
        if(confirm("Are you Aquaman?")){
          router.push("/movies/aquaman")
        }
      }}>
        Are you Aquaman?
      </button>

      <Link href={`/`}>Back Home</Link>
    </>
  );
}
