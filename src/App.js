import useFetch from "./Hooks/useFetch";
import UserCard from "./components/UserCard";
function App() {
  const [dataInfo] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="flex flex-wrap justify-center gap-10 items-center my-10">
      {dataInfo === null ? (
        <p>Loading</p>
      ) : (
        dataInfo.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })
      )}
    </div>
  );
}

export default App;
