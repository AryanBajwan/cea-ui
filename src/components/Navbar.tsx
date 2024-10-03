import { useState } from 'react';

import ceaLogo from '../assets/CeaLogo.svg';
import menuStart from '../assets/Navigation.svg'
import menuStop from '../assets/menuStop.svg'

import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    const [navigation, setNavigation] = useState<boolean>(true);
    const onClick = () => {
        const navMenu = document.querySelector(".nav-menu img") as HTMLElement;
        if (navMenu) {
          navMenu.addEventListener("click", () =>  {
            setNavigation(!navigation)
            
          });
        }
      };

    return (
        <nav>
            <div className='navigation'>
                <div className="nav-logo">
                    <img src={ceaLogo} alt='cea logo' />
                </div>
                <div className="nav-menu">
                    <img src={navigation ? menuStop : menuStart} alt='cea logo' onClick={onClick} />
                        <ul className={navigation ? "menu-list active" : "menu-list"}>
                            <li><Link to="/"> HOME</Link></li>
                            <li><Link to="#"> EVENTS</Link></li>
                            <li><Link  to="/post"> POSTS</Link></li>
                            <li><Link to="#"> STRUCTURAL ENGINEERING</Link></li>
                            <li><Link to="#"> GEOTECHNICAL ENGINEERING</Link></li>
                            <li><Link to="#"> WATER RESURCE ENGINEERING</Link></li>
                            <li><Link  to="/team"> TEAMS</Link></li>
                            <li><Link to="#"> CONTACT</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;