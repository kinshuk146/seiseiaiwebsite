import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sales from './components/Sales';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Demo from './components/Demo';
import TextAnimation from './components/TextAnimation';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <TextAnimation/>
      <Sales/>
      <Pricing/>
      <Faq/>
      <Demo/>
      <Footer/>
    </div>
  );
}

export default App;
