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
import { useDispatch } from 'react-redux';
import { doGetAccountAction } from './redux/account/accountSlice';

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
  const getAccount = async () => {
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
      errorElement: <div>404 not found</div>,
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
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}
