
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'

import React, { Suspense } from 'react';
import {BrowserRouter, Navigate, Route, Router, Routes} from "react-router-dom";
import {APP_ROUTES} from "./constants/Routes";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import {history} from "./helpers/history";


function App() {
    const routes = APP_ROUTES

  return (
    <>
        <Router  location={history.location} navigator={history}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>

                    {
                        (
                            APP_ROUTES.map((route, i) => {
                                    return <Route
                                        key={i}
                                        exact={true}
                                        path={`${route.path}`}
                                        element={<route.element />}
                                    />
                            })
                        )
                    }

                </Routes>
            </Suspense>
        </Router >
    </>
  );
}

export default App;
