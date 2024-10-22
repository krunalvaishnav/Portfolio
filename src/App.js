import Contact from "./components/Contect/Contect";
import Experiance from "./components/Experiance/Experiance";
import Main from "./components/Main/Main";
import Project from "./components/Project/Project";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <Main />
      <Project />
      <Experiance />
      <Contact />
    </div>
  );
}

export default App;
