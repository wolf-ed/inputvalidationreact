import './UserItem.css'

const UserItem = (props) => {

    return (
        <div className='user-item'>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default UserItem;