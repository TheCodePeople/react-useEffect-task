import { useState, useEffect } from "react";

function useFetch(url) {
    const [usersList, setUsersList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsersList = async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setLoading(false);
            setUsersList(data);

        } catch (error) {
            setError(error);
        }
    };
    useEffect(() => {
        fetchUsersList();
    }, []);


    return [usersList, setUsersList, error, loading];

}

export default useFetch;





