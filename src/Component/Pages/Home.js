import { Fragment } from "react";
import CustomHook from "./CustomHook";
const Home = (props) => {
    return (
        <Fragment>
            <CustomHook category="general" pageSize="6" />
        </Fragment>
    );
};

export default Home;
