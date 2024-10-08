import { useState } from 'react';
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"
import { useTheme } from '../ThemeContext';
import NewsButton from '../utils/NewsButton';

import ceaLogo from '../assets/CeaLogo.svg';
import menuStart from '../assets/Navigation.svg'
import menuStop from '../assets/menuStop.svg'

import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    const [navigation, setNavigation] = useState<boolean>(false);
    const onClick = () => {
        const navMenu = document.querySelector(".nav-menu img") as HTMLElement;
        if (navMenu) {
          navMenu.addEventListener("click", () =>  {
            setNavigation(!navigation)
            
          });
        }
      };

      const { theme, toggleTheme } = useTheme();

    return (
        <nav>
            <div className='navigation'>
                <div className="nav-logo">
                    <img src={ceaLogo} alt='cea logo' />
                </div>
                <div className="nav-menu">
                    <NewsButton word="NEWS"/>
                    <div className="theme-toggle">
                        <Classic 
                        duration={750} 
                        toggled={theme === "dark"} 
                        toggle={toggleTheme}
                        // Casting to any
                        {...({} as any)} 
                        />
                    </div>
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