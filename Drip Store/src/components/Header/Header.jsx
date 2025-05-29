import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import { ShopCart } from '../ShopCart/ShopCart';
import { Input } from '../Input/Input';
import { Useful } from '../Useful/Useful';
import { Nav } from '../Nav/Nav';
import './Header.css';

export const Header = () => {

  const cart = [
    { nome: "Notebook", price: 2500 },
    { nome: "Smartphone", price: 2200 },
    { nome: "Smart Tv", price: 3000 },
    { nome: "Smart Watch", price: 2000 }
  ];

  return (
    <header id="header">
      <div className='box-header'>
        <div className='box-header-children'>
          <Logo margin={".5rem 0 0 .25rem"} />
          
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

          <Nav
            position={'absolute'}
            top={'8.375rem'}
            gap={'2rem'}
            width={'26.438rem'}
            height={'1.813rem'}
          >
            <li>
              <Useful value={'Início'} color={'#666666'} to={'/'} />
            </li>
            <li>
              <Useful value={'Produtos'} color={'#666666'} to={'/produtos'} />
            </li>
            <li>
              <Useful value={'Meus Pedidos'} color={'#666666'} to={'/pedidos'} />
            </li>
            <li>
              <Useful value={'Ofertas'} color={'#666666'} to={'/ofertas'} />
            </li>
          </Nav>
        </div>

        <Button
          width={'7.125rem'}
          height={'2.5rem'}
          margin={'2.75rem 0 0 1.875rem'}
        >
          Entrar
        </Button>

        <ShopCart value={cart.length} />
      </div>
    </header>
  );
}
