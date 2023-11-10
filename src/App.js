import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./components/hooks/useTelegram";

function App() {
    const {tg, onToggleButton} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, []);


    return (
        <div className="App">
          <button onClick={onToggleButton}>toogle</button>
        </div>
      );
}

export default App;
