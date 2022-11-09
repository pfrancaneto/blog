import logoSvg from '../../svg/logo.svg';
import "./styles.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logoSvg} alt="" />
      </div>
      <div className="search">
        <input type="text" placeholder='Buscar artigos, destaques...'/>
      </div>
      <nav>
        <ul className="menu">
          <li><a className='link' href="/#">Categories</a></li>
          <li><a className='link' href="/#">About</a></li>
          <li><a className='link' href="/#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
