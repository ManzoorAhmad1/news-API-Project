import { Fragment } from "react";
import CustomHook from "./CustomHook";
const Business = (props) => {


    return (
        <Fragment>
            <CustomHook category="business" pageSize="6" />
        </Fragment>
    );
};

export default Business;



