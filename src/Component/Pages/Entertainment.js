import { Fragment } from "react";
import CustomHook from "./CustomHook";
const Entertainment = () => {
    return (
        <Fragment>
            <CustomHook category="entertainment" pageSize="7"/>
        </Fragment>
    );
};

export default Entertainment;
