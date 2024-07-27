import { Toaster } from "sonner";
import "./App.css";
import FetchData from "./components/FetchData";
import ErrorPage from "./components/ErrorPage";
import { useState } from "react";

function App() {
  const [error, setError] = useState(null);

  return (
    <>
      <div className="main-container">
        <div className="data-window">
          {error === null ? (
            <FetchData setError={setError} />
          ) : (
            <ErrorPage error={error} />
          )}
          <Toaster richColors duration={2000} />
        </div>
      </div>
    </>
  );
}

export default App;
