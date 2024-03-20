import UserList from "./components/UserList";
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
        <UserList data={data} />
      )}
    </div>
  );
}

export default App;
