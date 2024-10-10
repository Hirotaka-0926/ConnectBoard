import { useState } from "react";
import { ListPosting } from "../features/ListPosting";

export const PostingPage = () => {
  const [post, setPost] = useState<string[]>([]);

  return (
    <div>
      <ListPosting post={post} setPost={setPost} />
    </div>
  );
};
