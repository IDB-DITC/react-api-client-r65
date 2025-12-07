import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,  Route,   Routes } from "react-router";
import  AppHeader  from './app-header';

import AppRouter from './app-router';
import { ToastContainer } from 'react-toastify';
export default function AppLaypout() {
    return (

        <BrowserRouter>


            <AppHeader css="">
            </AppHeader>
            <div className="container">
                <main role="main" className="pb-3">
                    <SideBar></SideBar>
                    <AppRouter></AppRouter>
                </main>
            </div>
         <ToastContainer/>
          <Footer></Footer>
      </BrowserRouter>
  );
}

//export default AppLaypout;

function SideBar() {
    return (<>Side bar area</>)
}
function Footer() {
    return (<footer className="border-top footer text-muted">
        <div className="container">
            &copy; 2025 - WebApplicationCoreMVC - <a asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>
        </div>
    </footer>
    )
}