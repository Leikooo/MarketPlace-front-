"use client";

import './Header.scss';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import { Logo, DefaultAvatar } from '../../../public/images/imgs'
import authStore from '@/app/store/UserStore';
import modalAuthStore from '@/app/store/modalAuth';
import dropsStore from '@/app/store/dropsStore';

import { useState } from 'react'

const Header = observer(() => {
    const avatar = authStore._user.avatar;
    const logout = () => {
        authStore.setIsAuth(false);
        authStore.setUser({});
        dropsStore.setIsProfileActive(false);
    }

    return (
        <header className="header">
            <nav className="navigate">
                <Link href="/">
                    <div className="logo">
                        <Logo />
                        <div className="title">
                            <p>FNM</p>
                        </div>
                    </div>
                </Link>
                <div className="searchField">
                    <input type="search" id="search" className="search" placeholder="Search..." />
                </div>
                <div className="links">
                    <div className="products">
                        <Link href={"/Catalog"}>Catalog</Link>
                    </div>
                    <div className="news">
                        <Link href={"/news"}>News</Link>
                    </div>
                    <div className="support">
                        <Link href={"/support"}>Support</Link>
                    </div>
                </div>
                {/* <Socials /> */}
                {authStore._isAuth ? (
                    <div className="authLogin">
                        <button onClick={() => dropsStore.setIsProfileActive(!dropsStore.isProfileActive)}>
                            <div className="avatar">
                                {avatar ? <img src={avatar} alt="avatar" /> : <DefaultAvatar />}
                            </div>
                        </button>
                        <div className={dropsStore.isProfileActive ? 'dropdown active' : 'dropdown'}>
                            <Link className='dropbnts' href="/profile">Profile</Link>
                            <Link className='dropbnts' href="/settings">Settings</Link>
                            <Link className='dropbnts' href="/balance">Balance</Link>
                            <Link className='dropbnts' href="/alerts">Alerts</Link>
                            <button className='dropbnts' onClick={logout}>Log Out</button>
                        </div>
                    </div>
                ) : (
                    <div className="auth">
                        <button className="Signin" onClick={() => modalAuthStore.setIsActive(true)}>Sign in</button>
                    </div>
                )}
            </nav>
        </header>
    );
});

export default Header;
