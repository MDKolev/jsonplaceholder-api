import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("a-z");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      setSortedUsers(data);
    };

    fetchUsers();
  }, []);

  const sortUsers = (order) => {
    const sorted = [...users].sort((a, b) => {
      if (order === "a-z") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setSortOrder(order);
    setSortedUsers(sorted);
  };

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <>
      <div className="main-container">
        <div className="data-window">
          <div className="header">
            <span className="title">JSONPlaceholder API</span>
            <div className="button-container">
              <div className="pagination-settings">
                <label htmlFor="itemsPerPage">Items per page:</label>
                <select id="itemsPerPage">
                  <option value={1}>1</option>
                  <option value={3}>3</option>
                  <option value={5}>5</option>
                </select>
              </div>
              <button className="sort-button" onClick={() => sortUsers("a-z")}>
                Sort A-Z
              </button>
              <button className="sort-button" onClick={() => sortUsers("z-a")}>
                Sort Z-A
              </button>
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
                  {currentUsers.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
