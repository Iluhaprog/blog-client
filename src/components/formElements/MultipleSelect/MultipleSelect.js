import React from 'react';
import { TagBox } from '../../boxes';
import { Row } from '../../containers';
import './multipleSelect.scss';

class MultipleSelect extends React.Component {
    constructor(props) {
        super(props);
        this.select = React.createRef();
        this.focus = this.focus.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            tags: [],
        }
    }

    focus() {
        this.select && this.select.current.focus();
    }

    handleChange(value) {
        const el = this.state.tags.filter(option => option.id === value.id);
        if (!el.length) {
            this.setState({
                tags: [...this.state.tags, value],
            })
            this.props.onChange(value);
        }
    }
    
    render() {
        const { values = [], options = [] } = this.props;

        return (
            <div 
                className='multiple-select'
                ref={this.select}
                onClick={this.focus}
                tabIndex='0'
            >
                <ul className='values'>
                    <Row justifyContent='fs' alignItems='c' wrap='w'>
                        {
                            this.state.tags.map(value => (
                                <TagBox 
                                    key={value.id}
                                    title={value.title} 
                                />
                            ))
                        }
                    </Row>
                </ul>
                <div className='options'>
                    {
                        options.map(option => (
                            <div 
                                key={option.id}
                                className='option'
                                onClick={() => {this.handleChange(option)}}
                            >
                                {option.title}
                            </div>
                        ))      
                    }
                </div>
            </div>
        );
    }
}

export default MultipleSelect;