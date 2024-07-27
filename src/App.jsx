import React, { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import loadingImage from "./assets/tube-spinner.svg";
import { Toaster, toast } from "sonner";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("a-z");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [expandedRow, setExpandedRow] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    if (users.length !== 0) {
      toast.info("Users already fetched");
      return;
    }

    setIsLoading(true);
    setUsers([]);
    setSortedUsers([]);

    setTimeout(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      setSortedUsers(data);
      setIsLoading(false);
      toast.success("Users fetched successfully");
    }, 1500);
  };

  const sortUsers = (order) => {
    if (users.length === 0) {
      toast.error("Fetch users first");
      return;
    }

    const sorted = [...users].sort((a, b) => {
      if (order === "a-z") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setSortOrder(order);
    setSortedUsers(sorted);
    toast.info(
      `Users sorted by ${order === "a-z" ? "ascending" : "descending"} order`
    );
  };

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleItemsPerPage = (event) => {
    if (users.length === 0) {
      toast.error("Fetch users first");
      return;
    }
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const toggleRow = (userId) => {
    setExpandedRow(expandedRow === userId ? null : userId);
  };

  const resetData = () => {
    if (users.length === 0) {
      toast.error("No data to reset");
      return;
    }

    setUsers([]);
    setSortedUsers([]);
    setIsLoading(false);
    toast.error("Data reset");
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
              <button className="fetch-button" onClick={fetchUsers}>
                Fetch Users
              </button>
              <button className="reset-button" onClick={() => resetData()}>
                Reset
              </button>
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
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="no-user-data">
                      {isLoading ? (
                        <div>
                          Loading data
                          <img
                            src={loadingImage}
                            alt="loading"
                            className="loading-image"
                          />
                        </div>
                      ) : (
                        "No data to display, please fetch users."
                      )}
                    </td>
                  </tr>
                ) : (
                  <tbody>
                    {currentUsers.map((user) => (
                      <React.Fragment key={user.id}>
                        <tr
                          className={
                            expandedRow === user.id ? "expanded-row" : ""
                          }
                        >
                          <td>{user.name}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td
                            className="data-info"
                            onClick={() => toggleRow(user.id)}
                          >
                            <IoInformationCircleOutline className="icon" />
                          </td>
                        </tr>
                        {expandedRow === user.id && (
                          <tr>
                            <td colSpan="4" className="additional-info-td">
                              <div className="additional-info">
                                <p>
                                  <strong>Address:</strong>{" "}
                                  {user.address.street},{user.address.suite},{" "}
                                  {user.address.city},{user.address.zipcode}
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
                )}
              </table>
              <div className="pagination">
                {[...Array(totalPages)].map((ignored, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={currentPage === index + 1 ? "current-page" : ""}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Toaster richColors duration={2000}/>
        </div>
      </div>
    </>
  );
}

export default App;
