import {Field, Form, Formik} from 'formik';
import React from 'react';
import s from "./Login.module.css"
import {Input} from "../../../components/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {loginTC, registerTC} from "../../../bll/reducers/reducerAuth";
import {RootStateType} from "../../../bll/store";
import {NavLink, Redirect} from 'react-router-dom';

export const Login = () => {

    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (values: any) => {
        dispatch(loginTC(values))
    }
    if (isAuth) {
        return <Redirect to={'/'}/>
    }

    return (
        <div className={s.login}>
            <div className={s.container}>
                <div className={s.loginFormContainer}>
                    <div className={s.title}>SING IN TO TRELLO COPY</div>
                    <Formik
                        initialValues={{
                            email: 'test@test.com',
                            password: 'password',
                            rememberMe: false
                        }}
                        onSubmit={onSubmit}>
                        <Form className={s.loginForm}>
                            <Field render={(field: any) => <Input field={field.field}/>} type={"email"} name="email"
                                   placeholder="email"/>
                            <Field render={(field: any) => <Input field={field.field}/>} type={"password"}
                                   name="password" placeholder="password"/>
                            <Field type={"checkbox"} name="rememberMe"/>
                            <button className={s.buttonSubmit} type="submit">Submit</button>
                            <div>
                                if you want register please push
                                <NavLink to={'/register'}><b> this link</b></NavLink>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
};

