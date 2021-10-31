import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #091c41;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    font-weight: 300;
  }
`;

const invertedButtonStyles = css`
  margin-top: 1rem;
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }
`;

const getButtonStyles = (props) => {
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  max-width: 165px;
  width: auto;
  height: 3rem;
  vertical-align: middle;
  letter-spacing: 2px;
  line-height: clamp(1rem, 1.2vw, 3.4rem);
  margin: 1rem 0.5rem;
  padding: 0 1rem;
  font-size: clamp(0.5rem, 1.2vw, 0.8rem);
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  border-radius: 0.3rem;
  border: 1px solid #fff;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.9);
    box-shadow: inset 0 0 10px #000;
  }

  ${getButtonStyles}
`;
