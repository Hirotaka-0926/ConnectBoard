import { useState, useEffect } from "react";

interface Thread {
  id: string;
  title: string;
}

const LoadListThreads = () => {
  const [threadsLists, setThreadsLists] = useState<Thread[]>([]);

  const fetchThreads = async () => {
    try {
      const response = await fetch(
        "https://railway.bulletinboard.techtrain.dev/threads"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log(response);
      const jsonData: Thread[] = await response.json();

      setThreadsLists(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchThreads();
  }, []);

  return (
    <div>
      <ul>
        {threadsLists.map((thread) => (
          <li key={thread.id}>{thread.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default LoadListThreads;
