import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/BrowserRouter';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
