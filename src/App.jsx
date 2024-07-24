import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="data-window">
          <span className="title">JSONPlaceholder API</span>
          <div className="sidebar">
            <button className="fetch-button">Fetch Users</button>
            <button className="reset-button">Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
