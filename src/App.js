import UserItem from "./components/UserItem";
import ErrorMessage from "./components/ErrorMessage";
import useFetch from "./hooks/useFetch";

import "./App.css";

function App() {
  const [isLoading, data, error] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="flex flex-col items-center ">
      <div className="text-4xl shadow-slate-500 text-sky-900 pt-10">
        User List
      </div>
      {error && <ErrorMessage message="what are you doing? get out of here" />}
      {isLoading ? (
        <p className="text-4xl pt-16 text-blue-500">Wait a few seconds 🤨.</p>
      ) : (
        <ul className="flex flex-wrap items-center justify-center gap-10 pt-12 pb-12 ">
          {data?.map((data) => (
            <UserItem key={data.id} users={data} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
