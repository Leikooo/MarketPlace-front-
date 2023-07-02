import './Header.scss';
import Link from 'next/link';
import {Logo, Socials} from '../../public/images/imgs'

const Header = () => {
    return (
        <header className="header">
            <nav className="navigate">
                <Link href="/">
                    <div className="logo">
                        <Logo/>
                        <div className="title">
                            <p>FNM</p>
                        </div>
                        
                    </div>
                </Link>
                <div className="searchField">
                    <input type="search" id="search" className="search" placeholder="Search..."/>
                </div>
                <div className="links">
                    <div className="products">
                        <Link href="/products">Products</Link>
                    </div>
                    <div className="support">
                        <Link href="/support">Support</Link>
                    </div>
                    <div className="company">
                        <Link href="/company">Company</Link>
                    </div>
                    <div className="community">
                        <Link href="/community">Community</Link>
                    </div>
                </div>
                <Socials/>
                <div className="login">
                    <Link href="/">Log in</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
