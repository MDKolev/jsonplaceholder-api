import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsersData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
    console.log(users);
  };

  return (
    <>
      <div className="main-container">
        <div className="data-window">
          <div className="header">
            <span className="title">JSONPlaceholder API</span>
            <div className="button-container">
              <div className="pagination-settings">
                <label htmlFor="itemsPerPage">Items per page:</label>
                <select
                  id="itemsPerPage"
                >
                  <option value={1}>1</option>
                  <option value={3}>3</option>
                  <option value={5}>5</option>
                </select>
              </div>
              <button className="sort-button">Sort A-Z</button>
              <button className="sort-button">Sort Z-A</button>
            </div>
          </div>
          <div className="secondary-container">
            <div className="sidebar">
              <button
                className="fetch-button"
                onClick={() => fetchUsersData(users)}
              >
                Fetch Users
              </button>
              <button className="reset-button">Reset</button>
            </div>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>
                      More
                      <br />
                      Info
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))}
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
