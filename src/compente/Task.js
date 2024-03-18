import { useState, useEffect } from "react";
import Card from "./Card";
function Task() {
  const [user, setuser] = useState([]);

  const fetchTask = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const data = await response.json();
      setuser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    
    <div className="flex justify-center flex-wrap bg-indigo-100 ">

      {user.length === 0 ? (
        <p>Loading</p>
      ) : (
        user.map((user) => <Card key={user.id} user={user}/>)
      )}
    </div>
  );
}
export default Task;
