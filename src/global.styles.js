import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #a1acb8 #000;
}
*,
::after,
::before {
  box-sizing: border-box;
  user-select: none;
}

body {
  min-height: 100vh;
  margin: 0;
  padding: 1rem 16rem;
  font-family: 'Raleway', sans-serif;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-weight: 300;
  overflow: auto;
  background: linear-gradient(
    180deg,
    #fcfcf3,
    #fcfcf3,
    #fdfdf2,
    #fdfdf2,
    #fefef1,
    #fefef1,
    #fffff0,
    #fffff0
  );
  animation: fadeInAnimation ease-out 3s 1 forwards;
  @media (max-width: 1200px) {
    padding: 1rem 6rem;
  }
  @media (max-width: 1000px) {
    padding: 1rem 3rem;
  }
  @media (max-width: 800px) {
    padding: 0.7rem;
  }
}
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

body::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
body::-webkit-scrollbar-thumb {
  background: #8b92a5;
  border-radius: 10px;
}
body::-webkit-scrollbar-thumb:hover {
  background: #b5ccf6;
}
body::-webkit-scrollbar-track {
  background: #fefef1;
}
a {
  text-decoration: none;
  color: #000;
}
  

`;
