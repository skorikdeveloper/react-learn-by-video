import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
    return (
        <div>
            <h1>Login page</h1>
            <form action="">
                <MyInput type="text" placeholder={"Login"}/>
                <MyInput type="password" placeholder={"Password"}/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;