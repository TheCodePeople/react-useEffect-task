import React, { useState } from "react";

function UserItem({ user, handleDelete, userId, handleEditList }) {
    const [isEditing, setEditing] = useState(false);
    const [editedName, setEditName] = useState(user.name);
    const [editedPhone, setEditPhone] = useState(user.phone);
    const [editedEmail, setEditEmail] = useState(user.email);
    const [editedCompany, setEditCompany] = useState(user.company.name);

    const handleEdit = () => {
        setEditing(true);
    }

    const handleSave = () => {
        if (editedName === "" || editedPhone === "" || editedEmail === "" || editedCompany === "") return;

        const updatedUser = {
            ...user,
            name: editedName,
            phone: editedPhone,
            email: editedEmail,
            company: { ...user.company, name: editedCompany },
        }

        handleEditList(updatedUser);
        setEditing(false);
    }

    return (
        <div className="shadow w-[25rem] h-[26.5rem] flex justify-center align-center bg-white border border-gray-200 rounded-lg">
            <div className="flex flex-col items-center pb-10 py-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="../assets/profile.png" alt="" />
                {isEditing ? (
                    <div className="flex flex-col items-center pb-10 py-10">
                        <input className="border border-gray-200 rounded-lg m-2" onChange={(e) => setEditName(e.target.value)} type="text" value={editedName} />
                        <input className="border border-gray-200 rounded-lg m-2" onChange={(e) => setEditPhone(e.target.value)} type="text" value={editedPhone} />
                        <input className="border border-gray-200 rounded-lg m-2" onChange={(e) => setEditEmail(e.target.value)} type="text" value={editedEmail} />
                        <input className="border border-gray-200 rounded-lg m-2" onChange={(e) => setEditCompany(e.target.value)} type="text" value={editedCompany} />

                    </div>
                ) : (
                    <div className="flex flex-col items-center pb-10 py-10">
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white" >{user.name}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{user.phone}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{user.company.name}</span></div>
                )}

                <div class="flex gap-[10px] mt-4 md:mt-6">
                    {isEditing ? (
                        <sub className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800" onClick={handleSave}>Save</sub>
                    ) : (
                        <sub className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800" onClick={handleEdit}>Edit</sub>
                    )}
                    <sub onClick={() => handleDelete(user.id)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800">Delete</sub>
                </div>
            </div>
        </div>
    )
}

export default UserItem;