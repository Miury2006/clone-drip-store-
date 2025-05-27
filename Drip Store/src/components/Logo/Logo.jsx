import './Logo.css';

export const Logo = ({color, margin}) => {
  return(
    <div>
      <a style={{margin: margin}} className="logo" href="">
        <img src={!color ? '../../../public/Logo.svg' : '../../../public/Logo-branca.svg'} />
        <span style={{color: color, margin: margin}}>Drip Store</span>
      </a>
    </div>
  )
}