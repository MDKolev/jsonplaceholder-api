import { Toaster } from "sonner";
import "./App.css";
import FetchData from "./components/FetchData";

function App() {
  

  return (
    <>
      <div className="main-container">
        <div className="data-window">
          <FetchData/>
          <Toaster richColors duration={2000}/>
        </div>
      </div>
    </>
  );
}

export default App;
