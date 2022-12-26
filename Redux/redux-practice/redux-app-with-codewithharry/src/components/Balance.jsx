import React from "react";
import { useSelector } from "react-redux";

function Balance() {
  const amount = useSelector((state) => state.amount);

  return (
    <>
      <button
        disabled={true}
        className="bg-primary"
        style={{ display: "block", marginLeft: "43%", color: "black" }}
      >
        Your Balance: {amount} PKR
      </button>
    </>
  );
}

export default Balance;
