import logo from './logo.svg';
import './App.css';

function App() {
  const name = <h1>Oscar</h1>;
  const age = <h2>20</h2>;
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <User name="Oscar" age={20} />
        <User name="Juli" age={20} />
        <Job salary={200000} position="SWE Intern" company="Amazon" />
      </header>
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </div>
  )
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.position}</h1>
      <h1>{props.salary}</h1>
      <h1>{props.company}</h1>
    </div>
  )
}

export default App;
