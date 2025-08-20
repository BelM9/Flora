import { useState, useEffect } from 'react'
import '../styles/Cart.css'

export default function Cart({ cart, updateCart }) {
/* const monsteraPrice = 8 */
	const total = cart.reduce(
	(acc, plantType) => acc + plantType.amount * plantType.price, 0
	)
/* 	const [cart, updateCart] = useState(0)*/
	const [isOpen, setIsOpen] = useState(true)

	/* useEffect(() => {
		alert(`J'aurai ${total}d à payer 💸`)
	}, [total]) */ /* [] */

	useEffect(() => {
		document.title = `LMJ: ${total}d d'achats`
	}, [total])

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}d x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}d</h3>
					
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}
