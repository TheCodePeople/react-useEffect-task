import { useState, useEffect } from "react";

function useFetch(url) {
  const [dataInfo, setDataInfo] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setDataInfo(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return [dataInfo];
}
export default useFetch;
