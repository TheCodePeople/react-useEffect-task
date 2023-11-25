const UserList = ({ users }) => {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-card">
          <div>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Company: {user.company.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
