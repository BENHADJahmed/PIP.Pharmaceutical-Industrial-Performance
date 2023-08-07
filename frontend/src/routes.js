import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Simulation from './pages/simulation';
import SimulationAdmin from './pages/simulationAdmin';
import DashboardAdmin from './pages/dashboardAdmin';
import Register from './pages/register';
import Login from './pages/login';
import HomeAdmin from './pages/homeAdmin';
import HomeUser from './pages/homeUser';

export default function Routes() {
    const routes = useRoutes([
        {
            path :'/',
            element : <Home/>,
        },
        {
            path :'/homeAdmin',
            element : <HomeAdmin/>,
        },
        {
            path :'/homeUser',
            element : <HomeUser/>,
        },
        {
            path :'/dashboardUser',
            element : <Dashboard/>,
        },
        {
            path :'/simulationUser',
            element : <Simulation/>,
        },

        {
            path :'/simulationAdmin',
            element : <SimulationAdmin/>,
        },
        {
            path :'/dashboardAdmin',
            element : <DashboardAdmin/>,
        },
        {
            path :'/register',
            element : <Register/>,
        },
        {
            path :'/login',
            element : <Login/>,
        },
    ]);
    return routes;
}