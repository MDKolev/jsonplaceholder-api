import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="data-window">
          <span className="title">JSONPlaceholder API</span>
          <div className="secondary-container">
            <div className="sidebar">
              <button className="fetch-button">Fetch Users</button>
              <button className="reset-button">Reset</button>
            </div>
            <div className="data-table">
              <table>
                <thead >
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>More Info</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Leanne Graham</td>
                    <td>Bret</td>
                    <td>Sincere@april.bizgadfg</td>
                    <td>Row 1, Cell 4</td>
                  </tr>
                  <tr>
                    <td>Row 2, Cell 1</td>
                    <td>Row 2, Cell 2</td>
                    <td>Row 2, Cell 3</td>
                    <td>Row 2, Cell 4</td>
                  </tr>
                  <tr>
                    <td>Row 3, Cell 1</td>
                    <td>Row 3, Cell 2</td>
                    <td>Row 3, Cell 3</td>
                    <td>Row 3, Cell 4</td>
                  </tr>
                  <tr>
                    <td>Row 4, Cell 1</td>
                    <td>Row 4, Cell 2</td>
                    <td>Row 4, Cell 3</td>
                    <td>Row 4, Cell 4</td>
                  </tr>
                  <tr>
                    <td>Row 5, Cell 1</td>
                    <td>Row 5, Cell 2</td>
                    <td>Row 5, Cell 3</td>
                    <td>Row 5, Cell 4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
