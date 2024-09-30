import { useState } from 'react';

import ceaLogo from '../assets/CeaLogo.svg';
import menuStart from '../assets/Navigation.svg'
import menuStop from '../assets/menuStop.svg'

import './navbar.css'

function Navbar() {
    const [navigation, setNavigation] = useState<boolean>(false);


    return (
        <nav>
            <div className='navigation'>
                <div className="nav-logo">
                    <img src={ceaLogo} alt='cea logo' />
                </div>
                <div className="nav-menu">
                    <img src={navigation ? menuStop : menuStart} alt='cea logo' />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;