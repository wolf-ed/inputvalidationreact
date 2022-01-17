import './Users.css'
import UserList from './UserList/UserList';


//Parent component: app
const Users = (props) => {

    return (
        <div className='users'>
            <UserList usersArrayList={props.usersArray}/>
        </div>
    )
}

export default Users;