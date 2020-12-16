import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{basket} , dispatch] = useStateValue();
  return (
  <div className="checkout">
      <div className="checkout__left">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/WFH/ProHomeOffice/wearables_banner_1500x200.jpg" alt="Amazon ad" className="checkout__ad" />
        <div>
            <h2 className="checkout__title">Your shopping basket</h2>
              {basket.map(item => (
              <CheckoutProduct 
              id = {item.id}
              title= {item.title}
              image= {item.image}
              price= {item.price}
              rating= {item.rating}

              />
              ))}
        </div>
      </div>
      <div className="checkout__right">
          <Subtotal />
      </div>
  </div>
  );
}

export default Checkout;
