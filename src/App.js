import {Component} from "react";
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import ProductItem from "./Component/ProductItem";
import Footer from "./Component/Footer";
import "./App.css";

const dealsList = [

  {
    id: "1",
    imageUrl: "../../spark.png",
    name:"Mobile Phone",
    brand:"Brand Name",
    price:"$ Price",
  },
  {
    id: "2",
    imageUrl: "../../spark.png",
    name:"Mobile Phone",
    brand:"Brand Name",
    price:"$ Price",
  },
  {
    id: "3",
    imageUrl: "../../spark.png",
    name:"Mobile Phone",
    brand:"Brand Name",
    price:"$ Price",
  },
  {
    id: "4",
    imageUrl: "../../spark.png",
    name:"Mobile Phone",
    brand:"Brand Name",
    price:"$ Price",
  }
];
const allProductsList = [

  {
    id: "1",
    imageUrl: "../../spark.png",
    name:"Mobile Phone",
    brand:"Brand Name",
    price:"$ Price",
  },
  {
    id: "2",
    imageUrl: "../../spark.png",
    name:"Mobile Phone",
    brand:"Brand Name",
    price:"$ Price",
  },
  {
    id: "3",
    imageUrl: "../../spark.png",
    name:"Mobile Phone",
    brand:"Brand Name",
    price:"$ Price",
  },
  {
    id: "4",
    imageUrl: "../../spark.png",
    name:"Mobile Phone",
    brand:"Brand Name",
    price:"$ Price",
  },
  {
    id: "5",
    imageUrl: "../../spark.png",
    name:"Mobile Phone",
    brand:"Brand Name",
    price:"$ Price",
  },
  {
    id: "6",
    imageUrl: "../../spark.png",
    name:"Mobile Phone",
    brand:"Brand Name",
    price:"$ Price",
  },
  {
    id: "7",
    imageUrl: "../../spark.png",
    name:"Mobile Phone",
    brand:"Brand Name",
    price:"$ Price",
  },
  {
    id: "8",
    imageUrl: "../../spark.png",
    name:"Mobile Phone",
    brand:"Brand Name",
    price:"$ Price",
  }
];

class App extends Component {
  state = { cartCount: 0 };

  onAddClicked = () => {
    this.setState((prevState) => ({cartCount: prevState.cartCount + 1}));
  }

  render() {
    const {cartCount} = this.state;
    return (
      <div>
        <div className="header">
          <Navbar count= {cartCount}/>
          <Banner/>
        </div>

        <div className="products-section">
          <h2 className="title">Deals of the Day</h2>
          <ul className="products-row-list">
            {dealsList.map((eachobj) => (<ProductItem product={eachobj} key={eachobj.id} onAddClicked={this.onAddClicked}/>))}
          </ul>
        </div>

        <div className="products-section">
          <h2 className="title">All products</h2>
          <ul className="products-row-list">
            {allProductsList.map((eachobj) => (<ProductItem product={eachobj} key={eachobj.id}/>))}
          </ul>
        </div>

          <Footer/>
      </div>
    );
  };
}  
export default App;