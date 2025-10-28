import Price from "./price";
import "./Product.css";

function Product({title, idx }) {
  let oldPrices = ["18,999","15,999","37,999","7,999"];
  let newPrices = ["14,999","12,999","30,999","6,999"];
  let description = [["Motherboard","B450M Series"],["Processor","6 Core 6 Thread"],["Graphics Card","OC Edition"],["Storage Device","NvME"]]

    return (
      <div className="Product">
        <h2>{title}</h2>
        <h3>{description[idx][0]}</h3>
        <h4>{description[idx][1]}</h4>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
      </div>
    );
  };

export default Product;
