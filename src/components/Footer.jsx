
import styled from 'styled-components';

const FooterContainer = styled.footer`
    text-align: center;
    padding: 20px;
    background-color: #007bff;
    color: white;
    border-radius: 15px 15px 0 0;
    margin-top: 20px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; 2024 Väderapp. Alla rättigheter reserverade.</p>
            <p>Data hämtas från <a href="https://weatherstack.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>Weatherstack</a>.</p>
        </FooterContainer>
    );
};

export default Footer;