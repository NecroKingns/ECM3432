import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "./MyAccount.css";
const MyAccount = () => {
  const navigate = useNavigate();

  const onRejuvTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onStoreTextClick = useCallback(() => {
    navigate("/store");
  }, [navigate]);

  const onCheckoutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="my-account1">
      <div className="desktop-11">
        <img className="rectangle-icon" alt="" src="/rectangle-1.svg" />
        <div className="rejuv-group">
          <div className="rejuv1" onClick={onRejuvTextClick}>
            Rejuvé
          </div>
          <div className="store1" onClick={onStoreTextClick}>
            Store
          </div>
          <div className="my-account2">My Account</div>
        </div>
        <div className="checkout2" onClick={onCheckoutTextClick}>
          Checkout
        </div>
        <img className="logo-icon1" alt="" src="/logo@2x.png" />
        <SearchBar />
        <div className="contactaddress1">
          <p className="bridge-ln-frodsham-cheshire-w1">
            Bridge Ln Frodsham, Cheshire WA6 7HN
          </p>
          <p className="bridge-ln-frodsham-cheshire-w1">&nbsp;</p>
          <p className="bridge-ln-frodsham-cheshire-w1">T: 01928 733577</p>
          <p className="bridge-ln-frodsham-cheshire-w1">
            info@ RejuvéCompany.com
          </p>
        </div>
        <img className="social-media-icon1" alt="" src="/social-media@2x.png" />
        <div className="your-account-information">
          Your Account Information:
        </div>
        <div className="username-parent">
          <div className="username">Username:</div>
          <div className="wrapper">
            <div className="div">******************************</div>
          </div>
        </div>
        <div className="password-parent">
          <div className="username">Password:</div>
          <div className="wrapper">
            <div className="div">******************************</div>
          </div>
        </div>
        <div className="your-orders">Your Orders:</div>
        <div className="reset-wrapper">
          <div className="div">Reset</div>
        </div>
        <div className="reveal-wrapper">
          <div className="div">Reveal</div>
        </div>
        <div className="address-parent">
          <div className="username">Address:</div>
          <div className="wrapper">
            <div className="div">Street: *************************</div>
          </div>
        </div>
        <div className="reveal-container">
          <div className="div">Reveal</div>
        </div>
        <div className="town-post-code-wrapper">
          <div className="town-post">Town: ********* Post Code:*******</div>
        </div>
        <div className="rectangle-div" />
        <div className="your-orders">Your Orders:</div>
        <div className="rectangle-div" />
        <div className="write-a-review-wrapper">
          <div className="div">Write a Review</div>
        </div>
        <img className="image-2-icon" alt="" src="/image-3@2x.png" />
        <div className="order-placed-15072023-parent">
          <div className="div">Order Placed: 15/07/2023</div>
          <div className="div">Price: £7.49</div>
          <div className="delivered-on-18072023">Delivered on: 18/07/2023</div>
        </div>
        <div className="color-lipstick-set1">5 color lipstick set</div>
        <div className="your-orders">Your Orders:</div>
        <div className="write-a-review-wrapper">
          <div className="div">Write a Review</div>
        </div>
        <div className="order-placed-15072023-parent">
          <div className="div">Order Placed: 15/07/2023</div>
          <div className="div">Price: £7.49</div>
          <div className="delivered-on-18072023">Delivered on: 18/07/2023</div>
        </div>
        <div className="color-lipstick-set1">5 color lipstick set</div>
      </div>
    </div>
  );
};

export default MyAccount;
