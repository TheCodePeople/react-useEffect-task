import "./App.css";
import { Card } from "./components/Card";
import useFetch from "./hooks/useFetch";
function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-5 justify-center items-center pt-10 ">
          {data.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
