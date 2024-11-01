/* eslint-disable react/prop-types */

import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const Modal = ({ message, onClose }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <h2>Fel</h2>
                <p>{message}</p>
                <CloseButton onClick={onClose}>Stäng</CloseButton>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;
