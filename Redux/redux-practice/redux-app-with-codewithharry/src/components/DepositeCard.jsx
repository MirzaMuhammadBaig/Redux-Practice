import React from "react";
import DepositeImage from "./img/Deposite.jpg";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function DepositeCard() {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <div
        className="card m-1"
        style={{ width: "49%", display: "inline-block" }}
      >
        <img
          src={DepositeImage}
          style={{ height: "50vh" }}
          className="card-img-top"
          alt="Widthraw"
        />
        <div className="card-body">
          <button
            className="btn btn-primary"
            onClick={() => {
              actions.depositeMoney(100);
            }}
          >
            Fixesd Deposite Amount of 100
          </button>
        </div>
      </div>
    </>
  );
}

export default DepositeCard;
