import "./styles.css";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    if (toggle == true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  return (
    <div>
      <button
        style={{
          backgroundColor: toggle ? "green" : "red",
          color: toggle ? "pink" : "yellow",
        }}
        onClick={handleToggle}
      >
        {toggle ? "ON" : "OFF"}
      </button>
    </div>
  );
}
export default App;
