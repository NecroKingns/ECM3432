import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import FoundationCard from "../components/FoundationCard";
import "./Store.css";
const Store = () => {
  const navigate = useNavigate();

  const onRejuvTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onMyAccountTextClick = useCallback(() => {
    navigate("/my-account");
  }, [navigate]);

  const onCheckoutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="store2">
      <div className="desktop-12">
        <img className="desktop-1-child2" alt="" src="/rectangle-1.svg" />
        <div className="rejuv-container">
          <div className="rejuv2" onClick={onRejuvTextClick}>
            Rejuvé
          </div>
          <div className="store3">Store</div>
          <div className="my-account3" onClick={onMyAccountTextClick}>
            My Account
          </div>
        </div>
        <div className="checkout3" onClick={onCheckoutTextClick}>
          Checkout
        </div>
        <img className="logo-icon2" alt="" src="/logo@2x.png" />
        <SearchBar />
        <div className="featured-sales">Featured Sales</div>
        <img className="image-2-icon1" alt="" src="/image-3@2x.png" />
        <div className="frame-parent">
          <div className="color-lipstick-set-parent">
            <div className="add-to-checkout">5 color lipstick set</div>
            <img
              className="image-removebg-preview-3-1"
              alt=""
              src="/imageremovebgpreview-3-1@2x.png"
            />
            <div className="was-999-25-container">
              {`£7.49 was `}
              <span className="span">£9.99</span> 25% off
            </div>
          </div>
          <div className="add-to-checkout-wrapper">
            <div className="add-to-checkout">Add to Checkout</div>
          </div>
        </div>
        <FoundationCard productDescription="Dual foundation set" />
        <div className="was-850-33-container">
          {`£5.70 was `}
          <span className="span">£8.50</span> 33% off
        </div>
        <div className="add-to-checkout-container">
          <div className="add-to-checkout">Add to Checkout</div>
        </div>
        <FoundationCard productDescription="Black Eyeliner" propLeft="920px" />
        <div className="was-1000-33-container">
          {`£6.66 was `}
          <span className="span">£10.00</span> 33% off
        </div>
        <div className="add-to-checkout-frame">
          <div className="add-to-checkout">Add to Checkout</div>
        </div>
        <img className="image-4-icon" alt="" src="/image-4@2x.png" />
        <img className="image-3-icon1" alt="" src="/image-31@2x.png" />
        <div className="etc">etc</div>
        <div className="contactaddress2">
          <p className="bridge-ln-frodsham-cheshire-w2">
            Bridge Ln Frodsham, Cheshire WA6 7HN
          </p>
          <p className="bridge-ln-frodsham-cheshire-w2">&nbsp;</p>
          <p className="bridge-ln-frodsham-cheshire-w2">T: 01928 733577</p>
          <p className="bridge-ln-frodsham-cheshire-w2">
            info@ RejuvéCompany.com
          </p>
        </div>
        <img className="social-media-icon2" alt="" src="/social-media@2x.png" />
      </div>
    </div>
  );
};

export default Store;