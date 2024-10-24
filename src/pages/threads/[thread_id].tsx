import { useParams } from "react-router-dom";
import { PostingPage } from "../../index/PostingPage";

const ThreadPage = () => {
  const { thread_id } = useParams();

  return (
    <div>
      <h1>Thread ID: {thread_id}</h1>
      <PostingPage thread_id={thread_id || "default"} />
    </div>
  );
};

export default ThreadPage;
