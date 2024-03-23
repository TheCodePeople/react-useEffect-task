import "./App.css";
import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect } from 'react';
import UserInfo from './UserInfo'

const App = () => {
  const [userList,setUserList]=useState([])
  const [newUserName,setNewUserName]= useState("")
  const [newUserEmail,setNewUserEmail]= useState("")
  const [newUserPhone,setNewUserPhone]= useState("")
  /////fetch data  
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
  //// add new user
  const handleNameChange=(event)=>{
    setNewUserName(event.target.value)
}
const handleEmailChange=(event)=>{
    setNewUserEmail(event.target.value)
}
const handlePhoneChange=(event)=>{
    setNewUserPhone(event.target.value)
}
const handleNewUserCreate=()=>{
    const newUserInfo={
        id :uuidv4(),
        name: newUserName,
        email: newUserEmail,
        phone :newUserPhone
    }
    setUserList([...userList,newUserInfo])
    setNewUserName("")
    setNewUserEmail("")
    setNewUserPhone("")
}
//// delete function
  const handleDelete=(userId)=>{
    setUserList(userList?.filter((user)=>user.id !== userId)) 
}

//// save function
const handleEdit = (userId, editedName,editedEmail,editedPhone) => {
    setUserList(
        userList.map((user) => {
            return user.id === userId ? { ...user, name: editedName,email:editedEmail,phone:editedPhone } : user;
        })
    );
}

  useEffect(() => {
    fetchUserList();
  }, []);

  return <div>
    <>
    <input type="text" placeholder=" enter new user name" onChange={handleNameChange} value={newUserName}></input>
    <input type="text" placeholder=" enter new user email" onChange={handleEmailChange}value={newUserEmail}></input>
    <input type="text" placeholder=" enter new user phone" onChange={handlePhoneChange}value={newUserPhone}></input>
    </>

    <button onClick={handleNewUserCreate}> Add</button>
        {userList?.map((user) => (
            <UserInfo key={user.id} user={user} handleDelete ={handleDelete} handleEdit={handleEdit}/>
         
        ))}
   
    </div>
  
};

export default App;