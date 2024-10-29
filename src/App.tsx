import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import { Suspense } from "react";

import "./App.css";

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}> {element}</Suspense>
    </>
  );
}

export default App;
