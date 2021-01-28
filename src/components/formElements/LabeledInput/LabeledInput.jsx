import { Field } from "redux-form";
import './labeledInput.scss';

export default props => (
    <div className='form__box row-reverse'>
        <Field 
            type={props.type}
            name={props.name}
            component={props.component}
        />
        <label htmlFor={props.name}>{props.label}</label>
    </div>
);