import { useState } from "react";
import UserItem from "./UserItem";

export default function UserList({ data }) {
  const [userList, setUserList] = useState(data);
  const [userAdd, setUserAdd] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userCompany, setUserCompany] = useState("");

  const handleDelete = (userId) => {
    setUserList(userList.filter((user) => user.id !== userId));
  };
  const handleSave = (userId, userName, userEmail, userPhone, userCompany) => {
    setUserList(
      userList.map((user) =>
        user.id === userId
          ? {
              ...user,
              name: userName,
              email: userEmail,
              phone: userPhone,
              company: { ...user.company, name: userCompany },
            }
          : user
      )
    );
  };
  const handleChangeName = (event) => {
    setUserName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setUserEmail(event.target.value);
  };
  const handleChangePhone = (event) => {
    setUserPhone(event.target.value);
  };
  const handleChangeCompany = (event) => {
    setUserCompany(event.target.value);
  };

  const handleCreate = () => {
    const UserObject = {
      id: userList.length + 1,
      name: userName,
      email: userEmail,
      phone: userPhone,
      company: { name: userCompany },
    };
    setUserList([...userList, UserObject]);
    setUserAdd(false);
  };
  return (
    <div>
      <ul className="flex flex-wrap items-center justify-center gap-10 pt-12 pb-12 ">
        {userList?.map((data) => (
          <UserItem
            key={data.id}
            users={data}
            handleDelete={handleDelete}
            handleSave={handleSave}
          />
        ))}
        {userAdd ? (
          <div className="flex flex-col justify-center items-center gap-2 border-solid border-black border-2 shadow-lg shadow-slate-500 rounded-3xl w-96  hover:bg-slate-500 hover:text-white hover:transition-all cursor-pointer h-48">
            <h3>
              Name:{" "}
              <input
                className=" bg-slate-600 "
                type="text"
                value={userName}
                onChange={handleChangeName}
              />
            </h3>
            <p>
              Email:{" "}
              <input
                type="text"
                className="bg-slate-600"
                value={userEmail}
                onChange={handleChangeEmail}
              />
            </p>
            <p>
              Phone:{" "}
              <input
                type="text"
                className="bg-slate-600"
                value={userPhone}
                onChange={handleChangePhone}
              />
            </p>
            <p>
              Company:{" "}
              <input
                type="text"
                className="bg-slate-600"
                value={userCompany}
                onChange={handleChangeCompany}
              />
            </p>
            <button onClick={handleCreate}>Add to list</button>
          </div>
        ) : (
          <>
            <button onClick={(handleCreate) => setUserAdd(true)}>Add</button>
          </>
        )}
      </ul>
    </div>
  );
}
