import { useState } from 'react';

function UserInfo({user,handleDelete, handleEdit}){
    const [isEditing, setIsEditing] = useState(false);
    const [newUserName,setNewUserName]= useState("")
    const [newUserEmail,setNewUserEmail]= useState("")
    const [newUserPhone,setNewUserPhone]= useState("")

    const handleNameChange=(event)=>{
        setNewUserName(event.target.value)
    }
    const handleEmailChange=(event)=>{
        setNewUserEmail(event.target.value)
    }
    const handlePhoneChange=(event)=>{
        setNewUserPhone(event.target.value)
    }
    const handleIsEdit=()=>{
        setIsEditing(!isEditing)
    }
    const handleSave=()=>{
        handleEdit(user.id,newUserName,newUserEmail,newUserPhone)
        setIsEditing(!isEditing)
    }
        
return(<div  className=" flex gap-x-20"> 
         {isEditing ? <>
            <input type="text" defaultValue={user.name} onChange={handleNameChange}/>
            <input type="text" defaultValue={user.email} onChange={handleEmailChange}/>
            <input type="text" defaultValue={user.phone} onChange={handlePhoneChange}/>
            <button  className="text-green-700" onClick={() => handleSave()}> Save</button>
        </>
             : 
         <div>
            <p>user name  : {user.name}  </p>
            <p>email  : {user.email}</p>
            <p>phone number  : {user.phone}</p>
            <button  className="text-red-600" onClick={()=> handleDelete(user.id)}> Delete</button>
            <button  className="text-green-700" onClick={handleIsEdit}> Edit</button>
         </div>
        }
</div>
)
}
export default UserInfo;