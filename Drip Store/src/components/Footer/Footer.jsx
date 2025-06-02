import './Footer.css';

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="box-footer">
        
        <div className="footer-column">
          <div className="logo-texto">
            <a href="#">
              <img src="../../../public/Logo-branca.svg" alt="Logo" />
            </a>
            <span>Digital Store</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur<br />
            adipiscing elit, sed do eiusmod tempor<br />
            incididunt ut labore et dolore.
          </p>
          <div className="box-icons">
            <img src="../../../public/Facebook.svg" alt="Facebook" />
            <img src="../../../public/Instagram.svg" alt="Instagram" />
            <img src="../../../public/Twitter.svg" alt="Twitter" />
          </div>
        </div>

        <div className="footer-column">
          <h3>Informação</h3>
          <ul>
            <li><a href="#">Sobre Drip Store</a></li>
            <li><a href="#">Segurança</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
            <li><a href="#">Meus Pedidos</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Categorias</h3>
          <ul>
            <li><a href="#">Camisetas</a></li>
            <li><a href="#">Calças</a></li>
            <li><a href="#">Bonés</a></li>
            <li><a href="#">Headphones</a></li>
            <li><a href="#">Tênis</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contato</h3>
          <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
          <p>(85) 3051-3411</p>
        </div>
        
      </div>
      <hr />
      <span className="footer-copy">@ 2022 Digital College</span>
    </footer>
  );
};
