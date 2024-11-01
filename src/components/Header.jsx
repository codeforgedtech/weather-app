
import styled from 'styled-components';

const HeaderContainer = styled.header`
    text-align: center;
    padding: 20px;
    background-color: #007bff;
    color: white;
    border-radius: 0 0 15px 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Väderapp</h1>
            <p>Hämta aktuell väderinformation för olika platser!</p>
        </HeaderContainer>
    );
};

export default Header;