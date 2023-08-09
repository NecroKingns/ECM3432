import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "./Checkout.css";
const Checkout = () => {
  const navigate = useNavigate();

  const onRejuvTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onStoreTextClick = useCallback(() => {
    navigate("/store");
  }, [navigate]);

  const onMyAccountTextClick = useCallback(() => {
    navigate("/my-account");
  }, [navigate]);

  return (
    <div className="checkout">
      <div className="desktop-1">
        <img className="desktop-1-child" alt="" src="/rectangle-1.svg" />
        <div className="rejuv-parent">
          <div className="rejuv" onClick={onRejuvTextClick}>
            Rejuvé
          </div>
          <div className="store" onClick={onStoreTextClick}>
            Store
          </div>
          <div className="my-account" onClick={onMyAccountTextClick}>
            My Account
          </div>
        </div>
        <div className="checkout1">Checkout</div>
        <img className="logo-icon" alt="" src="/logo@2x.png" />
        <SearchBar />
        <div className="contactaddress">
          <p className="bridge-ln-frodsham-cheshire-w">
            Bridge Ln Frodsham, Cheshire WA6 7HN
          </p>
          <p className="bridge-ln-frodsham-cheshire-w">&nbsp;</p>
          <p className="bridge-ln-frodsham-cheshire-w">T: 01928 733577</p>
          <p className="bridge-ln-frodsham-cheshire-w">
            info@ RejuvéCompany.com
          </p>
        </div>
        <img className="social-media-icon" alt="" src="/social-media@2x.png" />
        <div className="desktop-1-item" />
        <img className="image-3-icon" alt="" src="/image-3@2x.png" />
        <div className="desktop-1-inner">
          <div className="earliest-delivery-21072023-parent">
            <div className="proceed-to-checkout">
              Earliest Delivery: 21/07/2023
            </div>
            <div className="proceed-to-checkout">Quantity: 1</div>
            <div className="proceed-to-checkout">Price: £7.49</div>
          </div>
        </div>
        <div className="color-lipstick-set-in-container">
          <p className="bridge-ln-frodsham-cheshire-w">5 color lipstick set</p>
          <p className="bridge-ln-frodsham-cheshire-w">In Stock</p>
        </div>
        <div className="your-shopping-basket">Your Shopping Basket</div>
        <div className="proceed-to-checkout-wrapper">
          <div className="proceed-to-checkout">Proceed to Checkout</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
