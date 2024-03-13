import React from "react";
import { form, form_group, btn } from "./AddPost.module.css";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function AddPost() {
    const router = useRouter();
    const { data: session } = useSession();

    const addPost = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const { title, content } = Object.fromEntries(formData);

        const post = {
            title,
            content,
            userId: session.user.userId,
        };

        try {
            const response = await fetch("/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(post),
            });

            console.log(response);

            const data = await response.json();

            if (data.success) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h1>Add new post</h1>
            <form className={form} onSubmit={addPost}>
                <div className={form_group}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter title"
                        name="title"
                    />
                </div>
                <div className={form_group}>
                    <label htmlFor="content">Content</label>
                    <textarea id="content" rows="3" name="content"></textarea>
                </div>
                <button type="submit" className={btn}>
                    Submit
                </button>
            </form>
        </>
    );
}