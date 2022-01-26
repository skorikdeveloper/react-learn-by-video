import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <Loader/>
    }

    return (
        <Routes>
            {isAuth
                ?
                privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )
                :
                publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )
            }
        </Routes>
    );
};

export default AppRouter;