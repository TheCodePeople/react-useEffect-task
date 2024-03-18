export default function UserList({ users }) {
  return (
    <li className="border-solid border-black border-2 shadow-lg shadow-slate-500 rounded-3xl w-96  hover:bg-slate-500 hover:text-white hover:transition-all cursor-pointer">
      <div className="m-6">
        <h3>{users.name}</h3>
        <p>Email: {users.email}</p>
        <p>Phone Number: {users.phone}</p>
        <p>Company: {users.company.name}</p>
      </div>
    </li>
  );
}
