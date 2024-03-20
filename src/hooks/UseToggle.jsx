import { useEffect, useState } from "react";
function UseToggle() {
  const [Infor, setInfor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.ok) {
        const data = await response.json();
        setInfor(data);
        setIsLoading(false);
      } else console.log("error");
    } catch (error) {
      console.log("error massage", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return [fetchData, Infor, isLoading];
}
export default UseToggle;
