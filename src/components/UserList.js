import { useState } from "react";
import UserItem from "./UserItem";
import useFormInput from "../hooks/useFormInput";
import useUserList from "../hooks/useUserList";

export default function UserList({ data }) {
  // const [userList, setUserList] = useState(data);
  const [userAdd, setUserAdd] = useState(false);

  const { userList, handleDelete, handleSave, handleCreate } =
    useUserList(data);

  const [userName, setUserName] = useFormInput("");
  const [userEmail, setUserEmail] = useFormInput("");
  const [userPhone, setUserPhone] = useFormInput("");
  const [userCompany, setUserCompany] = useFormInput("");

  const handleCreateUser = () => {
    const UserObject = {
      id: userList.length + 1,
      name: userName,
      email: userEmail,
      phone: userPhone,
      company: { name: userCompany },
    };
    handleCreate(UserObject);
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
          <li className="flex flex-col justify-center pl-9 gap-3 text-white bg-slate-500 border-solid border-black border-2 shadow-lg shadow-slate-500 rounded-3xl w-96  hover:bg-slate-600  hover:transition-all cursor-pointer h-64">
            <h3 className="flex gap-9 ">
              <span className="font-extrabold"> Name:</span>

              <input
                className="rounded-3xl text-sm p-1 bg-slate-200 text-black"
                type="text"
                onChange={setUserName}
              />
            </h3>
            <p className="flex gap-9">
              <span className="font-extrabold"> Email:</span>
              <input
                className="rounded-3xl text-sm p-1 bg-slate-200 text-black"
                type="text"
                onChange={setUserEmail}
              />
            </p>
            <p className="flex gap-6 ">
              <span className="mr-3 font-extrabold"> phone:</span>
              <input
                className="rounded-3xl text-sm p-1 bg-slate-200 text-black"
                type="text"
                onChange={setUserPhone}
              />
            </p>
            <p className="flex ">
              <span className="mr-2 font-extrabold"> Company: </span>
              <input
                className="rounded-3xl text-sm p-1 bg-slate-200 text-black"
                type="text"
                onChange={setUserCompany}
              />
            </p>
            <button
              className="ml-20 border-solid border-black border-2 w-32 flex justify-center rounded-3xl text-2xl p-2"
              onClick={handleCreateUser}
            >
              Add to list
            </button>
          </li>
        ) : (
          <>
            <button
              className="font-bold text-6xl font border-solid border-black border-2 shadow-lg shadow-slate-500 rounded-3xl w-96  hover:bg-slate-500 hover:text-white hover:transition-all cursor-pointer h-60"
              onClick={(handleCreateUser) => setUserAdd(true)}
            >
              +
            </button>
          </>
        )}
      </ul>
    </div>
  );
}
