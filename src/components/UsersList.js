import { useState } from "react";
import UserItem from "./UserItem";
import useFetch from "../hooks/useFetch";
import uuid4 from 'uuid4';


const UsersList = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [usersList, setUsersList, error, loading] = useFetch(url);
    const [isAdding, setAdding] = useState(false);
    const [nameValue, setName] = useState("");
    const [phoneValue, setPhone] = useState("");
    const [emailValue, setEmail] = useState("");
    const [companyValue, setCompany] = useState("");

    const handleDelete = (userId) => {
        setUsersList(usersList.filter((user) => user.id !== userId));
    };

    const handleCreate = () => {
        if (nameValue === "" || phoneValue === "" || emailValue === "" || companyValue === "") return;

        const user = {
            id: uuid4(),
            name: nameValue,
            phone: phoneValue,
            email: emailValue,
            company: { name: companyValue }
        }
        setUsersList([...usersList, user]);
        setAdding(!isAdding);

    }

    const handleEditList = (updatedUser) => {
        console.log(updatedUser);
        setUsersList((usersList) =>
            usersList.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            )
        );
    }

    const handleAdd = () => {
        setAdding(!isAdding);
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message} <br /><span> Please Reload the page.</span></p>;

    return (
        <div className="flex flex-wrap justify-center shrink-0 align-center gap-[10px] px-10 py-10">
            {
                usersList.map((user) => {
                    return <UserItem
                        key={user.id}
                        user={user}
                        handleDelete={handleDelete}
                        userId={user.id}
                        handleEditList={handleEditList}
                    />
                })
            }
            <div className="shadow w-[25rem] h-[26.5rem] flex justify-center align-center bg-white border border-gray-200 rounded-lg">
                {isAdding ? (
                    <div className="flex flex-col items-center justify-center w-full max-w-sm">
                        <h5 class="text-xl font-medium text-gray-900">Add a User</h5>
                        <div className="">
                            <input type='text' placeholder="Name" onChange={(e) => {
                                setName(e.target.value);
                            }} className="border border-gray-200 rounded-lg m-2" />
                        </div>
                        <div className="">
                            <input type='text' placeholder="Phone Number" onChange={(e) => {
                                setPhone(e.target.value);
                            }} className="border border-gray-200 rounded-lg m-2" />
                        </div>
                        <div className="">
                            <input type='text' placeholder="Email" onChange={(e) => {
                                setEmail(e.target.value);
                            }} className="border border-gray-200 rounded-lg m-2" />
                        </div>
                        <div className="">
                            <input type='text' placeholder="Company Name" onChange={(e) => {
                                setCompany(e.target.value);
                            }} className="border border-gray-200 rounded-lg m-2" />
                        </div>
                        <div class="flex mt-4 md:mt-6">
                            <button onClick={handleCreate} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                                Add
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center p-10 cursor-pointer">
                        <sub className="flex justify-center align-center text-xl" onClick={handleAdd}>
                            +
                        </sub>
                    </div>
                )}
            </div>
        </div>
    );
}
export default UsersList;

