export const Card = ({ user }) => {
  return (
    <div className="bg-red-300 p-7 w-80 rounded-lg border-black border-2">
      <div className="pb-5">
        <h1 className="text-xl font-medium">{user.name}</h1>
        <p className="font-">Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Company: {user.company.name}</p>
      </div>
    </div>
  );
};
