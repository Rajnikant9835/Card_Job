import "./Product.css";
import Card from "./Card";
import NewProduct from "./NewProduct";

function Product() {

  function PrintFromData(data){
    console.log("i am inside of Product.js || app.js")
    console.log(data);

  }

  return (
    <div className="Product_box">
        <NewProduct printProduct = {PrintFromData}/>
      <Card></Card>
    </div>
  );
}

export default Product;
