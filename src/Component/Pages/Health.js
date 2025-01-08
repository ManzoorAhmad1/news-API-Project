import { Fragment } from "react";
import CustomHook from "./CustomHook";
const Health = () => {
    return (
        <Fragment>
            <CustomHook category="health" pageSize="6" />
        </Fragment>
    );
};

export default Health;
