
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';

const App = (props)=> {
  return (
    <div className="App">
       <Header />
       <Main  />
       <NavBar />
 
    </div>
  );
}

export default App;
