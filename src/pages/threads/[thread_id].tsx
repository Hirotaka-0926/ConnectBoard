import { useParams, useLocation } from "react-router-dom";
import { PostingPage } from "../../index/PostingPage";
import { CreateNewPost } from "../../index/CreateNewPost";
import { useState } from "react";

const ThreadPage = () => {
  const { thread_id } = useParams();
  const [postUpdated, setPostUpdated] = useState<boolean>(false);
  const location = useLocation();
  console.log(location);
  const title = location.state?.title;

  const refreshPostStatus = () => {
    setPostUpdated((prev) => !prev);
  };

  return (
    <div>
      <h1>Thread title: {title}</h1>
      <PostingPage
        thread_id={thread_id || "default"}
        postUpdated={postUpdated}
      />
      <CreateNewPost
        thread_id={thread_id || "default"}
        onPostUpdate={refreshPostStatus}
      />
    </div>
  );
};

export default ThreadPage;
