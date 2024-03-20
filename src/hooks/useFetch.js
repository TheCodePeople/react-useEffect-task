import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  const fetching = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  return [data];
}

export default useFetch;
