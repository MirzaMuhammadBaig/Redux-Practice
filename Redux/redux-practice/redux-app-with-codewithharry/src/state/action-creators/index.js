export const depositeMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}

export const WidthrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "widthraw",
            payload: amount
        })
    }
}