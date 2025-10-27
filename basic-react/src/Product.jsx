import "./Product.css";

function Product({ title, price, features = [] }) {
  const list = features.map((feature) => <li>{feature}</li>);
    return (
      <div className="Product">
        <h3>{title}</h3>
        <h4>Price: {price}</h4>
        <p>{list}</p>
        {price > 3000? <p>"Discount 5%"</p> : null}
      </div>
    );
  };

export default Product;
