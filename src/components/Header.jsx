import { useContext } from 'react';
import Button from '../UI/Button';
import logo from '../assets/logo.jpg';
import CartContext from '../store/CartContext';

const Header = () =>{
	const cart = useContext(CartContext)
	const totalCart = cart.items.reduce((total, item)=> total + item.quantity , 0);
	return(
		<header id="main-header">
			<div id="title">
				<img src={logo} alt="logo" />
				<h1>Food</h1>
			</div>
			<nav>
				<Button textButton>Cart ({totalCart})</Button>
			</nav>
		</header>
	)
}

export default Header;