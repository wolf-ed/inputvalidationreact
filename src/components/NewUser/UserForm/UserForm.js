import './UserForm.css';
import { useState } from 'react';

const UserForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [newId, setNewId] = useState('');

    const enteredNameHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const enteredAgeHandler = (event) => {
        setEnteredAge(event.target.value);
    }




    const submitHandler = (event) => {
        event.preventDefault(); //prevents the page reloading when submit is called
        if(enteredName === '' ||
             !enteredAge || 
             enteredAge < 0 || 
             enteredAge > 120)
             {
            console.log('enter a valid name!')
            alert('enter valid input')
            return;
        }else{
            const newUser = {
                name: enteredName,
                age: enteredAge,
                id: props.onCreateId()
            }
            setEnteredName('');
            setEnteredAge('');
            props.onSubmitUser(newUser)
        }
        // setValidName(enteredName);
        // setValidAge(enteredAge);
        // const newUser = {
        //     name: validName,
        //     age: validAge
        // }
        // props.onSubmitUser(newUser)

    }



    
    return (
        <form
            className='user-form'
            onSubmit={submitHandler}>
            <div >
                <label>User name:</label>
                <input
                    type="text"
                    value={enteredName}
                    onChange={enteredNameHandler} />

            </div>
            <div  >
                <label>User age:</label>
                <input
                    type="number"
                    value={enteredAge}
                    onChange={enteredAgeHandler} />

            </div>
            <div className='form-button'>
            <button
                type="submit"
            >Add User</button>
            </div>
        </form>
    )
}

export default UserForm;