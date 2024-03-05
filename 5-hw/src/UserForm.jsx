// UserForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './UserForm.css'; // Импорт файла стилей

const UserForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_USER', payload: { field: 'name', value: name } });
        dispatch({ type: 'UPDATE_USER', payload: { field: 'age', value: age } });
        dispatch({ type: 'UPDATE_USER', payload: { field: 'gender', value: gender } });
    };

    return (
        <div className="form-container"> {}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserForm;
