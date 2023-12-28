import './App.css';
import Header from './Components/Header';
import About from './Components/AboutUs';
import Articles from './Components/Articles';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;
