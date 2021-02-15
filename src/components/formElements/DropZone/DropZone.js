import React from 'react';
import { 
    dragOverHandler,
    dragLeaveHandler,
    dropHandler
} from '../../../util/eventHandlers/d&d';
import picture from '../../../assets/icons/picture.svg';
import './dropZone.scss';


class DropZone extends React.Component {
    state = {
        file: '',
        focus: false,
        formData: new FormData(),
    }

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    setFile(file) {
        this.setState({ file });
    }
    
    setFocus(focus) {
        this.setState({ focus });
    }

    setFromData(formData) {
        const { input: { onChange } } = this.props;
        this.setState({ formData });
        onChange(this.state.formData.get('avatar'));
    }

    onClick() {
        this.inputRef.click();
    }

    onChange(e) {
        const setFromData = this.setFromData.bind(this);
        const setFocus = this.setFocus.bind(this);
        const setFile = this.setFile.bind(this);
        dropHandler(e, setFile, setFromData, setFocus);
    }

    render() {
        const onClick = this.onClick.bind(this);
        const setFromData = this.setFromData.bind(this);
        const setFocus = this.setFocus.bind(this);
        const setFile = this.setFile.bind(this);
        const { file, focus } = this.state;

        return (
            <div 
                onClick={onClick}
                className={'drop-zone ' + (focus ? 'drop-zone_focus' : '') }
                onDrop={e => dropHandler(e, setFile, setFromData, setFocus)}
                onDragOver={e => dragOverHandler(e, setFocus)}
                onDragLeave={e => dragLeaveHandler(e, setFocus)}
            >
                {file 
                    ? <img src={file} alt='image'/>
                    : <img src={picture} className='empty' alt='empty'/>
                }
                <input
                    ref={r => this.inputRef = r}
                    type='file'
                    name={this.props.name}
                    onChange={this.onChange.bind(this)}
                    />
            </div>
        );
    }
}

export default DropZone;