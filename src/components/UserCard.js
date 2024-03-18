// a list item with their name, email, phone number & company.
function UserCard({ theUser }) {
  return (
    <div className="flex flex-col justify-center gap-25 items-center font-bold text-left bg-gray-300 p-6 rounded drop-shadow-2xl w-72">
      <ul>
        Name: {theUser.name}
        <li className="font-thin"> Email: {theUser.email}</li>
        <li className="font-thin"> Phone: {theUser.phone}</li>
        <li className="font-thin"> Company{theUser.company.name}</li>
      </ul>
    </div>
  );
}
export default UserCard;
