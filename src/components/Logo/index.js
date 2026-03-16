import logo from '../../image/logo.svg';
import './style.css';

function Logo() {
  return (
    <div className="logo">
      <img src={logo} className="App-logo" alt="logo"/>
      <p>Alura Books</p>
    </div>
  );
}

export default Logo;