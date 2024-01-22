import { useState } from "react";
import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  function onToggleFavorite({id, isFavorite}) {};

  // () => {
  //   setIsFavorite(!isFavorite);
  // };

  return (
    <button
      className="favorite-button"
      onClick={onToggleFavorite}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
