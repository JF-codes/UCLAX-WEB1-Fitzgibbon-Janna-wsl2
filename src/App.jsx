import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <img src={reactLogo} alt="React Logo" width="300" />
        </div>
    );
}

export default App;
