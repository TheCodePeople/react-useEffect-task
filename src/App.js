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
    <h1 className="p-10 text-center text-3xl font-bold text-blue-950 " >User List</h1>

    <div className="flex flex-wrap justify-center items-center gap-10 w-full h-full p-10 ">
 {userinfo.map(user => (
  <div className=" flex flex-col gap-4 w-{15%} h-40 p-2 text-center rounded-lg shadow-[-0px_1px_20px_1px_#00000024] cursor-pointer ">
    <h3 className="font-bold">Name:{user.name}</h3>
    <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>
    <p>Company: {user.company.name}</p>
   </div>
))}

</div>
    </div>
 
}

export default App;
