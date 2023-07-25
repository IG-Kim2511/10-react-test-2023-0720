import FeaturedProducts from "./test-small/featured";
import Excel3 from "./test/Excel3";

import ParseExcel from "./test/ParseExcel";
import ParseExcel2 from "./test/ParseExcel2";


function App() {
  return (
    <div className="App">
      <header className="App-header">       
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

      <h1>
      👉components</h1>

    <ParseExcel/>
    <ParseExcel2/>

    <Excel3/>

      <FeaturedProducts/>
    </div>
  );
}

export default App;
