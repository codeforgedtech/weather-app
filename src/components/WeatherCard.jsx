/* eslint-disable react/prop-types */

import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid #e0e0e0;
    border-radius: 15px;
    color: #ffffff;
    padding: 20px;
    margin: 16px;
    width: 300px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: blue;
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.05);
    }
`;

const WeatherCard = ({ weather }) => {
    return (
        <Card>
            <h2>{weather.location.name}</h2>
            <p>Temperatur: {weather.current.temperature}°C</p>
            <p>Väder: {weather.current.weather_descriptions[0]}</p>
            <img src={weather.current.weather_icons[0]} alt="weather icon" style={{ width: '150px', borderRadius:'10px'}} />
        </Card>
    );
};

export default WeatherCard;
