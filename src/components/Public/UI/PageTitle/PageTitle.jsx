import styled from 'styled-components';

const PageTitle = styled.h1`
  max-width: fit-content;
  margin: 0 auto;
  font-size: 30px;
  font-family: var(--public-font-2);
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:after {
    content: '';
    width: 80%;
    height: 5px;
    background-color: #000;
    display: block;
    margin-top: 10px;
  }
`;

export {PageTitle};
