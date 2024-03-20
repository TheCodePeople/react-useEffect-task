import { useState } from "react";
export default function useUserList(data) {
  const [userList, setUserList] = useState(data);

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

  const handleCreate = (newUser) => {
    const updatedUserList = [...userList, newUser];
    setUserList(updatedUserList);
  };

  return { userList, handleDelete, handleSave, handleCreate };
}
