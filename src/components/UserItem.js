import { useState } from "react";
import useFormInput from "../hooks/useFormInput";

export default function UserItem({ users, handleDelete, handleSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useFormInput(users.name);
  const [newEmail, setNewEmail] = useFormInput(users.email);
  const [newPhone, setNewPhone] = useFormInput(users.phone);
  const [newCompany, setNewCompany] = useFormInput(users.company.name);

  const handleOnSave = () => {
    handleSave(users.id, newName, newEmail, newPhone, newCompany);
    setIsEditing(false);
  };

  return (
    <li className="flex flex-col text-white bg-slate-500 border-solid border-black border-2 shadow-lg shadow-slate-500 rounded-3xl w-96  hover:bg-slate-600  hover:transition-all cursor-pointer h-64">
      <div className="m-6 flex flex-col gap-y-2">
        {isEditing ? (
          <>
            <h3 className="flex gap-9 ">
              <span className="font-bold"> Name:</span>

              <input
                className="rounded-3xl text-sm p-1 bg-slate-200 text-black"
                type="text"
                value={newName}
                onChange={setNewName}
              />
            </h3>
            <p className="flex gap-9">
              <span className="font-extrabold"> Email:</span>
              <input
                className="rounded-3xl text-sm p-1 bg-slate-200 text-black"
                type="text"
                value={newEmail}
                onChange={setNewEmail}
              />
            </p>
            <p className="flex gap-6 ">
              <span className="mr-3"> phone:</span>
              <input
                className="rounded-3xl text-sm p-1 bg-slate-200 text-black"
                type="text"
                value={newPhone}
                onChange={setNewPhone}
              />
            </p>
            <p className="flex ">
              <span className="mr-3"> Company: </span>
              <input
                className="rounded-3xl text-sm p-1 bg-slate-200 text-black"
                type="text"
                value={newCompany}
                onChange={setNewCompany}
              />
            </p>
          </>
        ) : (
          <>
            <h3>Name: {users?.name}</h3>
            <p>Email: {users?.email}</p>
            <p>Phone Number: {users?.phone}</p>
            <p>Company: {users?.company?.name}</p>
          </>
        )}
        <div className="flex justify-around mt-3 ">
          <sub
            className="border-solid border-black border-2 rounded-3xl w-32 flex justify-center text-2xl p-2 hover:text-red-400"
            onClick={() => handleDelete(users.id)}
          >
            Delete
          </sub>
          {isEditing ? (
            <sub
              className="border-solid border-black border-2 w-28 flex justify-center rounded-3xl text-2xl p-2"
              onClick={handleOnSave}
            >
              save
            </sub>
          ) : (
            <sub
              className="border-solid border-black border-2 w-28 flex justify-center rounded-3xl text-2xl p-1"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </sub>
          )}
        </div>
      </div>
    </li>
  );
}
