import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "./Homepage.css";
const Homepage = () => {
  const navigate = useNavigate();

  const onStoreTextClick = useCallback(() => {
    navigate("/store");
  }, [navigate]);

  const onMyAccountTextClick = useCallback(() => {
    navigate("/my-account");
  }, [navigate]);

  const onCheckoutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="homepage">
      <div className="desktop-13">
        <img className="desktop-1-child3" alt="" src="/rectangle-1.svg" />
        <div className="frame-div">
          <div className="rejuv3">Rejuvé</div>
          <div className="store4" onClick={onStoreTextClick}>
            Store
          </div>
          <div className="my-account4" onClick={onMyAccountTextClick}>
            My Account
          </div>
        </div>
        <div className="checkout4" onClick={onCheckoutTextClick}>
          Checkout
        </div>
        <img className="logo-icon3" alt="" src="/logo@2x.png" />
        <SearchBar />
        <div className="slogan">
          <p className="enhance-your">Enhance your</p>
          <p className="enhance-your">natural Beauty</p>
        </div>
        <div className="homepage-description">
          Welcome to Rejuvé, where beauty meets creativity! As a leading makeup
          brand, we strive to empower individuals to express themselves through
          the art of makeup. Our company is dedicated to providing high-quality
          and innovative makeup products that cater to all skin tones, types,
          and preferences.
        </div>
        <img
          className="trustpilot-logo-icon"
          alt=""
          src="/trustpilot-logo@2x.png"
        />
        <div className="trustpilot-comments">
          <p className="enhance-your">
            We are thrilled and humbled to announce that Rejuvé has received an
            overwhelming number of positive reviews on Trustpilot, one of the
            most trusted and reputable customer review platforms.
          </p>
          <p className="enhance-your">&nbsp;</p>
          <p className="enhance-your">
            These reviews are a testament to our unwavering dedication to
            product quality and customer satisfaction. We believe in
            transparency and take every customer review to heart. Your feedback
            has been instrumental in shaping our products and ensuring they meet
            the highest standards of excellence.
          </p>
        </div>
        <div className="contactaddress3">
          <p className="enhance-your">Bridge Ln Frodsham, Cheshire WA6 7HN</p>
          <p className="enhance-your">&nbsp;</p>
          <p className="enhance-your">T: 01928 733577</p>
          <p className="enhance-your">info@ RejuvéCompany.com</p>
        </div>
        <img className="social-media-icon3" alt="" src="/social-media@2x.png" />
      </div>
      <img
        className="homepage-image-icon"
        alt=""
        src="/homepage-image@2x.png"
      />
    </div>
  );
};

export default Homepage;
