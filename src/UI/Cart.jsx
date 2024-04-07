import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/CartContext";

const Cart = () =>{
	const CartCtx = useContext(CartContext)
	return(
		<Modal className="cart" >
			<h2>Your Cart</h2>
			<ul>
				{CartCtx.items}
			</ul>
		</Modal>
	)
}

export  default Cart;