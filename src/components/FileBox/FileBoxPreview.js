import styled from 'styled-components';

const FileBoxPreview = styled.div`
  width: 70px;
  height: 40px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
    object-fit: cover;
    object-position: center;
  }
`;

export {FileBoxPreview};
