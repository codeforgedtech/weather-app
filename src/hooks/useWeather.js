// hooks/useWeather.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'a06b46bfdc2ecbdd3156e91ca5c02a82'; // Ersätt med din API-nyckel

const useWeather = (location) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!location) return;

        const fetchWeather = async () => {
            setLoading(true);
            setError(null); // Nollställ fel innan ny begäran

            try {
                const response = await axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${location}`);
                
                // Kolla om det finns ett fel i svaret
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

        fetchWeather();
    }, [location]);

    return { data, loading, error };
};

export default useWeather;
