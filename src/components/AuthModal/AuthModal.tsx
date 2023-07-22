"use client";
import './AuthModal.scss';
import modalAuthStore from '@/app/store/modalAuth';
import UserStore from '@/app/store/UserStore';
import { observer } from "mobx-react-lite";
import { AuthBack } from '../../../public/images/imgs'
import Link from 'next/link';
import { useState } from 'react';
import { login, registration } from '@/http/userAPI'

const handleModalClose = () => {
  modalAuthStore.setIsActive(false);
  modalAuthStore.setIsLoginWindow(true);
};


export const AuthComp = observer(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [Emptyerror, setEmptyerror] = useState(false);

  const click = async (e: React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault();
    try {
      if (email.trim() === '' || password.trim() === '') {
        alert('Заполните все поля');
      } else {
        const data = await login(email, password);
        console.log(data);
        UserStore.setIsAuth(true);
        UserStore.setUser(data);
        modalAuthStore.setIsActive(false)
        
      }
    } catch (err: any) {
      alert(err.response.data.message);
    }
  }

  return (
    <div className={modalAuthStore.isActive ? "modal active" : "modal"} onClick={handleModalClose}>
      <div className="RegisterWindow">
        <div className="modal__overlay" />
        <div className="modal__body" onClick={e => e.stopPropagation()}>
          <div className="AuthModalImg">
            <AuthBack />
          </div>
          <div className="modal__content">
            <div className="modal__header">
              <h2 className="modal__title">{"Sign up"}</h2>
              <button className="modal__close" />
            </div>
            <div className="modal__forms">
              <form className="form">
                <div className="form__group">
                  <label className="form__label" htmlFor="email">
                    {"Email address"}
                  </label>
                  <input
                    className="authFormInput"
                    type="text"
                    id="email"
                    required
                    autoComplete='email'
                    placeholder=""
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <label className="form__label" htmlFor="password">
                    {"Password"}
                  </label>
                  <input
                    className="authFormInput"
                    type="password"
                    id="password"
                    autoComplete='current-password'
                    placeholder=""
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="checkbox__group1">
                  <div className='rememberCheckbox'>
                    <input type="checkbox" name="radio" id="radio" />
                    <label htmlFor="checkbox">Remember me</label>
                  </div>
                  <Link href="/" className="form__link">
                    {"Forgot password?"}
                  </Link>
                </div>
                <div className="checkbox__group2">
                  <div className="isRegister">
                    <p>
                      {"Don't have an account?"}
                    </p>
                    <button onClick={() => modalAuthStore.setIsLoginWindow(false)} className="form__link">
                      {"Sign up"}
                    </button>
                  </div>
                  <button className="form__button" type="submit" onClick={click}>
                    {"Log in"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})

export const RegComp = observer(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");
  const [username, setUsername] = useState("");
  const click = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (email.trim() === '' || password.trim() === '' || username.trim() === '') {
        alert('Заполните все поля');
      }
      else if (password !== password_confirm) {
        alert('Пароли не совпадают');
      }
      else {
        const data = await registration(username, email, password);
        UserStore.setIsAuth(true);
        UserStore.setUser(data);
        modalAuthStore.setIsActive(false)
        console.log(data);
      }
    } catch (err: any) {
      alert(err.response.data.message);
    }
  }
  return (
    <div className={modalAuthStore.isActive ? "modal active" : "modal"} onClick={handleModalClose}>
      <div className="RegisterWindow">
        <div className="modal__overlay" />
        <div className="modal__body" onClick={e => e.stopPropagation()}>
          <div className="AuthModalImg">
            <AuthBack />
          </div>
          <div className="modal__content">
            <div className="modal__header">
              <h2 className="modal__title">{"Sign up"}</h2>
              <button className="modal__close" />
            </div>
            <div className="modal__forms">
              <form className="form">
                <div className="form__group">
                  <label className="form__label" htmlFor="Username">
                    {"Username"}
                  </label>
                  <input
                    className="regFormInput"
                    type="text"
                    id="Username"
                    autoComplete='username'
                    placeholder=""
                    value={username}
                    onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form__group">
                  <label className="form__label" htmlFor="email">
                    {"Your E-mail"}
                  </label>
                  <input
                    className="regFormInput"
                    type='text'
                    id="email"
                    autoComplete='email'
                    placeholder=""
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form__group_pass">
                  <div className="pass__group">
                    <label className="form__label" htmlFor="password">
                      {"Password"}
                    </label>
                    <input
                      className="pass__input"
                      type="password"
                      id="password"
                      autoComplete='current-password'
                      placeholder=""
                      value={password}
                      onChange={e => setPassword(e.target.value)} />
                  </div>
                  <div className="pass__group">
                    <label className="form__label" htmlFor="password">
                      {"Confirm"}
                    </label>
                    <input
                      className="pass__input"
                      type="password"
                      id="conf_password"
                      autoComplete='current-password'
                      placeholder=""
                      value={password_confirm}
                      onChange={e => setPasswordConfirm(e.target.value)} />
                  </div>
                </div>
                <div className="checkbox__group2">
                  <div className="isRegister">
                    <p>
                      {"Already have an account?"}
                    </p>
                    <button onClick={() => modalAuthStore.setIsLoginWindow(true)} className="form__link">
                      {"Sign in"}
                    </button>
                  </div>
                  <button className="form__button" type="submit" onClick={click}>
                    {"Sign up"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})

