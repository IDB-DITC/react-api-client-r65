import React from 'react'
import { BrowserRouter, Route, createBrowserRouter, Router, RouterProvider, Routes, } from "react-router";

import { AuthorCreate,  AuthorList, LoginPage } from './components';
import ProtectedRoute from './security/protected-route';


export default function AppRouter() {
    return (<Routes>
        <Route path="/" Component={AuthorList} />
        <Route path="/login" Component={LoginPage} />
        <Route Component={ProtectedRoute}>
            <Route path="/create" Component={AuthorCreate} />
            <Route path="/edit/:id" Component={AuthorCreate} />
        </Route> 
    </Routes>)
}

