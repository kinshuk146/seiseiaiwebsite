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
import Ethics from './containers/Ethics/Ethics';
import AboutUs from './containers/AboutUs/AboutUs';
import Careers from './containers/Careers/Careers';
import ContactUs from './containers/ContactUs/ContactUs';
import UseCase from './components/UseCase/UseCase';
import { Event, Marketing, ReEngage } from './constants/UseCaseData';

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
        <Ethics />
        <FooterComponent />
      </div>
    )
  },
  {
    path: '/aboutus',
    element: (
      <div className="App">
        <Navbar />
        <AboutUs />
        <FooterComponent />
      </div>
    )
  },
  {
    path: '/careers',
    element: (
      <div><Navbar />
        <Careers />
        <FooterComponent />
      </div>
    )
  },
  {
    path: '/contactus',
    element: (
      <div>
        <Navbar />
        <ContactUs />
        <FooterComponent /></div>
    )
  },
  {
    path: '/usecase/reengage',
    element: (
      <div>
        <Navbar />
        <UseCase content={ReEngage} />
        <FooterComponent />
      </div>
    )
  },
  ,
  {
    path: '/usecase/event',
    element: (
      <div>
        <Navbar />
        <UseCase content={Event} />
        <FooterComponent />
      </div>
    )
  }
  ,
  {
    path: '/usecase/marketing',
    element: (
      <div>
        <Navbar />
        <UseCase content={Marketing} />
        <FooterComponent />
      </div>
    )
  }
])


export default router;
