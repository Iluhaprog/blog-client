import styled from 'styled-components';
import PropTypes from 'prop-types';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: ${({alignItems}) => alignItems};
`;

Column.propTypes = {
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'start',
    'end',
    'center',
    'stretch',
  ]),
};

export {Column};
