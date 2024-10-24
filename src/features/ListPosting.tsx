import { useEffect, startTransition } from "react";
import { fetchPosting } from "../utils/railwayFunc";
import { useParams } from "react-router-dom";

export const ListPosting = ({ post, setPost }) => {
  const { thread_id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const getPosting = async () => {
    try {
      if (!thread_id) {
        console.log("thread_id が存在しません");
        return;
      }
      const response = await fetchPosting(thread_id);
      console.log("フェッチに成功");
      console.log("response = " + response);
      const data: string[] = await response.json();
      startTransition(() => {
        setPost(data);
      });
    } catch (e) {
      console.log("フェッチに失敗");
      console.error(e);
    } finally {
      setLoading(false); // データ取得終了後にローディングを無効化
    }
  };

  useEffect(() => {
    console.log("ListPosting was displayed");
    getPosting();
    console.log(post);
  }, [thread_id]);

  return (
    <div>
      {loading ? ( // ローディング状態に応じて表示を切り替え
        <p>Loading...</p>
      ) : (
        <ul>
          {post.map((title: string, index: number) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
