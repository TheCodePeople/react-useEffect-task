// a list item with their name, email, phone number & company.
function UserCard({ user }) {
  return (
    <div className="flex flex-col justify-center gap-25 items-center font-bold text-left bg-gray-300 p-6 rounded drop-shadow-2xl w-72">
      <ul>
        Name: {user.name}
        <li className="font-thin"> Email: {user.email}</li>
        <li className="font-thin"> Phone: {user.phone}</li>
        <li className="font-thin"> Company{user.company.name}</li>
      </ul>
    </div>
  );
}
export default UserCard;
