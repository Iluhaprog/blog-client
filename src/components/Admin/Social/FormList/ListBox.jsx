import styled from 'styled-components';

const ListBox = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  & li {
    margin-bottom: 20px;
    
    &:last-child {
      margin-bottom: 0;
      padding-bottom: 20px;
    }
  }
  
  & li .container {
    padding: 0;
  }
`;

export {ListBox};
