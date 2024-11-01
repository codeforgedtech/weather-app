// App.jsx
import React, { useState } from 'react';
import WeatherList from './components/WeatherList';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Footer from './components/Footer';
import useWeather from './hooks/useWeather';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width:100vh;
    padding: 20px;
    background-color: #f0f4f8; /* Samma som globala stilar */
`;

const App = () => {
    const [location, setLocation] = useState('');
    const { data, loading, error } = useWeather(location);

    const handleSearch = (newLocation) => {
        setLocation(newLocation);
    };

    return (
        <AppContainer>
            <GlobalStyle />
            <Header />
            <SearchBar onSearch={handleSearch} />
            {loading && <p style={{ textAlign: 'center' }}>Laddar...</p>}
            {error && <p style={{ textAlign: 'center', color: 'red' }}>Fel vid hämtning av väderdata: {error.message}</p>}
            {data && <WeatherList weather={data} />}
            <Footer />
        </AppContainer>
    );
};

export default App;

