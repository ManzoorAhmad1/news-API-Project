import { Fragment } from "react";
import CustomHook from "./CustomHook";
const Science = (props) => {
    return (
        <Fragment>
            <CustomHook category="science" pageSize="10" />
        </Fragment>
    );
};

export default Science;



