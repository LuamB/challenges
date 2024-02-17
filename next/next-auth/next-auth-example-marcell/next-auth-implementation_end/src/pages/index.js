import Profile from "@/components/profile";
import Posts from "@/components/posts/Posts";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
    const { data: posts } = useSWR(`/api/posts`, fetcher);

    return (
        <>
            <Profile />
            <Posts posts={posts} />
        </>
    );
}
