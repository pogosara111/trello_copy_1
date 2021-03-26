import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../bll/store";
import {registerTC} from "../../../bll/reducers/reducerAuth";
import {Redirect} from "react-router-dom";
import s from "../login/Login.module.css";
import {Field, Form, Formik} from "formik";
import {Input} from "../../../components/input/Input";

export const Register = () => {
    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (values: any) => {
        //dispatch(loginTC(values))
        dispatch(registerTC(values))
    }
    if (isAuth) {
        debugger
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.login}>
            <div className={s.container}>
                <div className={s.loginFormContainer}>
                    <div className={s.title}>SING UP TO TRELLO COPY</div>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={onSubmit}>
                        <Form className={s.loginForm}>
                            <Field render={(field: any)=><Input field={field.field}/>} type={"email"} name="email" placeholder="email"/>
                            <Field render={(field: any)=><Input field={field.field}/>} type={"password"} name="password" placeholder="password"/>
                            <button className={s.buttonSubmit} type="submit">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
};

