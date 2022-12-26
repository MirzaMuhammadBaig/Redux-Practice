export const Form = (firstName, lastname, city) => {
    return (dispatch) => {
        dispatch({
            type: "submit",
            payload: firstName, lastname, city
        })
    }
}
