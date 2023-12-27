import "./index.css";
const Navbar = (props) => {

    const {count} = props;
    
    return (
    <nav>
        <img src="../../spark.png" alt="spark electronic logo" className="logo" />
        <ul className="nav-menu">
        <li>Home</li>
        <li>Product</li>
        <li className="cart-menu-con">
            Cart<span className="cart-count">{count}</span>
        </li>
        </ul>
</nav>
)};

export default Navbar;