import { useState } from "react";
import { postNewThread } from "../utils/railwayFunc";

export const CreateNewThread = () => {
  const [title, setTitle] = useState<string>("");

  const inputText = (e) => {
    setTitle(e.target.value);
  };

  const postTitle = () => {
    postNewThread(title);
  };

  return (
    <div>
      <h1>これはThreadの作成画面です</h1>
      <input type="text" value={title} onChange={inputText} />
      <button onClick={postTitle}>作成</button>
    </div>
  );
};
