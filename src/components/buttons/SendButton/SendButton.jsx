import './sendButton.scss';

export default props => (
    <button className='button send-button' onClick={props.onClick}>
        {props.text}
    </button>
);