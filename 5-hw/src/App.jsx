import React from 'react';
import {Provider} from 'react-redux';
import UserForm from './UserForm';
import UserInfo from './UserInfo';
import store from './store';
import './App.css'; 

function App() {
    return (
        <Provider store={store}>
            <div>
                <h1>User Form</h1>
                <UserForm />
                <h1>User Info</h1>
                <UserInfo />
            </div>
        </Provider>
    );
}

export default App;
