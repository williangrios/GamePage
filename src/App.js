
import './App.css';
import SocialMedias from './components/SocialMedias';

import Header from './components/Header';
import Footer from './components/Footer';
import Launch from './components/Launch';
import Roadmap from './components/Roadmap';
import SmartContract from './components/SmartContract';

function App() {
  return (
    <div>
      <SocialMedias/>
      <Header/>
      <Launch/>
      <SmartContract/>
      <Roadmap/>
      <Footer/>
      <SocialMedias/>

    </div>
  );
}

export default App;
