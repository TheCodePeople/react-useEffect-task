import "./App.css";
import { useEffect,useState } from "react";
function App() {
const [userinfo , setuserinfo]=useState([])
 async function getuserinfo (){
   try {
    const respons =await fetch('https://jsonplaceholder.typicode.com/users');
    if (!respons.ok) {return;}
    const data =await respons.json()
    setuserinfo(data)
   } catch (error) {
    console.log("is erorr",error);
   }
  };

  useEffect(() => {
    getuserinfo();
  }, []);

  return <div>
     <center><h1>User List</h1></center> 

    <div className="contener">
 {userinfo.map(user => (
  <div className="card">
    <h3>Name:{user.name}</h3>
    <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>
    <p>Company: {user.company.name}</p>
   </div>
))}

</div>
    </div>
 
}

export default App;
