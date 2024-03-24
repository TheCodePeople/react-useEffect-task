import React from "react";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputCompany, setInputCompany] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("L + ratio hahaha noob there is an error", error);
      }
    };

    fetchUsers();
  }, []);

  const handleNameChange = (event) => {
    setInputName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setInputPhone(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setInputCompany(event.target.value);
  };

  const handleCardCreate = () => {
    const newCardObj = {
      id: uuid4,
      name: inputName,
      email: inputEmail,
      phone: inputPhone,
      company: inputCompany,
      // Company is an object.. inputCompany won't work... buggers..
    };

    setUsers([...users, newCardObj]);
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">User List</h1>
      <div className="flex flex-wrap justify-center">
        {users.map((user) => (
          <div key={user.id} className="flex flex-col w-1/3 p-4 mb-8">
            <div className="bg-white shadow-lg rounded-xl">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>

                <p>
                  <strong>Company:</strong> {user.company.name}
                </p>
              </div>
              <div className="flex justify-around px-4 pb-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Name:</label>
              <input
                className="border border-gray-400 rounded-md p-2 w-full"
                type="text"
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email:</label>
              <input
                className="border border-gray-400 rounded-md p-2 w-full"
                type="email"
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Phone:</label>
              <input
                className="border border-gray-400 rounded-md p-2 w-full"
                type="text"
                onChange={handlePhoneChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Company:
              </label>
              <input
                className="border border-gray-400 rounded-md p-2 w-full"
                type="text"
                onChange={handleCompanyChange}
              />
            </div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleCardCreate}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserList;
