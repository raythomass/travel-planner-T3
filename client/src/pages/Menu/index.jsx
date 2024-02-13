import { useQuery } from '@apollo/client';
import './menu.css'

import { QUERY_PIZZAS } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';

const Menu = () => {
    const [state, dispatch] = useStoreContext();
    const { cart } = state;

    const { loading, data } = useQuery(QUERY_PIZZAS);
    const pizzaItems = data?.pizza || [];
    
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            cart: { ...pizza },
        });
    }
    
    return (
        <div>
            <header className='menu-header'>
                <h1>Our Menu</h1>
            </header>
            <main>
                {pizzaItems.map((pizza) => (
                    <section key={pizza._id} className="pizza-item">
                        <h2>{pizza.name}</h2>
                        <p className="description">{pizza.description}</p>
                        <p className="price">${pizza.price}</p>
                        <button className="btn-customize">Customize</button>
                        <button className="btn-add-to-cart" onClick={addToCart}>Add to Cart</button>
                    </section>
                ))}
            </main>
        </div>
    );
};

export default Menu;