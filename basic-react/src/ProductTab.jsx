import Product from "./Product";

function ProductTab(){
  let features = ["Samsung ,"," Apple , ","Xiaomi"];
    return(
    <>
  <Product title="Phone" price={35000} features={features}/>
  <Product title="Laptop" price="57,000 TK"/>
  <Product title="Desktop" price="95,000 TK"/>
    </>
  );
}

export default ProductTab;