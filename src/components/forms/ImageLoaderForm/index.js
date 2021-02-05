import { reduxForm } from 'redux-form'; 
import ilf from './ImageLoaderForm';

const ImageLoaderForm = reduxForm({
    form: 'imageLoaderForm',
})(ilf);

export {
    ImageLoaderForm,
};