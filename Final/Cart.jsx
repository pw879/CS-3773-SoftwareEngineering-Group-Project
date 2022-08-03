import React, {useState, useEffect} from 'react';
import { getCart, getProductsFromCart, getSubTotal, changeCartItemQty} from "../dataFunctions"
// import './Cart_Main.css'

export default function Cart({cart, images, clearCart, removeFromCart, setQuantity}) {
    // const [changeMade, setChange] = useState(true);
    // const [cartTemp, setCartTemp] = useState([]);
    // const [imagesTemp, setImagesTemp] = useState([]);

    const subtotalCost = () => {
      return (getSubTotal(cart)).toFixed(2);
    }

    const totalCost = () => {
      return (getSubTotal(cart) * 1.0825).toFixed(2);
    }

    const ShowCart = () => {
      // const [cartTemp, setCartTemp] = useState([]);
      // const [imagesTemp, setImagesTemp] = useState([]);
      // // const [productImages, setImages] = useState([]);

      // useEffect( () => {
      //   // if(changeMade){
      //     async function getData(){
      //       try{
      //         // const temp1 = images;
      //         // const temp2 = cart;
      // // //         const cartItems = await getCart();
      // // //         const products = await getProductsFromCart(cartItems);
      // // //         let images = [];
      // // //         products.forEach((product) => images.push(product[1]['image']))
      //         // setImagesTemp(images)
      //         // setCartTemp(cart);
      // // //         // console.log(images)
      //       }
      //       catch(err){
      //         console.log(err);
      //       }
      //     }
      //     getData();
      //     // setChange(false);
      //   // }
      // }, []);
      // return <div>{products[1].name}</div>
      return cart.map((item, idx) => (
        // {console.log(product[1].name + " " + product[1].price)}
        // {console.log(item)}
        // {console.log(item)}
        <div className="product" key={idx}>  
          <h3>{item[1].name}</h3>
          <h4>${(item[1].price*item[1].quantity).toFixed(2)}</h4>
          <p>Qty:</p>
          <input value = {item[1].quantity}
          onChange={(e) => 
              setQuantity(item[0], parseInt(e.target.value))}>
            </input>
          <img src={images[idx]} alt={item[1].name} />
          <button onClick={() => removeFromCart(item[0])}>
            Remove Item
          </button>
        </div>
      )) ;
    }

    return (
    <div className="Cart">
      <h1>Cart</h1>
      {cart.length > 0 && (
      <button onClick={clearCart}>Clear All Items</button>
      )}
      <div className="products">
        <ShowCart />
        </div>
        
        <div> Subtotal: ${subtotalCost()}</div>
        <div> Total: ${totalCost()}</div>
    </div>
  );
}