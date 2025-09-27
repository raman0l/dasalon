import React from "react";

function Heading({ title, className }) {
  return (
    <h1
      className={`text-[#030712] text-xl md:text-2xl lg:text-[28px] ${className}`}
    >
      {title}
    </h1>
  );
}

export default Heading;
