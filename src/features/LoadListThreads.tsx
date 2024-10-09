import { useEffect } from "react";
import { Thread } from "../types/threads";
import { getList } from "../utils/railwayFunc";

const LoadListThreads = ({ threadsLists, setThreadsLists }) => {
  const fetchThreads = async () => {
    try {
      const response = await getList();
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
