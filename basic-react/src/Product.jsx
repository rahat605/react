import Price from "./price";
import "./Product.css";

function Product({title, idx }) {
  let oldPrices = ["12,999","15,000","29,000","4,900"];
  let newPrices = ["14,000","13,500","32,990","7,000"];
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
