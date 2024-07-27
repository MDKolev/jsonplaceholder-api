import { Toaster } from "sonner";
import "./App.css";
import FetchData from "./components/FetchData";
import ErrorPage from "./components/ErrorPage";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [error, setError] = useState(null);

  return (
    <>
      <BrowserRouter>
        <div className="main-container">
          <div className="data-window">
            <Routes>
              <Route path="/" element={<FetchData setError={setError} />} />
              <Route path="/error" element={<ErrorPage error={error} />} />
            </Routes>
            <Toaster richColors duration={2000} />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
