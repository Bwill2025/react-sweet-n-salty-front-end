
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const NavBar = () => {
    const { user, setUser } = useContext(UserContext);

    const handleSignOut = () => {
      localStorage.removeItem('token');
      setUser(null);
    };

    return (
        <nav className='navbar'>
          {user ? (
            <ul>
              
              <li><Link to='/' onClick={handleSignOut}>Done?... Sign Out</Link></li>
            </ul>
          ) : (
            <ul>

              <li><Link to='/'>Home</Link></li>
              <li><Link to='/sign-in'>Sign In</Link></li>
              <li><Link to='/sign-up'>Sign Up</Link></li>
            </ul>
          )}
        </nav>
      );
}

export default NavBar;
