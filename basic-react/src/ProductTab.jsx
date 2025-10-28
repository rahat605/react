import Product from "./Product";

function ProductTab(){
  let styles = {
    display : "flex",
    flexWrap : "wrap",
    justifyContent : "center",
    alignItems : "center"
  };
    return(
  <div style={styles}>
    <Product title = "Asrock Steel Legend" idx={0} />
    <Product title = "Ryzen 5 3500" idx={1}/>
    <Product title = "MSI Ventus GTX 1660 Super" idx={2}/>
    <Product title = "ACER 1TB NVME M.2 SSD" idx={3}/>
  </div>
  );
}

export default ProductTab;