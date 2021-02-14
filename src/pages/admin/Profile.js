import { connect } from "react-redux";
import { updateAvatarFetch, updateFetch } from "../../actoins/user";
import { addError } from '../../actoins/error';
import { setErrorCatch } from '../../util/SettingErrorCatch';
import { ProfileForm } from "../../components/forms/ProfileForm";

const Profile = props => {
    const submit = values => {
        const { avatar } = values;
        const user = {...values};
        delete user['avatar'];
        
        if (avatar !== props.avatar) {
            const formData = new FormData();
            formData.append('avatar', avatar);
            props.updateAvatar(formData);
        }
        props.update(user);
    }
    return (
        <div className='admin-page'>
            <ProfileForm onSubmit={submit}/>
        </div>
    );
};

const mapStateToProps = state => ({
    avatar: state.user.avatarImage,
});

const mapDispatchToProps = dispatch => ({
    update: user => {
        setErrorCatch(
            dispatch(updateFetch(user)),
            e => dispatch(addError(e))
        );
    },
    updateAvatar: avatar => {
        setErrorCatch(
            dispatch(updateAvatarFetch(avatar)),
            e => dispatch(addError(e))
        );
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);