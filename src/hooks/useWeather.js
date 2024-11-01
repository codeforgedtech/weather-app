
import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeather = (location) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (location) {
            setLoading(true);
            setError(null); // Nollställ fel innan ny begäran
            const fetchData = async () => {
                try {
                    const response = await axios.get(`https://api.weatherstack.com/current?access_key=YOUR_API_KEY&query=${location}`);
                    if (response.data.error) {
                        throw new Error(response.data.error.info);
                    }
                    setData(response.data);
                } catch (err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }
    }, [location]);

    return { data, loading, error };
};

export default useWeather;
