import React, { useState } from "react";
import { putPosting } from "../utils/railwayFunc";

interface Props {
  thread_id: string;
  onPostUpdate: () => void;
}

export const CreateNewPost: React.FC<Props> = ({ thread_id, onPostUpdate }) => {
  const [newPost, setNewPost] = useState<string>("");

  const inputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      setNewPost(e.target.value);
    }
  };

  const sendPost = async () => {
    await putPosting(thread_id, newPost);
    onPostUpdate();
  };

  return (
    <div>
      <h2>こちらはpostの投稿画面です</h2>
      <input type="text" value={newPost} onChange={inputText} />
      <button onClick={sendPost}>投稿</button>
    </div>
  );
};
