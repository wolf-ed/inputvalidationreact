import './UserList.css'
import UserItem from '../UserItem/UserItem';


//Parent component: users
const UserList = (props) => {
    

    return (
        <div className='user-list'>
            <h3>Users List:</h3>
            <ul>
            {
                props.usersArrayList.map((user) => {
                    return( 
                        <li key={user.id}>
                        <UserItem
                        key={user.id}
                        name={ user.name}
                        age={ user.age}
                         />
                         </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default UserList;