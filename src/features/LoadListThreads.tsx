import { useEffect } from "react";
import { Thread } from "../types/threads";
import { getThreads } from "../utils/railwayFunc";
import { useNavigate } from "react-router-dom";

const LoadListThreads = () => {
  const [threadsLists, setThreadsLists] = useState<Thread[]>([]);

  const navigate = useNavigate();
  const fetchThreads = async () => {
    try {
      const response = await getThreads();
      const jsonData: Thread[] = await response.json();

      setThreadsLists(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  const loadThread = (id: number) => {
    navigate(`/threads/${id}`);
  };

  useEffect(() => {
    fetchThreads();
  }, []);

  return (
    <div>
      <ul>
        {threadsLists.map((thread: Thread) => (
          <li key={thread.id} onClick={() => loadThread(thread.id)}>
            {thread.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoadListThreads;
