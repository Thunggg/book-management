import React, { useEffect, useState } from 'react';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login';
import ContactPage from './pages/contact/contract';
import BookPage from './pages/book';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import RegisterPage from './pages/register';
import { fetchAccount } from './services/api';
import { useDispatch, useSelector } from 'react-redux';
import { doGetAccountAction } from './redux/account/accountSlice';
import Loading from './components/loading/loading';
import ErrorPage from './pages/errror';
import AdminPage from './pages/admin';
import ProtectedRoute from './components/protectedRoute';

const LayOut = () => {
  return(
    <>
      <div className='layout-app'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.account.isAuthenticated);

  const getAccount = async () => {
    if(window.location.pathname === "/login") return
    const res = await fetchAccount();
    if(res?.data){
      dispatch(doGetAccountAction(res.data));
    }
  }

  useEffect(() => {
    getAccount()
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut/>,
      errorElement: <ErrorPage/>,
      children: [
        { index: true, element: <Home /> },
        {
          path: "contacts",
          element: <ContactPage />,
        },
        {
          path: "books",
          element: <BookPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/register",
      element: <RegisterPage/>,
    },
    {
      path: "/admin",
      element: <LayOut/>,
      errorElement: <ErrorPage/>,
      children: [
        { 
          index: true, 
          element: 
          <ProtectedRoute>
            <AdminPage/> 
          </ProtectedRoute>
        },
        {
          path: "user",
          element: <ContactPage />,
        },
        {
          path: "book",
          element: <BookPage />,
        },
      ],
    },
  ]);
  
  return (
    <>
      {
      isAuthenticated === true || window.location.pathname === "/login"
      ?
      <RouterProvider router={router} />
      :
      <Loading/>
      }
    </>
  )
}
