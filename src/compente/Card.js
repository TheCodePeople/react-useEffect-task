function Card( {user}) {
  return <div
  className="flex">
    <div className="m-10 bg-violet-500 p-10 w-96 text-indigo-100 hover:bg-violet-300 hover:text-violet-700 rounded-sm hover:drop-shadow-xl">
    <h1 className="text-4xl pb-5" >{user.name}</h1>
    <p className="">Email:{user.email}</p>
    <p>Phone:{user.phone}</p>
    <p>Company:{user.company.name}</p></div>
  </div>;
}
export default Card;
