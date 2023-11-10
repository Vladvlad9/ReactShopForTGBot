import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./components/hooks/useTelegram";

function App() {
    const {tg, onToggle} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, []);


    return (
        <div className="App">
          <button onClick={onToggle}>Close</button>
        </div>
      );
}

export default App;
