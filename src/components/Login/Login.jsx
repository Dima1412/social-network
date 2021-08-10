import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css';



const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} 
                       name={'email'} 
                       component={Input}
                       validate={[required]} />
            </div>
            <div>
                <Field placeholder={'Password'} 
                       name={'password'} 
                       component={Input} 
                       validate={[required]}
                       type={'password'} />
            </div>
            <div>
                <Field type={'checkbox'} 
                       name={'rememberMe'} 
                       component={Input} /> remember me
            </div>
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && <Field placeholder='image-symbols'
                                  name='captcha'
                                  validate={[required]}
                                  component={Input} />}

            { error &&
                <div className={style.formSummaryError}>
                    {error}
                </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginRedaxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginRedaxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl : state.auth.captchaUrl
})


export default connect(mapStateToProps, {login})(Login);