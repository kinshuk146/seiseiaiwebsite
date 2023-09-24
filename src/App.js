import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar/Navbar';
import Header from './containers/Header/Header';
import TextAnimation from './containers/TextAnimation/TextAnimation';
import Sales from './containers/Sales/Sales';
import GetStarted from './containers/GetStarted/GetStarted';
import Pricing from './containers/Pricing/Pricing';
import Faq from './containers/Faq/Faq';
import Demo from './containers/Demo/Demo';
import FooterComponent from './containers/Footer/Footer';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="App">
        <Navbar />
        <Header />
        <TextAnimation />
        <Sales />
        <GetStarted />
        <Pricing />
        <Faq />
        <Demo />
        <FooterComponent />
      </div>
    )
  },
  {
    path: '/ethics',
    element: (
      <div className="App">
        <Navbar />
        <FooterComponent />
      </div>
    )
  },
  {
    path: '/aboutus',
    element: (
      <div className="App">
        <Navbar />
        <FooterComponent />
      </div>
    )
  },
  {
    path: '/careers',
    element: (
      <div><Navbar />
      <FooterComponent />
      </div>
    )
  },
  {
    path: '/contactus',
    element: (
      <div><Navbar />
      <FooterComponent /></div>
    )
  },
])


export default router;
