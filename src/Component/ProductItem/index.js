import "./index.css";

const ProductItem = (props) => {

    const {product, onAddClicked} = props;

    const addToCart = () => {
        onAddClicked ();
        console.log("add button clicked")

    };

    return (
    <li className="product-itme">
        <img src={product.imageUrl} alt={product.name}/>
        <h4>{product.name}</h4>
        <h5>{product.brand}</h5>
        <p>{product.price}</p>
        <div className="add-cart-container">
            <button type="button" onClick={addToCart} className="add-cart-btn">Add to Cart</button>
        </div>

    </li>
)}

export default ProductItem;