import './Logo.css';

export const Logo = ({color, margin}) => {
  return (
    <a style={{margin: margin}} className="logo" href="">
      <img src={!color ? '../../../public/Logo.svg'
        : '../../../public/Logo-branca.svg'}/>
      <span style={{color: color}}>Drip Store</span>
    </a>
  );
}