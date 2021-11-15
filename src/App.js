import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="bg_image">
    <div className="App">
<<<<<<< Updated upstream
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
      <Router>
        <Navigation />
        <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/proposals" exact component={() => <Proposals />} />
        <Route path="/players" exact component={() => <Players />} />
        </Switch>
      </Router>
>>>>>>> Stashed changes
    </div>
</div>
  );
}

export default App;
