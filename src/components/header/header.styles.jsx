import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
// import { GiLaurelCrown } from '@styled-icons/game';

export const HeaderContainer = styled.div`
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 800px) {
    height: 6.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CompanyLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CompanyContainer = styled.h1`
  font-family: 'Style Script', cursive;
  font-size: clamp(2rem, 3.2vw, 3rem);
  font-weight: lighter;
  color: #000;
  margin: 0;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

// export const CompanyLogo = styled(GiLaurelCrown)`
//   font-size: clamp(2.8rem, 4.2vw, 4rem);
//   margin: 0;
//   color: #000;
// `;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: auto;
  padding: 1rem;
  filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.5));
`;
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const OptionContainerStyles = css`
  text-decoration: none;
  background-color: #091c41;
  color: #fff;
  border: 1px solid #091c41;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: clamp(0.5rem, 1vw, 0.6rem);
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 2px;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-left: clamp(0.2rem, 0.8vw, 1rem);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  &:hover {
    background-color: #fffff0;
    color: black;
    border: 1px solid black;
    font-weight: 300;
  }
  &:active {
    transform: scale(0.9);
    box-shadow: inset 0 0 10px #fffff0;
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 800px) {
    font-size: clamp(0.5rem, 1vw, 0.6rem);
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
