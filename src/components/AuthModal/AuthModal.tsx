"use client";
import './AuthModal.scss';
import modalAuthStore from '@/app/store/modalAuth';
import { observer } from "mobx-react";
import { AuthBack } from '../../../public/images/imgs'
import Link from 'next/link';
const handleModalClose = () => {
  modalAuthStore.setIsActive(false);
};

const AuthModal = observer(() => {
  return (
    <div className={modalAuthStore.isActive ? "modal active" : "modal"} onClick={handleModalClose}>
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
                  <Link href="/" className="form__link">
                    {"Sign up"}
                  </Link>
                </div>
                <button className="form__button" type="submit">
                  Further
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
})

export default AuthModal;