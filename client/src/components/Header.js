import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const auth = useSelector(state => state.auth);
    const renderContent = () => {
        switch (auth) {
            case null:
                return 'still deciding';
            case false:
                return 'im loggedout';
            default:
               return 'im logged in' ;

        }
    }
    return(
        <nav className="nav-wraper">
            <a className="left brand-logo">Emaily</a>
            <ul className="right">
                {renderContent()}
            </ul>
        </nav>
    );
}

export default Header;