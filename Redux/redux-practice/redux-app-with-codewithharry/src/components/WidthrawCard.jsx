import React from "react";
import WidthrawImage from "./img/Widthraw.jpg";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function WidthrawCard() {
  const disptach = useDispatch();
  const actions = bindActionCreators(actionCreators, disptach);

  return (
    <>
      <div
        className="card m-2"
        style={{ width: "49%", display: "inline-block" }}
      >
        <img
          src={WidthrawImage}
          style={{ height: "50vh" }}
          className="card-img-top"
          alt="Widthraw"
        />
        <div className="card-body">
          <button
            className="btn btn-primary"
            onClick={() => {
              actions.WidthrawMoney(100);
            }}
          >
            Fixed Widthraw Amount of 100
          </button>
        </div>
      </div>
    </>
  );
}

export default WidthrawCard;
