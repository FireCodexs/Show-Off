import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.scss";
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

function Navbar() {
  return (
    <div className="navbar">
        <div className='wrapper'>
            <div className='items'>
                <div className='item'>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                    >
                        <HomeIcon className='icon'/>Home
                    </NavLink>
                </div>
                <div className='item'> 
                    <NavLink
                        to="projects"
                        className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                    >
                        <AccountTreeIcon className='icon' />Projects
                    </NavLink>
                </div>
                <div className='item'>
                    <NavLink
                        to="contact"
                        end
                        className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                    >
                        <ConnectWithoutContactIcon className='icon' />Contact
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
