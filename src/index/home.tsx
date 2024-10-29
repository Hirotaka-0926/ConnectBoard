import { useEffect, useState } from "react";
import { Thread } from "../types/threads";
import { getThreads } from "../utils/railwayFunc";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [threadsLists, setThreadsLists] = useState<Thread[]>([]);

  const fetchThreads = async () => {
    try {
      const response = await getThreads();
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
        {threadsLists.map((thread: Thread) => (
          <li key={thread.id}>
            <Link to={`/threads/${thread.id}`} state={{ title: "test" }}>
              {thread.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
