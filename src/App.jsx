// App.jsx
import { useState } from 'react';
import WeatherList from './components/WeatherList';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Footer from './components/Footer';
import useWeather from './hooks/useWeather';

const App = () => {
    const [location, setLocation] = useState('');
    const { data, loading, error } = useWeather(location);

    const handleSearch = (newLocation) => {
        setLocation(newLocation);
    };

    return (
        <div>
            <Header />
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Laddar...</p>}
            {error && <p>Fel vid hämtning av väderdata: {error.message}</p>}
            {data && <WeatherList weather={data} />}
            <Footer />
        </div>
    );
};

export default App;

