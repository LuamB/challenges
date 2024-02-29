import Product from "../components/Product";
import { useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, mutate } = useSWR(id ? `/api/products/${id}` : null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      mutate();
      setIsEditMode(false);
    } else {
      console.error(`Error: ${response.status}`);
    }
  };

  const handleDelete = async () => {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      await response.json();
      router.push("/");
    } else {
      console.error(`Error: ${response.status}`);
    }
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const commentData = Object.fromEntries(formData);
    const response = await fetch(`/api/products/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    if (response.ok) {
      mutate();
    } else {
      console.error(`Error: ${response.status}`);
    }
  };

  if (isLoading || !data) {
    return <h1>LOADING</h1>;
  }

  return (
    <Product
      data={data}
      onHandleDelete={handleDelete}
      onHandleEdit={handleEdit}
      setIsEditMode={setIsEditMode}
      isEditMode={isEditMode}
      onSubmitComment={handleSubmitComment}
    />
  );
}
