import './App.css';
import Companies from './components/companies/companies.jsx';
import Contact from './components/contacts/contact.jsx';
import Footer from './components/footer/footer.jsx';
import GetStarted from './components/getstarted/getstarted.jsx';
import Header from './components/header/Header.jsx'
import Hero from './components/hero/hero.jsx';
import Value from './components/values/value.jsx';

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
      </div>
      <Hero/>
      <Value/>
      <Companies/>
      <GetStarted/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
