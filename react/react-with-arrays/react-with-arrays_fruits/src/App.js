import { fruits } from "./Data/fruits";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
