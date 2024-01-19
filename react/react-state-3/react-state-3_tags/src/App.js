import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(tagToAdd) {
    setTags([...tags, tagToAdd]);
  }

  function handleRemoveTag(tagToRemove) {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleRemoveTag} />
    </main>
  );
}
