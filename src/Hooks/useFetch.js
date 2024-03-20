import { useState, useEffect } from "react";
const useFatch = (url) => {
  const [data, setdata] = useState(null);

  const FetchTask = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setdata(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchTask();
  }, []);
  return [data];
};

export default useFatch;
