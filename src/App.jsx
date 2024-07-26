import React, { useEffect, useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("a-z");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [expandedRow, setExpandedRow] = useState(null);

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
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleItemsPerPage = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const toggleRow = (userId) => {
    setExpandedRow(expandedRow === userId ? null : userId);
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
                  value={itemsPerPage}
                  onChange={handleItemsPerPage}
                >
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
                    <React.Fragment key={user.id}>
                      <tr
                        className={expandedRow === user.id ? "expanded-row" : ""}
                        onClick={() => toggleRow(user.id)}
                      >
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td className="data-info">
                          <IoInformationCircleOutline className="icon" />
                        </td>
                      </tr>
                      {expandedRow === user.id && (
                        <tr>
                          <td colSpan="4" className="additional-info-td">
                            <div className="additional-info">
                              <p>
                                <strong>Address:</strong> {user.address.street},
                                {user.address.suite}, {user.address.city},
                                {user.address.zipcode}
                              </p>
                              <p>
                                <strong>Company:</strong> {user.company.name}
                                <p> -"{user.company.catchPhrase}"</p>
                              </p>
                              <p>
                                <strong>BS:</strong> {user.company.bs}
                              </p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
              <div className="pagination">
                {[...Array(totalPages)].map((ignored, index) => (
                  <button key={index} onClick={() => paginate(index + 1)}>
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
