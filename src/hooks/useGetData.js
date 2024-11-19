import { useEffect, useState } from "react";
import { fetchData } from "../services/getDataService";

const useGetData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const result = await fetchData(url);
                setData(result);
                setError(null);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [url])

    return { data, loading, error };
}

export default useGetData;