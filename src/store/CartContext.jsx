import { createContext, useReducer } from "react";

const CartContext = createContext({
	items: [],
	addItem: (item) => {},
	removeItem: (id) => {}
});

function CartReducer(state,actions) {
	switch (actions.type) {
		case 'ADD_ITEM':
			const existingCartItemIndex = state.items.findIndex(
				(i) => i.id === actions.item.id
			);

			const updaterItems = [...state.items];

			if (existingCartItemIndex >= 0) {
				const existingItem = state.items[existingCartItemIndex]
				const updaterItem ={
					...existingItem,
					quantity: existingItem.quantity + 1
				};
				updaterItems[existingCartItemIndex] = updaterItem;
			} else {
				updaterItems.push({...actions.item, quantity: 1});
			}

			return {
				...state,
				items : updaterItems
			};
		case 'REMOVE_ITEM':
			const existingCartItemIndex1 = state.items.findIndex(
				(i) => i.id === actions.id
			);


			// if (existingCartItemIndex1 >= 0) {
				const existingItem = state.items[existingCartItemIndex1];
				const updaterItems1 = [...state.items];
				
				if (existingItem.quantity === 1) {
					updaterItems1.slice(existingCartItemIndex1,1);
				}else{
					const updaterItem ={
						...existingItem,
						quantity: existingItem.quantity - 1
					};
					updaterItems1[existingCartItemIndex1] = updaterItem;
				}
				// return {
				// 	...state,
				// 	items : updaterItems
				// };
			// }

			return {
				...state,
				items : updaterItems
			};
		default:
			return state;
	}

}
function CartContextProvider({children}) {
	const [cart, dispatchCart] = useReducer(CartReducer, { items: [] }); 

	
	function addItem(item){
		dispatchCart({type: 'ADD_ITEM', item: item});
	}
	
	function removeItem(id) {
		dispatchCart({type: 'REMOVE_ITEM', id: id});
		
	}

	const cartContext = {
		items: cart.items,
		addItem: addItem,
		removeItem: removeItem
	}

	console.log(cartContext);

	return  <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
	
}

export {CartContextProvider}
export default CartContext;