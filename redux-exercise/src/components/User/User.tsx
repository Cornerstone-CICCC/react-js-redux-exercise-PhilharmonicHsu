import { useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "../../app/store"
import { setFirstname, setLastname, incrementAge } from "./UserSlice"
import { type ChangeEvent } from "react";


export default function User() {
    const user = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch<AppDispatch>()

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        const callback = (name === 'firstname')
            ? setFirstname
            : setLastname;

        dispatch(callback(value))
    }

    return <>
        <div>
            <label htmlFor='firstname'>First Name:</label>
            <input 
                type="text" 
                id="firstname" 
                name='firstname' 
                defaultValue={user.firstname} 
                onChange={handleOnChange}
            />
        </div>
        
        <div>
            <label htmlFor='lastname'>Last Name:</label>
            <input 
                type="text" 
                id="lastname" 
                name='lastname' 
                value={user.lastname} 
                onChange={handleOnChange}
            />
        </div>
        
        <p>Age: {user.age}</p>

        <button 
            onClick={() => dispatch(incrementAge())}
        >
            Increase Age 
        </button>
    </>
}