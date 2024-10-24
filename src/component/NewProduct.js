import './NewProduct.css'
import ProductForm from './ProductForm';

function NewProduct(props){

    function saveProduct(product){
        console.log("i am inside new product")
        console.log(product);

        //calling parent function
        props.printProduct(product);
    }
    return(
        <ProductForm onSaveProduct={saveProduct}/> 
    )
}

export default NewProduct;