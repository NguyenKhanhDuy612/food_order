import { useContext } from 'react'
import Button from '../UI/Button.jsx'
import {currentFormat} from '../util/format.js'
import CartContext from '../store/CartContext.jsx'
export default function MealItem({meal}){
	const cart = useContext(CartContext);
	const  handleAddToCart = () => {
		cart.addItem(meal)
	}
	return(
		<li className="meal-item">
			<img src={`http://localhost:3000/${meal.image}`} alt="" />
			<div>
				<h3>{meal.name}</h3>
				<p className="meal-item-price">{currentFormat.format(meal.price)}</p>
				<p className="meal-item-description">{meal.description}</p>
			</div>
			<Button className="meal-item-actions" onClick={handleAddToCart}>Add to Cart</Button>
		</li>
	)
}