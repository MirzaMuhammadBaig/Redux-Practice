import { useSelector, useDispatch } from "react-redux";
import { addMuffin, deleteMuffin } from "./muffinSlice";

const muffinPage = () => {
    const muffinList = useSelector(storeState => storeState.muffin);
    const dispatch = useDispatch();
};

return (
    <div>
        <h1>
            {muffinList.join(', ')}
        </h1>
        <img
            src=""
            value=""
            alt=""
            onClick={(e) => dispatch(addMuffin(e.target.value))}
        />
    </div>
)

export default muffinPage;