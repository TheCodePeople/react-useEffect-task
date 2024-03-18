import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
function App() {
  const [userList, setUserList] = useState([]);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(data);
      setUserList(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-10 items-center my-10">
      {userList.length === 0 ? (
        <p>Loading</p>
      ) : (
        userList.map((theUser) => {
          return <UserCard key={theUser.id} theUser={theUser} />;
        })
      )}
    </div>
  );
}

export default App;
