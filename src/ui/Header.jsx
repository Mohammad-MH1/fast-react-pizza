import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to='/'>Fast React Pizza co.</Link>
      <p>User name</p>
    </header>
  );
}

export default Header;
