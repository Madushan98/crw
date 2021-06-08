import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export const HeaderContainer = styled.div`

    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

`;

export const LogoContainer = styled(Link)`
        height: 50%;
        width: 70px;
        padding: 15px;


`;


export const OptionsContainer = styled.div`
         width: 50%;
        height: 200%;
        display: flex;
        align-items: center;
        justify-content: flex-end;


`;

export const OptionContainerStyle = css`

  padding: 10px 15px;
  cursor: pointer;
`;



export const OptionsLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

`;

export const OptionsDiv = styled.div`
 padding: 10px 15px;
  cursor: pointer;


`;