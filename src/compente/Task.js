import useFetch from "../Hooks/useFetch";
import Card from "./Card";
function Task() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="flex justify-center flex-wrap bg-indigo-100 ">
      {data === null ? (
        <p>Loading</p>
      ) : (
        data.map((user) => <Card key={user.id} user={user} />)
      )}
    </div>
  );
}
export default Task;
