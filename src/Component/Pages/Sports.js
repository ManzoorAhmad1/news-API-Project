import { Fragment } from "react";
import CustomHook from "./CustomHook";
const Sports = (props) => {


    return (
        <Fragment>
            <CustomHook category="sports" pageSize="6" />
        </Fragment>
    );
};

export default Sports;



