
import { useState } from 'react';
import WeatherList from './components/WeatherList';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Footer from './components/Footer';
import useWeather from './hooks/useWeather';
import GlobalStyle from './GlobalStyle';
import Modal from './components/Modal';
import styled from 'styled-components';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 200vh;
    padding: 20px;
    background-color: #f0f4f8; /* Samma som globala stilar */
`;

const App = () => {
    const [location, setLocation] = useState('');
    const { data, loading, error } = useWeather(location);
    const [modalVisible, setModalVisible] = useState(false);

    const handleSearch = (newLocation) => {
        setLocation(newLocation);
    };

    // Om ingen data hittas och det inte är en laddning
    if (error) {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <AppContainer>
            <GlobalStyle />
            <Header />
            <SearchBar onSearch={handleSearch} />
            {loading && <p style={{ textAlign: 'center' }}>Laddar...</p>}
            {data && <WeatherList weather={data} />}
            <Footer />
            {modalVisible && (
                <Modal message="Inget väder hittades för den angivna platsen." onClose={closeModal} />
            )}
        </AppContainer>
    );
};

export default App;


