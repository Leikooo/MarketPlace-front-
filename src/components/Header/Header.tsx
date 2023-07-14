"use client";

import './Header.scss';
import Link from 'next/link';
import { observer } from 'mobx-react';
import { Logo, Socials } from '../../../public/images/imgs'
import authStore from '@/app/store/auth';
import modalAuthStore from '@/app/store/modalAuth';

const Header = observer(() => {
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
                        <Link href={"/products"}>Products</Link>
                    </div>
                    <div className="support">
                        <Link href={"/support"}>Support</Link>
                    </div>
                    <div className="company">
                        <Link href={"/company"}>Company</Link>
                    </div>
                    <div className="community">
                        <Link href={"/community"}>Community</Link>
                    </div>
                </div>
                <Socials />
                {authStore.isAuth ? (
                    <div className="auth">
                        <Link href={"/profile"}>Profile</Link>
                    </div>
                ) : (
                    <div className="auth">
                        <button className="Signin" onClick={() => modalAuthStore.setIsActive(true) }>Sign in</button>
                    </div>
                )}
            </nav>
        </header>
    );
});

export default Header;
