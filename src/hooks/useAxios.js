import axios from "axios";
import { useEffect, useState } from "react";
import { cookieLink } from "../data/data";

export default function useAxios(type, url, content = null) {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const userToken = JSON.parse(localStorage.getItem("token"));

    const fetchData = async () => {
        setIsLoading(true);
        setError(null); // Clear any previous errors before making the request

        try {
            const response = await axios({
                method: type,
                url,
                data: content, // Include data for POST, PUT, PATCH requests
                headers: {
                    "X-CSRF-TOKEN": await getCsrfToken(), // Fetch CSRF token asynchronously
                    "Authorization": `Bearer ${userToken}`,
                    "Content-Type": "application/json",
                },
        });
        setResponseData(response.data); // Access data property for response object
        } catch (error) {
        setError(error);
        } finally {
        setIsLoading(false);
        }
    };

    const getCsrfToken = async () => {
        const csrfResponse = await axios.get(cookieLink);
        return csrfResponse.data; // Access data property for CSRF response
    };

    useEffect(() => {
        fetchData();
    }, [url, type, content]); // Re-fetch data on changes to url, type, or content

    return [responseData, error, isLoading];
}
