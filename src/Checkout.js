import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket}] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ?(
            <div>
                <h2>Your shopping Basket is empty</h2>
                <p>
                  You have no items in your basket. To buy one or more items,click"Add to basket" next to item.
                </p>
            </div>
        ):
        <div>
          {/* <h3>Hello, {user?.email}</h3> */}
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket?.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>}
      </div> 
      {basket.length > 0 && (
        <div className="checkout__right">
        <Subtotal />
        {/* <h1>Subtotal</h1> */}
        </div>
      )}
    </div>
  );
}

export default Checkout;