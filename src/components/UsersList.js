import { useState, useEffect } from "react";
import UserItem from "./UserItem";

const UsersList = () => {
    const [usersList, setUsersList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsersList = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setLoading(false);
            setUsersList(data);
        } catch (error) {
            setError(error);
        }
    };
    useEffect(() => {
        fetchUsersList();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message} <br /><span> Please Reload the page.</span></p>;

    return (
        <div className="">
            <table class="w-full">
                <thead>
                    <tr class="bg-blue-600 text-left text-xs font-semibold uppercase text-white">
                        <th class="px-5 py-3">Full Name</th>
                        <th class="px-5 py-3">Email</th>
                        <th class="px-5 py-3">Phone Number</th>
                        <th class="px-5 py-3">Company</th>
                    </tr>
                </thead>
                <tbody class="text-gray-500" >
                    {
                        usersList.map((user) => {
                            return <UserItem key={user.id} user={user} />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default UsersList;