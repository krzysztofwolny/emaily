import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

const Header = () => {
    const auth = useSelector(state => state.auth);
    const renderContent = () => {
        switch (auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login with Google</a></li>
                );
            default:
               return [
                <li key="1"><Payments /></li>,
               <li key="3" style={{margin: '0 10px'}}>Credits: {auth.credits}</li>,
                <li key="2"><a href="/api/logout">Logout</a></li>
               ] ;
        }
    }
    return(
        <nav className="nav-wraper">
            <Link to={auth ? "/surveys" : "/"} className="left brand-logo">Emaily</Link>
            <ul className="right">
                {renderContent()}
            </ul>
        </nav>
    );
}

export default Header;