import { useState } from "react";
import { Thread } from "../types/threads";
import LoadListThreads from "../features/LoadListThreads";

export const HomePage = () => {
  const [threadsLists, setThreadsLists] = useState<Thread[]>([]);

  return (
    <>
      <LoadListThreads
        threadsLists={threadsLists}
        setThreadsLists={setThreadsLists}
      />
    </>
  );
};
