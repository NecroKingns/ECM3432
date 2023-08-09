import React, { useMemo } from "react";
import "./FoundationCard.css";
const FoundationCard = ({ productDescription, propLeft }) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="frame-group" style={frameDivStyle}>
      <div className="dual-foundation-set-wrapper">
        <div className="dual-foundation-set">{productDescription}</div>
      </div>
      <img
        className="image-removebg-preview-4-1"
        alt=""
        src="/imageremovebgpreview-4-1@2x.png"
      />
    </div>
  );
};

export default FoundationCard;
