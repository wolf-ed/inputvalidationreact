
import './NewUser.css';
import UserForm from './UserForm/UserForm';

//Parent component: app
const NewUser = (props) => {
    const submitHandler = (userReceived) => {
        const maybe = userReceived;
        props.onSetUsers(maybe)
    }
    return (
        <div className='new-user'>
            <UserForm onSubmitUser={submitHandler} onCreateId={props.onNewId}/>
        </div>
    )
}

export default NewUser;