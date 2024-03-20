import { useState } from "react";

export default function UserItem({ users, handleDelete, handleSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(users.name);
  const [newEmail, setNewEmail] = useState(users.email);
  const [newPhone, setNewPhone] = useState(users.phone);
  const [newCompany, setNewCompany] = useState(users.company.name);

  const handleOnSave = () => {
    handleSave(users.id, newName, newEmail, newPhone, newCompany);
    setIsEditing(false);
  };
  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setNewEmail(event.target.value);
  };
  const handleChangePhone = (event) => {
    setNewPhone(event.target.value);
  };
  const handleChangeCompany = (event) => {
    setNewCompany(event.target.value);
  };

  return (
    <li className="border-solid border-black border-2 shadow-lg shadow-slate-500 rounded-3xl w-96  hover:bg-slate-500 hover:text-white hover:transition-all cursor-pointer">
      <div className="m-6">
        {isEditing ? (
          <>
            <h3>
              Name:{" "}
              <input type="text" value={newName} onChange={handleChangeName} />
            </h3>
            <p>
              Email:{" "}
              <input
                type="text"
                value={newEmail}
                onChange={handleChangeEmail}
              />
            </p>
            <p>
              Phone Number:{" "}
              <input
                type="text"
                value={newPhone}
                onChange={handleChangePhone}
              />
            </p>
            <p>
              Company:{" "}
              <input
                type="text"
                value={newCompany}
                onChange={handleChangeCompany}
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

        <sub onClick={() => handleDelete(users.id)}>Delete</sub>
        {isEditing ? (
          <sub className="ph--check-fat-fill" onClick={handleOnSave}>
            save
          </sub>
        ) : (
          <sub className="ph--pencil-light" onClick={() => setIsEditing(true)}>
            Edit
          </sub>
        )}
      </div>
    </li>
  );
}
