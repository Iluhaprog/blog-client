import React from 'react';
import { Field } from 'redux-form';
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
        this.setState({ formData });
    }

    onClick() {
        this.inputRef.getRenderedComponent().click();
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
                <Field
                    forwardRef={true}
                    ref={r => this.inputRef = r}
                    type='file'
                    name={this.props.name}
                    component='input'
                    onChange={e => dropHandler(e, setFile, setFromData, setFocus)}
                    />
            </div>
        );
    }
}

export default DropZone;