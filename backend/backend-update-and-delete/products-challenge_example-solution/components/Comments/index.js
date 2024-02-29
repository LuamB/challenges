import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";

export default function Comments({ onSubmitComment }) {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(`/api/products/${id}`);
  const reviews = data?.reviews;

  const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    input,
    button {
      border: none;
      background-color: lightgray;
      padding: 10px;
      border-radius: 50px;
      margin: 10px;
    }
  `;

  return (
    <>
      <StyledForm onSubmit={onSubmitComment}>
        <h1>Leave a comment</h1>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="text" placeholder="text" />
        <input
          type="number"
          name="rating"
          placeholder="rating"
          max={5}
          min={0}
        />
        <button>Submit</button>
      </StyledForm>
      {reviews.length > 0 && (
        <>
          <h3>Comments</h3>
          <ul>
            {reviews.map(({ title, _id, rating, text }) => (
              <li key={_id}>
                <p>
                  {rating}/5: <strong>{title}</strong> {text}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
