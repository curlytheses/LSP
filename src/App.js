import './App.css';
import Contact from './components/contacts/contact.jsx';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/Header.jsx'

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
      </div>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
