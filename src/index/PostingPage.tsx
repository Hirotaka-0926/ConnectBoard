import { useEffect, useState, startTransition } from "react";
import { fetchPosting } from "../utils/railwayFunc";
import { Posts } from "../types/threads";

interface Props {
  thread_id: string;
  postUpdated: boolean;
}

export const PostingPage: React.FC<Props> = ({ thread_id, postUpdated }) => {
  const [post, setPost] = useState<Posts | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getPosting = async () => {
    try {
      if (!thread_id) {
        console.log("thread_id が存在しません");
        return;
      }
      const response = await fetchPosting(thread_id);
      const data: Posts = await response.json();
      setPost(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true); // 依存配列に thread_id が変わるたびに再フェッチするように設定
    startTransition(() => {
      getPosting();
    });
  }, [postUpdated]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : post && post.posts ? (
        <ul>
          {post.posts.map((item) => (
            <li key={item.id}>{item.post}</li>
          ))}
        </ul>
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};
