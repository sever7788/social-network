import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../redux/utils/validators";
import { connect } from "react-redux";
import { login } from "./../../redux/auth-reducer"
import { Redirect } from 'react-router';
import style from "./../common/FormsControls/FormsControls.module.css";
import { createField } from '../../redux/utils/object-helpers';

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Login", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}></Redirect>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });
export default connect(mapStateToProps, { login })(Login);