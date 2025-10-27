import Product from "./Product";

function ProductTab(){
  let options = ["Samsung","Apple","Xiaomi"];
    return(
    <>
  <Product title="Phone" price={35000} features={options}/>
  <Product title="Laptop" price={56000}/>
  <Product title="Desktop" price={89000}/>
    </>
  );
}

export default ProductTab;