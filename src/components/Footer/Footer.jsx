import KasaLogoWhite from '../../assets/kasaLogoWhite.png';
import './style.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img src={KasaLogoWhite} alt="Kasa logo white" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer;