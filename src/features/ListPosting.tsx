import { useEffect } from "react";
import { fetchPosting } from "../utils/railwayFunc";
import { useParams } from "react-router-dom";

export const ListPosting = ({ post, setPost }) => {
  const { thread_id } = useParams();
  const getPosting = async () => {
    try {
      const response = await fetchPosting(thread_id);
      const data: string[] = await response.json();
      setPost(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getPosting();
  }, []);

  return (
    <div>
      <ul>
        {post.map((title: string) => (
          <li>{title}</li>
        ))}
      </ul>
    </div>
  );
};
