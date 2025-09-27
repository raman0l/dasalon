import React from "react";

function Pragraph({ title, className }) {
  return (
    <p
      className={`text-[#808188] text-xs md:text-sm lg:text-base  ${className}`}
    >
      {title}
    </p>
  );
}

export default Pragraph;
