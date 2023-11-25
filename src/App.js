import { useEffect, useState } from "react";

import UserList from "./components/UserList";
import ErrorMessage from "./components/ErrorMessage";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="title">User List</h1>
      {error && (
        <ErrorMessage message="Something went wrong, please reload the page and try again." />
      )}

      {isLoading ? (
        <p className="loading-container">Loading ....</p>
      ) : (
        <UserList users={users} />
      )}
    </div>
  );
}

export default App;
