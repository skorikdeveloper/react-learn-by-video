import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {isAuth
                ?
                privateRoutes.map((route, i) =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={i}
                    />
                )
                :
                publicRoutes.map((route, i) =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={i}
                    />
                )
            }
        </Routes>
    );
};

export default AppRouter;