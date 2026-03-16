import logo from '../../image/logo.svg';
import './style.css';

function Logo() {
  return (
    <div className="logo">
      <img 
        src={logo} 
        className="logo-img" 
        alt="logo"
      />
      <p>Alura Books</p>
    </div>
  );
}

export default Logo;