import styled from 'styled-components';

const Time = styled.time`
  max-width: fit-content;
  font-size: 14px;
  color: rgba(28, 28, 28, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:after,
  &:before {
    display: block;
    content: '';
    margin: 0 5px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: rgba(28, 28, 28, 0.5);
  }
`;

export {Time};
