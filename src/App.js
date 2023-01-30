import './App.css';
import Header from './components/Header';
import MainDashboard from './components/Dashboard';
import "./styles/mediaQueries/media.css"; 

function App() {
  return (
    <div className="App">
      <Header />
      <MainDashboard />
    </div>
  );
}

export default App;
