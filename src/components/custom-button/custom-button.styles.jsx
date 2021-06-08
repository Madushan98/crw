import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const googleSignInStyle = css`

    background-color: #4285f4;
    color: white;

    &:hover {
            background-color: #357ae8;
            border: none;
        }

`;



const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyle;
    }

    return props.inverted ? InvertedStyle : buttonStyle;

}


const buttonStyle = css`
background-color: black;
    color: white;
  border: none;


    &:hover {
        background-color: white;
        color: black;
        border: solid black;
        font-size: 12px;
    }
`



const InvertedStyle = css`
 
        background-color: white;
        color: black;

        &:hover {
            background-color: black;
            border: none;
        }
    

`;

export const CustomButtonStyles = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;

    
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
  
    cursor: pointer;
    display: flex;
    justify-content: center;

  ${getButtonStyles} ;

`;



