import "./Card.css";

// export default function Card({ name }) {
//   return <p className="card">{name}</p>;
// }

export default function Card({ name, color }) {
  return <p className={`card card--${color}`}>{name}</p>;
}
