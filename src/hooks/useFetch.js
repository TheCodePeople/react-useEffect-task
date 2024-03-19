import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const getApiData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return [isLoading, data, error, getApiData];
}
