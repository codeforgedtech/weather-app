/* eslint-disable react/prop-types */

import WeatherCard from './WeatherCard';
import styled from 'styled-components';

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const WeatherList = ({ weather }) => {
    return (
        <ListContainer>
            <WeatherCard weather={weather} />
        </ListContainer>
    );
};

export default WeatherList;