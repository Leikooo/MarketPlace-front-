"use client";
import './AuthModal.scss';
import modalAuthStore from '@/app/store/modalAuth';
import { observer } from "mobx-react";
import { AuthBack } from '../../../public/images/imgs'
import Link from 'next/link';
import { useState } from 'react';

const handleModalClose = () => {
  modalAuthStore.setIsActive(false);
  modalAuthStore.setIsLogin(true);
};

const LoginModal = observer(() => {
  return (
    <div className="LoginWindow">
      <div className="modal__overlay" />
      <div className="modal__body" onClick={e => e.stopPropagation()}>
        <div className="AuthModalImg">
          <AuthBack />
        </div>
        <div className="modal__content">
          <div className="modal__header">
            <h2 className="modal__title">{"Sign in"}</h2>
            <button className="modal__close" />
          </div>
          <div className="modal__forms">
            <form className="form">
              <div className="form__group">
                <label className="form__label" htmlFor="email">
                  {"Email address"}
                </label>
                <input
                  className="form__input"
                  type="email"
                  id="email"
                  autoComplete='email'
                  placeholder=""
                />
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="password">
                  {"Password"}
                </label>
                <input
                  className="form__input"
                  type="password"
                  id="password"
                  autoComplete='current-password'
                  placeholder=""
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
                  <button onClick={() => modalAuthStore.setIsLogin(false)} className="form__link">
                    {"Sign up"}
                  </button>
                </div>
                <button className="form__button" type="submit">
                  {"Log in"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
})

const RegisterModal = observer(() => {
  return (
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
                  className="form__input"
                  type="text"
                  id="Username"
                  autoComplete='username'
                  placeholder=""
                />
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="email">
                  {"Your E-mail"}
                </label>
                <input
                  className="form__input"
                  type='email'
                  id="email"
                  autoComplete='email'
                  placeholder=""
                />
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
                  />
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
                  />
                </div>
              </div>
              <div className="checkbox__group2">
                <div className="isRegister">
                  <p>
                    {"Already have an account?"}
                  </p>
                  <button onClick={() => modalAuthStore.setIsLogin(true)} className="form__link">
                    {"Sign in"}
                  </button>
                </div>
                <button className="form__button" type="submit">
                  {"Sign up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
})

const AuthModal = observer(() => {
  const isLogin = modalAuthStore.isLogin
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    if (isLogin) {
      const response = await login(email, password);
      console.log(response);
    } else {
      const response = await register(email, password);
      console.log(response);
    }
  }


  return (
    <div className={modalAuthStore.isActive ? "modal active" : "modal"} onClick={handleModalClose}>
      {isLogin ? <LoginModal /> : <RegisterModal />}
    </div>
  );
})

export default AuthModal;