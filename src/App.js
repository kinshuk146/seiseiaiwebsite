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

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <TextAnimation/>
      <Sales/>
      <GetStarted/>
      <Pricing/>
      <Faq/>
      <Demo/>
      <FooterComponent/>
    </div>
  );
}

export default App;
