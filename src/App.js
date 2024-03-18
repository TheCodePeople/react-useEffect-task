import { useState, useEffect } from "react";
import UserList from "./components/UserList";
import ErrorMessage from "./components/ErrorMessage";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getApiData = async () => {
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
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="flex flex-col items-center ">
      <div className="text-4xl shadow-slate-500 text-sky-900 pt-10">
        User List
      </div>
      {error && <ErrorMessage message="what are you doing? get out of here" />}
      {isLoading ? (
        <p className="text-4xl pt-16 text-blue-500">Wait a few seconds 🤨.</p>
      ) : (
        <ul className="flex flex-wrap items-center justify-center gap-10 pt-12 pb-12 ">
          {users.map((users) => (
            <UserList key={users.id} users={users} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
