import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigator from "./MainNavigator";

const RootesLayout = () => {
    return (
        <div>
            <MainNavigator />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default RootesLayout;