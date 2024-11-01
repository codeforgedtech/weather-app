/* eslint-disable react/prop-types */
// components/SearchBar.jsx
import { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin-right: 10px;
    width: 300px;
    font-size: 16px;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #0056b3;
    }
`;

const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(inputValue);
        setInputValue('');
    };

    return (
        <SearchContainer>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Ange plats..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button type="submit">Sök</Button>
            </form>
        </SearchContainer>
    );
};

export default SearchBar;
