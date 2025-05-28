import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import { ShopCart } from '../ShopCart/ShopCart';
import { Input } from '../Input/Input';
import { Useful } from '../Useful/Useful';
import './Header.css';

export const Header = () => {

  const cart = [
    {nome: "Notbook", price: 2500},
    {nome: "Smartphone", price: 2200},
    {nome: "Smart Tv", price: 3000}
  ]
  return(
    <header id="header">
      <div className='box-header'>
        <div className='box-header-children'>
          <Logo margin={".5rem 0 0 .25rem"}/>
          <Input
           type={'text'}
           placeholder={'Pesquisar produto...'}
           margin={'0 3rem 0 1.688rem'}
           width={'34.938rem'}
           height={'3.75rem'}
           src={'../../../public/Search.svg'}
           />
           <Useful
           value={'Cadastre-se'}
           margin={'1.2rem 0 0 0'}
           color={'#474747'}
           href={'#'}
           textDecoration={'underline'}
           />
        </div>
        <Button
          width={'7.125rem'}
          height={'2.5rem'}
          margin={'2.75rem 0 0 1.875rem'}
        >Entrar</Button>
        <ShopCart value={cart.length}/>
      </div>
    </header>
  );
}
