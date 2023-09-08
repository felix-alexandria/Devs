import React from 'react';
// import Layout from './Block/Layout'
import {RouterProvider} from 'react-router-dom'
import {MainRouter} from "./Router/MainRouter"


const App=()=> {
  return (
    <div>
      <RouterProvider router = {MainRouter}/>    
    </div>
  );
}

export default App;
