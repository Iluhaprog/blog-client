import styled from 'styled-components';
import PropTypes from 'prop-types';

const Separator = styled.div`
  margin-left: ${({indentLeft}) => indentLeft || 0}px;
  margin-right: ${({indentRight}) => indentRight || 0}px;
  margin-top: ${({indentTop}) => indentTop || 0}px;
  margin-bottom: ${({indentBottom}) => indentBottom || 0}px;
  padding: 0;
`;

Separator.propTypes = {
  indentLeft: PropTypes.number,
  indentRight: PropTypes.number,
  indentTop: PropTypes.number,
  indentBottom: PropTypes.number,
};

export {Separator};
