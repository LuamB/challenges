import useSWR from "swr";
import Posts from "@/components/posts/Posts";
import { useSession } from "next-auth/react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function UserPosts() {
    const { data: session } = useSession();

    const { data, isLoading, error } = useSWR(
        session ? `/api/user/posts/${session.user?.userId}` : null,
        fetcher
    );

    if (isLoading) return <p>Loading...</p>;

    return <Posts posts={data} />;
}
