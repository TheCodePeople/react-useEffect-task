
import UserItem from "./UserItem";
import useFetch from "../hooks/useFetch";

const UsersList = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [usersList, error, loading] = useFetch(url);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message} <br /><span> Please Reload the page.</span></p>;

    return (
        <div className="">
            <table className="w-full">
                <thead>
                    <tr className="bg-blue-600 text-left text-xs font-semibold uppercase text-white">
                        <th className="px-5 py-3">Full Name</th>
                        <th className="px-5 py-3">Email</th>
                        <th className="px-5 py-3">Phone Number</th>
                        <th className="px-5 py-3">Company</th>
                    </tr>
                </thead>
                <tbody className="text-gray-500" >
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