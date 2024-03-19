import "./App.css";
import { useState, useEffect } from 'react';

const App = () => {
  const [userList,setUserList]=useState([])

  const fetchUserList = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
       const data = await response.json();
       setUserList(data)
       console.log(data)  
  } catch (error) {
      console.log('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <div>
    <ul>
        {userList?.map((user) => (
          <li style={{border:"2px solid black", backgroundColor: "lightblue"}}
          key={user.id}>user name  : {user.name}  
          <ul>email  : {user.email}</ul>
          <ul>phone number  : {user.phone}</ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;