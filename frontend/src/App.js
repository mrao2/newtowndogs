import Homepage from "./Components/pages/Homepage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="content">
        <Homepage></Homepage>
      </div>
    </div>
  );
}

export default App;
