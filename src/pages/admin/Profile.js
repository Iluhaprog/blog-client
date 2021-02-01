import { connect } from "react-redux";
import { updateAvatarFetch, updateFetch } from "../../actoins/user";
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
    update: user => dispatch(updateFetch(user)),
    updateAvatar: avatar => dispatch(updateAvatarFetch(avatar)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);